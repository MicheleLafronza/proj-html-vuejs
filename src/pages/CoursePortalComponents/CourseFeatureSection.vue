<script>
export default {
  name: "CourseFeatureSection",

  data() {
    return {
      featureCards: [
        {
          img: "/Immagini/finance-course-thumbnail-04-480x298.jpeg",
          price: "Free",
          title: "Personal Finance: Financial Security Thinking & Principles",
          lessons: 2,
          students: 320,
        },
        {
          img: "/Immagini/course-02-480x298.jpg",
          price: "Free",
          title: "Learning to Write as a Professional Author",
          lessons: 20,
          students: 78,
        },
        {
          img: "/Immagini/stock-full-hd-03-480x298.jpg",
          price: "Free",
          title: "Customer-centric Info-Tech Strategies",
          lessons: 24,
          students: 968,
        },
        {
          img: "/Immagini/stock-full-hd-04-480x298.jpg",
          price: 19,
          title: "Open Programming Courses for Everyone: Python",
          lessons: 17,
          students: 66,
        },
        {
          img: "/Immagini/stock-full-hd-06-480x298.jpg",
          price: "Free",
          title: "Academic Listening and Note-taking",
          lessons: 14,
          students: 70,
        },
        {
          img: "/Immagini/course-featured-image-01-480x298.jpg",
          price: 39,
          title: "Master jQuery in a Short Period of Time",
          lessons: 6,
          students: 51,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="sub-title">SIMULATED TO LEARN ?</div>
      <div class="section-title">Featured Online Courses</div>

      <div class="cards">
        <div v-for="(card, index) in featureCards" :key="index" class="card">
          <div class="card-img">
            <a href="#">
              <img :src="card.img" alt="img" />
            </a>
          </div>
          <div class="card-content">
            <div v-if="!isNaN(card.price)" class="card-price">
              ${{ card.price }}<span style="font-size: 18px">.00</span>
            </div>
            <div v-else class="card-price">
              {{ card.price }}
            </div>
            <div class="card-text">
              <a href="#">
                {{ card.title }}
              </a>
            </div>
            <div>
              <span class="card-lessons"
                ><i class="fa-regular fa-file-lines"></i>
                {{ card.lessons }} lessons</span
              >
              <span class="card-students"
                ><i class="fa-regular fa-user"></i>
                {{ card.students }} students</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="course-btn">
        <a href="#">View all courses <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/variables" as *;
@use "/src/style/partials/mixins" as *;

.main {
  background-color: $bg-lightgray;
}

.container {
  width: 70%;
  margin: 0 auto;
  padding: 100px 0;

  .sub-title {
    @include sub-title;
    text-align: center;
  }

  .section-title {
    @include main-title;
    text-align: center;
    margin-bottom: 80px;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  padding: 20px;
  width: calc(100% / 2);
  display: flex;
  align-items: start;
  gap: 20px;
  border-radius: 2px;
  transition: all ease 0.5s;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
  }
}

.card-img {
  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
  }
}

.card-content {
  // margin-top: 18px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-price {
  color: $main-green;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
}

.card-text {
  a {
    color: $main-page-text;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.6;
    margin-bottom: 12px;
    text-decoration: none;
  }
}

.card-lessons,
.card-students {
  color: $secondary-text;
  font-weight: 300;
  font-size: 14px;
}

.card-lessons {
  margin-right: 10px;
}

.course-btn {
  text-align: center;
  margin-top: 30px;
  a {
    background-color: $main-green;
    display: inline-block;
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    font-size: 14px;
    padding: 15px 40px;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.5s;
  }

  a:hover {
    background-color: $main-page-text;
  }
}
</style>
