<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="title">TRIPACK</span>
            <div class="header-setting">
                <i class="el-icon-location"></i>
            </div>
        </el-header>

        <el-main>
          <el-button type="primary">view</el-button>
          <el-button type="primary">dine</el-button>
          <el-button type="primary">hotel</el-button>
          <el-input placeholder="Search" v-model="search" prefix-icon="el-icon-search"></el-input>
          <div class="main-context">
            <router-view></router-view>
          </div>
        </el-main>

        <el-footer :style="{height: 'none', padding: 0}">
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 33px'}" type="info" icon="el-icon-house" @click="jumpTo('Layout')"></el-button>
          <div class="footer-icon-text-1">home</div>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 30px 0 45px'}" type="info" icon="el-icon-medal-1" @click="jumpTo('Comment')"></el-button>
          <div class="footer-icon-text-2">comment</div>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 40px'}" type="info" icon="el-icon-notebook-1" @click="jumpTo('TravelDiary')"></el-button>
          <div class="footer-icon-text-3">diary</div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
      return {
        search: ''
      }
    },
    methods: {
      jumpTo(target) {
        this.$router.push({name: target})
      }
    }
}
</script>

<style scoped>
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
  font-size: 40px;
  position: absolute;
  top: 4%;
  right: 3%;
}

.el-icon-location {
    color: orange;
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
  padding: 0;
}

.el-input {
  width: 90%;
  position: relative;
  top: 12px;
}

.main-context {
  width: 100%;
  margin-top: 5%;
  height: 80%;
}

.el-button--primary {
  font-family: 'Ink Free';
  font-weight: bold;
  font-size: 18px;
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
  left: 43px;
  margin-top: 42px;
  color: #FBFBFB;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Ink Free';
}

.footer-icon-text-2 {
  position: absolute;
  left: 150px;
  margin-top: 42px;
  color: #FBFBFB;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Ink Free';
}

.footer-icon-text-3 {
  position: absolute;
  left: 290px;
  margin-top: 42px;
  color: #FBFBFB;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Ink Free';
}
</style>
