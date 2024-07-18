<script>
export default {
  name: "AvailableCourses",

  data() {
    return {
      cardsContent: [
        {
          img: "/Immagini/home-2-image-box-01.png",
          title: "Customize Preferences",
          content:
            "Learners are given the right to arrange and customize their study schedule and timetable based on preferences.",
          link: "Start here",
        },
        {
          img: "/Immagini/about-us-02-image-box-02.png",
          title: "Cloud Storage",
          content:
            "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
          link: "Get Free Quote",
        },
        {
          img: "/Immagini/home-2-image-box-03.png",
          title: "Multimedia Chnnels",
          content:
            "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
          link: "Start now",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="sub-title">MAXCOACH AVAILABLE COURSES</div>
    <div class="title">
      Access <span class="green-title">Smart Tutoring</span> Program For
      Benefits.
    </div>
    <div class="cards">
      <div v-for="(card, index) in cardsContent" :key="index" class="card">
        <div class="card-img">
          <img :src="card.img" alt="img" />
        </div>
        <div class="card-title">{{ card.title }}</div>
        <div class="text-content">
          {{ card.content }}
        </div>
        <div class="link">
          <a href="#"
            >{{ card.link }} <i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/mixins" as *;
@use "/src/style/partials/variables" as *;

.container {
  width: 70%;
  margin: 0 auto;
  padding: 60px 0;
  .sub-title {
    @include sub-title;
    text-align: center;
  }
  .title {
    @include main-title;
    font-size: 30px;
    text-align: center;
    margin-bottom: 50px;
  }

  .green-title {
    @include green-title;
  }

  // cards
  .cards {
    display: flex;
    justify-content: space-between;
  }

  .card {
    width: calc(100% / 3);
    padding: 20px;

    .card-img {
      margin-bottom: 20px;
    }

    .card-title {
      @include main-title;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .text-content {
      font-weight: 300;
      font-size: 14px;
      color: $main-gray;
      margin-bottom: 20px;
    }

    .link {
      a {
        color: $secondary-text;
        text-decoration: none;
        position: relative;
        transition: color 0.8s;
        font-weight: 500;
        font-size: 14px;

        // HOVER EFFECT
        // linea verde in entrata
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 0;
          height: 1px;
          background-color: $secondary-text;
          transition: width 0.8s ease-in-out, left 0.4s ease-in-out;
        }

        &:hover {
          color: $main-green;
        }

        &:hover {
          &::after {
            width: 100%;
            left: 0;
          }
        }

        .fa-arrow-right {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
