<script setup lang="ts">
import { useTheme } from 'vuetify'
import type { ChartJsCustomColors } from '@/views/demos/charts-and-maps/charts/chartjs/types'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { getPolarChartConfig } from '@core/libs/chartjs/chartjsConfig'
import PolarAreaChart from '@core/libs/chartjs/components/PolarAreaChart'
interface Props {
  colors: ChartJsCustomColors
}

const props = defineProps<Props>()

const vuetifyTheme = useTheme()
const { theme } = useThemeConfig()

const chartConfig = controlledComputed(theme, () => getPolarChartConfig(vuetifyTheme.current.value))

const data = {
  labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
  datasets: [
    {
      borderWidth: 0,
      label: 'Population (millions)',
      data: [19, 17.5, 15, 13.5, 11, 9],
      backgroundColor: [props.colors.primary, props.colors.yellow, props.colors.polarChartWarning, props.colors.polarChartInfo, props.colors.polarChartGrey, props.colors.polarChartGreen],
    },
  ],
}
</script>

<template>
  <PolarAreaChart
    :height="400"
    :chart-data="data"
    :chart-options="chartConfig"
  />
</template>
