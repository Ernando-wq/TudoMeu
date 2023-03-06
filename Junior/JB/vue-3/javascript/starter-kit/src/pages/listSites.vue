<script>
export default{
    data:() =>{

    }
}
</script>

<template>
  <VRow>
    <VCol
    cols="12"
    md="9"
    >
        <VCard>
            <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row">
            <!-- 👉 Left Content -->
            <div class="mb-4">
              <div class="d-flex align-center mb-6">
                <!-- 👉 Logo -->
                <VNodeRenderer
                  class="me-3"
                />
                    LOGO + NOME
                <!-- 👉 Title -->
                <h6 class="font-weight-semibold text-xl text-uppercase">
                </h6>
              </div>

              <!-- 👉 Address -->
              <p class="mb-0">
                Office 149, 450 South Brand Brooklyn
              </p>
              <p class="mb-0">
                San Diego County, CA 91905, USA
              </p>
              <p class="mb-0">
                +1 (123) 456 7891, +44 (876) 543 2198
              </p>
            </div>

            <!-- 👉 Right Content -->
            <div class="mb-4">
              <!-- 👉 Invoice ID -->
              <h6 class="font-weight-medium text-xl mb-6">
                DOMINIO.COM
              </h6>

              <!-- 👉 Issue Date -->
              <p class="mb-2">
                <span>Data de Criação: </span>
                <span>2022-10-19</span>
              </p>

              <!-- 👉 Due Date -->
              <p class="mb-2">
                <span>Ultima atualização: </span>
                <span>2022-10-19</span>
              </p>
            </div>
          </VCardText>

          <VDivider />

          <VCardText class="d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row">
            <div class="my-4">
              <h6 class="text-sm font-weight-semibold mb-3">
                Invoice To:
              </h6>
              <p class="mb-1">
                    Andrew Burns
              </p>
              <p class="mb-1">
                   Richardson and Sons LLC               
              </p>
              <p class="mb-1">
                    78083 Laura Pines, Bhutan
              </p>
              <p class="mb-1">
                    (687) 660-2473
              </p>
              <p class="mb-0">
                    pwillis@cross.org
              </p>
            </div>

            <div class="my-4">
              <h6 class="text-sm font-weight-semibold mb-3">
                Bill To:
              </h6>
              <table>
                <tr>
                  <td class="pe-6">
                    Total Due:
                  </td>
                  <td>
                    $12,110.55
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Bank Name:
                  </td>
                  <td>
                    American Bank
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Country:
                  </td>
                  <td>
                    United States
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    IBAN:
                  </td>
                  <td>
                    ETD95476213874685
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    SWIFT Code:
                  </td>
                  <td>
                    BR91905
                  </td>
                </tr>
              </table>
            </div>
          </VCardText>
        </VCard>
    </VCol>
  </VRow>
</template>
