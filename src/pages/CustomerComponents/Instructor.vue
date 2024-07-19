<script>
export default {
  name: "Instructor",
};
</script>

<template>
  <div class="container">
    <img
      src="/public/Immagini/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
      alt=""
    />
    <div class="info">
      <h2>Maggie Strickland</h2>
      <span>/Advanced Educator</span>
      <p>
        Maggie is a brilliant educator, whose life was spent for computer
        science and love of nature. Being a female, she encountered a lot of
        obstacles and was forbidden to work in this field by her family. With a
        true spirit and talented gift, she was able to succeed and set an
        example for others.
      </p>
      <div>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/partials/_variables.scss";

.container {
  display: flex;
  margin: 4rem 1rem;

  img {
    width: 20rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10rem;
  }

  h2 {
    color: $seondary-page-text;
    padding-bottom: 2rem;
  }

  p {
    padding: 2rem 0;
  }

  i {
    padding: 0 15px;
  }
}
</style>
