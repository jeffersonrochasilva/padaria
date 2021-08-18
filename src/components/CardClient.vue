<template>
  <div class="cards">
    <div class="cards__container">
      -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dados: [],
    };
  },
  mounted() {
    this.buscardados();
  },
  methods: {
    async carregarDados() {
      const { data } = await axios.get("http://localhost:3000/clientes");
      this.dados = data;
      console.log(dados);
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  // width:
  // background: #303030;
  &__container {
    // width: 50%;
    border-radius: 3px;
    display: flex;
    background: #fff;
    &__name {
      height: 60px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__email {
      height: 60px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__id {
      height: 60px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
