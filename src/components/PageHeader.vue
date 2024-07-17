<script>
export default {
  name: "PageHeader",

  data() {
    return {
      hoverLinks: [
        {
          name: "Home",
        },
        {
          name: "Pages",
        },
        {
          name: "Courses",
        },
        {
          name: "Features",
        },
        {
          name: "Blog",
        },
        {
          name: "Shop",
        },
      ],
      Links: [
        {
          name: "MaxCoach Education",
          status: "HOT",
        },
        {
          name: "Course Portal",
        },
        {
          name: "Distant Learning",
          status: "HOT",
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
    };
  },
};
</script>

<template>
  <header>
    <img src="../../public/Immagini/dark-logo.png" alt="" />
    <ul>
      <li v-for="element in hoverLinks" class="hoverLinks">
        <a href="">{{ element.name }}</a>
      </li>
    </ul>

    <div class="LinksHome">
      <ul>
        <li v-for="element in Links">
          <a href="">{{ element.name }}</a>
          <span>{{ element.status }}</span>
        </li>
      </ul>
    </div>

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
  align-items: center;
  justify-content: center;
  background-color: $white;
  filter: drop-shadow(0 -2px 5px $main-gray);
  height: 5rem;

  img {
    width: 158px;
    margin-right: 5rem;
  }

  ul {
    display: flex;
    list-style: none;
    li {
      position: relative;
      padding: 0 1.5rem;

      a {
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

  .LinksHome:hover {
  }

  .search input {
    background-color: $bg-lightgray;
    border-style: none;
    height: 2.5rem;
    border-radius: 5px;
    padding: 15px;
  }
}
</style>
