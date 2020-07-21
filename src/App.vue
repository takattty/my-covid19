<template>
  <div class="content">
    <div class="title">
      <h1>全国の<br />COVID-19データ</h1>
    </div>
    <div class="body">
      <Body></Body>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
    <!-- ここにbodyの要素を入れたい-->
  </div>
</template>

<script>
import Body from "@/views/Body.vue";
import Footer from "@/views/Footer.vue";

export default {
  components: {
    Body,
    Footer
  }
};
</script>

<style>
.content {
  text-align: center;
  border-bottom-color: solid;
}

.body {
  margin: 0;
  background-color: aliceblue;
  padding: 30px 0;
}

.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0606;
  font-size: 30px;
  border-bottom: 1px solid rgba(161, 161, 161, 0.459);
}

@media screen and (max-width: 700px) {
  .body {
    padding: 0;
  }
  .title {
    font-size: 15px;
    margin-bottom: 10px;
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
