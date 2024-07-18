<script>
import Curriculum from "./Curriculum.vue";
import Instructor from "./Instructor.vue";
import Overview from "./Overview.vue";
import Reviews from "./Reviews.vue";

export default {
  name: "CustomerStrategies",
  components: {
    Overview,
    Curriculum,
    Instructor,
    Reviews,
  },

  data() {
    return {
      selLayer: "Overview",
      reLink: [
        {
          name: "Home",
          active: true,
        },
        {
          name: "Home",
        },
        {
          name: "Home",
        },
        {
          name: "Home",
        },
      ],
    };
  },
  methods: {
    selectTab(tab) {
      this.selLayer = tab;
    },
  },
};
</script>

<template>
  <main>
    <div class="reLink">
      <div v-for="element in reLink">
        <router-link v-if="element.active" :to="{ name: 'CoursePortal' }">
          {{ element.name }}
        </router-link>
      </div>
      /
      <a> Courses</a>
      /
      <a>Information Technology </a>
      /
      <a class="selPage"> Customer-centric Info-Tech Strategies</a>
    </div>
    <h1 class="title">Customer-centric Info-Tech Strategies</h1>
    <div class="Layers">
      <button
        @click="selectTab('Overview')"
        :class="{ active: selLayer === 'Overview' }"
      >
        Overview
      </button>
      <button
        @click="selectTab('curriculum')"
        :class="{ active: selLayer === 'curriculum' }"
      >
        Curriculum
      </button>
      <button
        @click="selectTab('instructor')"
        :class="{ active: selLayer === 'instructor' }"
      >
        Instructor
      </button>
      <button
        @click="selectTab('reviews')"
        :class="{ active: selLayer === 'reviews' }"
      >
        Reviews
      </button>
    </div>
    <div class="tab-content">
      <div v-if="selLayer === 'Overview'">
        <Overview />
      </div>
      <div v-if="selLayer === 'curriculum'">
        <Curriculum />
      </div>
      <div v-if="selLayer === 'instructor'">
        <Instructor />
      </div>
      <div v-if="selLayer === 'reviews'">
        <Reviews />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../../style/partials/_variables.scss";

main {
  padding: 90px 20px 0 20px;
  color: $secondary-text;

  .reLink a {
    cursor: pointer;
    text-decoration: none;
    margin: 0 20px;
    color: $secondary-text;
    position: relative;
    display: inline-block;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background-color: $seondary-page-text;
      transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
    }

    &:hover {
      color: $seondary-page-text;

      &::after {
        width: 100%;
        left: 0;
      }
    }
  }

  .reLink .selPage {
    cursor: default;
    color: $seondary-page-text;

    &::after {
      background-color: initial;
      transition: none;
    }
  }

  .reLink {
    display: flex;
  }

  span {
    padding: 0 20px;
    color: $secondary-text;
  }

  .title {
    font-size: 43px;
    font-weight: 600;
    text-align: center;
    margin: 2rem 0;
    color: $seondary-page-text;
  }

  .Layers {
    display: flex;
    width: 70%;
    border-bottom: 2px solid $most-viewed-bg;
  }

  .Layers button {
    font-size: 25px;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    color: $secondary-text;
  }

  .Layers button.active {
    border-bottom: 2px solid $main-green;
    color: $seondary-page-text;
  }

  .tab-content {
    margin-top: 20px;
  }
}
</style>
