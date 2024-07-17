<script>
import CoursePortalHero from "./CoursePortalComponents/CoursePortalHero.vue";
import CoursePortalClientsSection from "./CoursePortalComponents/CoursePortalClientsSection.vue";
import CourseFeatureSection from "./CoursePortalComponents/CourseFeatureSection.vue";

export default {
  name: "CoursePortal",
  components: {
    CoursePortalHero,
    CoursePortalClientsSection,
    CourseFeatureSection,
  },
};
</script>

<template>
  <CoursePortalHero />
  <CoursePortalClientsSection />
  <CourseFeatureSection />
</template>

<style lang="scss" scoped></style>
