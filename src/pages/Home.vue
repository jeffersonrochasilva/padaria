<template>
  <div class="home">
    <div class="top">
      <Header />
    </div>
    <Presentation />
    <Recommentation />
    <BestSellers />
    <SectionCard />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Recommentation from "@/components/Recommentation";
import BestSellers from "@/components/BestSellers";
import SectionCard from "@/components/SectionCard";
export default {
  components: {
    Header,
    Presentation,
    Recommentation,
    BestSellers,
    SectionCard,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url(https://www.papeiseparede.com.br/2010-category_default/papel-de-parede-hora-do-cafe.jpg);
  background-attachment: fixed;
  width: 100%;
}
// .topo {
//   position: absolute;
//   bottom: -150;
// }
</style>
