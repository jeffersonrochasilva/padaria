<template>
  <div class="kits">
    <Header />
    <div class="kits__container">
      <CardKits />
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import CardKits from "@/components/CardKits";

export default {
  components: {
    Header,
    CardKits,
  },
};
</script>

<style lang="scss" scoped>
.kits {
  width: 100%;
  // background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYSShfuYVEnkJqdgkmopVdyMsMqeXi-ClUQ&usqp=CAU);
  // background-attachment: fixed;
  // background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__container {
    margin-top: 10%;
    max-width: 1170px;
    // border: 1px solid red;
  }
}
</style>
