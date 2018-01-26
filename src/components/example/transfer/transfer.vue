<template>
  <div class="wrap">
    <div class="left_main">
      <div class="left_main_top">
        <input type="checkbox" value="isAll" name="isall"/>
        <label>列表1</label>
      </div>
      <div class="content">
        <ul>
          <li class="content_li" v-for="item in sortLeftData">
            <input class="content_li_checkbox" type="checkbox" name="left" :value="item.label" :ikey="item.key"/>
            <label>{{item.label}}</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="btn">
      <button class="btn_main" @click="addDataToRight()">></button>
      <button class="btn_main" @click="addDataToLeft()"><</button>
    </div>
    <div class="right_main">
      <div class="right_main_top">
        <input type="checkbox" value="isAll" name="isall"/>
        <label>列表2</label>
      </div>

      <div class="content">
        <ul>
          <li class="content_li" v-for="item in sortRightData">
            <input class="content_li_checkbox" type="checkbox" name="right" :value="item.label" :ikey="item.key"/>
            <label>{{item.label}}</label>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "transfer",
    computed:{
      sortLeftData(){
        return this.leftData.sort((a,b)=>{
          return a.key-b.key
        })
      },
      sortRightData(){
        return this.rightData.sort((a,b) =>{
          return a.key-b.key
        })
      }
    },
    data() {
      return {
        leftSelectedData: [],
        leftData: [],
        rightSelectedData:[],
        rightData: []
      }
    },
    mounted(){
      this.leftData=this.d;
    },
    props: {
      d: {
        type: Array,
        default: [{
          label: 'html',
          key: 0
        },
          {
            label: 'body',
            key: 1
          },
          {
            label: 'div',
            key: 2
          }
        ]
      }
    },
    methods: {
      addDataToRight() {
        let leftCheckbox = document.getElementsByName('left');
        debugger
        for (let i = 0; i < leftCheckbox.length; i++) {
          if (leftCheckbox[i].checked) {
            console.log(i)
            let key = parseInt(leftCheckbox[i].getAttribute('ikey'))
            let dui= this.getDui(key,this.leftData)
            this.leftSelectedData.push(dui.member)
            this.leftData.splice(dui.index,1)
          }

        }
        this.setAllUnchecked("left")
        this.rightData=this.rightData.concat(this.leftSelectedData)
        this.leftSelectedData=[]

      },
      addDataToLeft(){
        let rightCheckbox = document.getElementsByName('right');
        for (let i=0; i<rightCheckbox.length;i++) {
          if (rightCheckbox[i].checked) {

            let key = parseInt(rightCheckbox[i].getAttribute('ikey'))
            let dui= this.getDui(key,this.rightData)
            this.rightSelectedData.push(dui.member)
            this.rightData.splice(dui.index,1)
          }
        }
        this.setAllUnchecked("right")
        this.leftData=this.leftData.concat(this.rightSelectedData)
        this.rightSelectedData=[]
      },
      getDui(key,data){
        for (let item in data) {
          if (data[item].key===key) {
            return {member:data[item],index: item}
          }
        }
      },
      setAllUnchecked(where){
        let leftCheckbox = document.getElementsByName(where);
        for (let item of leftCheckbox) {
          item.checked=false
        }
      }
    },
    /*watch:{
      leftData(){
        this.leftData.sort((a,b) =>{
          return a.key-b.key
        })
      }
    }*/
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

  .wrap {
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap .left_main {
    margin-right: 50px;
    width: 200px;
    height: 100%;
    background-color: blanchedalmond;
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

  .wrap .right_main {
    width: 200px;
    height: 100%;
    background-color: bisque;
  }

  .content_li_checkbox {
    margin-right: 10px;
  }

  .content_li {

    margin: 10px;
  }
</style>
