<template>
  <div class="clients">
    <Header />
    <div class="clients__container">
      <div class="clients__container__login">
        <input v-model="email" type="text" placeholder="Digite seu e-mail" />
        <input v-model="senha" type="password" placeholder="Digite sua senha" />
        <div class="clients__container__login__button">
          <button @click="submit">ENTRAR</button>
          <button @click="irpara">SER CLIENTE</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  components: {
    Header,
  },

  methods: {
    irpara() {
      this.$router.push("/contact");
    },
    async submit(e) {
      e.preventDefault();
      const { data } = await axios.get("  http://localhost:3000/clientes", {
        params: {
          email: this.email,
          senha: this.senha,
        },
      });
      if (data.length > 0) {
        this.$router.push("/clientearia");
      } else {
        alert("usuario ou senhas incorretas");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.clients {
  width: 100%;
  height: 100%;
  background-image: url(https://img.elo7.com.br/product/600x380/224DD3C/papel-de-parede-food-name-clean-3m-papel-decorativo.jpg);
  background-attachment: fixed;

  &__container {
    width: 100%;
    height: 87%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(253, 253, 253, 0.5);

    &__login {
      width: 40%;
      height: 35%;
      margin-top: 170px;
      border-radius: 5px;
      background: #8b4c39;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      input {
        width: 500px;
        height: 35px;
        border-radius: 4px;
        border-style: none;
        text-align: center;
      }
      &__button {
        width: 500px;
        display: flex;
        justify-content: space-around;
        button {
          width: 110px;
          height: 40px;
          background: #cd9b1d;
          border-style: none;
          border-radius: 3px;
          color: #fff;
        }
      }
    }
  }
}
</style>
