<template>
  <div class="hotcard">
    <el-row>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px'}"
                 class="card">
          <img :src="$store.state.goods[good_id-1].g_img"
               @click="switchTo('/Details'+good_id)">
          <div style="padding: 14px;">
            <span class="cardn"
                  @click="switchTo('/Details'+good_id)">{{ $store.state.goods[good_id-1].name }}</span>
            <div class="bottom clearfix">
              <span class="cardp">￥{{ $store.state.goods[good_id-1].price }}</span>
              <el-button class="addbt"
                         type="warning"
                         icon="el-icon-plus"
                         size="mini"
                         :plain="true"
                         @click="addsth()">加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import store from './../store'
var storage = window.localStorage
var x = [{
  num: '',
  id: '',
  name: '',
  price: 0,
  quantity: 0,
  img: '',
  checked: false
}]
var data = JSON.stringify(x)
storage.setItem('cardata', data)
export default {
  name: 'HotCard',
  props: ['good_id'],
  methods: {
    addsth () {
      var storage = window.localStorage
      var cdata = storage.getItem('cardata')
      var cardata = JSON.parse(cdata)
      var len = cardata.length
      var clist = {
        num: len,
        id: this.$store.state.goods[this.good_id - 1].num,
        name: this.$store.state.goods[this.good_id - 1].name,
        price: this.$store.state.goods[this.good_id - 1].price,
        quantity: 0,
        img: this.$store.state.goods[this.good_id - 1].g_img,
        checked: false
      }
      var i
      var flag = 0
      len = cardata.length
      if (this.$store.state.currentuser === null) {
        alert('请先登录！')
        this.switchTo('/Login')
        return 0
      }
      if (len === 0) {
        clist.quantity = 1
        cardata.push(clist)
        console.log(cardata)
        var d = JSON.stringify(cardata)
        storage.setItem('cardata', d)
        this.tips()
      } else {
        for (i = 0; i < len; i++) {
          if (this.$store.state.goods[this.good_id - 1].name === cardata[i].name) {
            return 0
          } else {
            flag = 1
          }
        }
      }
      if (flag === 1) {
        clist.quantity = 1
        cardata.push(clist)
        console.log(cardata)
        console.log(this.$store.state.goods[this.good_id].name)
        d = JSON.stringify(cardata)
        storage.setItem('cardata', d)
        this.tips()
      }
    },
    switchTo (path) {
      this.$router.replace(path)
    },
    tips () {
      this.$message('该商品已成功加入购物车')
    }
  }
}
</script>
<style>
.hotcard {
  width: 200px;
  height: 100%;
  margin: 6px;
  float: left;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.hotcard img {
  width: 200px;
  height: 200px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.card {
  width: 200px;
}
.cardn {
  font-size: 13px;
}
.cardp {
  color: rgb(228, 90, 10);
}
.addbt {
  position: relative;
  left: 10px;
}
</style>
