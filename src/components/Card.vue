<template>
  <div class="card">
    <div v-for="item in receita" :key="item.id" class="card__container">
      <div class="card__container__image">
        <img :src="item.image" alt="" />
      </div>
      <div class="card__container__description">
        <span>{{ item.nome }}</span>
        <strong>R${{ item.valor }} Kg</strong>
        <button>PEDIR</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async buscardados() {
      const response = await axios.get("http://localhost:3000/receitas");
      this.receita = response.data;
      console.log(this.receita);
    },
  },
  mounted() {
    this.buscardados();
  },
  data() {
    return {
      receita: [],
    };
  },
};
</script>
<style lang="scss" coped>
.card {
  display: flex;
  flex-wrap: wrap;
  &__container {
    width: 430px;
    height: 660px;
    box-shadow: 3px 3px 10px 2px #000;
    margin: 30px;
    // border: 1px solid red;
    background: rgba(253, 253, 253, 0.5);

    &__image {
      width: 100%;
      height: 60%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__description {
      height: 40%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      span {
        font-weight: bold;
        font-size: 32px;
        color: #8b4c39;
        text-shadow: 1.5px 1.5px 2px #000;
      }
      button {
        height: 40px;
        width: 130px;
        border-style: double;
        // border: 5px solid red;
        border-width: 5px;
        // border-color: #000;
        background: transparent;
      }
    }
  }
}
</style>
