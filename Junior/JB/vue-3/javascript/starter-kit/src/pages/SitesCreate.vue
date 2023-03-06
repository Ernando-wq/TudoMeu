<script>
import axios from 'axios';
const router = useRouter()
  export default {
    data: () => ({
      newsite:{
        domain:"",
        active: 'Desativado',
        qtd_sellers:"",
        fullname:"",
        first_name:"",
        second_name:"",
        whatsapp_number:"",
        min_value:"",
        max_value:"",
      },
      sites:[],
      site:{
        domain:"",
        active: 'Desativado',
        qtd_sellers:"",
        fullname:"",
        first_name:"",
        second_name:"",
        password:"",
        confirm_password:"",
        whatsapp_number:"",
        min_value:"",
        max_value:"",
      },
      showsites:{
        domain:"",
        active: 'Desativado',
        qtd_sellers:"",
        fullname:"",
        first_name:"",
        second_name:"",
        whatsapp_number:"",
        min_value:"",
        max_value:"",
      },
      dialog: false,
      dialog1: false,
      dialog2: false,
      status_chips: true,
      alert_call: false,
      color_alert: ''
    }),
    created(){
        this.listSites()
    },
    methods:{
      async createSite(site){
        if(site.password != site.confirm_password){
          return alert('Senhas precisam ser iguais')
        }
        if(this.site.active == 'Ativado') {
            this.site.active = true
        }else{
            this.site.active = false
        }

        try {
          const response = await axios.post('site',{
                domain: site.domain,
                active: site.active,
                qtd_sellers: site.qtd_sellers, 
                fullname: site.fullname,
                first_name: site.first_name,
                second_name: site.second_name,
                password: site.password,
                confirm_password: site.confirm_password,
                whatsapp_number: site.whatsapp_number,
                min_value: site.min_value,
                max_value: site.max_value
          })

          this.dialog = false
          this.site = {
                domain:"",
                active: "",
                qtd_sellers:"",
                fullname:"",
                first_name:"",
                second_name:"",
                password:"",
                confirm_password:"",
                whatsapp_number:"",
                min_value:"",
                max_value:""
          }
          this.listSites()
          return alert('Site criado com sucesso')
        } catch (error) {
          return alert(error.data)
          
        }
      },
      async listSites(){
        try {
            const response = await axios.get('list-sites')
            this.sites = response.data
        } catch (error) {
            return error
        }
      },
      async showSites(id){
        try {
          const response = await axios.get(`get-site/${id}`)
          this.sites = response.data
        } catch (error) {
          
        }
      },
      async deleteSite(id){
        try {
         const response = await axios.delete(`site/${id}`)
         this.alert_call = true
         this.text = "Site deletado com sucesso"
         this.color_alert = "success"
         this.listSites()

        //  return alert('Site Deletado com sucesso')
        } catch (error) {
        }
      },
      async updateSite(){
        
        let site = this.newsite
        try {
          const response = await axios.put(`sites/${site.id}`,{
            domain: site.domain,
            active: site.active,
            qtd_sellers: site.qtd_sellers,
            fullname: site.fullname,
            first_name: site.first_name,
            second_name: site.second_name,
            whatsapp_number: site.whatsapp_number,
            min_value: site.min_value,
            max_value: site.max_value

          })

          this.dialog1 = false

          this.listSites()

          return alert('Site Atualizado com sucesso')

        } catch (error) {
          return alert('Usuario não atualizado')
        }
      },
      modalUpdate(site){
        this.dialog1 = true
        this.newsite = site
      },
      modalShowsites(site){
        this.dialog2 = true
        this.showasites = site
      },
      clearclosed(){
        this.dialog = false
        this.admin = {
            name:"",
              username:"",
              email:"",
              password:"",
              contact:"",
              confirm_password:""
          }
      },
      logout(){
        localStorage.removeItem('token')
        this.listSites()
      }
      // mostrarAlerta(){
      //   this.$swal.fire({
      //     title: 'Are you sure?',
      //     text: "You won't be able to revert this!",
      //     icon: 'warning',
      //     showCancelButton: true,
      //     confirmButtonColor: '#3085d6',
      //     cancelButtonColor: '#d33',
      //     confirmButtonText: 'Yes, delete it!'
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //       Swal.fire(
      //         'Deleted!',
      //         'Your file has been deleted.',
      //         'success'
      //       )
      //     }
      //   })
      // }
    }
  }
</script>
<template>
  <div>
    <VCard>
      <VCardText class="d-flex align-center flex-wrap gap-4">
              <!-- 👉 Actions  -->
              <VSpacer />

              <div class="d-flex align-center flex-wrap gap-4">
                <!-- 👉 Search  -->
                <div class="invoice-list-search">
                  <VTextField
                    placeholder="Search Invoice"
                    density="compact"
                    class="me-3"
                  />
                </div>

                <!-- 👉 Create invoice -->
          <VDialog
              v-model="dialog"
              persistent
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="dialog = true"
                >
                  Cadastrar Sites
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Cadastro de Sites</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                        <v-col class="d-flex align-center" cols="12" md="8">
                        <v-text-field
                          v-model="site.domain"
                          label="Site*"
                          required
                        ></v-text-field>
                      </v-col>
                       <!-- Botão status telas maiores -->
                      <v-col class="d-none d-md-flex d-lg-flex align-center justify-center flex-column" cols="12" md="4">
                        <p class="ma-0">Status:</p>
                        <v-switch 
                        class="ma-0"
                        true-value="Ativado"
                        false-value="Desativado"
                        v-model="site.active"
                        color="success"
                        value="success"
                        hide-details
                        ></v-switch>
                        <!-- {{site.active}} -->
                        <p class="ma-0" v-show="site.active == 'Desativado' ">Desativado</p>
                        <p class="ma-0" v-show="site.active == 'Ativado' ">Ativado</p>
                      </v-col>
                        <!-- Botão status para celular -->
                      <v-col class="d-md-none d-sm-flex d-flex align-center justify-center " cols="12">
                        <p class="ma-0 mr-3">Status:</p>
                        <v-switch 
                        class="ma-0 mr-2"
                        true-value="Ativado"
                        false-value="Desativado"
                        v-model="site.active"
                        color="success"
                        value="success"
                        hide-details
                        ></v-switch>
                        <p class="ma-0" v-show="site.active == 'Desativado' ">Desativado</p>
                        <p class="ma-0" v-show="site.active == 'Ativado' ">Ativado</p>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="site.qtd_sellers"
                          label="Quantidade de vendendor*"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="site.fullname"
                          label="Nome Completo da Banca*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          label="Primeiro nome*"
                          required
                          v-model="site.first_name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="site.second_name"
                          label="Segundo nome*"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="clearclosed()"
                  >
                    Fechar
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="createSite(site)"
                  >
                    Cadastrar
                  </v-btn>
                </v-card-actions>
              </v-card>
          </VDialog>
              </div>
      </VCardText>
      <VDivider></VDivider>
      <VTable class="text-no-wrap invoice-list-table">
        <!-- 👉 Table head -->
        <thead>
          <tr>
            <!-- 👉 Check/Uncheck all checkbox -->
            <th
              scope="col"
              class="text-center"
            >
              <div
                class="mb-n2"
                style="width: 1rem;"
              >
                <VCheckbox/>
              </div>
            </th>
            <th scope="col"
            class="text-center">
                Site
            </th>
            <th
              scope="col"
              class="text-center"
            >
              Quantidade de vendendores
            </th>
            <th
              scope="col"
              class="text-center"
            >
              Status
            </th>
            <th scope="col"
            class="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <!-- 👉 Table Body -->
        <tbody>
          <tr
            v-for="site in sites"
            :key="site.id">
            <!-- 👉 Individual checkbox -->
            <td>
              <div
                class="mb-n2"
                style="width: 1rem;"
              >
                <VCheckbox/>
              </div>
            </td>

            <!-- 👉 Id -->
            <!-- 👉 Trending -->
            <!-- 👉 Client Avatar and Email -->
            <td class="text-center">
              {{site.domain}}
            </td>
            <td class="text-center">
              {{site.qtd_sellers}}
            </td>
            <!-- 👉 total -->
             <!-- <td class="text-center">
              <v-chip 
              v-show="status_chips"
              style="color: green;">
              </v-chip>
              <v-chip 
              v-show="!status_chips"
              style="color: red;">
                Ativo
              </v-chip>
            </td> -->
            <td class="text-center">
              <v-chip 
              v-show="status_chips"
              style="color: green;">
                Ativo
              </v-chip>
              <v-chip 
              v-show="!status_chips"
              style="color: red;">
                Desativado
              </v-chip>
            </td>

            <!-- 👉 Date -->
            <!-- <td class="text-center">
              {{site.fullname}}
            </td> -->
            <!-- 👉 Actions -->
            <td class="text-center">
              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="deleteSite(site.id)"
              >
                <VIcon 
                  icon="mdi-delete-outline"
                  :size="24"
                />
              </VBtn>
              <Router-link
                  :to="{ name: 'sites-id', params: { id: site.id } }"
                  class="btn btn-dark btn-about"
                >
                <VIcon
                :size="24"
                icon="mdi-eye-outline"
                style="color: #7e7a95"
                />                
              </Router-link>
              <!-- <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click=""
              >
                <VIcon
                  :size="24"
                  icon="mdi-eye-outline"
                />
              </VBtn> -->
              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="modalUpdate(site)"
              >
                <VIcon
                          size="24"
                          class="me-3 ms-3"
                          icon="mdi-pencil-outline"
                        />
              </VBtn>
            </td>
          </tr>
        </tbody>

        <!-- 👉 table footer  -->
        <tfoot >
          <tr>
            <td
              colspan="8"
              class="text-center text-body-1"
            >
              No data available
            </td>
          </tr>
        </tfoot>
      </VTable>
    </VCard>
  </div>
  <!-- UPDATE DE USUARIO -->
  <VDialog
      v-model="dialog1"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Atualizar Cadastro do Site</span>
        </v-card-title>
        <v-card-text>
              <v-container>
                <v-row>
                    <v-col class="d-flex align-center" cols="12" md="8">
                    <v-text-field
                      v-model="newsite.domain"
                      label="Site*"
                      required
                    ></v-text-field>
                  </v-col>
                    <!-- Botão status telas maiores -->
                  <v-col class="d-none d-md-flex d-lg-flex align-center justify-center flex-column" cols="12" md="4">
                    <p class="ma-0">Status:</p>
                    <v-switch 
                    class="ma-0"
                    true-value="Ativado"
                    false-value="Desativado"
                    v-model="newsite.active"
                    color="success"
                    value="success"
                    hide-details
                    ></v-switch>
                    <!-- {{site.active}} -->
                    <p class="ma-0" v-show="site.active == 'Desativado' ">Desativado</p>
                    <p class="ma-0" v-show="site.active == 'Ativado' ">Ativado</p>
                  </v-col>
                    <!-- Botão status para celular -->
                  <v-col class="d-md-none d-sm-flex d-flex align-center justify-center " cols="12">
                    <p class="ma-0 mr-3">Status:</p>
                    <v-switch 
                    class="ma-0 mr-2"
                    true-value="Ativado"
                    false-value="Desativado"
                    v-model="newsite.active"
                    color="success"
                    value="success"
                    hide-details
                    ></v-switch>
                    <p class="ma-0" v-show="site.active == 'Desativado' ">Desativado</p>
                    <p class="ma-0" v-show="site.active == 'Ativado' ">Ativado</p>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="newsite.qtd_sellers"
                      label="Quantidade de vendendor*"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="newsite.fullname"
                      label="Nome Completo da Banca*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      label="Primeiro nome*"
                      required
                      v-model="newsite.first_name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="newsite.second_name"
                      label="Segundo nome*"
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col cols="12">
                    <v-text-field
                      v-model="newsite.whatsapp_number"
                      label="Numero do Whatsap*"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      label="Valor Minimo de Apostas*"
                      required
                      v-model="newsite.min_value"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="newsite.max_value"
                      label="Valor Maximo de Apostas*"
                    ></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog1 = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateSite(site)"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
  </VDialog>
  <!-- SHOW SITES -->
  <VDialog
      v-model="dialog2"
      persistent
      max-width="600px"
    >
      
      <v-card>
        <v-card-title>
          <span class="text-h5">Atualizar Cadastro de Administrador</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                  <!-- v-model="showadmins.name" -->
                <v-text-field
                  label="Nome*"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                  <!-- v-model="showadmins.contact" -->
                <v-text-field
                  label="Contato*"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                  <!-- v-model="showadmins.username" -->
                <v-text-field
                  label="Usuario*"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                  <!-- v-model="showadmins.email" -->
                <v-text-field
                  label="Email*"
                  readonly
                ></v-text-field>
              </v-col>
              <!-- <v-col cols="12">
                <v-text-field
                  v-model="showadmins.password"
                  type="password"
                  label="Senha*"
                  readonly=""
                ></v-text-field>
              </v-col> -->
              </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog2 = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateAdmin(admin)"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
  </VDialog>

<VSnackbar
    v-model="alert_call"
    location="top center"
    variant="flat"
    :color="color_alert"
    timeout="2000"
  >
    {{text}}
</VSnackbar>


</template>

