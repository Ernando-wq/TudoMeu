<script>
  export default{
    data () {
      return{}
    },
    computed:{
      ...mapGetters({
        menu: 'getMenu'
      })
    }
  }
</script>

<script setup>
// Composable
import { useSkins } from '@core/composable/useSkins'
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'
import { mapGetters } from 'vuex'

const {appRouteTransition, isLessThanOverlayNavBreakpoint} = useThemeConfig()
const {width: windowWidth} = useWindowSize()
const {layoutAttrs, injectSkinClasses} = useSkins()

// âšī¸ This will inject classes in body tag for accurate styling
injectSkinClasses()



</script>

<template>
  <VerticalNavLayout
    :nav-items="menu"
    v-bind="layoutAttrs"
  >
    <!-- đ navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="mdi-menu"
            size="24"
          />
        </VBtn>
        <NavbarThemeSwitcher />

        <VSpacer />

        <UserProfile />
      </div>
    </template>

    <!-- đ Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="none"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- đ Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- đ Customizer -->
    <!-- <TheCustomizer /> -->
  </VerticalNavLayout>
</template>
