<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { themeConfig } from '@themeConfig'
import { store } from './../store'

import authV2LoginIllustrationBorderedDark from '@/assets/images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@/assets/images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@/assets/images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@/assets/images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@/assets/images/pages/auth-v2-mask-dark.png'
import authV2MaskLight from '@/assets/images/pages/auth-v2-mask-light.png'
const form = ref({
  email: '',
  password: '',
  remember: false,
})

const isPasswordVisible = ref(false)

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true,
)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
</script>
<script lang="ts">

import router from '@/router'
import axios from 'axios'


export default {
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    async getMenu(token) {
      const response = await axios.get('menu', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      // const {setMenu} = mapActions(['setMenu'])
      store.dispatch('setMenu', response.data)
      // setMenu(response.data)
      // console.log(response.data)
    },
    async login() {
      try {
        // const response = await axios.get('posts')
        // return console.log(response);

        const response = await axios.post('login', {
          username: this.username,
          password: this.password,
        })

        const { access_token } = response.data

        localStorage.setItem('token', access_token.token)
        console.log(localStorage.getItem('token'))

        await this.getMenu(access_token.token)

        router.push({ name: 'index' })
      } catch (error) {}
    },
  },
}
</script>

<template>
  <div>
    <VRow no-gutters class="auth-wrapper justify-center">
      <VCol cols="12" md="12" class="auth-bg d-flex align-center justify-center">
        <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
          <VCardText>
            <h5 class="text-h5 font-weight-semibold mb-1">Welcome to {{ themeConfig.app.title }}! 👋🏻</h5>
            <p class="mb-0">Please sign-in to your account and start the adventure</p>
          </VCardText>
          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField v-model="username" label="Usuario" type="text" />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    label="Senha"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
                    <VCheckbox v-model="form.remember" label="Lembrar" />
                    <a class="text-primary ms-2 mb-1" href="javascript:void(0)"> Esqueceu a senha? </a>
                  </div>

                  <VBtn block type="submit" @click="login()"> Entrar </VBtn>
                </VCol>

                <!-- create account -->

                <!-- auth providers -->
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use '@core/scss/pages/page-auth.scss';
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
