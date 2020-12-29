<template>
  <div class="shopcar">
    <table id="tb1">
      <thead class="th">
        <tr>
          <th>
            <el-button type="warning"
                       @click="selectall(),getTotalPrice()">全选</el-button>
          </th>
          <th></th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(good,index) in good"
            :class="{even:index%2!=0}"
            :good_id=good
            :key="good.no">
          <td>
            <input class="ck"
                   type="checkbox"
                   name="checkbox"
                   @change="getClickedItem(good, index),check(),getTotalPrice()"
                   :checked="good.checked">
          </td>
          <td><img :src="good.img"></td>
          <td>{{good.name}}</td>
          <td>{{good.price}}</td>
          <td>
            <el-button icon="el-icon-minus"
                       @click="good.quantity === 1 ? 1 : good.quantity --, getTotalPrice()"
                       circle></el-button>
            {{good.quantity}}
            <el-button icon="el-icon-plus"
                       @click="good.quantity++,getTotalPrice()"
                       circle></el-button>
          </td>
          <td>
            <el-button type="danger"
                       icon="el-icon-delete"
                       @click="deletegood(),getTotalPrice()"
                       circle></el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="totalPrice !== 0">总价：￥{{totalPrice}}</p>
    <el-button v-if="totalPrice !== 0"
               class="paybt"
               type="primary"
               @click="switchTo('/Order')">去结算</el-button>
  </div>
</template>
<script>
export default {
  name: 'ShopCar',
  data () {
    return {
      good: null,
      index: 0,
      totalPrice: 0
    }
  },
  methods: {
    getTotalPrice () {
      this.totalPrice = 0
      var len = this.good.length
      for (let i = 0; i < len; i++) {
        if (this.good[i].checked) { this.totalPrice += parseInt(this.good[i].price) * parseInt(this.good[i].quantity) }
      }
    },
    getClickedItem (item, index) {
      this.clickedItem = item
      this.index = index
    },
    deletegood: function (index) {
      this.good.splice(index, 1)
      var cdata = JSON.parse(localStorage.getItem('cardata'))
      cdata.splice(index, 1)
      localStorage.setItem('cardata', JSON.stringify(cdata))
    },
    selectall: function () {
      for (var i = 0; i < this.good.length; i++) {
        this.good[i].checked = !this.good[i].checked
      }
    },

    check: function () {
      if (this.clickedItem.checked === true) {
        this.good[this.index].checked = false
        console.log(this.good[this.index].checked)
      } else {
        this.good[this.index].checked = true
        console.log(this.good[this.index].checked)
      }
    },
    switchTo (path) {
      this.$router.replace(path)
    }
  },
  mounted () {
    var storage = window.localStorage
    var cdata = storage.getItem('cardata')
    var cardata = JSON.parse(cdata)
    var len = cardata.length
    this.good = cardata
    this.totalPrice = 0
    for (let i = 0; i < len; i++) {
      if (this.good[i].checked) { this.totalPrice += parseInt(this.good[i].price) }
    }
  }
}
</script>
<style>
.shopcar {
  width: 70%;
  height: 100%;
  position: relative;
  margin: auto;
  top: 100px;
}
#tb1 {
  width: 100%;
  position: relative;
  margin: auto;
  border-top: 1px solid rgb(231, 103, 17);
  border-radius: 2px;
}
#tb1 td {
  border-bottom: 1px solid rgb(231, 103, 17);
  border-top: 1px solid rgb(231, 103, 17);
  text-align: center;
}
.shopcar p {
  position: relative;
  margin-left: 80%;
}
#tb1 img {
  width: 100px;
  height: 100px;
}
.paybt {
  position: relative;
  margin-left: 80%;
  margin-top: 50px;
}
.ck {
  position: relative;
  margin-left: 45%;
}
</style>
