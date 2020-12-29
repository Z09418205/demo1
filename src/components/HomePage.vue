<template>
  <div id="homepage">
    <router-view></router-view>
    <Search></Search>
    <div>
      <el-tabs>
        <el-tab-pane label="主题市场"
                     name="zero"></el-tab-pane>
        <el-tab-pane label="天猫"
                     name="first"></el-tab-pane>
        <el-tab-pane label="聚划算"
                     name="second"></el-tab-pane>
        <el-tab-pane label="天猫超市"
                     name="third"></el-tab-pane>
        <el-tab-pane label="淘抢购"
                     name="fourth"></el-tab-pane>
        <el-tab-pane label="电器城"
                     name="fifth"></el-tab-pane>
        <el-tab-pane label="司法拍卖"
                     name="sixtn"></el-tab-pane>
        <el-tab-pane label="淘宝心选"
                     name="seventh"></el-tab-pane>
        <el-tab-pane label="飞猪旅行"
                     name="eighth"></el-tab-pane>
        <el-tab-pane label="智能生活"
                     name="ninth"></el-tab-pane>
        <el-tab-pane label="苏宁易购"
                     name="tenth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="block">
      <el-carousel :interval="4000"
                   height="200px"
                   type="card">
        <el-carousel-item v-for="item in imagebox"
                          :key="item.id">
          <img :src="item.idView"
               class="image">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hotsold">
      <h1>热卖单品</h1>
      <el-divider></el-divider>
      <HotCard v-for="item in 50"
               :good_id=item
               :key="item"></HotCard>
    </div>
  </div>
</template>
<script>
import Search from './Search'
import HotCard from './HotCard'
export default {
  name: 'HomePage',
  data () {
    return {
      imagebox: [
        { id: 0, idView: require('./../../static/01.jpg') },
        { id: 1, idView: require('./../../static/02.jpg') },
        { id: 2, idView: require('./../../static/03.jpg') },
        { id: 3, idView: require('./../../static/04.jpg') },
        { id: 4, idView: require('./../../static/05.jpg') }
      ],
      screenWidth: 0
    }
  },
  methods: {
    setSize: function () {
      this.bannerHeight = 400 / 1920 * this.screenWidth
    }
  },
  mounted () {
    this.screenWidth = window.innerWidth
    this.setSize()
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.setSize()
    }
  },
  components: {
    Search,
    HotCard
  }
}
</script>
<style>
#homepage {
  width: 70%;
  height: 100%;
  margin: auto;
  position: relative;
  top: 50px;
}
.class {
  width: 100%;
  height: 80px;
  background-color: tomato;
  text-decoration-color: white;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: inherit;
}
.hotsold {
  width: 100%;
  height: 100%;
  position: relative;
  margin: auto;
}
h1 {
  color: rgb(228, 90, 10);
}
</style>
