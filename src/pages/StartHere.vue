<script>
import Carousel from "./startherecomponents/Carousel.vue";
import Steps from "./startherecomponents/Steps.vue";

export default {
  name: "StartHere",
  components: {
    Carousel,
    Steps,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <Carousel />
    <Steps />
  </main>
</template>

<style lang="scss" scoped></style>
