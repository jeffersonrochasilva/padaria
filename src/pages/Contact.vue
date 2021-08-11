<template>
  <div class="contact">
    <Header />
    <div class="contact__container">
      <div class="contact__container__center">
        <div class="contact__container__center__login">
          <input type="e-mail" placeholder="Digite seu e-mail" />
          <input type="text" placeholder="Digite seu nome" />
          <input type="password" placeholder="Digite sua senha" />
          <input type="password" placeholder="Confirme sua senha" />
          <div class="contact__container__center__login__button">
            <button>CADASTRAR</button>
            <button>FAZER LOGIN</button>
          </div>
        </div>
        <div class="contact__container__center__redes"></div>
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
.contact {
  width: 100%;
  height: 100%;
  &__container {
    width: 100%;
    height: 87%;
    display: flex;
    justify-content: center;
    &__center {
      width: 1170px;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      &__login {
        width: 450px;
        height: 450px;
        border-radius: 5px;
        background: #dcdcdc;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        &__button {
          width: 80%;
          display: flex;
          justify-content: space-around;
          button {
            width: 100px;
            height: 30px;
            border-style: none;
            border-radius: 4px;
            background: #cd9b1d;
            color: #fff;
          }
        }
        input {
          width: 80%;
          height: 30px;
          border-radius: 4px;
          border-style: none;
          text-align: center;
        }
      }
      &__redes {
        border: 1px solid green;
        width: 450px;
        height: 450px;
      }
    }
  }
}
</style>
