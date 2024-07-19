<script>
export default {
  name: "CardCourse",
};
</script>

<template>
  <div class="cardCourse">
    <div class="cardRow">
      <div>
        <i class="fa-solid fa-money-bill-1-wave"></i>
        <h3>Price</h3>
      </div>
      <span class="price">Free</span>
    </div>
    <div class="cardRow">
      <div>
        <i class="fa-solid fa-chalkboard-user"></i>
        <h3>Instructor</h3>
      </div>
      <span>Maggie Strickland</span>
    </div>
    <div class="cardRow">
      <div>
        <i class="fa-regular fa-clock"></i>
        <h3>Lectures</h3>
      </div>
      <span>15 weeks</span>
    </div>
    <div class="cardRow">
      <div>
        <i class="fa-regular fa-user"></i>
        <h3>Enrolled</h3>
      </div>
      <span>968 students</span>
    </div>
    <div class="cardRow">
      <div>
        <i class="fa-solid fa-language"></i>
        <h3>Language</h3>
      </div>
      <span>English</span>
    </div>
    <div class="cardRow">
      <div>
        <i class="fa-regular fa-calendar"></i>
        <h3>Deadline</h3>
      </div>
      <span>05 Jan 2019</span>
    </div>
    <button class="startNow">Start Now</button>
    <div class="shareCourse">
      <a href=""
        >Share this course
        <i class="fa-solid fa-share-nodes"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/partials/_variables.scss";

.cardCourse {
  width: 22rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: top 0.3s;
}

.cardRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 1.2rem 0;
  border-bottom: 1px solid #eee;
  color: $seondary-page-text;

  .price {
    font-size: 25px;
    color: $main-green;
    font-weight: 700;
  }

  span {
    font-weight: 300;
  }

  div {
    display: flex;
    align-items: center;

    h3 {
      margin: 0 8px;
    }
  }
}

.startNow {
  width: 100%;
  padding: 20px;
  background-color: $main-green;
  color: $white;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms ease;
  font-weight: 600;

  &:hover {
    background-color: #3f3a64;
  }
}

.shareCourse {
  margin-top: 16px;
  text-align: center;
}

.shareCourse a {
  color: $main-green;
  text-decoration: none;
}
</style>
