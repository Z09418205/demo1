import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      {
        num: 1,
        name: '王祖蓝同款修正红豆薏米芡实茶赤小豆薏仁茶',
        price: 56.9,
        g_img: 'static/imgList/01.jpg'
      },
      {
        num: 2,
        name: '修正玫瑰荷叶茶叶纯干玫瑰花茶袋泡花草组合',
        price: 56.9,
        g_img: 'static/imgList/02.jpg'

      },
      {
        num: 3,
        name: '雷允上红豆薏米茶大麦苦荞茶叶花茶芡实赤小',
        price: 49.9,
        g_img: 'static/imgList/03.jpg'

      },
      {
        num: 4,
        name: '他们说修正红豆薏米茶真的可以祛湿',
        price: 56.9,
        g_img: 'static/imgList/04.jpg'

      },
      {
        num: 5,
        name: '三袋装修正玫瑰荷叶茶叶纯干玫瑰花茶草组合',
        price: 113.8,
        g_img: 'static/imgList/05.jpg'

      },
      {
        num: 6,
        name: '海飞丝专研去屑洗发水止痒控油润发乳护发素',
        price: 99,
        g_img: 'static/imgList/06.jpg'

      },
      {
        num: 7,
        name: '清香菊花茶,上班族必喝的护眼茶',
        price: 56.9,
        g_img: 'static/imgList/07.jpg'

      },
      {
        num: 8,
        name: '刘宇宁同款 海飞丝防脱青春水洗发水套装',
        price: 199,
        g_img: 'static/imgList/08.jpg'

      },
      {
        num: 9,
        name: '排去除脾湿气神器健体内寒湿内热胜红豆',
        price: 449,
        g_img: 'static/imgList/09.jpg'

      },
      {
        num: 10,
        name: '坦克运输车1:64仿真军事汽车运输玩具车模型',
        price: 78,
        g_img: 'static/imgList/10.jpg'

      },
      {
        num: 11,
        name: '浓香型茉莉花茶2020新茶大白毫小茶王特级散装',
        price: 78,
        g_img: 'static/imgList/11.jpg'
      },
      {
        num: 12,
        name: 'miao大小姐享静净轻脂荷叶茶玫瑰柠檬决明子',
        price: 55,
        g_img: 'static/imgList/12.jpg'

      },
      {
        num: 13,
        name: 'miao大小姐享静净轻脂荷叶茶玫瑰柠檬决明子',
        price: 50,
        g_img: 'static/imgList/13.jpg'

      },
      {
        num: 14,
        name: '菊花茶胎菊桐乡无硫头采正宗杭白菊大颗粒',
        price: 49,
        g_img: 'static/imgList/14.jpg'

      },
      {
        num: 15,
        name: '桂花乌龙茶 | 清香乌龙茶三角茶包 可冷泡',
        price: 39,
        g_img: 'static/imgList/15.jpg'

      },
      {
        num: 16,
        name: '花清饮优质玫瑰花冠茶 手工精选 食用无硫',
        price: 30,
        g_img: 'static/imgList/16.jpg'

      },
      {
        num: 17,
        name: '清心明眸饮 | 熬夜茶 润目清火茶 菊花茶',
        price: 26.8,
        g_img: 'static/imgList/17.jpg'

      },
      {
        num: 18,
        name: '贵州好食材 黑苦荞茶正品全胚芽原粒荞麦',
        price: 18,
        g_img: 'static/imgList/18.jpg'

      },
      {
        num: 19,
        name: '菊星茶庄玫瑰花茶50克 特级 天然 纯散装',
        price: 15.8,
        g_img: 'static/imgList/19.jpg'

      },
      {
        num: 20,
        name: '立顿乐活茉莉花茶三角茶包袋泡茶冲泡花草茶',
        price: 49.9,
        g_img: 'static/imgList/20.jpg'

      },
      {
        num: 21,
        name: '一伯荷叶茶干荷叶颗粒散装  正品男女肚子茶',
        price: 14.8,
        g_img: 'static/imgList/21.jpg'
      },
      {
        num: 22,
        name: '4D拼装1:72主站坦克军事模型德系二战虎式',
        price: 10.35,
        g_img: 'static/imgList/22.jpg'

      },
      {
        num: 23,
        name: '包邮1:18合金悍马战地车猛士模型 威利斯吉普',
        price: 98,
        g_img: 'static/imgList/23.jpg'

      },
      {
        num: 24,
        name: '他合和兴4D拼装S300迷彩战术雷达导弹车模型',
        price: 36,
        g_img: 'static/imgList/24.jpg'

      },
      {
        num: 25,
        name: '立顿茉莉花茶200包商用装冲泡袋装办公茶包',
        price: 79.9,
        g_img: 'static/imgList/25.jpg'

      },
      {
        num: 26,
        name: '蒂雅多玩具车隐形战机合金车彼得罗维奇军事',
        price: 30,
        g_img: 'static/imgList/26.jpg'

      },
      {
        num: 27,
        name: 'PMA P0404 1/72 二战德军兵人 2战兵人 ',
        price: 45,
        g_img: 'static/imgList/27.jpg'

      },
      {
        num: 28,
        name: 'E-100百运底盘 V1导弹 末日迷彩 限定 1:72',
        price: 169,
        g_img: 'static/imgList/28.jpg'

      },
      {
        num: 29,
        name: '沃雅 TEZ045 德国陆军装甲车辆用光影迷彩',
        price: 24,
        g_img: 'static/imgList/29.jpg'

      },
      {
        num: 30,
        name: '波兰Polowa 75mm榴弹炮 纸模型 火炮模型',
        price: 15.8,
        g_img: 'static/imgList/30.jpg'

      },
      {
        num: 31,
        name: '1:22合金105毫米轮式自行突击炮金属自行火炮',
        price: 559,
        g_img: 'static/imgList/31.jpg'
      },
      {
        num: 32,
        name: '新时MENG模型 SPS-001 1/35战车/情景用轮胎',
        price: 24,
        g_img: 'static/imgList/32.jpg'

      },
      {
        num: 33,
        name: '旅行电脑背包女高中初中学生书包',
        price: 59,
        g_img: 'static/imgList/33.jpg'

      },
      {
        num: 34,
        name: '台湾unme书包六年级大容量减负中学生背包',
        price: 340,
        g_img: 'static/imgList/34.jpg'

      },
      {
        num: 35,
        name: '书包男时尚潮流高中初中学生大容量大学生校',
        price: 55,
        g_img: 'static/imgList/35.jpg'

      },
      {
        num: 36,
        name: '背包男双肩包大容量校园青少年大学生高中初',
        price: 58,
        g_img: 'static/imgList/36.jpg'

      },
      {
        num: 37,
        name: '佑一良品潮牌翻卷盖双肩包男休闲背包书包',
        price: 148,
        g_img: 'static/imgList/37.jpg'

      },
      {
        num: 38,
        name: '背包男士双肩包书包大学生时尚潮流高中生初',
        price: 59,
        g_img: 'static/imgList/38.jpg'

      },
      {
        num: 39,
        name: '定制双肩包小米男背包韩版电脑简约休闲书包',
        price: 39.99,
        g_img: 'static/imgList/39.jpg'

      },
      {
        num: 40,
        name: '大容量中学生森系双肩包小清新少女高中背包',
        price: 129,
        g_img: 'static/imgList/40.jpg'

      },
      {
        num: 41,
        name: '男士双肩包背包初中高中学生书包男时尚潮流',
        price: 69,
        g_img: 'static/imgList/41.jpg'
      },
      {
        num: 42,
        name: '背包男个性双肩包休闲超大容量多功能男士学',
        price: 58,
        g_img: 'static/imgList/42.jpg'

      },
      {
        num: 43,
        name: '定制书包小学生印logo辅导班培训班广告',
        price: 17.9,
        g_img: 'static/imgList/43.jpg'

      },
      {
        num: 44,
        name: '瑞士军刀双肩包男背包学生电脑包书包男士',
        price: 69,
        g_img: 'static/imgList/44.jpg'

      },
      {
        num: 45,
        name: '书包男中学生初中生高中生小学男生背包青少',
        price: 58,
        g_img: 'static/imgList/45.jpg'

      },
      {
        num: 46,
        name: '女韩版ins原宿ulzzang双肩包潮',
        price: 39.9,
        g_img: 'static/imgList/46.jpg'

      },
      {
        num: 47,
        name: '简约中学生书包男双肩背包时尚旅行包电脑包',
        price: 59.8,
        g_img: 'static/imgList/47.jpg'

      },
      {
        num: 48,
        name: '牛津大学初中生书包男中学生高中大容量减负',
        price: 218,
        g_img: 'static/imgList/48.jpg'

      },
      {
        num: 49,
        name: '儿童书包小学生男女一二三到六年级韩版减负',
        price: 9.9,
        g_img: 'static/imgList/49.jpg'

      },
      {
        num: 50,
        name: '双肩包男背包定制印logo定做初高中学生书包',
        price: 39,
        g_img: 'static/imgList/50.jpg'

      }
    ],
    shopcardata: [
      {
        num: 50,
        name: '双肩包男背包定制印logo定做初高中学生书包',
        price: 39,
        g_img: 'static/imgList/50.jpg'

      }
    ],
    currentuser: null

  }
})
