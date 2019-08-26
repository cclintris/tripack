<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <el-dropdown trigger="click" class="setting">
            <div class="header-setting">
                <i style="font-size: 30px; line-height: 100px; color:#3981D3" class="el-icon-more"></i>
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
        <el-main>
            <el-input placeholder="Search" v-model="search"></el-input>
            <div class="hashtag">
                hashtag
            </div>
            <div class="blog">
                blog
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

.el-main {
    height: 80%;
    padding: 0;
}

.hashtag {
    height: 15%;
}

.blog {
    height: 75%;
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
