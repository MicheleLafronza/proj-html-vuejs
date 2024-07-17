<script>
export default {
  name: "CoursePortalHero",
};
</script>

<template>
  <div class="container">
    <div class="hero">
      <!-- sezione sinistra dell'hero -->
      <div class="left-content-section">
        <!-- titolo e sottotitolo -->
        <div class="title-subtitle">
          <h1>Distant learning for further expansion</h1>
          <p>
            Learning is a life-long journey that in fact we never find the
            terminate stop. Stop searching, enjoy the process.
          </p>
        </div>

        <div class="hero-btn">
          <a href="#"
            ><i class="fa-solid fa-download"></i> Download free guide</a
          >
        </div>
        <div class="questions">
          Have questions?
          <a href="#"
            >Get Free Sample <i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
      </div>

      <!-- sezione destra -->
      <div class="right-img-section">
        <div class="main-img">
          <img
            src="/Immagini/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
            alt=""
          />
        </div>
        <img
          class="shape shape8"
          src="/Immagini/maxcoach-shape-08.png"
          alt=""
        />
        <img
          class="shape shape8-1"
          src="/Immagini/maxcoach-shape-08.png"
          alt=""
        />
        <img
          class="shape shape7"
          src="/Immagini/maxcoach-shape-07-150x150.png"
          alt=""
        />
        <img
          class="shape shape2"
          src="/Immagini/maxcoach-shape-02.png"
          alt=""
        />
        <div class="round"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;

.container {
  width: 70%;
  margin: 60px auto;
}

// HERO SECTION
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
}

// left content
.left-content-section {
  width: 600px;
  .title-subtitle {
    width: 500px;
    h1 {
      color: $main-page-text;
      font-size: 42px;
      font-weight: 600;
      line-height: 1.2;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      color: $secondary-text;
      font-weight: 300;
      margin-bottom: 30px;
    }
  }
  .hero-btn {
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

  .questions {
    font-size: 14px;
    color: $secondary-text;
    font-weight: 300;
    margin-bottom: 30px;

    a {
      text-decoration: none;
      position: relative;
      color: $main-green;
      font-weight: 600;

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

// right content
.right-img-section {
  width: 570px;
  position: relative;
  .main-img {
    img {
      border-radius: 50%;
    }
  }
  // background shapes
  .shape {
    position: absolute;
  }

  .shape8 {
    top: 40px;
    left: -50px;
    z-index: -1;
  }

  .shape8-1 {
    top: 185px;
    left: -50px;
    z-index: -1;
  }

  .shape7 {
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .shape2 {
    top: 70px;
    right: -40px;
  }

  .round {
    width: 70px;
    height: 70px;
    border: 8px solid #ecc5ab;
    border-radius: 50%;

    position: absolute;
    bottom: 20px;
    left: -30px;
  }
}
</style>
