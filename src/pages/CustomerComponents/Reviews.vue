<script>
export default {
  name: "Reviews",
};
</script>

<template>
  <h2>Reviews</h2>
  <div class="contRating">
    <div class="aveRating">
      <span>Average Rating</span>
      <div class="cardAve">
        <h3>4.50</h3>
        <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half"></i>
        </div>
        <span>(2 ratings)</span>
      </div>
    </div>
    <div class="detRating">
      <span class="tit">Detailed Rating</span>
      <div>
        <div class="row">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div class="ratBar"><div class="effBar"></div></div>
          <span>1</span>
        </div>
        <div class="row">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="ratBar"><div class="effBar"></div></div>
          <span>1</span>
        </div>
        <div class="row">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="ratBar"></div>
          <span>0</span>
        </div>
        <div class="row">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="ratBar"></div>
          <span>0</span>
        </div>
        <div class="row">
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div class="ratBar"></div>
          <span>0</span>
        </div>
      </div>
    </div>
  </div>
  <div class="contRecen">
    <div class="rowRecen">
      <img
        src="https://secure.gravatar.com/avatar/8a439149f9564bd9da9e4c7fbd776826?s=96&d=mm&r=g"
        alt=""
      />
      <div class="infoRat">
        <div class="titleRat">
          <h3>EDNAWATSON</h3>
          <div>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
        <div class="pRat">
          <h4>Cover all my needs</h4>
          <p>
            The course identify things we want to change and then figure out the
            things that need to be done to create the desired outcome. The
            course helped me in clearly define problems and generate a wider
            variety of quality solutions. Support more structures analysis of
            options leading to better decisions.
          </p>
        </div>
      </div>
    </div>
    <div class="rowRecen">
      <img
        src="https://maxcoach-4437.kxcdn.com/main/wp-content/up…ss-profile/1/1c2c9a0fac3cd923d80b4ea64a0806ce.jpg"
        alt=""
      />
      <div class="infoRat">
        <div class="titleRat">
          <h3>OWEN CHRIST</h3>
          <div>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
            <i class="fa-solid fa-star color"></i>
          </div>
        </div>
        <div class="pRat">
          <h4>Engaging & Fun</h4>
          <p>
            This is the third course I attend from you, and I absolutely loved
            all of them. Especially this one on leadership. Your method of
            explaining the concepts, fun, engaging and with real-world examples,
            is excellent. This course will help me a lot in my job, my career,
            and life in general, and I thank you for that. Thank you for
            improving the lives of many people with engaging and in-depth
            courses.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../style/partials/_variables.scss";

h2 {
  color: $seondary-page-text;
}

.contRating {
  display: flex;
  margin: 2rem 0;

  span {
    color: $seondary-page-text;
    font-weight: 300;
  }

  i {
    color: #f6b500;
    padding: 0 2px;
  }
}

.aveRating {
  .cardAve {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13rem;
    height: 13rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 1rem;

    h3 {
      font-size: 50px;
      font-weight: 400;
      color: $main-green;
    }
  }
}

.detRating {
  display: flex;
  flex-direction: column;
  margin: 0 6rem;

  .tit {
    padding-bottom: 2rem;
    color: $seondary-page-text;
  }

  .row {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .ratBar {
      position: relative;
      margin: 0 1rem;
      width: 30rem;
      height: 5px;
      background-color: #eee;
      border-radius: 5px;

      .effBar {
        position: absolute;
        left: 0;
        width: 15rem;
        height: 5px;
        border-radius: 5px;
        background-color: $main-green;
      }
    }
  }
}

.contRecen {
  margin-top: 6rem;
}

.rowRecen {
  width: 100%;
  display: flex;
  color: $seondary-page-text;
  border-bottom: 1px solid #eee;

  .infoRat {
    width: 100%;
  }

  .color {
    color: #f6b500;
  }

  i {
    padding: 0 2px;
  }

  img {
    width: 6rem;
    height: 6rem;
    margin: 0 3rem 0 1rem;
  }

  .titleRat {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pRat {
    font-weight: 300;

    h4 {
      margin-top: 2rem;
    }

    p {
      margin: 1rem 0 3rem 0;
    }
  }
}
</style>
