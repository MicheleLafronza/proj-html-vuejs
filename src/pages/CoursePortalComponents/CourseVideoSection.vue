<script>
export default {
  name: "CourseVideoSection",
};
</script>

<template>
  <div class="main-container">
    <div class="bg-decoration">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height="315"
      >
        <path
          class="elementor-shape-fill"
          d="M 50 0 S75 0 100 100 L100 0"
        ></path>
      </svg>
    </div>
    <div class="container">
      <div class="row">
        <!-- video section -->
        <div class="video-img">
          <!-- immagini decorative -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="200px"
            height="202px"
            viewBox="0 0 200 202"
            class="shape shape0"
          >
            <path
              class="elementor-shape-fill"
              d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"
            ></path>
          </svg>
          <img
            class="shape shape1"
            src="/Immagini/maxcoach-shape-05-150x150.png"
            alt=""
          />
          <img
            class="shape shape2"
            src="/Immagini/maxcoach-shape-07-150x150.png"
            alt=""
          />

          <div class="shape round"></div>
          <!-- ********************************* -->
          <div class="video-btn">
            <img
              class="image"
              src="/Immagini/home-2-popup-video-poster.jpg"
              alt=""
            />
            <img class="yt-logo" src="/Immagini/icon-youtube-play.png" alt="" />
          </div>
        </div>
        <!-- content section -->
        <div class="content">
          <div class="sub-title">GET STARTED <span>EFFORTLESSLY</span></div>
          <div class="title">
            Enjoy Our <br />
            <span>Companionship</span>
          </div>
          <div class="content-text">
            Sneek peek into what has in store for you on our online teaching and
            mentoring portal. Seek for some hidden hints of early-bird rewards
            as well.
          </div>
          <div class="link">
            <a href="#"
              >Download free guidebook <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/mixins" as *;
@use "/src/style/partials/variables" as *;

.main-container {
  position: relative;
  .bg-decoration {
    width: 80%;
    height: 400px;
    position: absolute;
    bottom: 0;
    right: 0;

    svg {
      width: 100%;
      height: 100%;
      transform: rotate(180deg);
      transform: scaley(-1);
      fill: $carousel-bg;
    }
  }
}

.container {
  width: 70%;
  margin: 0 auto;
  padding: 60px 0;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
}

.video-img {
  position: relative;

  .video-btn {
    position: relative;
    overflow: hidden;
    .yt-logo {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .image {
      transition: scale 1.5s;
    }

    &:hover .image {
      scale: 1.1;
      cursor: pointer;
    }
  }

  // immagini decorative
  .shape {
    z-index: -1;
    position: absolute;
  }

  .shape0 {
    fill: #e5c791;
    top: -100px;
    left: -90px;
  }

  .shape1 {
    top: 80px;
    left: -92px;
  }

  .shape2 {
    right: -72px;
    bottom: -26px;
  }

  .round {
    width: 90px;
    height: 90px;
    border: 10px solid #ecc5ab;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    right: -48px;
  }
}

.content {
  flex: 1;
  .sub-title {
    @include sub-title;
    margin-bottom: 10px;

    span {
      color: $main-page-text;
      font-weight: 500;
    }
  }

  .title {
    @include main-title;
    font-size: 48px;
    line-height: 1.4;
    margin-bottom: 10px;

    span {
      @include green-title;
    }
  }

  .content-text {
    font-size: 18px;
    color: $main-gray;
    font-weight: 200;
    margin-bottom: 70px;
  }

  .link {
    a {
      text-decoration: none;
      position: relative;
      color: $main-green;
      font-weight: 600;
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
        background-color: $main-green;
        transition: width 0.8s ease-in-out, left 0.4s ease-in-out;
      }

      &:hover {
        &::after {
          width: 100%;
          left: 0;
        }
      }
      // linea verde in uscita
      &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: -1px;
        width: 100%;
        height: 1px;
        background-color: lightgray;
        transition: width 0.3s ease-in-out, left 0.4s ease-in-out;
      }

      &:hover {
        &::before {
          width: 0;
          right: 0;
        }
      }
    }
  }
}
</style>
