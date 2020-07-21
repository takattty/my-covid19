<template>
  <el-card class="BodyContent">
    <div class="Select">
      <Select></Select>
    </div>
    <div class="Data">
      <Data></Data>
      <Data></Data>
      <Data></Data>
      <Data></Data>
      <Data></Data>
      <Data></Data>
      <Data></Data>
    </div>
  </el-card>
</template>

<script>
import Select from "@/components/Select.vue";
import Data from "@/components/Data.vue";

export default {
  components: {
    Select,
    Data
  }
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
.BodyContent {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: aliceblue;
  width: 90%;
  max-width: 950px;
  margin: auto;
}

@media screen and (max-width: 700px) {
  .BodyContent {
    width: 100%;
    margin: auto;
  }
}

.Select {
  padding: 30px 0 10px;
  text-align: center;
}

.Data {
  text-align: center;
  padding-bottom: 5px;
}
</style>
