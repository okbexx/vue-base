<template>
  <div class="wrap">
    <div class="header"></div>
    <div class="container">
      <div class="container-header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="content">
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户配置" name="first"><span slot="label">用户配置</span></el-tab-pane>
          <el-tab-pane label="用户管理" name="second"><span slot="label">用户管理</span></el-tab-pane>
        </el-tabs>
        <div v-if="activeName==='first'">
          <div class="content-box-toolbar">
            <el-form label-width="100px">
              <el-row >
                <el-col :span="8">
                  <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="活动名称">
                    <el-select v-model="form.quyu">
                      <el-option label="shanghai" value="shanghai"></el-option>
                      <el-option label="guangzhou" value="guangzhou"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="content-box-card">
            虚拟账户金额
            <span>{{money}}</span>
          </div>
          <div class="table-wrapper">
            <el-table :data="tableData" width="100%">
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column prop="date" label="日期" width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" width="180"></el-table-column>
              <el-table-column prop="address" label="地址" width="180"></el-table-column>
              <el-table-column prop="address" label="地址" width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
          </div>
        </div>
        <div v-if="activeName==='second'"></div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  export default {
    name: "account-virtual",
    data() {
      return {
        activeName: 'first',
        money:2344,
        form: {
          name: '',
          quyu: []
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods:{
      onSubmit(){
        console.log(this.form)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../assets/scss/_variables.scss';

  .wrap {
    background-color: cornsilk;
    .header {
      background-color: $background-color;
      height: 60px;
      margin-bottom: 20px;
    }
    .container {
      background-color: white;
      min-height: 720px;
      margin-bottom: 20px;
      max-width: 90%;
      margin-left: auto;
      margin-right: auto;
      .container-header {
        padding: 20px;
        margin-bottom: 10px;
      }
      .content {
        .content-box-card {
          padding-left: 50px;
          margin-bottom: 20px;
        }
      }
    }
  }


</style>
