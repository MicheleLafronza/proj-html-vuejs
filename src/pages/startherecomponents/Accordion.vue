<script>
export default {
  name: "Accordion",
  data() {
    return {
      accordionCardsLeft: [
        {
          question: "How to register online?",
          answer:
            "Enrolling in an online class is easy. At MaxCoach, we serve several categories of online learners. Select the student category that you identify with to get started.",
        },
        {
          question: "How do I customize my account?",
          answer:
            "In order to customize your accounts information, just log in with the provided passcode and change the info. ",
        },
        {
          question: "How do you process my information?",
          answer:
            "Your data will be kept private and secure on our database. No illegal use without prior notice.",
        },
      ],
      accordionCardsRight: [
        {
          question: "How do I contact support?",
          answer:
            "You can contact our help center or any contact method (phone call, email or appear at our office) to get help.",
        },
        {
          question: "How to cancel my membership?",
          answer:
            "You just need to submit a membership termination request, well proceed within 24 hours.",
        },
        {
          question: "How can i get a discount?",
          answer:
            "Learners can get a discount by coupon or voucher. If you have one, fill in the code box before making any payment.",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="central-title">
    <div class="small-title">SUCCED WITH MAXCOACH</div>
    <div class="big-title">Frequently asked questions</div>
  </div>
  <div class="accordion">
    <div class="inner-accordion left">
      <div
        v-for="(leftCard, index) in accordionCardsLeft"
        :key="index"
        class="card"
      >
        <div class="question">{{ leftCard.question }}</div>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
    </div>
    <div class="inner-accordion right">
      <div
        v-for="(rightCard, index) in accordionCardsRight"
        :key="index"
        class="card"
      >
        <div class="question">{{ rightCard.question }}</div>
        <span><i class="fa-solid fa-plus"></i></span>
      </div>
    </div>
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

.accordion {
  width: 80%;
  margin: 0 auto;
  display: flex;

  .inner-accordion {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //   debug
    border: 1px solid black;

    .card {
      display: flex;
      justify-content: space-between;
      padding: 10px 8px;
    }
  }
}
</style>
