<script>
import Carousel from "./startherecomponents/Carousel.vue";
import Steps from "./startherecomponents/Steps.vue";

export default {
  name: "StartHere",
  components: {
    Carousel,
    Steps,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <main>
    <Carousel />
    <Steps />
    <section class="get-started">
      <div class="gt-title">
        GET YOURSELF A <span style="font-weight: 700">MAXCOACH</span> ID?
      </div>
      <p class="gt-p">
        Take your interest and register an online class today to enjoy life
        fully
      </p>

      <button class="gt-button">Get started for free</button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

// regole main
main {
  padding-top: 80px;
}

// regole get started
.get-started {
  width: 50%;
  margin: 0 auto;
  padding-top: 90px;

  .gt-title {
    text-align: center;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    color: $main-page-text;
  }

  .gt-p {
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    padding-top: 20px;
  }

  .gt-button {
    width: 40%;
    height: 50px;
    display: block;
    margin: 30px auto;
    padding: 10px;
    background-color: $main-green;
    color: white;
    font-weight: 700;
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      background-color: cornflowerblue;
      cursor: pointer;
    }
  }
}
</style>
