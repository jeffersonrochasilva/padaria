<template>
  <div class="client">
    <Header />
    <div class="client__container">
      <CardClient />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import CardClient from "@/components/CardClient";
export default {
  components: {
    Header,
    CardClient,
  },
};
</script>
<style lang="scss" scoped>
.client {
  width: 100%;
  height: 100%;
  &__container {
    width: 100%;
    height: 87.7%;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
