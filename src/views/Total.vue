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
  background-color: white;
  border-radius: 4px;
  width: 90%;
  max-width: 950px;
  margin: auto;
}

.Select {
  padding: 50px 0 0;
  text-align: center;
}

@media screen and (max-width: 700px) {
  .BodyContent {
    width: 100%;
    margin: auto;
  }

  .Select {
    padding: 20px 0 10px;
  }
}

.Data {
  text-align: center;
  padding-bottom: 5px;
}
</style>
