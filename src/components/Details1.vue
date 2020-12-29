<template>
  <div class="Details">
    <div class="back">
      <el-button icon="el-icon-arrow-left"
                 @click="switchTo('/Homepage')"></el-button>
    </div>
    <div class="pic">
      <img :src="$store.state.goods[0].g_img">
    </div>
    <div class="title">
      <h1>{{ $store.state.goods[0].name }}</h1>
    </div>
    <div class="pri">
      <p>价格:￥{{ $store.state.goods[0].price }}</p>
    </div>
    <div class="addbton">
      <el-button type="warning"
                 icon="el-icon-plus"
                 size="mini"
                 @click="addsth()">加入购物车</el-button>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="商品详情"
                     name="first">
          <p>品牌名称：修正</p>
          <p>产品参数：</p>
          <table>
            <tr>
              <td>生产许可证编号：SC10734161105864</td>
              <td>厂名：安徽万花草生物科技有限公司</td>
              <td>厂址：亳州市经济开发区亳芜现代产业园区</td>
            </tr>
            <tr>
              <td>厂家联系方式：4006036377</td>
              <td>保质期：540 天</td>
              <td>品牌: 修正</td>
            </tr>
            <tr>
              <td>系列: 赤小豆芡实红薏米茶</td>
              <td>包装方式: 包装</td>
              <td>包装种类: 袋装</td>
            </tr>
            <tr>
              <td>茶种类: 其他/other</td>
              <td>产地: 中国大陆</td>
              <td>省份: 安徽省</td>
            </tr>
            <tr>
              <td>城市: 亳州市</td>
              <td>是否含糖: 无糖</td>
              <td>是否为有机食品: 否</td>
            </tr>
            <tr>
              <td>价格段: 60-99元</td>
              <td>适用季节: 冬季 春季 夏季 秋季</td>
              <td>是否进口: 国产</td>
            </tr>
            <tr>
              <td>商品条形码: 6970481420564</td>
              <td>净含量: 150g</td>
              <td></td>
            </tr>
          </table>
        </el-tab-pane>
        <el-tab-pane label="用户评价"
                     name="second">用户评价</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// import store from './../store'
export default {
  name: 'Details1',
  props: ['good_id'],
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    addsth () {
      var storage = window.localStorage
      var cdata = storage.getItem('cardata')
      var cardata = JSON.parse(cdata)
      var len = cardata.length
      var clist = [{
        num: len,
        id: this.$store.state.goods[0].num,
        name: this.$store.state.goods[0].name,
        price: this.$store.state.goods[0].price,
        quantity: 0,
        img: this.$store.state.goods[0].g_img,
        checked: false
      }]
      var i
      var d = JSON.stringify(cardata)
      var flag = 0
      if (this.$store.state.currentuser === null) {
        alert('请先登录！')
        return 0
      }
      if (len === 0) {
        clist.quantity = 1
        cardata.push(clist)
        console.log(cardata)
        d = JSON.stringify(cardata)
        storage.setItem('cardata', d)
      } else {
        for (i = 0; i < len; i++) {
          if (this.$store.state.goods[0].name === cardata[i].name) {
            break
          } else {
            flag = 1
          }
        }
      }
      if (flag === 1) {
        clist.quantity = 1
        cardata.push(clist)
        console.log(cardata)
        d = JSON.stringify(cardata)
        storage.setItem('cardata', d)
      }
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
.Details {
  width: 70%;
  height: 100%;
  margin: auto;
  position: relative;
  margin-top: 50px;
}
.pic {
  width: 250px;
  height: 250px;
  position: relative;
}
.Details img {
  width: 100%;
  height: 100%;
}
.title {
  margin-left: 300px;
  margin-top: -280px;
}
.pri {
  margin-left: 500px;
  margin-top: 80px;
}
.pri p {
  font-size: 20px;
  color: red;
}
.addbton {
  margin-left: 500px;
  margin-top: 80px;
}
.back {
  margin-left: -200px;
}
.tabs {
  width: 70%;
  height: 100%;
  margin: auto;
  margin-top: 50px;
  font-size: 10px;
}
</style>
