<template>
    <div id="app">
        <Navigation></Navigation>
        <HomeHeader></HomeHeader>
        <Biography></Biography>
        <Skills></Skills>
        <Experience></Experience>
        <Portfolio></Portfolio>
        <Education></Education>
        <HomeFooter></HomeFooter>
    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import HomeHeader from "./components/HomeHeader";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import HomeFooter from "./components/HomeFooter";

export default {
  name: "app",
  components: {
    Navigation,
    Biography,
    HomeHeader,
    Skills,
    Experience,
    Portfolio,
    Education,
    HomeFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header,
section {
  padding: 6rem 0;
}

.mt-80 {
  margin-top: 80px;
}

h2.title {
  font-size: 2.5rem;
  color: #2A62A8;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 2rem;
}

a {
  color: #2A62A8;
  text-decoration: none;
}
</style>
