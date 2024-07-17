<script>
export default {
  name: "CourseFeatureSection",
};
</script>

<template>
  <div class="main">
    <div class="container"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/variables" as *;

.main {
  background-color: $bg-lightgray;
}

.container {
  width: 70%;
  margin: 0 auto;
}
</style>
