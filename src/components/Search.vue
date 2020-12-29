<template>
  <div id="search">
    <el-input size="large"
              placeholder="请输入内容">
      <el-button slot="append"
                 icon="el-icon-search"></el-button>
    </el-input>

  </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style>
#search {
  width: 800px;
  height: 100px;
  background-color: white;
  margin: auto;
  position: relative;
  top: 50px;
}
</style>
