<template>
  <div class="slide">
    <div class="main" id="temple-main">
      <div :class="{ main_i: true ,main_i_right:true,main_i_active: index===nowIndex}"
           v-for="(item , index) in mainData">
        <div class="text">
          <h2>{{item.h1}}</h2>
          <h3>{{item.h2}}</h3>
        </div>
        <img :src="item.src"/>
      </div>
      <div class="b_main">
        <img :src="bI"/>
      </div>
      <div class="ctrl">
        <a :class="{ctrl_i:true,ctrl_i_active: index===nowIndex}" v-for="(item,index) in mainData" @click="go(index)">
        </a>
      </div>
      <div class="btn">
        <a class="pre-btn" @click="preImage">&lt;</a>
        <a class="next-btn" @click="nextImage">&gt;</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "slide",
    data() {
      return {
        nowIndex: 0,
        ctrl: new Array(7),
        isRun: false
      }
    },
    props: {
      mainData: {
        type: Array,
        default: [
          {src: require("./img/1.jpg"), h1: 'Creative', h2: 'DUET'},
          {src: require("./img/2.jpg"), h1: 'Friendly', h2: 'DEVIL'},
          {src: require("./img/3.jpg"), h1: 'Tranquilent', h2: 'COMPATRAIOT'},
          {src: require("./img/4.jpg"), h1: 'Insecure', h2: 'HUSSLER'},
          {src: require("./img/5.jpg"), h1: 'Loving', h2: 'REBEL'},
          {src: require("./img/6.jpg"), h1: 'Passionate', h2: 'SEEKER'},
          {src: require("./img/7.jpg"), h1: 'Crazy', h2: 'FRIEND'}
        ]
      },
      time: {
        type: Number,
        default: 2000
      },
      autoRun: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      interv() {
        this.timer = setInterval(() => {
          this.nowIndex = (this.nowIndex + 1) % this.mainData.length
          this.isRun=false
        }, this.time)
      },
      qie() {
        if (this.autoRun) {
          this.interv();
        }
      },
      go(index) {
        this.nowIndex = index
      },
      preImage() {
        console.log(this.isRun)
        this.nowIndex = (this.nowIndex - 1 + this.mainData.length) % this.mainData.length
        clearInterval(this.timer)
        setTimeout(()=>{
          this.interv()
        },2000)
      },
      nextImage() {
        this.nowIndex = (this.nowIndex + 1) % this.mainData.length
      }
    },
    computed: {
      bI() {
        return require(`./img/${this.nowIndex + 1}.jpg`)
      }
    },
    mounted() {
      this.qie()
    }
  }
</script>

<style scoped>

  .slide,.main {
    width: 100%;
    height: 400px;
    position: relative;
  }
  .main_i {

    width: 100%;
    overflow: hidden;
    top: 0;
    height: 400px;
    position: absolute;
    transition: all 1s;
    z-index: 5;
  }
  .main_i_right {
    right: 50%;
    opacity: 0;
  }
  .main_i_active {
    opacity: 1;
    right: 0;
  }
  .main_i img,.b_main img {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translateY(-50%);
  }
  .b_main {
    width: 100%;
    overflow: hidden;
    top: 0;
    height: 400px;
    position: absolute;
    transition: all 1s;
    z-index: 1;
  }
  .text {
    position: absolute;
    color: red;
    left: 30%;
    top: 20%;
    z-index: 5;
  }

  .ctrl {
    width: 100%;
    height: 13px;
    line-height: 13px;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -13px;
  }

  .ctrl_i {
    display: inline-block;
    width: 150px;
    height: 13px;
    background-color: #666;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .3);
    position: relative;
    margin-left: 5px;
  }

  .ctrl_i_active {
    background-color: red;
  }

  .btn {
    box-sizing: border-box;
    padding: 0px 60px;
    width: 100%;
    position: absolute;
    top: 50%;
    z-index: 10;
  }

  .btn a {
    color: black;
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
    background-color: rgba(99, 99, 99, .5);
    margin: 5px;
  }

  .btn a:hover {
    background-color: darkred;
  }

  .btn .pre-btn {
    float: left;
  }

  .btn .next-btn {
    float: right;
  }


</style>
