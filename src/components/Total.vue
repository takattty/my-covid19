<template>
  <p>{{ totalData }}</p>
</template>

<script>
import Store from "../Store";
export default {
  data() {
    return {
      totalData: Store.state
    };
  }
};
</script>

<style scoped></style>
