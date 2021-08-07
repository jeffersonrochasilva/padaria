<template>
  <div class="sectioncard">
    <div class="sectioncard__container">
      <Card />
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.sectioncard {
  width: 100%;
  // background: transparent;
  background: rgba(253, 253, 253, 0.5);

  display: flex;
  justify-content: center;
  &__container {
    max-width: 1470px;
    display: flex;
    justify-content: center;
  }
}
</style>
