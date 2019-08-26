<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="title">TRIPACK</span>
            <div class="header-setting">
                <i class="el-icon-location"></i>
            </div>
        </el-header>

        <el-main>
          <el-button type="success" class="category-button">view</el-button>
          <el-button type="success" class="category-button">dine</el-button>
          <el-button type="success" class="category-button">hotel</el-button>
          <el-input placeholder="Search" v-model="search" prefix-icon="el-icon-search"></el-input>
          <div class="main-context">
            <router-view></router-view>
          </div>
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
    margin-left: 20%;
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
}

.main-context {
  height: 77%;
  margin-top: 2%;
}

.category-button {
  font-size: 15px;
  font-family: 'Ink Free';
  font-weight: bold;
  background-color: skyblue;
  border-color: skyblue;
  margin-bottom: 3%;
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
</style>
