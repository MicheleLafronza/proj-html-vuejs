<script>
import CoursePortalHero from "./CoursePortalComponents/CoursePortalHero.vue";
import CoursePortalClientsSection from "./CoursePortalComponents/CoursePortalClientsSection.vue";
import CourseFeatureSection from "./CoursePortalComponents/CourseFeatureSection.vue";
import AvailableCourses from "./CoursePortalComponents/AvailableCourses.vue";
import CourseVideoSection from "./CoursePortalComponents/CourseVideoSection.vue";
import CourseTestimonialSection from "./CoursePortalComponents/CourseTestimonialSection.vue";

export default {
  name: "CoursePortal",
  components: {
    CoursePortalHero,
    CoursePortalClientsSection,
    CourseFeatureSection,
    AvailableCourses,
    CourseVideoSection,
    CourseTestimonialSection,
  },
};
</script>

<template>
  <CoursePortalHero />
  <CoursePortalClientsSection />
  <CourseFeatureSection />
  <AvailableCourses />
  <CourseVideoSection />
  <CourseTestimonialSection />
</template>

<style lang="scss" scoped></style>
