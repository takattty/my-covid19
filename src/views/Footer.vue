<template>
  <div class="FooterContent">
    <p class="Repositry">参照元APIリポジトリ</p>
    <el-link
      href="https://github.com/ryo-ma/covid19-japan-web-api"
      class="FooterLink"
      >https://github.com/ryo-ma/covid19-japan-web-api</el-link
    >
    <p class="Developer">開発者のRyota Sakamotoさん</p>
    <el-link href="https://qiita.com/ryo-ma" class="FooterLink"
      >https://qiita.com/ryo-ma</el-link
    >
    <p class="MinistryOfHealth">厚生労働省HP</p>
    <el-link href="https://www.mhlw.go.jp/index.html" class="FooterLink"
      >https://www.mhlw.go.jp/index.html</el-link
    >
  </div>
</template>

<script></script>

<style>
.FooterContent {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(243, 148, 211, 0.521);
  font-size: 35px;
  padding-top: 5px;
  padding-bottom: 25px;
  margin-top: 25px;
}

.FooterLink {
  font-size: 20px;
}

.Repositry {
  margin: 20px 0 0;
}

.Developer {
  margin: 20px 0 0;
}

.MinistryOfHealth {
  margin: 20px 0 0;
}

@media screen and (max-width: 600px) {
  .FooterContent {
    margin-top: 10px;
  }
  .Repositry {
    font-size: 18px;
    margin: 5px 0 0;
    padding-top: 5px;
  }

  .FooterLink {
    font-size: 14px;
  }

  .Developer {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .MinistryOfHealth {
    font-size: 18px;
    margin-bottom: 0;
  }
}

@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
</style>
