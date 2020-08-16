<template>
  <div class="eachData">
    <el-card class="box-card">
      <div class="CardTitle">
        <p>日にち</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.date }}</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="CardTitle">
        <p>PCR検査人数</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.pcr }}人</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="CardTitle">
        <p>入院者数</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.hospitalize }}人</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="CardTitle">
        <p>陽性者数</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.positive }}人</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="CardTitle">
        <p>重症者数</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.severe }}人</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="CardTitle">
        <p>退院者数</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.discharge }}人</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="CardTitle">
        <p>死亡者数</p>
      </div>
      <div class="CardContent">
        <p>{{ totalData.death }}人</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import Store from "../Store";
export default {
  data() {
    return {
      totalData: Store.state.apiData
    };
  }
};
</script>

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
