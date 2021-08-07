<template>
  <div class="recommentation">
    <div class="recommentation__title">
      <p class="recommentation__title__top">
        RECOMENDADO POR NUTRICIONISTAS INFANTIS
      </p>
    </div>
    <div class="recommentation__text">
      <p class="recommentation__text__center">
        Quando ouvimos falar da Padaria dos Bebês fizemos questão de ir conhecer
        pessoalmente o trabalho da Gabi. Ela é realmente encantadora e faz com o
        real propósito de entregar tudo com a melhor qualidade possível.
        Ingredientes orgânicos, matéria-prima de qualidade e receitas elaboradas
        para além de saudáveis, ficarem gostosas para os bebês. É tudo lindo,
        cuidado e caprichado. Nós recomendamos e aprovamos sempre! A melhor
        opção para as mães que cuidam da alimentação saudável de verdade para
        seus bebês.
      </p>
    </div>
    <div class="recommentation__subtitle">
      <p class="recommentation__subtitle__button">
        CAMILA E GABI (COISA DE NUTRI)
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recommentation {
  width: 100%;
  // height: 300px;
  padding-top: 40px;
  padding-bottom: 40px;
  background: #fff8dc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  &__title {
    // border: 1px solid red;
    padding-bottom: 40px;

    &__top {
      font-size: 32px;
      font-weight: bold;
      font-size: 32px;
      color: #8b4c39;
      text-shadow: 1.5px 1.5px 3px #000;
    }
  }
  &__text {
    padding-bottom: 40px;

    width: 60%;
    &__center {
      font-size: 16px;
      font-weight: bold;
      color: #ee7600;
    }
  }
  &__subtitle {
    &__button {
      font-size: 32px;
      font-weight: bold;
      font-size: 32px;
      color: #8b4c39;
    }
  }
}
</style>
