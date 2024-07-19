<script>
export default {
  name: "CourseNewsLetterSection",
  methods: {
    handleMouseMove(event) {
      // con client pprendiamo le coordinate del mouse
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      this.updateShapePositions();
    },
    updateShapePositions() {
      // Seleziona tutti gli elementi con la classe 'shape'
      const shapes = document.querySelectorAll(".shape");

      // Itera su ciascun elemento 'shape'
      shapes.forEach((shape, index) => {
        // Calcola gli offset di spostamento basati sull'indice dell'elemento
        const offsetX = 50;
        const offsetY = 50;
        // Aggiorna lo stile di trasformazione dell'elemento
        shape.style.transform = `translate(${this.mouseX / offsetX}px, ${
          this.mouseY / offsetY
        }px)`;
      });
    },
  },
};
</script>

<template>
  <div class="container" @mousemove="handleMouseMove">
    <!-- decoration img -->
    <img class="shape shape0" src="/Immagini/maxcoach-shape-02.png" alt="" />
    <img class="shape shape1" src="/Immagini/maxcoach-shape-09.png" alt="" />
    <div class="shape round"></div>

    <!-- ******************* -->
    <div class="title">
      Subscribe
      <span>Newsletters</span>
    </div>
    <div class="text">
      Enter your email address to register to our newsletter subscription
      delivered on a regular basis!
    </div>
    <div class="input-section">
      <input type="text" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/mixins" as *;
@use "/src/style/partials/variables" as *;

.container {
  position: relative;
  width: 70%;
  margin: 0 auto;
  padding: 100px 0;

  .title {
    @include main-title;
    text-align: center;
    margin-bottom: 20px;

    span {
      @include green-title;
    }
  }

  .text {
    padding: 0 400px;
    text-align: center;
    color: $main-gray;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 50px;
  }

  .input-section {
    display: flex;
    justify-content: center;
    input {
      font-size: 14px;
      border-radius: 5px 0 0 5px;
      height: 50px;
      width: 30%;
      padding: 10px;
      background-color: $bg-lightgray;
      border: none;

      &:focus {
        outline: none; /* Rimuove l'outline predefinito del browser */
        border: 1px solid $main-green; /* Aggiunge un bordo blu, puoi cambiare colore e spessore */
        background-color: #fff;
      }
    }

    button {
      background-color: $main-green;
      height: 50px;
      display: inline-block;
      text-decoration: none;
      border: none;
      font-weight: 500;
      color: #fff;
      padding: 0 30px;
      font-size: 14px;
      border-radius: 0 5px 5px 0;
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background-color: $main-page-text;
      }
    }
  }

  //immagini decorative
  .shape {
    position: absolute;
  }

  .shape0 {
    top: 260px;
    right: 35px;
  }

  .shape1 {
    top: 64px;
    right: 74px;
  }

  .round {
    width: 70px;
    height: 70px;
    border: 7px solid #8fd6ca;
    border-radius: 50%;
    position: absolute;
    top: 115px;
    left: 105px;
  }
}
</style>
