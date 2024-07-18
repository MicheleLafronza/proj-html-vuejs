<script>
import CoursePortalHero from "./CoursePortalComponents/CoursePortalHero.vue";
import CoursePortalClientsSection from "./CoursePortalComponents/CoursePortalClientsSection.vue";
import CourseFeatureSection from "./CoursePortalComponents/CourseFeatureSection.vue";
import AvailableCourses from "./CoursePortalComponents/AvailableCourses.vue";
import CourseVideoSection from "./CoursePortalComponents/CourseVideoSection.vue";
import CourseTestimonialSection from "./CoursePortalComponents/CourseTestimonialSection.vue";
import ResultsSection from "./CoursePortalComponents/ResultsSection.vue";
import CourseBlog from "./CoursePortalComponents/CourseBlog.vue";
import CourseNewsLetterSection from "./CoursePortalComponents/CourseNewsLetterSection.vue";

export default {
  name: "CoursePortal",
  components: {
    CoursePortalHero,
    CoursePortalClientsSection,
    CourseFeatureSection,
    AvailableCourses,
    CourseVideoSection,
    CourseTestimonialSection,
    ResultsSection,
    CourseBlog,
    CourseNewsLetterSection,
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
  <ResultsSection />
  <CourseBlog />
  <CourseNewsLetterSection />
</template>

<style lang="scss" scoped></style>
