<script>
import { Device } from '@capacitor/device';
import axios from 'axios';
  export default {
    data: () => ({
      newadmin:{
        name:"",
        username:"",
        email:"",
        password:"",
        contact:"",
        confirm_password:""
      },
      admins:[],
      admin:{
        name:"",
        username:"",
        email:"",
        password:"",
        contact:"",
        confirm_password:""
      },
      showadmins:{
        name:"",
        username:"",
        email:"",
        password:"",
        contact:"",
        confirm_password:""
      },
      dialog: false,
      dialog1: false,
      dialog2: false,
      status_chips: true,
      battery_info: {},
      battery_level: 0,
      alert_call: false,
      color_alert: ''
    }),
    created(){
      this.listAdmins()
    },
    mounted(){
      this.getBatteryLevel()
    },
    methods:{
      async createAdmin(admin){
        if(admin.password != admin.confirm_password){ 
          this.text = "Senhas precisam ser iguais"
          this.color_alert = "error" 
          return this.alert_call = true
        }

        try {
          const response = await axios.post('admins',{
              name: admin.name,
              username: admin.username,
              contact: admin.contact,
              email: admin.email,
              password: admin.password
          })

          this.alert_call = true
          this.text = "Admin cadastrado com sucesso"
          this.color_alert = "success"
          this.dialog = false
          this.admin = {
            name:"",
              username:"",
              email:"",
              password:"",
              contact:"",
              confirm_password:""
          }
          this.listAdmins()
          // return alert('Administrador criado com sucesso')
        } catch (error) {
          return alert(error.data)
        }
      },
      async listAdmins(){
        try {
          const response = await axios.get('/admins')
          this.admins = response.data
        } catch (error) {
          
        }
      },
      async deteteAdmin(id){
        try {
         const response = await axios.delete(`admins/${id}`)
         this.alert_call = true
         this.text = "Admin deletado com sucesso"
         this.color_alert = "success"
         this.listAdmins()

        //  return alert('Administrador Deletado com sucesso')
        } catch (error) {
          
          
        }
      },
      async updateAdmin(){
        
        let admin = this.newadmin
        try {
          const response = await axios.put(`admins/${admin.id}`,{
            name: admin.name,
            username: admin.username,
            password: admin.password,
            contact: admin.contact,
            email: admin.email
          })

          this.dialog1 = false

          this.listAdmins()

          return alert('Admin Atualizado com sucesso')

        } catch (error) {
          return alert('Usuario não atualizado')
        }
      },
      modalUpdate(admin){
        this.dialog1 = true
        this.newadmin = admin
      },
      modalShowadmins(admin){
        this.dialog2 = true
        this.showadmins = admin
      },
      async getBatteryLevel(){
            try {
                const info = await Device.getBatteryInfo()
                this.battery_info = info
                this.battery_level = Math.floor(info.batteryLevel*100)
                this.battery_charging = info.isCharging
            } catch (err) {
                console.log(err);
            }
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
      // async mostrarAlerta(id){
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
      //       await this.deleteAdmin(id)
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
    <button @click="mostrarAlerta()">dasd</button>
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
                  Cadastrar Administrador
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Cadastro de Administrador</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          label="Nome*"
                          required
                          v-model="admin.name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="admin.contact"
                          label="Contato*"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="admin.username"
                          label="Usuario*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="admin.email"
                          label="Email*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="admin.password"
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="admin.confirm_password"
                          class="mt-3"
                          label="Confirmar Senha*"
                          type="password"
                          required
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
                    @click="createAdmin(admin)"
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
                Nome
            </th>
            <th scope="col"
            class="text-center">
                Administrador/Usuario
            </th>
            <th
              scope="col"
              class="text-center"
            >
              Status
            </th>
            <th
              scope="col"
              class="text-center"
            >
              Email
            </th>
            <th scope="col"
            class="text-center">
              Contato
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
            v-for="admin in admins"
            :key="admin.id">
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
              {{admin.name}}
            </td>
            <td class="text-center">
              {{admin.username}}
            </td>

            <!-- 👉 total -->
             <td class="text-center">
              <v-chip 
              v-show="status_chips"
              style="color: green;">
                {{battery_level}}%
              </v-chip>
              <v-chip 
              v-show="!status_chips"
              style="color: red;">
                Ativo
              </v-chip>
            </td>
            <td class="text-center">
              {{admin.email}}
            </td>

            <!-- 👉 Date -->
            <td class="text-center">
              {{admin.contact}}
            </td>

            <!-- 👉 Balance -->
            <!-- 👉 Actions -->
            <td class="text-center">
              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="deteteAdmin(admin.id)"
              >
                <VIcon
                  icon="mdi-delete-outline"
                  :size="24"
                />
              </VBtn>

              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="modalShowadmins(admin)"
              >
                <VIcon
                  :size="24"
                  icon="mdi-eye-outline"
                />
              </VBtn>
              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="modalUpdate(admin)"
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
                <v-text-field
                  v-model="newadmin.username"
                  label="Nome*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  v-model="newadmin.contact"
                  label="Contato*"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newadmin.email"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newadmin.password"
                  type="password"
                  label="Senha*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newadmin.confirm_password"
                  type="password"
                  label="Confirm Password*"
                  required
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
            @click="dialog1 = false"
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
                <v-text-field
                  v-model="showadmins.name"
                  label="Nome*"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  v-model="showadmins.contact"
                  label="Contato*"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="showadmins.username"
                  label="Usuario*"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="showadmins.email"
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

<!-- <v-alert v-model="alert_call" closable location="top" position="fixed" :text="text" :type="color_alert" variant="tonal"></v-alert> -->

</template>

