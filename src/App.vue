<template>
  <div id="app">
    <el-container>
      <el-header :style="{height: 'none', padding: 0}">
        <el-dropdown :style="{float: 'left', color: 'white'}" class="setting">
          <span class="header-setting">
            設置<i class="el-icon-setting el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">

          </el-dropdown-menu>
        </el-dropdown>
        <span class="title">TRIPACK</span>
        <el-dropdown :style="{float: 'right', color: 'white'}" class="setting">
          <span class="header-setting">
            詳情<i class="el-icon-menu"></i>
          </span>
          <el-dropdown-menu slot="dropdown">

          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      
      <el-main :style="{height: 'none', padding: 0}">
        <div>
          <el-input placeholder="隨便看看" prefix-icon="el-icon-search" v-model="input" class="main-input"></el-input>
        </div>
        <div class="recommend">
          <span class="recommend-text">熱搜推薦:</span>
          <el-button :style="{padding: '5px 10px', float: 'left'}" type="primary" round>環島</el-button>
        </div>

      </el-main>
      <el-footer :style="{height: 'none', padding: 0}"></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
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
  height: 10%;
  background-color:blue;
  color: white;
  padding: 0;
}

.setting {
  text-align: center;
  height: 100%;
}

.header-setting {
  font-size: 15px;
}

.el-icon-setting {
  color: white;
  font-size: 15px;
}

.title {
  font-size: 30px;
  float: left;
  display: block;
  text-align: center;
  margin-left: 51px;
}

.el-main {
  height: 80%;
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

.el-footer {
  height: 10%;
  background-color: red;
  padding: 0;
}
</style>
