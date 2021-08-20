<template>
  <div class="client">
    <Header />
    <div v-for="(dado, index) in dados" :key="index" class="client__container">
      <!-- <CardClient /> -->
      <p>{{ dado.nome }}</p>
      <p>{{ dado.email }}</p>
      <p>{{ dado.id }}</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  data() {
    return {
      dados: [],
    };
  },
  components: {
    Header,
    // CardClient,
  },
  mounted() {
    this.getdados();
  },
  methods: {
    async getdados() {
      const { data } = await axios.get(" http://localhost:3000/clientes");
      this.dados = data;
    },
  },
};
</script>
<style lang="scss" scoped>
.client {
  width: 100%;
  height: 100%;
  &__container {
    width: 100%;
    height: 30px;
    background: pink;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
