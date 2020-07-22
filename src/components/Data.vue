<template>
  <el-card class="box-card">
    <div class="CardTitle">
      <p>ここタイトル</p>
    </div>
    <div class="CardContent">
      <p>ここ数値</p>
    </div>
  </el-card>
</template>

<script></script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

.CardTitle {
  background-color: rgba(137, 43, 226, 0.26);
}

.CardTitle p {
  margin: 0 0 10px;
  font-size: 25px;
  text-decoration: underline;
  text-decoration-color: #ae00ff;
}

.CardContent {
  background-color: rgba(34, 139, 34, 0.425);
}

.CardContent p {
  margin: 0;
  padding: 15px;
  font-size: 40px;
}

.box-card {
  margin: 50px 100px;
}

@media screen and (max-width: 800px) {
  .box-card {
    margin: 20px 10px;
  }
}
</style>
