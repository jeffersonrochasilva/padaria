<template>
  <div class="presentation">
    <div class="presentation__container">
      <div class="presentation__container__logo"></div>
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
    &__image {
      img {
        width: 350px;
        height: 350px;
      }
    }
  }
}
</style>
