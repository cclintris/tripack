<template>
  <div id="app">
    <el-container>
      <el-header :style="{height: 'none', padding: 0}">
        <el-dropdown trigger="click" class="setting">
          <div class="header-setting">
            <i style="font-size: 30px; line-height: 100px; color:#3981D3" class="el-icon-more"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided icon="el-icon-setting" class="dropdown-text">設定</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-bangzhu" class="dropdown-text">版本信息</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-office-building" class="dropdown-text">關於我們</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-chat-line-round" class="dropdown-text">bug反饋</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="title">TRIPACK</span>
        <el-dropdown trigger="click" class="info">
          <div class="header-setting">
            <i style="font-size: 30px; line-height: 100px; color: #3981D3" class="el-icon-picture-outline-round"></i>
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
          <img src="../assets/layout-ornament.png" width="300px" height="250px">
        </div>
        <el-button class="main-button-1" @click="jump_Ask()">
          <span white-space: prewrap>規劃專屬旅行路線</span>
        </el-button>
        <el-button class="main-button-2">查看我保存的路線</el-button>
      </el-main>

      <el-footer :style="{height: 'none', padding: 0}">
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 33px'}" type="info" icon="el-icon-house" @click="jump_Layout() "></el-button>
        <div class="footer-icon-text-1">主頁</div>
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 30px 0 45px'}" type="info" icon="el-icon-medal-1" @click="jump_Comment()"></el-button>
        <div class="footer-icon-text-2">大眾評</div>
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 40px'}" type="info" icon="el-icon-notebook-1" @click="jump_TravelDiary()"></el-button>
        <div class="footer-icon-text-3">旅行日記</div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  computed: {
    jump_Layout() {
        this.$router.push({path: '/Layout'})
    },
    jump_Comment() {
        this.$router.push({path: '/Comment'})
    },
    jump_TravelDiary() {
        this.$router.push({path: '/TravelDiary'})
    },
    jump_Ask() {
        this.$router.push({path: '/Ask'})
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
  color: #FBFBFB;
}

html,body,#app {
  height: 100%;
}

.el-container  {
  height: 100%;
}

.el-header {
  height: 15%;
  background-color: #FBFBFB;
  color: white;
  padding: 0;
}

.el-header .setting {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 7.5%;
  color: #FBFBFB;
}

.el-header .info {
  position: fixed;
  top: 0;
  right: 0;
  width: 15%;
  height: 7.5%;
  color: #FBFBFB;
}

.header-setting {
  display: inline-block;
  line-height: 100%;
  font-size: 20px;
  color: #FBFBFB;
}

.dropdown-text {
  font-size: 20px;
}

.title {
  display: block;
  font-size: 55px;
  text-align: center;
  margin-top: 5px;
  margin-left: 8px;
  color: #3981D3;
  line-height: 100px;
}

.el-main {
  height: 75%;
  background-color: #FBFBFB;
}

.main-button-1 {
  height: 200px;
  width: 150px;
  background-color: #F7DD7D;
  float: left;
  position: relative;
  left: 25px;
  top: 20px;
  margin-bottom: 20px;
  margin-right: 17px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  color: #909399;
}

.main-button-2 {
  height: 200px;
  width: 150px;
  background-color: #DFECFB;
  float: left;
  position: relative;
  left: 25px;
  top: 20px;
  margin-bottom: 20px;
  margin-right: 17px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  color: #909399;
}

.el-footer {
  height: 10%;
  background-color: #3981D3;
  padding: 0;
}

.el-icon-house {
  font-size: 36px;
}

.el-icon-medal-1 {
  font-size: 36px;
}

.el-icon-notebook-1 {
  font-size: 36px;
}

.footer-icon-text-1 {
  position: absolute;
  left: 48px;
  margin-top: 42px;
  color: #FBFBFB;
  font-size: 13px;
  font-weight: bold;
}

.footer-icon-text-2 {
  position: absolute;
  left: 162px;
  margin-top: 42px;
  color: #FBFBFB;
  font-size: 13px;
  font-weight: bold;
}

.footer-icon-text-3 {
  position: absolute;
  left: 283px;
  margin-top: 42px;
  color: #FBFBFB;
  font-size: 13px;
  font-weight: bold;
}

.el-button--info {
  background-color: #3981D3;
  border-color: #3981D3;
}
</style>