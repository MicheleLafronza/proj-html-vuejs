<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="f left">
        <h4>Address</h4>
        <ul>
          <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
          <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
          <li>support@maxcoach.com</li>
          <li class="footer-icons">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
      <div class="f right">
        <div class="links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Start here</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div class="links no-title">
          <ul>
            <li><a href="#">Success stories</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div class="links">
          <h4>Information</h4>
          <ul>
            <li><a href="#">Membership</a></li>
            <li><a href="#">Purchase guide</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Terms of service</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="trademark">2020 Maxcoach. All Rights Reserved</div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

footer {
  background-color: $carousel-bg;

  h4 {
    font-weight: 600;
  }

  .footer-container {
    margin: 0 auto;
    width: 70%;
    display: flex;
    padding-top: 50px;

    .f {
      flex-basis: 50%;

      ul {
        list-style-type: none;

        li {
          font-size: 14px;
          font-weight: 300;
          padding-top: 15px;
          color: $main-gray;
        }
      }
    }
  }
}

.fa-brands {
  color: $main-gray;
  font-size: 1.5rem;
  padding-top: 20px;
}

.footer-icons {
  display: flex;
  gap: 40px;
}

.right {
  display: flex;
  gap: 40px;

  .no-title {
    padding-top: 24px;
  }
}

a {
  text-decoration: none;
  color: $main-gray;
}

.trademark {
  color: $main-gray;
  font-size: 0.7rem;
  font-weight: 300;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
  &::before {
    content: "\00A9";
  }
}
</style>
