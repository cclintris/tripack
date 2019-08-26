<template>
  <div id="app">
    <el-container>
      <el-header :style="{height: 'none', padding: 0}">
        <el-dropdown trigger="click" class="setting">
          <div class="header-setting">
            <i style="font-size: 30px; line-height: 300%; color:#3981D3" class="el-icon-more"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided icon="el-icon-setting" class="dropdown-text" @click.native="jumpTo('Settings')">settings</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-s-opportunity" class="dropdown-text" @click.native="jumpTo('Version')">version</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-s-custom" class="dropdown-text" @click.native="jumpTo('AboutUs')">about us</el-dropdown-item>
            <el-dropdown-item divided icon="el-icon-chat-line-round" class="dropdown-text" @click.native="jumpTo('Bug')">feedback</el-dropdown-item>
            <el-dropdown-item divided class="dropdown-text">CaCaTea</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="title">TRIPACK</span>
        <el-dropdown trigger="click" class="info">
          <div class="header-setting">
            <i style="font-size: 30px; line-height: 300%; color: #3981D3" class="el-icon-picture-outline-round"></i>
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
          <img src="../assets/home-2.png" width="100%" height="20%">
        </div>
        <el-button class="main-button-1" @click="jumpTo('Ask')">
          <span class="main-button-text">make</span>
          <span class="main-button-text">your</span>
          <span class="main-button-text">trip</span>
          <img src="../assets/layout-flower-2.png" width="65%" height="70%" class="flower-2">
        </el-button>
        <el-button class="main-button-2" @click="jumpTo('Saved')">
          <span class="main-button-text">my</span>
          <span class="main-button-text">saved</span>
          <span class="main-button-text">trip</span>
          <img src="../assets/layout-flower-1.png" width="60%" height="70%" class="flower-1">
        </el-button>
      </el-main>
      
      <el-footer :style="{height: 'none', padding: 0}">
        <div class="Layout-buttons">
          <el-button type="primary" icon="el-icon-house" @click="jumpTo('Layout')"></el-button>
          <div class="Layout-buttons-text">home</div>
        </div>
        <div class="Layout-buttons">
           <el-button type="primary" icon="el-icon-medal-1" @click="jumpTo('Comment')"></el-button>
           <div class="Layout-buttons-text">comment</div>
        </div>
        <div class="Layout-buttons">
           <el-button type="primary" icon="el-icon-notebook-1" @click="jumpTo('TravelDiary')"></el-button>
           <div class="Layout-buttons-text">diary</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    jumpTo(target) {
      this.$router.push({ name: target})
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
  left: -2%;
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
  font-weight: bold;
  font-family: 'Ink Free';
}

.title {
  display: block;
  font-size: 55px;
  text-align: center;
  color: #3981D3;
  line-height: 100px;
  font-family: 'Ink Free';
  font-weight: bold;
}

.el-main {
  height: 75%;
  background-color: #FBFBFB;
}

.main-button-1 {
  height: 40%;
  width: 40%;
  background-color: #F7DD7D;
  float: left;
  position: relative;
  left: 7%;
  top: 5%;
  margin-right: 5%;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  color: #909399;
}

.main-button-2 {
  height: 40%;
  width: 40%;
  background-color: #DFECFB;
  float: left;
  position: relative;
  right: -5%;
  top: 5%;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  color: #909399;
}

.main-button-text {
  display: block;
  height: 30%;
  font-size: 28px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  color: #3981D3;
  font-weight: bold;
  font-family: 'Ink Free';
}

.el-footer {
    height: 10%;
    background-color: #3981D3;
    padding: 0;
}

.Layout-buttons {
  width: 33.3%;
  float: left;
}

.Layout-buttons-text {
  font-family: 'Ink Free';
  font-weight: bold;
  color: #FBFBFB;
  font-size: 15px;
}

.el-button--primary {
  background-color: #3981D3;
  border: none;
  font-size: 35px;
  padding: 0;
  margin-top: 3%;
}

.flower-1 {
  position: absolute;
  top: 40%;
  right: -19.5%;
}

.flower-2 {
  position: absolute;
  top: -23%;
  left: -20%;
}
</style>