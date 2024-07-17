<script>
export default {
  name: "Carousel",
  data() {
    return {
      slidesImg: [
        {
          image: "/Immagini/start-here-hero-slide-01-bg.jpeg",
          title: "AWAKEN YOUR GIFTS",
          number: "01",
          topText: "INSPIRING CURRICULUM",
          text: "Learning with MaxCoach might a turning point in your life when you get communication with a great awakening of born talents",
        },
        {
          image: "/Immagini/start-here-hero-slide-02-bg.jpeg",
          title: "OPEN UP A BRIGHT SKY",
          number: "02",
          topText: "LIFE CONSULTANCY",
          text: "Ever feel drained of ideas and inspiration in life? Lost in no where and have no place to go? Find help and advice from our MaxCoah specialists",
        },
        {
          image: "/Immagini/start-here-hero-slide-03-bg.jpeg",
          title: "WRITE YOUR OWN LIFE BOOK",
          number: "03",
          topText: "SKILL ADVANCEMENT",
          text: "Not only your skills are advanced, your inner self can get a new identity as well. You're the one who take full control of your life book",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      if (this.activeIndex === this.slidesImg.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = this.activeIndex + 1;
      }
    },
    prevSlide() {
      if (this.activeIndex === 0) {
        this.activeIndex = this.slidesImg.length;
      }
      this.activeIndex = this.activeIndex - 1;
    },
  },
  mounted() {
    var autoPlay = setInterval(this.nextSlide, 5000);
    setTimeout(stop, 16000);
    function stop() {
      clearInterval(autoPlay);
      console.log("autoplay terminato");
    }
  },
};
</script>

<template>
  <div class="carousel">
    <div class="slide">
      <span @click="nextSlide" class="button next">
        <i class="fa-solid fa-chevron-right"></i>
      </span>
      <span @click="prevSlide" class="button prev">
        <i class="fa-solid fa-chevron-left"></i>
      </span>
      <img :src="slidesImg[activeIndex].image" alt="" />
      <div class="text">
        <div class="title">{{ slidesImg[activeIndex].title }}</div>
        <div class="caption">
          <div class="caption-top">
            <span class="number">{{ slidesImg[activeIndex].number }}</span
            ><span class="line"></span
            ><span class="top-text">{{ slidesImg[activeIndex].topText }}</span>
          </div>
          <div class="caption-bottom">
            {{ slidesImg[activeIndex].text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/variables" as *;

img {
  max-width: 100%;
}

.slide {
  position: relative;

  .text {
    color: $white;
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 75%;

    .title {
      font-size: 4rem;
      font-weight: bold;
    }

    .line {
      border-bottom: solid 1px white;
      width: 50px;
      display: block;
    }
  }
}

.caption-top {
  display: flex;
  gap: 10px;
  align-items: center;

  .number {
    font-size: 1.9rem;
    font-weight: bold;
  }

  .top-text {
    font-size: 1.6rem;
    font-weight: bold;
  }
}

.caption-bottom {
  font-size: 1.5rem;
}

.button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.7rem;
  background-color: rgba($color: #000000, $alpha: 0.3);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}
</style>
