<script>
export default {
  name: "PageHeader",

  data() {
    return {
      LinksMainHome: [
        {
          name: "MaxCoach Education",
          status: "HOT",
        },
        {
          name: "Course Portal",
          active: true,
          status: "HOT",
        },
        {
          name: "Distant Learning",
        },
        {
          name: "Multimedia Pedagogy",
        },
        {
          name: "Modern Schooling",
        },
        {
          name: "Remote Training",
        },
        {
          name: "Health Coaching",
        },
        {
          name: "Gym Coaching",
        },
        {
          name: "Business",
        },
        {
          name: "Artist",
        },
        {
          name: "Kitchen Coach",
        },
        {
          name: "Motivation",
        },
        {
          name: "Dancing",
        },
        {
          name: "Guitar",
        },
        {
          name: "Yoga",
        },
        {
          name: "Photography",
        },
        {
          name: "Personal Finance",
        },
        {
          name: "Sales Coaching",
          status: "NEW",
        },
        {
          name: "Mental Therapy",
          status: "NEW",
        },
      ],
      LinksMainPages: [
        {
          name: "Start Here",
          active: true,
        },
        {
          name: "Success Story",
        },
        {
          name: "About us 01",
        },
        {
          name: "About us 02",
        },
        {
          name: "About us 03",
        },
        {
          name: "Contact me",
        },
        {
          name: "Contact us",
        },
        {
          name: "Purchase Guide",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms of Service",
        },
      ],
      LinksMainCourses: [
        {
          name: "Courses Grid 01",
          active: true,
          href: "/customer",
        },
        {
          name: "Courses Grid 02",
        },
        {
          name: "Courses Grid 03",
        },
        {
          name: "Membership Levels",
        },
        {
          name: "Become a Teacher",
        },
        {
          name: "Profile",
        },
        {
          name: "Checkout",
        },
        {
          name: "Single Layout",
        },
      ],
      LinksMainFeatures: [
        {
          name: "Events",
        },
        {
          name: "Zoom Meetings",
        },
      ],
      LinksMainBlog: [
        {
          name: "Blog Grid",
        },
        {
          name: "Blog Masonry",
        },
        {
          name: "Blog Classis",
        },
        {
          name: "Blog List",
        },
      ],
      LinksMainShop: [
        {
          name: "Shop Left Sidebar",
        },
        {
          name: "Shop Right Sidebar",
        },
        {
          name: "Cart",
        },
        {
          name: "Wishlist",
        },
        {
          name: "Single Product",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <img src="/Immagini/dark-logo.png" alt="" />
    <ul class="headerMainLinks">
      <li class="Home">
        <a class="tag" href="">Home</a>
        <ul class="LinksHome">
          <li v-for="element in LinksMainHome">
            <router-link v-if="element.active" :to="{ name: 'CoursePortal' }">
              {{ element.name }}
            </router-link>
            <a v-else class="links" :href="element.href">{{ element.name }}</a>
            <span v-if="element.status === 'HOT'" class="statusHot">
              {{ element.status }}</span
            >
            <span v-else-if="element.status === 'NEW'" class="statusNew">
              {{ element.status }}
            </span>
          </li>
        </ul>
      </li>
      <li class="Pages">
        <a href="" class="tag">Pages</a>
        <ul class="LinksOther">
          <li v-for="element in LinksMainPages">
            <router-link v-if="element.active" :to="{ name: 'StartHere' }">
              {{ element.name }}
            </router-link>
            <a v-else class="links" :href="element.href">{{ element.name }}</a>
          </li>
        </ul>
      </li>
      <li class="Courses">
        <a href="" class="tag">Courses</a>
        <ul class="LinksOther">
          <li v-for="element in LinksMainCourses">
            <router-link v-if="element.active" :to="{ name: 'Customer' }">
              {{ element.name }}
            </router-link>
            <a v-else class="links" :href="element.href">{{ element.name }}</a>
          </li>
        </ul>
      </li>
      <li class="Features">
        <a href="" class="tag">Features</a>
        <ul class="LinksOther">
          <li v-for="element in LinksMainFeatures">
            <a class="links" href="">{{ element.name }}</a>
          </li>
        </ul>
      </li>
      <li class="Blog">
        <a href="" class="tag">Blog</a>
        <ul class="LinksOther">
          <li v-for="element in LinksMainBlog">
            <a class="links" href="">{{ element.name }}</a>
          </li>
        </ul>
      </li>
      <li class="Shop">
        <a href="" class="tag">Shop</a>
        <ul class="LinksOther">
          <li v-for="element in LinksMainShop">
            <a class="links" href="">{{ element.name }}</a>
          </li>
        </ul>
      </li>
    </ul>

    <!-- <img class="icons" src="" alt="" /> -->
    <div class="search">
      <input type="text" name="" id="" placeholder="Search" />
      <!-- <img class="icons" src="" alt="" /> -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../style/partials/_variables.scss";

header {
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 50;
  align-items: center;
  justify-content: center;
  background-color: $white;
  filter: drop-shadow(0 -2px 5px $main-gray);
  height: 5rem;

  img {
    width: 158px;
    margin-right: 5rem;
  }

  .headerMainLinks {
    display: flex;
    list-style: none;
    li {
      position: relative;
      padding: 0 1.5rem;

      .tag {
        text-decoration: none;
        color: $seondary-page-text;
        position: relative;
        display: inline-block;
        transition: color 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-color: $main-green;
          transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
        }

        &:hover {
          color: $main-green;

          &::after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }

  .Home,
  .Pages,
  .Courses,
  .Features,
  .Blog,
  .Shop {
    position: relative;
  }

  .LinksHome {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    padding-top: 20px;
    width: 52rem;
    height: 28rem;
    left: -15rem;
    top: 110%;
    z-index: 2;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 450ms ease;
    background-color: $white;
    border-radius: 5px;
    border-bottom: 5px solid $main-green;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0 20px;
      width: 18rem;
      height: calc(24rem / 10);

      a {
        color: $seondary-page-text;
        text-decoration: none;
        &:hover {
          transition: 200ms;
          color: $main-green;
        }
      }

      .statusHot {
        margin: 0 10px;
        padding: 1px 7px;
        background-image: linear-gradient(45deg, #fe378c 0%, #fe5b34 100%);
        border-radius: 3px;
        color: white;
      }

      .statusNew {
        margin: 0 10px;
        padding: 1px 7px;
        background-color: $main-green;
        border-radius: 3px;
        color: white;
      }
    }
  }

  .LinksOther {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    padding-top: 30px;
    width: 13rem;
    left: 0;
    top: 110%;
    z-index: 999;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 450ms ease;
    background-color: $white;
    border-radius: 5px;
    border-bottom: 5px solid $main-green;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0 20px;
      width: 13rem;
      height: 2.5rem;

      a {
        color: $seondary-page-text;
        text-decoration: none;
        &:hover {
          transition: 200ms;
          color: $main-green;
        }
      }
    }
  }

  .Home:hover > .LinksHome,
  .Home > .LinksHome:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .Pages:hover > .LinksOther,
  .Pages > .LinksOther:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .Courses:hover > .LinksOther,
  .Courses > .LinksOther:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .Features:hover > .LinksOther,
  .Features > .LinksOther:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .Blog:hover > .LinksOther,
  .Blog > .LinksOther:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .Shop:hover > .LinksOther,
  .Shop > .LinksOther:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .search input {
    background-color: $bg-lightgray;
    border-style: none;
    height: 2.5rem;
    border-radius: 5px;
    padding: 15px;

    &:focus {
      transition: 200ms;
      background-color: $white;
      outline: 1px solid $main-green;
    }
  }
}
</style>
