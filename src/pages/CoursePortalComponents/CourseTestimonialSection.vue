<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "CourseTestimonialSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      testimonials: [
        {
          title: "High level of efficiency and scientific teaching methods",
          blockquote:
            "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
          clientImg: "/Immagini/testimonial-avata-02.jpg",
          clientName: "Mina Hollace",
          clientWork: "/ Freelancer",
        },
        {
          title:
            "Professional team of specialists and passionate mentors at reach",
          blockquote:
            "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
          clientImg: "/Immagini/testimonial-avata-04.jpg",
          clientName: "Madley Pondor",
          clientWork: "/ IT Specialist",
        },
        {
          title: "The MaxCoach team works really hard to ensure high quality",
          blockquote:
            "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.",
          clientImg: "/Immagini/testimonial-avata-01.jpg",
          clientName: "Luvic Dubble",
          clientWork: "/ Private Tutor",
        },
        {
          title: "It's a choice of quality for people with special needs",
          blockquote:
            "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
          clientImg: "/Immagini/testimonial-avata-03.jpg",
          clientName: "Florence Themes",
          clientWork: "/ Multimedia Admin",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="sub-title">GREAT WORDS ABOUT MAXCOACH</div>
      <div class="main-title">Our <span>top learners'</span> verbatim</div>

      <div class="testimonials">
        <swiper
          :slidesPerView="3"
          :centeredSlides="false"
          :spaceBetween="90"
          :grabCursor="false"
          :loop="true"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial"
          >
            <div class="testimonial-title">
              {{ testimonial.title }}
            </div>
            <blockquote>
              {{ testimonial.blockquote }}
            </blockquote>
            <div class="client">
              <div class="client-img">
                <img :src="testimonial.clientImg" alt="" />
              </div>
              <div>
                <div class="client-name">{{ testimonial.clientName }}</div>
                <div class="client-work">{{ testimonial.clientWork }}</div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination custom-pagination"></div>
      </div>

      <div class="cta-section">
        <!-- decoration img -->
        <img
          class="shape shape0"
          src="/Immagini/maxcoach-shape-02.png"
          alt=""
        />
        <img
          class="shape shape1"
          src="/Immagini/maxcoach-shape-01.png"
          alt=""
        />
        <div class="shape round"></div>

        <!-- ******************* -->

        <div class="cta-sub-title">
          Start today for getting <span>Online Certification</span>
        </div>
        <div class="cta-title">
          You can be your own guiding star with our help!
        </div>
        <div class="cta-btn"><a href="#">Get started now</a></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/mixins" as *;
@use "/src/style/partials/variables" as *;

.main {
  background-color: $carousel-bg;
}

.container {
  width: 90%;
  margin: 0 auto;
  padding: 100px 0;

  .sub-title {
    @include sub-title;
    text-align: center;
  }

  .main-title {
    text-align: center;
    @include main-title;
    margin-bottom: 60px;

    span {
      @include green-title;
    }
  }

  .testimonials {
    padding-bottom: 60px;
    :deep(.swiper-pagination) {
      position: absolute;
      bottom: 0; // Posiziona i bullets in fondo al contenitore .testimonials
      left: 0;
      width: 100%;
    }

    :deep(.swiper-pagination-bullet-active) {
      // Stile per il bullet attivo
      background-color: $main-page-text; // Colore di sfondo per il bullet attivo
      opacity: 1; // Opacità piena per il bullet attivo

      // Per ingrandire il bullet attivo
      transform: scale(1.5);
    }
  }

  .testimonial {
    width: 100%;
    padding: 40px;
    background-color: #fff;

    .testimonial-title {
      color: $main-page-text;
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 20px;
    }

    blockquote {
      font-size: 18px;
      font-weight: 300;
      color: $main-gray;
      margin-bottom: 40px;
    }

    .client {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .client-img {
      img {
        width: 70px;
        border-radius: 50%;
      }
    }

    .client-name {
      text-transform: uppercase;
      color: $main-page-text;
      font-weight: 500;
    }

    .client-work {
      font-size: 14px;
      font-weight: 300;
      color: $main-gray;
    }
  }

  // cta section
  .cta-section {
    padding-top: 100px;
    position: relative;

    .cta-sub-title {
      color: $main-page-text;
      font-size: 24px;
      font-weight: 600;
      text-align: center;

      span {
        @include green-title;
      }
    }
  }

  .cta-title {
    @include main-title;
    text-align: center;
    margin-bottom: 30px;
  }

  .cta-btn {
    text-align: center;
    a {
      background-color: $main-green;
      display: inline-block;
      text-decoration: none;
      font-weight: 500;
      color: #fff;
      font-size: 14px;
      padding: 15px 80px;
      border-radius: 5px;
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 0.5s;
    }

    a:hover {
      background-color: $main-page-text;
    }
  }

  //immagini decorative
  .shape {
    position: absolute;
  }

  .shape0 {
    top: 76px;
    right: 240px;
  }

  .shape1 {
    bottom: -8px;
    left: 250px;
  }

  .round {
    width: 70px;
    height: 70px;
    border: 7px solid #ecc5ab;
    border-radius: 50%;
    position: absolute;
    top: 50px;
    left: 346px;
  }
}
</style>
