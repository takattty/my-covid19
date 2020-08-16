<template>
  <p>{{ prefectureData }}</p>
</template>

<script>
import Store from "../Store";
export default {
  data() {
    return {
      prefectureData: Store.state
    };
  }
};
</script>
<style scoped></style>
