<script>
export default {
  name: "ResultsSection",
  data() {
    return {
      results: [
        {
          title: "Successfully trained",
          number: 1790,
          subTitle: "ENROLLED LEARNERS",
        },
        {
          title: "Proudly Received",
          number: 19,
          subTitle: "COUNTRYWIDE AWARDS",
        },
        {
          title: "Firmly Established",
          number: 24,
          subTitle: "LOCAL BRANCHES",
        },
        {
          title: "Getting Featured on",
          number: 1090,
          subTitle: "BLOG POSTS",
        },
      ],
    };
  },
  // metodo per mandare a capo le due parole del titolo
  methods: {
    formatTitle(title) {
      return title.replace(" ", "\n");
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="(result, index) in results" :key="index">
        <div class="title">{{ formatTitle(result.title) }}</div>
        <div class="number">{{ result.number }}</div>
        <div class="sub-title">{{ result.subTitle }}</div>
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
}

.row {
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .col {
    flex: 1;
    border-left: 0.3px solid rgb(232, 232, 232);
    border-right: 0.3px solid rgb(232, 232, 232);
    align-content: center;
    height: 100%;
    padding: 30px;
    text-align: center;

    .title {
      @include main-title;
      font-size: 24px;
      white-space: pre-wrap;
    }

    .number {
      font-size: 64px;
      font-weight: 700;
      color: $main-green;
    }

    .sub-title {
      @include sub-title;
      font-weight: 500;
    }
  }
}
</style>
