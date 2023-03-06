<script>
import axios from 'axios';
  export default {
    data: () => ({
      newseller:{
        name:"",
        username:"",
        contact:"",
        email:"",
        password:"",
        confirm_password:"",
        simple_balance:"",
        multiple_balance:"",
        equal_limit:"",
        double_limit:"",
        multiple_limit:"",
        simple_limit:"",
        manager:""
      },
      sellers:[],
      seller:{
        name:"",
        username:"",
        contact:"",
        email:"",
        password:"",
        confirm_password:"",
        simple_balance:"",
        multiple_balance:"",
        equal_limit:"",
        double_limit:"",
        multiple_limit:"",
        simple_limit:"",
        manager:""
      },
      showsellers:{
        name:"",
        username:"",
        contact:"",
        email:"",
        password:"",
        confirm_password:"",
        simple_balance:"",
        multiple_balance:"",
        equal_limit:"",
        double_limit:"",
        multiple_limit:"",
        simple_limit:""
      },
      dialog: false,
      dialog1: false,
      dialog2: false,
      status_chips: true,
      alert_call: false,
      color_alert: '',
      list_managers:[]

    }),
    created(){
      this.listSellers()
      this.listManagers()
    },
   
    methods:{
      async listManagers(){
        try {
          let managers = []

          const response = await axios.get('manager')
          response.data.forEach(manager => {
            managers.push({
              id: manager.id,
              name : manager.name
            })
          });
          this.list_managers = managers
          console.log(response)
        } catch (error) {
          console.log(error)
        }
        
      },
      async listSellers(){
        try {
          const response = await axios.get('seller')
          this.sellers = response.data
        } catch (error) {
          
        }
      },
      async createSeller(seller){

        if(seller.password != seller.confirm_password){
          return alert('Senhas precisam ser iguais')
        }

        try {
          const response = await axios.post('seller',{
              name: seller.name,
              username: seller.username,
              contact: seller.contact,
              email: seller.email,
              address:seller.address,
              password: seller.password,
              confirm_password: seller.confirm_password,
              simple_balance: seller.simple_balance,
              multiple_balance: seller.multiple_balance,
              equal_limit: seller.equal_limit,
              double_limit: seller. double_limit,
              multiple_limit: seller. multiple_limit,
              simple_limit: seller.simple_limit,
              manager_id : seller.manager
          })
          this.alert_call = true
          this.text = "Vendedor cadastrado com sucesso"
          this.color_alert = "success"
          this.dialog = false
          this.seller = {
                name:"",
                username:"",
                contact:"",
                email:"",
                address:"",
                password:"",
                confirm_password:"",
                simple_balance:"",
                multiple_balance:"",
                equal_limit:"",
                double_limit:"",
                multiple_limit:"",
                simple_limit:""
            }
            this.listSellers()
          // return alert('Vendendor criado com sucesso')
        } catch (error) {
          return alert(error.data)
          
        }
      },
      async deleteSeller(id){
      try {
        const response = await axios.delete(`seller/${id}`)
         this.alert_call = true
         this.text = "Vendendor deletado com sucesso"
         this.color_alert = "success"
         this.listSellers()
        // return alert('Vendendor Deletado com sucesso')
      } catch (error) {
        
      }
       },
      async updateSeller(){
        let seller = this.newseller
        try {
          
          const response = await axios.put(`seller/${seller.id}`,{
              name: seller.name,
              username: seller.username,
              contact: seller.contact,
              email: seller.email,
              address:seller.address,
              password: seller.password,
              confirm_password: seller.confirm_password,
              simple_balance: seller.simple_balance,
              multiple_balance: seller.multiple_balance,
              equal_limit: seller.equal_limit,
              double_limit: seller.double_limit,
              multiple_limit: seller.multiple_limit,
              simple_limit: seller.simple_limit
          })

          this.dialog2 = false

          this.listSellers()

          return alert('Seller Atualizado com sucesso')

        } catch (error) {
          return alert('Usuario não atualizado')
        }
       },
      modalUpdate(seller){
        this.dialog2 = true
        this.newseller = seller
      },
      modalShowseller(seller){
        this.dialog1 = true
        this.showsellers = seller
      },
      clearclosed(){
        this.dialog = false
        this.seller = {
                name:"",
                username:"",
                contact:"",
                email:"",
                address:"",
                password:"",
                confirm_password:"",
                simple_balance:"",
                multiple_balance:"",
                equal_limit:"",
                double_limit:"",
                multiple_limit:"",
                simple_limit:""
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

                <!-- DIALOG CADASTRO DE VENDENDOR -->
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
                  Cadastrar Vendendor
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Cadastro de Vendendor</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <div class="mb-2"><b>Dados do vendendor</b></div>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="seller.name"
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
                          v-model="seller.contact"
                          label="Contato*"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="seller.username"
                          label="Nome do usuario*"
                          required
                        ></v-text-field>
                        <div class="ms-1">Nome de usuário usado no login* </div>
                        <v-text-field
                           v-model="seller.address"
                          class="mt-3"
                          label="Endereço*"
                          required
                        ></v-text-field>
                        <v-text-field
                           v-model="seller.email"
                          class="mt-3"
                          label="Email*"
                          required
                        ></v-text-field>
                        <v-text-field
                         v-model="seller.password"
                          class="mt-3"
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="seller.confirm_password"
                          class="mt-3"
                          label="Confirmar Senha*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                          <b>Gerencia/Saldo</b>
                      </v-col>
                      <v-col cols="12">
                       <VAutocomplete
                            v-model="seller.manager"
                            :items="list_managers"
                            item-title="name"
                            item-value="id"
                            label="Gerente"
                          />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="seller.simple_balance"
                          type="number"
                          label="Saldo simples*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                         v-model="seller.multiple_balance"
                          type="number"
                          label="Saldo multiplo*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="seller.equal_limit"
                          type="number"
                          label="Limite igual*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="seller.double_limit"
                          type="number"
                          label="Limite duplo*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="seller.multiple_limit"
                          type="number"
                          label="Limite multiplo*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="seller.simple_limit"
                          type="number"
                          label="Limite simples*"
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
                    @click="createSeller(seller)"
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
              Nome/Vendendor
            </th>
            <th scope="col"
            class="text-center">
              Usuario
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
            v-for="seller in sellers"
            :key="seller">
            <td class="text-center">
              <div
                class="mb-n2"
                style="width: 1rem;"
              >
                <VCheckbox/>
              </div>
            </td>
            <td class="text-center">
              {{seller.name}}
            </td>
            <td class="text-center">
              {{seller.username}}
            </td>
            <td class="text-center">
              <v-chip 
              v-show="seller.situation"
              style="color: green;">
                Ativo
              </v-chip>
              <v-chip 
              v-show="!seller.situation"
              style="color: red;" >
                Desativado
              </v-chip>
            </td>
            <!-- 👉 total -->
            <td class="text-center">
              {{seller.email}}
            </td>

            <!-- 👉 Date -->
            <td class="text-center">
              {{seller.contact}}
            </td>

            
            <td class="text-center">
              <VBtn
                icon
                variant="plain"
                color="default"
                size="x-small"
                @click="deleteSeller(seller.id)"
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
                @click="modalShowseller(seller)"
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
                @click="modalUpdate(seller)"
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

  <!-- DIALOG UPDATE  VENDENDOR-->
   <v-dialog
              v-model="dialog2"
              persistent
              max-width="600px"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">Atualizar Cadastro de Vendendor</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <div class="mb-2"><b>Dados do vendendor</b></div>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="newseller.name"
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
                          v-model="newseller.contact"
                          label="Contato*"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="newseller.username"
                          label="Nome do usuario*"
                          required
                        ></v-text-field>
                        <div class="ms-1">Nome de usuário usado no login* </div>
                        <v-text-field
                           v-model="newseller.address"
                          class="mt-3"
                          label="Endereço*"
                          required
                        ></v-text-field>
                        <v-text-field
                           v-model="newseller.email"
                          class="mt-3"
                          label="Email*"
                          required
                        ></v-text-field>
                        <v-text-field
                         v-model="newseller.password"
                          class="mt-3"
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                        <v-text-field
                          v-model="newseller.confirm_password"
                          class="mt-3"
                          label="Confirmar Senha*"
                          type="password"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                          <b>Gerencia/Saldo</b>
                      </v-col>
                      <v-col
                        cols="12"
                      >
                        <v-text-field
                          v-model="newseller.manager"
                          type="number"
                          label="Saldo simples*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="newseller.simple_balance"
                          type="number"
                          label="Saldo simples*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                         v-model="newseller.multiple_balance"
                          type="number"
                          label="Saldo multiplo*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="newseller.equal_limit"
                          type="number"
                          label="Limite igual*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="newseller.double_limit"
                          type="number"
                          label="Limite duplo*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="newseller.multiple_limit"
                          type="number"
                          label="Limite multiplo*"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="newseller.simple_limit"
                          type="number"
                          label="Limite simples*"
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
                    @click="updateSeller(seller)"
                  >
                    Atualizar
                  </v-btn>
                </v-card-actions>
              </v-card>
   </v-dialog>
   <!-- DIALOG INFORMAÇÕES DO VENDENDOR -->
   <v-dialog
              v-model="dialog1"
              persistent
              max-width="600px"
            >
              <v-card>
                <v-card-title>
                  <span class="text-h5">Visualizar Cadastro de Vendendor</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <div class="mb-2"><b>Dados do vendendor</b></div>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly
                          label="Nome"
                          v-model="showsellers.name"
                        >
                        
                      </v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                        label="Contato"
                        readonly
                        v-model="showsellers.contact"
                        >
                      </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          readonly
                          label="Usuario"
                          v-model="showsellers.username"
                        ></v-text-field>
                        <!-- <div class="ms-1">Nome de usuário usado no login* </div> -->
                        <v-text-field
                          readonly
                          class="mt-3"
                          label="Endenreço"
                          v-model="showsellers.address"
                        ></v-text-field>
                        <v-text-field
                          class="mt-3"
                          readonly
                          label="Email"
                          v-model="showsellers.email"
                        ></v-text-field>
                        <!-- <v-text-field
                          class="mt-3"
                          label="Senha*"
                          type="password"
                          required
                        ></v-text-field>
                        <v-text-field
                          class="mt-3"
                          label="Confirmar Senha*"
                          type="password"
                          required
                        ></v-text-field> -->
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                          <b>Gerencia/Saldo</b>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly
                          type="number"
                          label="Saldo simples*"
                          v-model="showsellers.simple_balance"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly
                          type="number"
                          label="Saldo multiplo*"
                          v-model="showsellers.multiple_balance"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly=""
                          type="number"
                          label="Limite igual*"
                          v-model="showsellers.equal_limit"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly=""
                          type="number"
                          label="Limite duplo*"
                          v-model="showsellers.double_limit"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly
                          type="number"
                          label="Limite multiplo*"
                          v-model="showsellers.multiple_limit"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          readonly
                          type="number"
                          label="Limite simples*"
                          v-model="showsellers.simple_limit"
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
