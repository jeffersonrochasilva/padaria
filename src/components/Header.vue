<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__logo">
        <img src="@/assets/biscoito.jpg" alt="" />
      </div>
      <div class="header__container__sobre"><p>Sobre a Padaria +</p></div>
      <div class="header__container__produto"><p>Produtos +</p></div>
      <div class="header__container__produto"><p>Kits +</p></div>
      <div class="header__container__produto"><p>Promoções +</p></div>
      <div class="header__container__produto"><p>Junino +</p></div>
      <div class="header__container__produto"><p>Contato +</p></div>
      <div class="header__container__produto">
        <div class="header__container__produto__valor">
          <strong>R$0,00</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 120px;
  background: #fff;
  box-shadow: 6px 6px 10px #000;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    width: 100%;
    max-width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__produto {
      height: 100%;
      display: flex;
      align-items: center;
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
