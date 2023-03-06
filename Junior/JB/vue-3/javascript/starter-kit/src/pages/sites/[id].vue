<script setup>
import axios from 'axios';
import router from '@/router';

  
</script>
<script>

  export default {
    data: () => ({
      site:{},
      admins:[],
      tickets:[],
      managers:[],
      sellers:[],
      img:"https://logodownload.org/wp-content/uploads/2014/04/nike-logo-2.png",

    }),
    created(){
      this.showSite()
    },
    methods:{
      testando(){
        const route = useRoute()
        
        this.test = route.params.id;
        console.log(this.test)
      },
      async showSite(){
        const route = useRoute()
        let id = route.params.id
        const response  = await axios.get(`get-site/${id}`)
        
        const { site,administradores, apostas,gerentes,vendedores } = response.data

        this.site = site
        this.tickets = apostas
        this.manegers = gerentes
        this.admins = administradores
        this.sellers = vendedores

        console.log(response.data);
    }
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
                 :img ="img"
                  class="me-3 w"
                />
                    LOGO + NOME
                    <!-- <VImg style="width: 10%; position:fixed; margin-top: 130px; margin-left: 15px;"   src="https://logodownload.org/wp-content/uploads/2014/04/nike-logo-2.png"/> -->
                <!-- 👉 Title -->
                <h6 class="font-weight-semibold text-xl text-uppercase">
                </h6>
              </div>
              <!-- 👉 Address -->
              <!-- <p class="mb-0">
                Office 149, 450 South Brand Brooklyn
              </p>
              <p class="mb-0">
                San Diego County, CA 91905, USA
              </p>
              <p class="mb-0">
                +1 (123) 456 7891, +44 (876) 543 2198
              </p> -->
            </div>

            <!-- 👉 Right Content -->
            <div class="mb-4">
              <!-- 👉 Invoice ID -->
              <h6 class="font-weight-medium text-xl mb-6">
                  {{site.domain}}
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
            <div
            v-for=" admin in admins"
            :key="admin.id" 
            class="my-4"
            >
              <h6 class="text-sm font-weight-semibold mb-3">
                Invoice To:
              </h6>
              <p class="mb-1">
                    {{admin.username}}
              </p>
              <p class="mb-1">
                   {{admin.name}}              
              </p>
              <p class="mb-1">
                    {{admin.email}}
              </p>
              <p class="mb-1">
                    {{admin.contact}}
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

          <VDivider />

          <VTable>
            <thead>
              <tr>
                <th 
                scope="col"
                class="text-center"
                >
                  ADMINISTRADORES
                </th>
                <th 
                scope="col"
                class="text-center"
                >
                  GERENTES
                </th>
                <th 
                scope="col"
                class="text-center"
                >
                  APOSTAS
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  VENDENDORES
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
              >
                <td class="text-no-wrap text-center" >
                  {{admins.length}}
                </td>
                <td class="text-no-wrap text-center">
                  {{managers.length}}
                </td>
                <td class="text-center text-center">
                  {{tickets.length}}
                </td>
                <td class="text-center text-center">
                  {{sellers.length}}
                </td>
              </tr>
            </tbody>
          </VTable>
          
           <VDivider class="my-2" />

           <VCardText class="d-flex justify-space-between flex-column flex-sm-row print-row">
            <div class="mb-2">
              <div class="d-flex align-center mb-1">
                <h6 class="text-sm font-weight-semibold me-1">
                  Salesperson:
                </h6>
                <span>Jenny Parker</span>
              </div>
              <p>Thanks for your business</p>
            </div>

            <div>
              <table class="w-100">
                <tr>
                  <td class="pe-16">
                    Subtotal:
                  </td>
                  <td :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
                    <h6 class="text-sm">
                      $1800
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td class="pe-16">
                    Discount:
                  </td>
                  <td :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
                    <h6 class="text-sm">
                      $28
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td class="pe-16">
                    Tax:
                  </td>
                  <td :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
                    <h6 class="text-sm">
                      21%
                    </h6>
                  </td>
                </tr>
              </table>

              <VDivider class="mt-4 mb-3" />

              <table class="w-100">
                <tr>
                  <td class="pe-16">
                    Total:
                  </td>
                  <td :class="$vuetify.rtl.isRtl ? 'text-start' : 'text-end'">
                    <h6 class="text-sm">
                      $1690
                    </h6>
                  </td>
                </tr>
              </table>
            </div>
          </VCardText>
        </VCard>
    </VCol>
  </VRow>
</template>