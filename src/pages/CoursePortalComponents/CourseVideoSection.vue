<script>
export default {
  name: "CourseVideoSection",
};
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- video section -->
      <div class="video">
        <div>
          <img src="/Immagini/home-2-popup-video-poster.jpg" alt="" />
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
          mentoring portal. Seek for some hidden hints of early-bird rewards as
          well.
        </div>
        <div class="link">
          <a href="#"
            >Download free guidebook <i class="fa-solid fa-arrow-right"></i
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
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
}

.content {
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
