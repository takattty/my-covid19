<template>
  <div class="content">
    <div class="title">
      <h1>全国のCOVID-19データ</h1>
    </div>
    <router-view />
  </div>
</template>

<style>
.title {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0606;
  font-size: 30px;
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
