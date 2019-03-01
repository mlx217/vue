<template>
  <div id="search">
    <div class="header">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
    <div class="hot">
      <span>热门搜索</span>
    </div>
    <div class="zuijin">
      <span>
        <p>最近搜索</p>
        <i></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      value:''
    }
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#search{
  height: 100%;
}
.header {
  height: 50px;
}
.hot {
  width: 100%;
  padding: 10px 0;
  height: auto;
  overflow: hidden;
}
.hot span {
  display: block;
  float: left;
  padding-left: 10px;
  line-height: 40px;
  height: 40px;
}

.zuijin {
  width: 100%;
  padding: 10px 0;
  height: auto;
  overflow: hidden;
}
.zuijin span {
  display: block;
  width: 100%;
}
.zuijin span p {
  float: left;
   padding-left: 10px;
}
</style>
