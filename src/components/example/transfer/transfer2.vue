<template>
  <div class="wrap">
    <div class="left_main">
      <div class="left_main_top">
        <input type="checkbox" value="isAll" name="isleftall" @click="isAllLeft()" v-model="isAllLeftChecked"/>
        <label>列表1</label>
        <label style="float: right">{{leftCheckedData.length+'/'+importData.length}}</label>
      </div>
      <search-box @query="searchQuery"></search-box>
      <div class="content" >
        <ul>
          <transition-group name="slide">
            <li class="content_li" v-for="(item,index) in sortLeftData" v-bind:key="index">
              <input class="content_li_checkbox" type="checkbox" :value="item.label" v-model="leftCheckedData"/>
              <label>{{item.label}}</label>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
    <div class="btn">
      <button class="btn_main" @click="addDataToRight()">></button>
      <button class="btn_main" @click="addDataToLeft()"><</button>
    </div>
    <div class="right_main">
      <div class="right_main_top">
        <input type="checkbox" value="isAll" name="isrightall" @click="isAllRight()" v-model="isAllRightChecked"/>
        <label>列表2</label>
        <label style="float: right">{{rightCheckedData.length+'/'+rightData.length}}</label>
      </div>

      <div class="content">
        <ul>
          <transition-group name="slide">
          <li class="content_li" v-for="(item,index) in sortRightData" v-bind:key="index">
            <input class="content_li_checkbox" type="checkbox" :value="item.label" v-model="rightCheckedData"/>
            <label>{{item.label}}</label>
          </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import SearchBox from 'components/example/search-box/search-box'

  export default {
    name: "transfer2",
    created(){
      this.originData=this.importData
    },
    data() {
      return {
        originData:[],
        leftCheckedData: [],
        rightData: [],
        rightCheckedData: [],
        isAllLeftChecked: false,
        isAllRightChecked: false,
        searchData:'',
        query:''
      }
    },
    watch: {
      leftCheckedData(n) {
        n.length > 0 ? this.isAllLeftChecked = true : this.isAllLeftChecked = false
      },
      rightCheckedData(n) {
        n.length > 0 ? this.isAllRightChecked = true : this.isAllRightChecked = false
      },
      query(newQuery){
        debugger
        let shuzu=[]
        let result=[]
        shuzu=_.map(this.originData,'label')
        for (let item of shuzu) {
         if(item.indexOf(newQuery)!=-1) {
            result.push({label:item})
         }
        }
        this.importData=result
      }
    },
    computed: {
      sortLeftData() {
        return this.importData.sort((a, b) => {
          return a.label.charCodeAt(0) - b.label.charCodeAt(0)
        })
      },
      sortRightData() {
        return this.rightData.sort((a, b) => {
          return a.label.charCodeAt(0) - b.label.charCodeAt(0)
        })
      },
      /* isAllLeftChecked(){
         debugger
         return this.leftCheckedData.length>0
       }*/
    },
    props: {
      importData: {
        type: Array,
        default: [{
          label: 'html',
        },
          {
            label: 'body',
          },
          {
            label: 'div',
          },{
            label: 'qqq',
          },
          {
            label: 'www',
          },
          {
            label: 'dieev',
          },{
            label: 'rrr',
          },
          {
            label: 'ttt',
          },
          {
            label: 'yyy',
          }]
      },
      filterAble:{
        type: Boolean,
        default: true
      },
      filterMethod:{
        type:Function,
        default: function () {
        }
      }
    },
    methods: {
      addDataToRight() {
        for (let item of this.leftCheckedData) {
          this.rightData.push({label: item})
          let index = this.getDuiIndex(item, this.importData)
          this.importData.splice(index, 1)
          this.originData.splice(index, 1)

        }
        this.leftCheckedData = []
      },
      addDataToLeft() {
        for (let item of this.rightCheckedData) {
          this.importData.push({label: item})
          this.originData.push({label: item})
          let index = this.getDuiIndex(item, this.rightData)
          console.log(index)
          this.rightData.splice(index, 1)
        }
        this.rightCheckedData = []
      },
      getDuiIndex(label, data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].label === label) {
            return i
          }
        }
      },
      isAllLeft() {
        if (!this.isAllLeftChecked) {
          this.leftCheckedData = _.map(this.importData, 'label')
        } else {
          this.leftCheckedData = []
        }
      },
      isAllRight() {
        if (!this.isAllRightChecked) {
          this.rightCheckedData = _.map(this.rightData, 'label')
        } else {
          this.rightCheckedData = []
        }
      },
      searchQuery(query){
        debugger
        this.query=query
      }
    },
    components:{
      SearchBox
    }
  }
</script>

<style scoped>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ul {
    list-style: none;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(50%);
  }
  .slide-move {
    transition: all 1s;
  }
  .slide-enter-active, .slide-leave-active {
    transition: transform 1s;
  }

  .wrap {
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap .left_main, .wrap .right_main {
    width: 200px;

    background-color: blanchedalmond;
  }

  .wrap .left_main {
    margin-right: 50px;
  }
  .content{
    overflow: auto;
    height: 200px;
  }
  .wrap .left_main .left_main_top, .wrap .right_main .right_main_top {
    background-color: antiquewhite;
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
  }

  .wrap .btn {
    width: 100px;
    margin-right: 50px;
    background-color: aqua;
    height: 100px;
  }

  .wrap .btn .btn_main {
    display: block;
    width: 100%;
    height: 50px;
  }

  .content_li_checkbox {
    margin-right: 10px;
  }

  .content_li {
    padding: 5px 20px;
  }
</style>
