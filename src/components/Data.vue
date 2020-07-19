<template>
  <el-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">
      {{ "List item " + o }}
    </div>
  </el-card>
</template>

<script></script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  margin: 20px 100px;
}
</style>
