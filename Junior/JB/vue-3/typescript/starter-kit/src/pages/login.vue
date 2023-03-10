<script setup lang="ts">
import tree from '@/assets/images/pages/tree.png'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

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

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
</script>

<template>
  <div>
    <!-- Title and Logo -->
    <div class="auth-logo d-flex align-start gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />

      <h1 class="font-weight-semibold leading-normal text-2xl text-uppercase">
        {{ themeConfig.app.title }}
      </h1>
    </div>

    <VRow
      no-gutters
      class="auth-wrapper"
    >
      <VCol
        lg="8"
        class="d-none d-lg-flex align-center justify-center position-relative"
      >
        <VImg
          max-width="768px"
          :src="authThemeImg"
          class="auth-illustration"
        />
        <VImg
          :width="276"
          :src="tree"
          class="auth-footer-start-tree"
        />
        <VImg
          class="auth-footer-mask"
          :src="authThemeMask"
        />
      </VCol>

      <VCol
        cols="12"
        lg="4"
        class="auth-bg d-flex align-center justify-center"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-4"
        >
          <VCardText>
            <h5 class="text-h5 font-weight-semibold mb-1">
              Welcome to {{ themeConfig.app.title }}! ????????
            </h5>
            <p class="mb-0">
              Please sign-in to your account and start the adventure
            </p>
          </VCardText>
          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.email"
                    label="Email"
                    type="email"
                  />
                </VCol>

                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="form.password"
                    label="Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />

                  <div class="d-flex align-center flex-wrap justify-space-between mt-1 mb-4">
                    <VCheckbox
                      v-model="form.remember"
                      label="Remember me"
                    />
                    <a href="#" class="text-primary ms-2 mb-1">
                      Forgot Password?
                    </a>
                  </div>

                  <VBtn
                    block
                    type="submit"
                  >
                    Login
                  </VBtn>
                </VCol>

                <!-- create account -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <span>New on our platform?</span>
                  <a href="#" class="text-primary ms-2">
                    Create an account
                  </a>
                </VCol>

                <VCol
                  cols="12"
                  class="d-flex align-center"
                >
                  <VDivider />
                  <span class="mx-4">or</span>
                  <VDivider />
                </VCol>

                <!-- auth providers -->
                <VCol
                  cols="12"
                  class="text-center"
                >
                  <AuthProvider />
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
