<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
    <i @click="clear" v-show="query"></i>
  </div>
</template>

<script>
  import {debounce} from 'common/util/util.js'

  export default {
    name:'search-box',
    props: {
      placeholder: {
        type: String,
        default: '搜索请输入'
      }
    },
    data() {
      return {
        query: ''
      }
    },
    methods: {
      clear() {
        this.query = ''
      },
    },
    created() {
      this.$watch('query', debounce((newQuery) => {
        this.$emit('query', newQuery)
      }, 200))
    }
  }
</script>

<style scoped >
  .search-box {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 6px;
    height: 40px;
    background: bisque;
    border-radius: 6px;
  }
  .search-box .icon-search{
      font-size: 24px;
      color: whitesmoke;
  }
  .search-box .box{
      flex: 1;
      margin: 0 5px;
      line-height: 18px;
      background: rosybrown;
      color: black;
      font-size: 14px
  }
  .search-box .box::placeholder{
    color: black
  }

</style>
