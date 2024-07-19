<script>
import CardCourse from "./cardCourse.vue";
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
    CardCourse,
  },

  data() {
    return {
      selLayer: "Overview",
      reLink: [
        {
          name: "Home",
          active: true,
        },
      ],
      currentIndex: 0,
      courses: [
        {
          image: "/public/Immagini/stock-full-hd-03-480x298.jpg",
          title: "Learning to Write as a Professional Author",
          price: "$0.00",
          lessons: 20,
          students: 78,
        },
        {
          image: "/public/Immagini/stock-full-hd-04-480x298.jpg",
          title: "Open Programming Courses for Everyone: Python",
          price: "$19.00",
          lessons: 17,
          students: 66,
        },
        {
          image: "/public/Immagini/stock-full-hd-05-480x298.jpg",
          title: "Academic Listening and Note-taking",
          price: "$0.00",
          lessons: 14,
          students: 70,
        },
        {
          image: "/public/Immagini/stock-full-hd-06-480x298.jpg",
          title: "Master jQuery in a Short Period of Time",
          price: "$39.00",
          lessons: 6,
          students: 51,
        },
        {
          image: "/public/Immagini/stock-full-hd-03-480x298.jpg",
          title: "Introduction to Javascript for Beginners",
          price: "$59.00",
          lessons: 14,
          students: 81,
        },
      ],
    };
  },
  methods: {
    selectTab(tab) {
      this.selLayer = tab;
    },
    nextSlide() {
      if (this.currentIndex < 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updateSliderPosition();
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = 1;
      }
      this.updateSliderPosition();
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.updateSliderPosition();
    },
    updateSliderPosition() {
      const slider = this.$refs.slider;
      const slideWidth = slider.clientWidth / 3;
      const offset = this.currentIndex * slideWidth * 3;
      slider.style.transform = `translateX(-${offset}px)`;
    },
  },
  mounted() {
    this.updateSliderPosition();
    window.addEventListener("resize", this.updateSliderPosition);
  },
};
</script>

<template>
  <main>
    <div class="mainContent">
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
      <div class="cardCourse">
        <CardCourse />
      </div>
    </div>
    <div class="RelCourses">
      <h2>Related Courses</h2>
      <div class="sliderCont">
        <div class="slider" ref="slider">
          <div v-for="(course, index) in courses" class="slide">
            <img class="imgCourse" :src="course.image" />
            <div class="courseInfo">
              <span class="price">{{ course.price }}</span>
              <h3 class="titleCourse">{{ course.title }}</h3>
              <div class="infoLesStud">
                <span>{{ course.lessons }} Lessons</span>
                <span>{{ course.students }} Students</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dots">
          <span
            class="dot"
            :class="{ active: currentIndex === 0 }"
            @click="goToSlide(0)"
          ></span>
          <span
            class="dot"
            :class="{ active: currentIndex === 1 }"
            @click="goToSlide(1)"
          ></span>
        </div>
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
    transition: color 300ms ease;
    font-weight: 400;

    &:hover {
      color: $seondary-page-text;
    }
  }

  .Layers button.active {
    border-bottom: 2px solid $main-green;
    color: $seondary-page-text;
  }

  .tab-content {
    width: 70%;
    margin-top: 20px;
  }

  .RelCourses {
    h2 {
      color: $seondary-page-text;
      text-align: center;
      margin: 2rem 0;
    }

    .sliderCont {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 100%;
      padding-bottom: 5rem;
    }

    .slider {
      display: flex;
      transition: transform 0.5s ease;
      width: 100%;
    }

    .slide {
      min-width: calc(100% / 3 - 2rem);
      box-sizing: border-box;
      margin: 0 auto;
      margin: 0 1rem;
      cursor: pointer;
      overflow: hidden;
      transition: box-shadow 0.5s ease, transform 0.5s ease;

      &:hover {
        box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
        transform: scale(1.02);
      }
    }

    .courseInfo {
      padding: 20px;
      overflow: hidden;
    }

    .imgCourse {
      width: 100%;
      transition: transform 1s ease;
    }

    .slide:hover .imgCourse {
      transform: scale(1.08);
      transition: 1s;
    }

    .price {
      color: $main-green;
      font-size: 25px;
      font-weight: 700;
    }

    .titleCourse {
      color: $seondary-page-text;
      font-size: 22px;
    }

    .infoLesStud {
      padding: 20px 0;

      span {
        margin-right: 20px;
      }
    }

    span {
      padding: 0;
    }

    .dots {
      position: absolute;
      bottom: 2rem;
    }

    .dot {
      height: 15px;
      width: 15px;
      padding: 2px;
      margin: 0 5px;
      border-radius: 50%;
      display: inline-block;
      background-color: $secondary-text;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .dot.active {
      background-color: $seondary-page-text;
      transform: scale(1.3);
    }
  }
}
</style>
