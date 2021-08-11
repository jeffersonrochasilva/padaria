<template>
  <div class="product">
    <Header />
    <div class="product__container">
      <div class="product__container__card">
        <Card />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Card from "@/components/Card";
export default {
  components: {
    Header,
    Card,
  },
};
</script>

<style lang="scss" scoped>
.product {
  width: 100%;
  &__container {
    display: flex;
    justify-content: center;
    border: 1px solid red;
    &__card {
      max-width: 1500px;
    }
  }
}
</style>
