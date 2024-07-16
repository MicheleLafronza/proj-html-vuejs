<script>
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";

export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>

<template>
  <PageHeader />
  <router-view></router-view>
  <PageFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
