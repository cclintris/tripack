<template>
  <div id="app">
    <el-container>
      <el-header :style="{height: 'none', padding: 0}">
        <!-- <el-dropdown class="setting">
          <div class="header-setting">
            設置<i class="el-icon-setting el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
          </el-dropdown-menu>
        </el-dropdown> -->
        <el-dropdown trigger="click" class="setting">
          <div class="header-setting">
            設置<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="title">TRIPACK</span>
        <el-dropdown trigger="click" class="info">
          <div class="header-setting">
            詳情<i class="el-icon-menu"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check-outline">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      
      <el-main :style="{height: 'none', padding: 0}">
        <div>
          <el-input placeholder="隨便看看" prefix-icon="el-icon-search" v-model="input" class="main-input"></el-input>
        </div>
        <div class="recommend">
          <span class="recommend-text">熱搜推薦:</span>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '5px 0 0 5px'}" type="primary" round>環島</el-button>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '5px 0 0 5px'}" type="primary" round>台北</el-button>
        </div>
        <div class="ads">廣告</div>
        <div class="main-main"></div>
        <div class="main-main"></div>
      </el-main>

      <el-footer :style="{height: 'none', padding: 0}">
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '10px 0 0 5px'}" type="primary" icon="el-icon-user-solid" size="small" @click="jump()">客服</el-button>
        <el-button :style="{padding: '5px 10px', float: 'right', margin: '11px 5px 0 0'}" type="primary" size="mini">新建旅行</el-button>
        <el-button :style="{padding: '5px 10px', float: 'right', margin: '11px 5px 0 0'}" type="primary" size="mini">旅行日記</el-button>
        <el-button :style="{padding: '5px 10px', float: 'right', margin: '11px 5px 0 0'}" type="primary" size="mini">我的</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {
    jump() {
        this.$router.push({path: '/CustomerService'})
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,body,#app {
  height: 100%;
}

.el-container  {
  height: 100%;
}

.el-header {
  height: 7.5%;
  background-color:blue;
  color: white;
  padding: 0;
}

.el-header .setting {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 7.5%;
  color: white;
}

.el-header .info {
  position: fixed;
  top: 0;
  right: 0;
  width: 15%;
  height: 7.5%;
  color: white;
}

.header-setting {
  display: inline-block;
  line-height: 100%;
  font-size: 15px;
  color: white;
}

.el-icon-setting {
  color: white;
  font-size: 15px;
}

.title {
  display: block;
  font-size: 30px;
  display: block;
  text-align: center;
  margin: 5px auto 0;
}

.el-main {
  height: 85%;
  background-color: green;
}

.recommend {
  height: 40px;
  border-bottom-style: solid;
  border-bottom-color: white;
}

.recommend-text {
  float: left;
  margin-left: 5px;
  margin-top: 10px;
  color: white;
}

.ads {
  height: 90px;
  border-bottom-style: solid;
  border-bottom-color: white;
}

.main-main {
  height: 86px;
  border-style: solid;
  border-color: white;
  margin: 5px 5px;
}

.el-footer {
  height: 7.5%;
  background-color: #409EFF;
  padding: 0;
}
</style>