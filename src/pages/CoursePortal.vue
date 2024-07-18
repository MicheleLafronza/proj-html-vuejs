<script>
import CoursePortalHero from "./CoursePortalComponents/CoursePortalHero.vue";
import CoursePortalClientsSection from "./CoursePortalComponents/CoursePortalClientsSection.vue";
import CourseFeatureSection from "./CoursePortalComponents/CourseFeatureSection.vue";
import AvailableCourses from "./CoursePortalComponents/AvailableCourses.vue";

export default {
  name: "CoursePortal",
  components: {
    CoursePortalHero,
    CoursePortalClientsSection,
    CourseFeatureSection,
    AvailableCourses,
  },
};
</script>

<template>
  <CoursePortalHero />
  <CoursePortalClientsSection />
  <CourseFeatureSection />
  <AvailableCourses />
</template>

<style lang="scss" scoped></style>
