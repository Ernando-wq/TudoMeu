<script>
import axios from 'axios';
  export default {
    data: () => ({
      newmanager:{
        name:"",
        username:"",
        email:"",
        password:"",
        contact:"",
        confirm_password:""
      },
      managers:[],
      manager:{
        name:"",
        username:"",
        email:"",
        password:"",
        contact:"",
        confirm_password:""
      },
      showmanges:{
        name:"",
        username:"",
        email:"",
        contact:"",
      },

      dialog: false,
      dialog1: false,
      dialog2: false,
      status_chips: true,
      alert_call: false,
      color_alert: ''
    }),
    created(){
      this.listManagers()
    },
    methods:{
      async test(){
        const response = await axios.get('')
        alert(response.data)
      },
      async createManager(manager){

        if(manager.password != manager.confirm_password){
          return alert('Senhas precisam ser iguais')
        }
        try {
          const response = await axios.post('manager',{
              name: manager.name,
              username: manager.username,
              contact: manager.contact,
              email: manager.email,
              password: manager.password
          })
          this.alert_call = true
          this.dialog = false
          this.text = "Gerente cadastrado com sucesso"
          this.color_alert = "success" 
          this.dialog = false
          this.manager = {
              name:"",
              username:"",
              email:"",
              password:"",
              contact:"",
              confirm_password:""
          }
          this.listManagers()

          // return alert('Gerente criado com sucesso')
        } catch (error) {
          return alert(error.data)
        }
      },
      async listManagers(){
        try {
          const response = await axios.get('/manager')
          this.managers = response.data
        } catch (error) {
          
        }
      },
      async deteteManager(id){
        try {
         const response = await axios.delete(`manager/${id}`)
         this.alert_call = true
         this.text = "Gerente deletado com sucesso"
         this.color_alert = "success"
         this.listManagers()

        //  return alert('Gerente Deletado com sucesso')
        } catch (error) {
          
          
        }
      },
      async updateManager(){
        let manager = this.newmanager
        try {
          
          const response = await axios.put(`manager/${manager.id}`,{
            name: manager.name,
            username: manager.username,
            password: manager.password,
            contact: manager.contact,
            email: manager.email
          })

          this.dialog1 = false

          this.listManagers()

          return alert('Gerente Atualizado com sucesso')

        } catch (error) {
          return alert('Usuario não atualizado')
        }
      },
      modalUpdate(manager){
        this.dialog1 = true
        this.newmanager = manager
      },
      modalShowmanager(manager){
        this.dialog2= true
        this.showmanges= manager
      },
      clearclosed(){
        this.dialog = false
        this.manager = {
              name:"",
              username:"",
              email:"",
              password:"",
              contact:"",
              confirm_password:""
          }
      }

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
          <v-dialog
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
                  Cadastrar Gerente
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Cadastro de Gerente</span>
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
                          v-model="manager.name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="manager.contact"
                          label="Contato*"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="manager.username"
                          label="Usuario*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="manager.email"
                          label="Email*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="manager.password"
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="manager.confirm_password"
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
                    @click="createManager(manager)"
                    
                  >
                    Cadastrar
                  </v-btn>
                </v-card-actions>
              </v-card>
          </v-dialog>
          
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
                Gerente/Usuario
            </th>
            <th scope="col"
            class="text-center">
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
            v-for="manager in managers"
            :key="manager.id">
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
              {{manager.name}}
            </td>
            <td class="text-center">
              {{manager.username}}
            </td>
            <td class="text-center">
              <v-chip 
              v-show="status_chips"
              style="color: green;">
                Ativo
              </v-chip>
              <v-chip 
              v-show="!status_chips"
              style="color: red;">
                Ativo
              </v-chip>
            </td>

            <!-- 👉 total -->
            <td class="text-center">
              {{manager.email}}
            </td>

            <!-- 👉 Date -->
            <td class="text-center">
              {{manager.contact}}
            </td>

            <!-- 👉 Balance -->
            <!-- 👉 Actions -->
            <td class="text-center">
              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="deteteManager(manager.id)"
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
                @click="modalShowmanager(manager)"
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
                @click="modalUpdate(manager)"
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
  <!-- ATUALIZAR CADASTRO  -->
  <v-dialog
      v-model="dialog1"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Atualizar Cadastro de Gerente</span>
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
                  v-model="newmanager.name"
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
                  v-model="newmanager.contact"
                  label="Contato*"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newmanager.username"
                  label="Usuario*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newmanager.email"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="newmanager.password"
                  type="password"
                  label="Senha*"
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
            @click="updateManager(manager)"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
  <!-- SHOW STATUS MANAGER -->
  <v-dialog
      v-model="dialog2"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Atualizar Cadastro de Gerente</span>
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
                  readonly
                  v-model="showmanges.name"
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
                  readonly
                  v-model="showmanges.contact"
                  label="Contato*"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  readonly
                  v-model="showmanges.username"
                  label="Usuario*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  readonly
                  v-model="showmanges.email"
                  label="Email*"
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
            @click="dialog2 = false"
          >
            Fechar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateManager(manager)"
          >
            Atualizar
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
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

