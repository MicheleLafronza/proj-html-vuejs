<script>
export default {
  name: "CourseBlog",
};
</script>

<template>
  <div class="main">
    <div class="container">
      <div class="content-section">
        <div class="sub-title">ENJOYABLE INSIGHTS</div>
        <div class="title">Most Viewed <span>Best Blogs</span></div>
        <ul class="links">
          <li>
            <a href="#"
              ><i class="fa-solid fa-arrow-right"></i> Become a Better Blogger:
              Content Planning</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-arrow-right"></i> Promoting Your Online
              Business on Pinterest</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-arrow-right"></i> Gamification and
              Game-Based Learning</a
            >
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-arrow-right"></i> Designing an Online
              Course from Expert’s Perspective
            </a>
          </li>
          <li>
            <a href="#"
              ><i class="fa-solid fa-arrow-right"></i> Why Online Courses Are
              the Future of Education</a
            >
          </li>
        </ul>
      </div>
      <div class="cards">
        <!-- card 1 -->
        <div class="card">
          <div class="card-img">
            <a href="#">
              <img
                src="/Immagini/home-personal-finance-blog-02-480x352.jpg"
                alt="img"
              />
            </a>
          </div>
          <div class="card-content">
            <div class="card-sub-title">
              <a href="#">Business</a>
            </div>
            <div class="card-title">
              <a href="#"
                >Ten Benefits Of Rentals That May Change Your Perspective</a
              >
            </div>
            <div class="card-info">
              <div class="date">
                <i class="fa-regular fa-calendar"></i> Dec 28, 2020
              </div>
              <div class="views">
                <i class="fa-solid fa-eye"></i> 3,327 views
              </div>
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="card">
          <div class="card-img">
            <a href="#">
              <img
                src="/Immagini/home-personal-finance-blog-03-480x352.jpg"
                alt="img"
              />
            </a>
          </div>
          <div class="card-content">
            <div class="card-sub-title">
              <a href="#">Business</a>
            </div>
            <div class="card-title">
              <a href="#">
                Ten Benefits Of Rentals That May Change Your Perspective
              </a>
            </div>
            <div class="card-info">
              <div class="date">
                <i class="fa-regular fa-calendar"></i> Dec 28, 2020
              </div>
              <div class="views">
                <i class="fa-solid fa-eye"></i> 3,327 views
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/style/partials/mixins" as *;
@use "/src/style/partials/variables" as *;

.main {
  background-color: $most-viewed-bg;
  padding: 100px 0;
}

.container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.content-section {
  @include sub-title;
  width: 60%;
  margin-right: 30px;
}

.title {
  @include main-title;
  margin-bottom: 25px;
  span {
    @include green-title;
  }
}

.links {
  li {
    list-style: none;
    margin-bottom: 25px;
    a {
      color: $main-page-text;
      font-size: 14px;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        color: $main-green;
      }

      .fa-arrow-right {
        margin-right: 8px;
      }
    }
  }
}

.cards {
  display: flex;
  gap: 60px;
  .card {
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.144);

    overflow: hidden;
    .card-img {
      a {
        img {
          max-width: 100%;
          border-radius: 15px 15px 0 0;
          transition: all 1s;

          &:hover {
            scale: 1.05;
          }
        }
      }
    }
  }
  .card-content {
    padding: 30px;
  }

  .card-sub-title {
    a {
      @include sub-title;
      text-decoration: none;
      letter-spacing: 2px;
      transition: color 0.4s;

      &:hover {
        color: $main-green;
      }
    }
  }

  .card-title {
    margin-bottom: 30px;
    a {
      @include main-title;
      font-size: 20px;
      text-decoration: none;
      transition: color 0.4s;

      &:hover {
        color: $main-green;
      }
    }
  }

  .card-info {
    display: flex;
    gap: 20px;

    .date,
    .views {
      font-size: 14px;
      color: $main-gray;
      font-weight: 300;
    }
  }
}
</style>
