<template>

  <div class="container">
    <div class="row">
      <div class="col-md-10 offset-md-1 d-flex mt-5 justify-content-center">
        <div class="row g-3">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">Numero</label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              aria-describedby="passwordHelpInline"
              v-model="item.numero"
            />
          </div>
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">Cor</label>
          </div>
          <div class="col-auto">
            <input
              type="color"
              class="form-control"
              aria-describedby="passwordHelpInline"
              v-model="item.cor"
            />
          </div>
          <div class="col-auto">
            <button class="btn btn-primary" @click="add()">Adicionar</button>
          </div>
          <div class="col-auto">
            <button class="btn btn-danger" @click="deleteAll()">
              Apagar Tudo
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center mt-5">
      <div class="col-md-3" v-for="(item, i) in items" :key="i">
        <div
          class="card tex1t-white mb-3"
          :style="`background-color: ${item.cor} `"
        >
          <div class="card-body">
            <h5 class="card-title">{{ item.numero }}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="col-auto d-flex">
              <button class="btn btn-primary" @click="newColor(i)">Nova Cor</button>
              <button class="btn btn-danger ms-5" @click="deleteList(i)">
                Apagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: {
        numero: "",
        cor: "",
      },
    };
  },
  methods: {
    add() {
      this.items.push(this.item);
      this.item = { numero: "", cor: "" };
      console.log(this.items);
    },
    deleteList(index) {
      this.items.splice(index, 1);
    },
    deleteAll() {
      this.items = [];
    },
    newColor(index) {
      this.items = this.items.map((item , i)=> {
        if(i==index) {
          const nova_cor = this.generatenewColor() 
          item.cor = nova_cor
        }
        return item
      })
    },
    generatenewColor(){
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      return `#${randomColor}`
    }
  },
};
</script>

<style>
</style>




