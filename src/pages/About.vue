<template>
  <div class="about">
    <Header />
    <div class="about__container">
      <div class="about__container__header">
        <div class="about__container__header__histori">
          <span>NOSSA HISTÓRIA</span>
        </div>
      </div>
      <div class="about__container__text">
        <p>
          COMO TUDO COMEÇOU ​ A primeira gestação da administradora de empresas
          Gabriela Fugulin trouxe mais que um bebê maravilhoso. Despertou nela
          uma curiosidade de tudo que envolvia a maternidade, especialmente a
          alimentação. Para conhecer melhor esse universo, pesquisou
          minuciosamente métodos de introdução alimentar, recomendações dos
          órgãos de saúde e nutrição adequada para o começo da vida. E quando
          seu bebê começou a comer, optou pelo BLW (baby led-weaning - ou
          desmame guiado pelo bebê, em português). Para que ele se interessasse
          naturalmente pelos alimentos, Gabi a cada dia inventava um prato
          diferente, combinações de sabores e cores. Entre um prato e outro,
          resolveu aplicar seu conhecimento na produção de pães, adquirido em um
          curso profissionalizante de panificação que fez quando ainda nem
          sonhava engravidar. Após algumas tentativas, chegou na fórmula
          desejada: legumes orgânicos, sem glúten, ausência total de qualquer
          agente químico comum na fabricação de pães e zero açúcar, ou seja, um
          autêntico pão de vegetais, próprio para a introdução alimentar, sem
          agredir o sensível sistema digestivo dos bebês que está em formação.
          E, claro, que coubesse nas suas mãozinhas para que ele pudesse comer
          sozinho, dando a autonomia da escolha e da decisão de comer, dentro do
          conceito BLW. Assim, aperfeiçoou a fórmula e chegou na versão para
          congelar em 10 sabores, com variações também com ou sem queijo. Estar
          semi-pronto ajudou muito no dia a dia. Levava os pãezinhos no passeio
          no parque, na casa dos avós, na casa de amigos... A variedade de
          sabores foi também muito conveniente para auxiliar no desenvolvimento
          do paladar do bebê. A praticidade e a segurança de estar oferecendo um
          alimento de qualidade foram aspectos decisivos para continuar fazendo,
          ainda que dessem um pouco de trabalho, afinal de contas era uma
          alternativa um milhão de vezes melhor que a dos alimentos
          ultraprocessados, muito práticos, mas nada nutritivos, e não
          recomendados para a primeira infância. Além disso, o filhote comia
          feliz da vida os pãezinhos coloridos. As mães de seu círculo passaram
          a se interessar e a fazer encomendas. E assim surgiu a Padaria dos
          Bebês, com intuito de facilitar a rotina das famílias e deixar a
          alimentação dos bebês e crianças ainda mais saudável e saborosa.
        </p>
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
.about {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container {
    max-width: 1170px;
    background: #cd9b1d;
    border-right: 4px solid green;
    margin-top: 7%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__header {
      max-width: 1170px;
      height: 150px;
      background: #cd9b1d;
      &__histori {
        height: 100%;
        background: #cd9b1d;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          font-size: 32px;
        }
      }
    }
  }
}
</style>
