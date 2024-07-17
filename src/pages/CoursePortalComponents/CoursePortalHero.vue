<script>
export default {
  name: "CoursePortalHero",
};
</script>

<template>
  <div class="container">
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
        <a href="#">icon Download free guide</a>
      </div>
      <div class="questions">
        Have questions? <a href="#">Get Free Sample arrow</a>
      </div>
    </div>

    <!-- sezione destra -->
    <div class="right-img-section">
      <div class="main-img">
        <img
          src="../../../public/Immagini/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
          alt=""
        />
      </div>
      <img
        class="shape shape8"
        src="../../../public/Immagini/maxcoach-shape-08.png"
        alt=""
      />
      <img
        class="shape shape8-1"
        src="../../../public/Immagini/maxcoach-shape-08.png"
        alt=""
      />
      <img
        class="shape shape7"
        src="../../../public/Immagini/maxcoach-shape-07-150x150.png"
        alt=""
      />
      <img
        class="shape shape2"
        src="../../../public/Immagini/maxcoach-shape-02.png"
        alt=""
      />
      <div class="round"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variables" as *;

.container {
  width: 70%;
  margin: 60px auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
      color: $main-green;
      padding: 3px 0;
      font-weight: 600;
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
