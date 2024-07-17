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
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  name: "CoursePortalClientsSection",
  data() {
    return {
      clientImg: [
        "/Immagini/client-logo-01.png",
        "/Immagini/client-logo-02.png",
        "/Immagini/client-logo-03.png",
        "/Immagini/client-logo-04.png",
        "/Immagini/client-logo-05.png",
        "/Immagini/client-logo-06.png",
        "/Immagini/client-logo-07.png",
      ],
    };
  },
};
</script>

<template>
  <div class="clients">
    <swiper
      :slidesPerView="6"
      :centeredSlides="false"
      :spaceBetween="20"
      :grabCursor="false"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="slide" v-for="(slides, index) in clientImg">
        <img :src="slides" alt="logo" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.clients {
  margin: 40px auto;
  overflow: hidden;
}

.mySwiper {
  width: 60%;
  height: 150px;
  padding: 30px 0;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    opacity: 0.5;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
