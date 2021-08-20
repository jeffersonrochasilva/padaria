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
  background-image: url(https://cdn.awsli.com.br/800x800/1156/1156203/produto/61014820/4dea0beb53.jpg);
  background-attachment: fixed;
  // background-repeat: no-repeat;
  &__container {
    width: 100%;
    height: 87%;
    background: rgba(253, 253, 253, 0.5);
    display: flex;
    justify-content: center;
    &__card {
      margin-top: 150px;

      width: 1170px;
    }
  }
}
</style>
