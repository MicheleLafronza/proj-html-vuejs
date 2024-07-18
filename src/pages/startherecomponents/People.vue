<script>
export default {
  name: "People",
  data() {
    return {
      people: [
        {
          image: "/Immagini/start-here-gallery-image-01.jpg",
          person: "Lonnie Marks",
          role: "Tutor",
        },
        {
          image: "/Immagini/start-here-gallery-image-02.jpg",
          person: "Britney Salker",
          role: "Educator",
        },
        {
          image: "/Immagini/start-here-gallery-image-03.jpg",
          person: "Bronnies Walz",
          role: "Alumnis",
        },
        {
          image: "/Immagini/start-here-gallery-image-04.jpg",
          person: "Mia Paulo",
          role: "Writer",
        },
        {
          image: "/Immagini/start-here-gallery-image-05.jpg",
          person: "Lina Esthers",
          role: "Author",
        },
        {
          image: "/Immagini/start-here-gallery-image-06.jpg",
          person: "Lorean McPhils",
          role: "Designer",
        },
        {
          image: "/Immagini/start-here-gallery-image-07.jpg",
          person: "Anna Muray",
          role: "Writer",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="people-container">
    <div
      v-for="(ppl, index) in people"
      :key="index"
      :class="['card', { last: index === 5 || index === 6 }]"
    >
      <img :src="ppl.image" alt="" />
      <div class="inner-card">
        <h3 class="card-name">{{ ppl.person }}</h3>
        <p class="card-role">{{ ppl.role }}</p>
      </div>
    </div>
    <!-- <img
      v-for="(ppl, index) in people"
      :key="index"
      :class="['card', { last: index === 5 || index === 6 }]"
      :src="ppl.image"
      alt=""
    /> -->
  </section>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/variables" as *;

.people-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .card {
    flex-grow: 1;
    position: relative;
    display: flex;

    img {
      flex-grow: 1;
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }

    .inner-card {
      position: absolute;
      width: 100%;
      height: 100%;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: rgba($color: #000000, $alpha: 0.5);
      transition: all 0.4s ease;
      color: white;

      .card-name {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
      }

      .card-role {
        font-size: 1.1rem;
        padding-top: 10px;
      }
    }

    &:hover .inner-card {
      display: flex;
      cursor: pointer;
    }
  }

  .last {
    flex-grow: 0;
    flex-basis: 30%;
  }
}
</style>
