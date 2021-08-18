<template>
  <div class="contact">
    <Header />
    <div class="contact__container">
      <div class="contact__container__center">
        <div class="contact__container__center__login">
          <input type="text" v-model="nome" placeholder="Digite seu e-mail" />
          <input type="e-amil" v-model="email" placeholder="Digite seu nome" />
          <input
            type="password"
            v-model="senha"
            placeholder="Digite sua senha"
          />
          <input
            type="password"
            v-model="confirmarsenha"
            placeholder="Confirme sua senha"
          />
          <div class="contact__container__center__login__button">
            <button @click="save">CADASTRAR</button>
            <button>FAZER LOGIN</button>
          </div>
        </div>
        <div class="contact__container__center__redes">
          <div class="contact__container__center__redes__face">
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
              alt="facebook"
            />
            <a>Padaria_Biscoito</a>
          </div>
          <div class="contact__container__center__redes__face">
            <a>Padaria_Biscoito</a>

            <img
              src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Instagram-icon-PNG.png"
              alt="instagran"
            />
          </div>
          <div class="contact__container__center__redes__face">
            <img
              src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png"
              alt="twiter"
            />
            <a>Padaria_Biscoito</a>
          </div>
          <div class="contact__container__center__redes__face">
            <a>Padaria_Biscoito</a>

            <img
              src="https://w7.pngwing.com/pngs/10/453/png-transparent-computer-icons-email-cover-letter-information-miscellaneous-blue-angle.png"
              alt="e-mail"
            />
          </div>
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
      nome: "",
      email: "",
      senha: "",
      confirmarsenha: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    async save() {
      if (this.senha === this.confirmarsenha) {
        const data = await axios.post("http://localhost:3000/clientes", {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        });
        alert("Cliente cadastrado com sucesso");
        this.mudar();
      } else {
        alert("erro! Tente novamente.");
      }
    },
    mudar() {
      this.$router.push("/clients");
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: 100%;
  background-image: url(https://image.freepik.com/fotos-gratis/dois-biscoitos-e-uma-garrafa-de-leite-sobre-um-papel-de-parede-amarelo_146482-611.jpg);
  background-attachment: fixed;

  &__container {
    width: 100%;
    height: 87%;
    display: flex;
    justify-content: center;
    background: rgba(253, 253, 253, 0.5);

    &__center {
      width: 1170px;
      // height: 100%;
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
        width: 450px;
        height: 450px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;
        background: #bdb76b;

        &__face {
          display: flex;
          align-items: center;
          justify-content: space-around;
          img {
            border-radius: 50%;
            width: 90px;
            height: 90px;
          }
          a {
            cursor: pointer;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
