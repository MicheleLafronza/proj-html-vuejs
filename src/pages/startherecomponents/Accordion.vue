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
          open: false,
        },
        {
          question: "How do I customize my account?",
          answer:
            "In order to customize your accounts information, just log in with the provided passcode and change the info. ",
          open: false,
        },
        {
          question: "How do you process my information?",
          answer:
            "Your data will be kept private and secure on our database. No illegal use without prior notice.",
          open: false,
        },
      ],
      accordionCardsRight: [
        {
          question: "How do I contact support?",
          answer:
            "You can contact our help center or any contact method (phone call, email or appear at our office) to get help.",
          open: false,
        },
        {
          question: "How to cancel my membership?",
          answer:
            "You just need to submit a membership termination request, well proceed within 24 hours.",
          open: false,
        },
        {
          question: "How can I get a discount?",
          answer:
            "Learners can get a discount by coupon or voucher. If you have one, fill in the code box before making any payment.",
          open: false,
        },
      ],
    };
  },
  methods: {
    closeAllLeftCards() {
      this.accordionCardsLeft.forEach((card) => {
        card.open = false;
      });
    },
    closeAllRightCards() {
      this.accordionCardsRight.forEach((card) => {
        card.open = false;
      });
    },
    openCardLeft(index) {
      const isOpen = this.accordionCardsLeft[index].open;
      this.closeAllLeftCards();
      this.accordionCardsLeft[index].open = !isOpen;
    },
    openCardRight(index) {
      const isOpen = this.accordionCardsRight[index].open;
      this.closeAllRightCards();
      this.accordionCardsRight[index].open = !isOpen;
    },
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
        class="out-accordion"
        @click="openCardLeft(index)"
      >
        <div class="card">
          <div class="question">{{ leftCard.question }}</div>
          <span v-if="leftCard.open === false"
            ><i class="fa-solid fa-circle-plus"></i
          ></span>
          <span v-else><i class="fa-solid fa-circle-minus"></i></span>
        </div>
        <Transition>
          <div class="answer" v-show="leftCard.open">
            {{ leftCard.answer }}
          </div>
        </Transition>
      </div>
    </div>
    <div class="inner-accordion right">
      <div
        v-for="(rightCard, index) in accordionCardsRight"
        :key="index"
        class="out-accordion"
        @click="openCardRight(index)"
      >
        <div class="card">
          <div class="question">{{ rightCard.question }}</div>
          <span v-if="rightCard.open === false"
            ><i class="fa-solid fa-circle-plus"></i
          ></span>
          <span v-else><i class="fa-solid fa-circle-minus"></i></span>
        </div>
        <Transition>
          <div class="answer" v-show="rightCard.open">
            {{ rightCard.answer }}
          </div>
        </Transition>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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

    margin-right: 20px;

    .out-accordion {
      margin-bottom: 20px;

      .card {
        display: flex;
        justify-content: space-between;
        padding: 20px 16px;
        color: $main-green;
        font-weight: 600;
        border: 1px solid rgba($color: #000000, $alpha: 0.25);
        border-radius: 10px;
        // margin-bottom: 30px;
        transition: all 0.3 ease;

        &:hover {
          background-color: $main-green;
          color: white;
          cursor: pointer;
        }

        .fa-circle-plus,
        .fa-circle-minus {
          font-size: 1.5rem;
        }
      }
      .answer {
        padding: 20px;
        font-size: 14px;
        font-weight: 300;
        color: $main-gray;
        box-shadow: 10px 10px 20px grey;
        border-radius: 0px 0px 10px 10px;
      }
    }
  }
}
</style>
