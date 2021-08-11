<template>
  <div class="clients">
    <Header />
    <div class="clients__container">
      <div class="clients__container__login">
        <input type="text" placeholder="Digite seu e-mail" />
        <input type="password" placeholder="Digite sua senha" />
        <div class="clients__container__login__button">
          <button>ENTRAR</button>
          <button>SER CLIENTE</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.clients {
  width: 100%;
  height: 100%;
  &__container {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__login {
      width: 40%;
      height: 35%;
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
