<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    modalitys: [
      { name: 'Animal', icon: 'mdi-alpha-a' },
      { name: 'Dezena', icon: 'mdi-alpha-d' },
      { name: 'Centena', icon: 'mdi-alpha-c' },
      { name: 'Milhar', icon: 'mdi-alpha-m' },
    ],
    animals: [
      {
        name: 'Avestruz',
        group: '01',
      },
      {
        name: 'Águia',
        group: '02',
      },
      {
        name: 'Burro',
        group: '03',
      },
      {
        name: 'Borboleta',
        group: '04',
      },
      {
        name: 'Cachorro',
        group: '05',
      },
      {
        name: 'Cabra',
        group: '06',
      },
      {
        name: 'Carneiro',
        group: '07',
      },
      {
        name: 'Camelo',
        group: '08',
      },
      {
        name: 'Cobra',
        group: '09',
      },
      {
        name: 'Coelho',
        group: '10',
      },
      {
        name: 'Cavalo',
        group: '11',
      },
      {
        name: 'Elefante',
        group: '12',
      },
      {
        name: 'Galo',
        group: '13',
      },
      {
        name: 'Gato',
        group: '14',
      },
      {
        name: 'Jacaré',
        group: '15',
      },
      {
        name: 'Leão',
        group: '16',
      },
      {
        name: 'Macaco',
        group: '17',
      },
      {
        name: 'Porco',
        group: '18',
      },
      {
        name: 'Pavão',
        group: '19',
      },
      {
        name: 'Peru',
        group: '20',
      },
      {
        name: 'Touro',
        group: '21',
      },
      {
        name: 'Tigre',
        group: '22',
      },
      {
        name: 'Urso',
        group: '23',
      },
      {
        name: 'Veado',
        group: '24',
      },
      {
        name: 'Vaca',
        group: '25',
      },
    ],
    awards_select:[
      { title: '1', value: [['1']]},
      { title: '1 ao 5', value: [["1","2","3","4","5"]]},
      { title: '1 ao 10', value: [["1","2","3","4","5","6","7","8","9","10"]]},
      { title: '1 e 1 ao 5', value: [ ['1'], ["1","2","3","4","5"] ]},
      { title: '1 e 2 ao 5', value: [ ['1'], ["2","3","4","5"] ]},
    ],
    selections_awards: [
      { awards: null, value: null },
    ],
    have_selection: false,
    market: '',
    selections: [],
    all_awards: [],
    qtd_awards:[
      1
    ],
    awards: '',
    unitary_value:"",
    dialog: false,
    numbers:[],
    has_awards: false,
    index_award: null

  }),
  methods: {
    addNewAwardsSelections(){
      this.selections_awards.push({ awards: null, value: null })
    },
    addMarket(market) {
      let mercado = market
      this.market = mercado
      console.log(this.market)
    },
    addSelections(item) {
      if (item == 'AA') {
        let random = Math.floor(Math.random() * this.animals.length)
        if (random == 0) {
          random += 1
        }
        item = this.animals[random].group
      }

      if (this.selections.includes(item)) {
        alert('Numero já selecionado')
        return
      }
      let select = item
      this.selections.push(select)
    },
    removeSelections(index) {
      console.log(index)
      this.selections.splice(index, 1)
      console.log(this.selections)
    },
    addQtdAwards(item){
      let test = {
        title: '1 ao 5', value: [["1","2","3","4","5"]],  valor_aposta:'1.50'
      }

        let selecoes = ''
        if(this.awards == '1 ao 5'  ) {
           selecoes = [["1","2","3","4","5"]]
        }

      let awards = { title: this.awards, unitary_value: this.unitary_value, selecoes: selecoes}
      this.qtd_awards.push(item)

      console.log(awards);
    },
    removeQtdAwards(i){      
      this.selections_awards = this.selections_awards.filter((selection, index) => index != i)
    },
    addNumber(number){
      if (this.numbers.includes(number)) {
        alert('Numero já selecionado')
        return
      }
        this.numbers.push(number)
    },
    removeQtdNumbers(i){      
      this.numbers = this.numbers.filter((selection, index) => index != i)
    },
    addAwardsCustons(awards){
      this.selections_awards[this.index_award] = {awards: awards, value: null}

      this.numbers = []
      this.dialog = false

    },
    // Pegando index e chamando modal de outros premios 
    getIndex(i){
      this.dialog = true
      this.index_award = i
    }
  },

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<script setup>
const isPrimaryChipVisible = ref(true)
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText =
  'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length
const preTab = () => {
  if (currentTab.value !== 1) currentTab.value -= 1
}
const nextTab = () => {
  if (currentTab.value !== totalTabs) currentTab.value += 1
}
</script>

<template>
  <!-- SELECT MODALITY -->
  <VCard v-show="market == ''">
    <v-layout>
      <v-app-bar class="text-center" color="primary" prominent>
        <v-toolbar-title>Modalidades</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-card-text class="d-flex">
          <VRow class="justify-center text-center">
            <v-col v-for="modality in modalitys" :key="modality" cols="3" md="2" sm="2">
              <v-btn icon rounded="" size="60" @click="addMarket(modality.name)"
                ><v-icon size="60">{{ modality.icon }}</v-icon></v-btn
              >
              <h4>
                <p class="mt-1">{{ modality.name }}</p>
              </h4>
            </v-col>
          </VRow>
        </v-card-text>
      </v-main>
    </v-layout>
  </VCard>
  <!-- SELEÇÕES -->
  <VCard v-show="market != '' && !have_selection">
    <v-layout>
      <v-app-bar class="text-center" color="primary" prominent>
        <v-toolbar-title>Palpite para {{ market }}</v-toolbar-title>
        <v-btn v-if="selections.length > 0" icon @click="have_selection = true"
          ><v-icon size="50" color="white">mdi-arrow-right-thick</v-icon></v-btn
        >
      </v-app-bar>
      <v-main>
        <v-col class="pa-0 d-flex justify-center" cols="12">
          <VCard elevation="3" width="80%" min-height="80px" class="pt-4 pl-1">
            <v-row class="mb-4">
              <v-col cols="12">
                <VChip
                  v-for="(select, i) in selections"
                  :key="i"
                  class="ml-2 mt-2 pr-0"
                  variant="outlined"
                  @click="removeSelections(i)"
                >
                  {{ select }}

                  <VIcon class="ml-1" start size="18" icon="mdi-close-octagon" />
                </VChip>
              </v-col>
            </v-row>
          </VCard>
        </v-col>
        <v-col cols="12 d-flex justify-center mt-n8 pb-0">
          <v-btn @click="addSelections('AA')" rounded>Aleatório</v-btn>
        </v-col>
        <v-card-text class="d-flex">
          <VRow class="justify-center text-center">
            <v-col v-for="animal in animals" :key="animal" cols="3" md="2" sm="2">
              <v-btn v-if="animal.icon" rounded="" @click="addSelections(animal.group)" icon size="60">
                <v-icon size="30">{{ animal.icon }}</v-icon></v-btn
              >
              <v-btn v-else rounded="" @click="addSelections(animal.group)" size="60">{{ animal.group }}</v-btn>
              <h4>
                <p class="mt-1">{{ animal.name }}</p>
              </h4>
            </v-col>
          </VRow>
        </v-card-text>
      </v-main>
    </v-layout>
  </VCard>
  <!-- TELA DE PREMIOS  / VALORES -->
  <VCard v-show="market != '' && have_selection">
    <v-layout>
      <v-app-bar class="text-center" color="primary" prominent>
        <v-toolbar-title>Premios</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <!-- REPETIÇÃO DA TABELA DE PREMIOS -->
        <v-card-text v-for="award in qtd_awards" :key="award">
          <div class="add-products-header mb-2 d-none d-md-flex">
            <VRow class="font-weight-medium px-5">
              <VCol cols="12" md="6">
                <h6 class="text-sm">Premios</h6>
              </VCol>
              <VCol cols="12" md="2">
                <h6 class="text-sm">Valor</h6>
              </VCol>
            </VRow>
          </div>
         <VCard
            flat
            border
            class="d-flex flex-sm-row flex-column-reverse mb-2"
            v-for="(selection, i) in selections_awards" :key="i"
          >
            <!-- 👉 Left Form -->
            <div class="pa-5 flex-grow-1">
              <VRow class="d-flex" >
                <VCol cols="12" md="6">
                  <v-select
                    v-model="selection.awards"
                    :items="awards_select"
                    :item-title="'title'"
                    :item-value="'value'"
                    chips
                    clearable
                    clear-icon="mdi-close-circle-outline"
                    label="Adicionar Premios"
                  ></v-select>
                </VCol>
                <VCol cols="12" md="2" sm="4">
                  <VTextField v-model="selection.value" type="number" label="Valor" />
                </VCol>
                <VCol cols="12" md="4" sm="4">
                  <p class="text-sm-center my-2">
                    <span class="text-body-1"><v-btn class="ml-2"
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      @click="getIndex(i)"
                    >
                      Outros
                    </v-btn></span>
                  </p>
                </VCol>  
              </VRow>
            </div>
            <div
              class="d-flex flex-column item-actions pa-1"
              :class="$vuetify.display.smAndUp ? 'border-s' : 'border-b' "
            >
              <VBtn
                 :disabled="selections_awards.length <= 1"
                    color="error"
                    size="small"
                    icon="mdi-close"
                    @click="removeQtdAwards(i)"
              >
              </VBtn>
            </div>
            <!-- 👉 Item Actions -->
          </VCard>
        </v-card-text>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn @click="addNewAwardsSelections()" class="ml-5">Adicionar outro</v-btn>
            <v-btn class="ms-1">Confirmar Premios</v-btn>
            <VDialog  
            v-model="dialog"
            max-width="400"
            >
              <VCard>
                  <v-layout>
                    <v-app-bar class="text-center" color="primary" prominent>
                      <v-toolbar-title>Outros</v-toolbar-title>
                    </v-app-bar>
                    <v-main>
                      <v-card min-height="60"  class="d-flex justify-center pb-2 pt-2 " >
                        <div>
                            <VChip
                            v-for="(numero, i) in numbers" :key="i" 
                            class="ml-2 mt-2 pr-0"
                            variant="outlined"
                            @click="removeQtdNumbers(i)"
                          >
                              {{numero}}

                            <VIcon class="ml-1" start size="18" icon="mdi-close-octagon" />
                          </VChip>
                        </div>    
                          
                      </v-card>
                      <v-card-text>
                        <VRow>
                            <v-col cols="9" class="pa-0 ma-0">
                              <div class="d-flex justify-end mr-2" >
                                <v-btn @click="addNumber('1')">1</v-btn>
                                <v-btn class="ms-1" @click="addNumber('2')">2</v-btn>
                                <v-btn class="ms-1" @click="addNumber('3')">3</v-btn>
                              </div>
                              <div class="mt-1 d-flex justify-end mr-2">
                                <v-btn @click="addNumber('4')">4</v-btn>
                                <v-btn class="ms-1" @click="addNumber('5')">5</v-btn>
                                <v-btn class="ms-1" @click="addNumber('6')">6</v-btn>
                              </div>
                              <div class="mt-1 d-flex justify-end mr-2">
                                <v-btn @click="addNumber('7')">7</v-btn>
                                <v-btn class="ms-1" @click="addNumber('8')">8</v-btn>
                                <v-btn class="ms-1" @click="addNumber('9')">9</v-btn>
                              </div>
                              <div class="mt-1 calc d-flex justify-center mr-2">
                                <v-btn @click="addNumber('10')">10</v-btn>
                              </div>
                            </v-col>
                            <v-col cols="3" class="pa-0">
                                <v-btn height="80"><v-icon icon="mdi-backspace"></v-icon></v-btn>
                                <v-btn class="mt-1" height="80" @click="addAwardsCustons(numbers)">Ok</v-btn>
                            </v-col>
                        </VRow>
                      </v-card-text>
                    </v-main>
                  </v-layout>
                </VCard>
            </VDialog>
          </v-col>
          
      </v-main>
    </v-layout>
  </VCard>
</template>

<style>
  .calc{
    margin-left: 71px;
  }
</style>
