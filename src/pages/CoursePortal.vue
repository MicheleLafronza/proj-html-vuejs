<script>
import CoursePortalHero from "./CoursePortalComponents/CoursePortalHero.vue";
import CoursePortalClientsSection from "./CoursePortalComponents/CoursePortalClientsSection.vue";

export default {
  name: "CoursePortal",
  components: {
    CoursePortalHero,
    CoursePortalClientsSection,
  },
};
</script>

<template>
  <CoursePortalHero />
  <CoursePortalClientsSection />
</template>

<style lang="scss" scoped></style>
