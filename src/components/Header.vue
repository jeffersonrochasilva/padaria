<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <img src="@/assets/biscoito.jpg" alt="" />
      </div>
      <div class="header__container__sobre">
        <p @click="viajarinicio">Inicio</p>
      </div>
      <div class="header__container__produto">
        <p @click="viajarproduct">Produtos</p>
      </div>
      <div class="header__container__produto">
        <p @click="viajarkits">Kits</p>
      </div>
      <div class="header__container__produto">
        <p @click="viajar">Sobre a Padaria</p>
      </div>
      <div class="header__container__produto">
        <p @click="viajarclients">Clientes</p>
      </div>
      <div class="header__container__produto">
        <p @click="viajarcontact">Contato</p>
      </div>
      <div class="header__container__produto">
        <div class="header__container__produto__valor">
          <strong>R$0,00</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  methods: {
    viajar() {
      this.$router.push("/About");
    },
    viajarinicio() {
      this.$router.push("/");
    },
    viajarproduct() {
      this.$router.push("/product");
    },
    viajarcontact() {
      this.$router.push("/contact");
    },
    viajarclients() {
      this.$router.push("/clients");
    },
    viajarkits() {
      this.$router.push("/kits");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  // height: 120px;
  padding: 10px 0 10px 0;
  background: #fff;
  box-shadow: 6px 6px 10px #000;
  // position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: absolute;
  &__container {
    width: 100%;
    max-width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__sobre {
      p {
        cursor: pointer;
        font-family: "Kaushan Script", cursive;

        &:hover {
          color: green;
        }
      }
    }
    &__produto {
      height: 100%;
      display: flex;
      align-items: center;
      p {
        cursor: pointer;
        font-family: "Kaushan Script", cursive;

        &:hover {
          color: green;
        }
      }
      &__valor {
        width: 110px;
        height: 40px;
        background: #cd9b1d;
        border-radius: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        strong {
          color: green;
        }
      }
    }
  }
}
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
p {
  font-weight: bold;
}
</style>
