<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="firstName">First Name</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="firstName"
          v-model="firstName"
          placeholder="First Name"
          persistent-placeholder
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="email">Email</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="email"
          v-model="email"
          placeholder="Email"
          persistent-placeholder
        />
      </VCol>

      <!-- 👉 Mobile -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="mobile">Mobile</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="mobile"
          v-model="mobile"
          type="number"
          placeholder="Number"
          persistent-placeholder
        />
      </VCol>

      <!-- 👉 Password -->
      <VCol
        cols="12"
        md="3"
      >
        <label for="password">Password</label>
      </VCol>

      <VCol
        cols="12"
        md="9"
      >
        <VTextField
          id="password"
          v-model="password"
          type="password"
          placeholder="Password"
          persistent-placeholder
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
