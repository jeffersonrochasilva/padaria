<template>
  <div class="presentation">
    <div class="presentation__container">
      <div class="presentation__container__logo">
        <h1>Pão bom</h1>
      </div>
      <div class="presentation__container__image">
        <img src="@/assets/bolo.jpg" alt="" />
        <img src="@/assets/biscoitoo.jpg" alt="" />

        <img src="@/assets/bolinho.jpg" alt="" />

        <!-- <div class="presentation__container__image__one"></div>
        <div class="presentation__container__image__two"></div>
        <div class="presentation__container__image__three"></div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  height: 600px;
  // background: #fff8dc;
  background: rgba(253, 253, 253, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__logo {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-size: 100px;
        color: #cd9b1d;
        text-shadow: 6px 6px 9px #8b4c39;
        font-family: "Kaushan Script", cursive;
      }
    }
    &__image {
      img {
        width: 350px;
        height: 350px;
      }
    }
  }
}
</style>
