<script>
export default {
  name: "Steps",
  data() {
    return {
      steps: [
        {
          title: "BROADENING",
          image: "/Immagini/start-here-timeline-photo-01.jpg",
          subtitle: "#1 Career advancement and hobbies",
          description:
            "Studying online gives you more flexibility. You can work and fit your work schedule around your coursework more easily; even more so if you are taking an asynchronous class: an online class where you can study and interact with your instructor and fellow classmates at your own pace.",
        },
        {
          title: "SCHEDULING",
          image: "/Immagini/start-here-timeline-photo-02.jpg",
          subtitle: "#2 Flexible schedule & environment",
          description:
            "Taking an online course also means that you don’t have to commute to class, which means less time spent on the bus and more study time sitting on your couch, the sound of a crackling fireplace in the background. You no longer have to worry about missing an important class!",
        },
        {
          title: "SELF-DISCIPLINE",
          image: "/Immagini/start-here-timeline-photo-03.jpg",
          subtitle: "#3 Self-discipline & responsibility",
          description:
            "Who says that having to be more self-disciplined is a disadvantage? It is true that studying online requires more time-management skills, because you will spend a lot of time on your own without someone physically close to keep you focused on deadlines.",
        },
        {
          title: "INVESTMENT",
          image: "/Immagini/start-here-timeline-photo-04.jpg",
          subtitle: "#4 Smart investment into future",
          description:
            "Studying online means that you pay the tuition fee, possibly book supplies, an online application fee, and few other items. You don’t, however, incur the costs of housing (which can range up to $12,000 per year) and transportation, which translates to lower debts and more savings.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="central-title">
    <div class="small-title">FOUR MAJOR STEPS TO SUCCESS</div>
    <div class="big-title">
      Best chances for expanding your success to the max
    </div>
  </div>
  <div
    v-for="(step, index) in steps"
    :key="index"
    :class="['row', { reverse: index % 2 !== 0 }]"
  >
    <div class="title-image box">
      <div class="inner-title-image">
        <h3 class="title">
          {{ step.title }}
        </h3>
      </div>
    </div>
    <div class="description box">Descrizione</div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/variables" as *;

.central-title {
  width: 40%;
  margin: 0 auto;
  padding-top: 50px;

  .small-title {
    letter-spacing: 0.2rem;
    text-align: center;
  }

  .big-title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.row {
  width: 80%;
  margin: 0 auto;
  display: flex;
  //debug
  border: 1px solid black;
  min-height: 400px;
}

.box {
  flex-basis: 50%;

  .title {
    text-align: end;
  }
}

.row.reverse {
  flex-direction: row-reverse;

  .title {
    text-align: left;
  }
}
</style>
