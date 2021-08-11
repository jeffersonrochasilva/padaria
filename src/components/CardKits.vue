<template>
  <div class="card">
    <div v-for="item in dadoskits" :key="item.id" class="card__container">
      <div class="card__container__image">
        <img :src="item.image" alt="" />
      </div>
      <div class="card__container__description">
        <div class="card__container__description__text">
          <span>{{ item.componentes }}</span>
        </div>
        <strong>R${{ item.valor }} Kg</strong>
        <button>PEDIR</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dadoskits: [],
    };
  },
  methods: {
    async kits() {
      const response = await axios.get("http://localhost:3000/kits");
      this.dadoskits = response.data;
    },
  },
  mounted() {
    this.kits();
  },
};
</script>

<style lang="scss" coped>
.card {
  display: flex;
  flex-wrap: wrap;
  &__container {
    width: 330px;
    height: 560px;
    box-shadow: 3px 3px 10px 2px #000;
    margin: 20px;
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
      &__text {
        text-align: center;
        display: flex;
        justify-content: center;
      }
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
