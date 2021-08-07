<template>
  <div class="bestsellers">
    <!-- <p class="bestsellers__title">Os best-sellers da Padaria</p>
    <div class="bestsellers__box">
      <p class="bestsellers__box__text">
        Todos os nossos produtos são livres de açúcar e qualquer outro tipo de
        adoçante. Aproveitamos o gostinho doce das frutas, como tâmaras e
        bananas, para adoçar nossos produtos. Usamos preferencialmente
        ingredientes orgânicos, sejam eles legumes, frutas, farinhas, manteiga
        de cacau etc.
      </p>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.bestsellers {
  height: 300px;
  width: 100%;
  // background: transparent;
  background: rgba(253, 253, 253, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    font-size: 36px;
    font-weight: bolder;
    color: #fff;
    // text-shadow: 4px 0px 5px rgb(0 0 0 / 30%);
  }
  &__box {
    width: 45%;
    &__text {
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #000;
    }
  }
}
</style>
