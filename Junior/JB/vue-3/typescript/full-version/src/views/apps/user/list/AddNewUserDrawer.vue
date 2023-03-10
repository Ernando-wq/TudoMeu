<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'

import type { UserProperties } from '@/@fake-db/types'
import { emailValidator, requiredValidator } from '@validators'

interface Emit {
  (e: 'update:isDrawerOpen', value: boolean): void
  (e: 'userData', value: UserProperties): void
}

interface Props {
  isDrawerOpen: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const isFormValid = ref(false)
const refForm = ref<VForm>()
const fullName = ref('')
const userName = ref('')
const email = ref('')
const company = ref('')
const country = ref('')
const contact = ref('')
const role = ref()
const plan = ref()
const status = ref()

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)

  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('userData', {
        id: 0,
        fullName: fullName.value,
        company: company.value,
        role: role.value,
        username: userName.value,
        country: country.value,
        contact: contact.value,
        email: email.value,
        currentPlan: plan.value,
        status: status.value,
        avatar: '',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    :model-value="props.isDrawerOpen"
    @update:model-value="(val) => $emit('update:isDrawerOpen', val)"
  >
    <VCard flat>
      <!-- 👉 Title -->
      <VCardTitle class="d-flex align-center bg-var-theme-background py-3">
        <span>Add User</span>

        <VSpacer />

        <!-- 👉 Close btn -->
        <VBtn
          variant="text"
          size="x-small"
          color="default"
          icon
          @click="closeNavigationDrawer"
        >
          <VIcon
            size="20"
            icon="mdi-close"
          />
        </VBtn>
      </VCardTitle>

      <VCardText class="pt-5">
        <!-- 👉 Form -->
        <VForm
          ref="refForm"
          v-model="isFormValid"
          @submit.prevent="onSubmit"
        >
          <VRow>
            <!-- 👉 Full name -->
            <VCol cols="12">
              <VTextField
                v-model="fullName"
                :rules="[requiredValidator]"
                label="Full Name"
              />
            </VCol>

            <!-- 👉 Username -->
            <VCol cols="12">
              <VTextField
                v-model="userName"
                :rules="[requiredValidator]"
                label="Username"
              />
            </VCol>

            <!-- 👉 Email -->
            <VCol cols="12">
              <VTextField
                v-model="email"
                :rules="[requiredValidator, emailValidator]"
                label="Email"
              />
            </VCol>

            <!-- 👉 company -->
            <VCol cols="12">
              <VTextField
                v-model="company"
                :rules="[requiredValidator]"
                label="Company"
              />
            </VCol>

            <!-- 👉 Country -->
            <VCol cols="12">
              <VTextField
                v-model="country"
                :rules="[requiredValidator]"
                label="Country"
              />
            </VCol>

            <!-- 👉 Contact -->
            <VCol cols="12">
              <VTextField
                v-model="contact"
                type="number"
                :rules="[requiredValidator]"
                label="Contact"
              />
            </VCol>

            <!-- 👉 Role -->
            <VCol cols="12">
              <VSelect
                v-model="role"
                label="Select Role"
                :rules="[requiredValidator]"
                :items="['Admin', 'Author', 'Editor', 'Maintainer', 'Subscriber']"
              />
            </VCol>

            <!-- 👉 Plan -->
            <VCol cols="12">
              <VSelect
                v-model="plan"
                label="Select Plan"
                :rules="[requiredValidator]"
                :items="['Basic', 'Company', 'Enterprise', 'Team']"
              />
            </VCol>

            <!-- 👉 Status -->
            <VCol cols="12">
              <VSelect
                v-model="status"
                label="Select Status"
                :rules="[requiredValidator]"
                :items="[{ title: 'Active', value: 'active' }, { title: 'Inactive', value: 'inactive' }, { title: 'Pending', value: 'pending' }]"
              />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12">
              <VBtn
                type="submit"
                class="me-3"
              >
                Submit
              </VBtn>
              <VBtn
                type="reset"
                variant="tonal"
                color="secondary"
                @click="closeNavigationDrawer"
              >
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VNavigationDrawer>
</template>
