<template>
  <div class="BodyContent">
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
  </div>
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

.Select {
  padding: 30px 0 10px;
  text-align: center;
}

.Data {
  text-align: center;
  padding: 0px 0 20px;
}
</style>
