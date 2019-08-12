<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <el-dropdown trigger="click" class="setting">
            <div class="header-setting">
                <i style="font-size: 30px; line-height: 100px; color:#3981D3" class="el-icon-more"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided icon="el-icon-setting" class="dropdown-text">settings</el-dropdown-item>
                <el-dropdown-item divided icon="el-icon-s-opportunity" class="dropdown-text">version</el-dropdown-item>
                <el-dropdown-item divided icon="el-icon-s-custom" class="dropdown-text">about us</el-dropdown-item>
                <el-dropdown-item divided icon="el-icon-chat-line-round" class="dropdown-text">feedback</el-dropdown-item>
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
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 33px'}" type="info" icon="el-icon-house" @click="jump_Layout() "></el-button>
          <div class="footer-icon-text-1">home</div>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 30px 0 45px'}" type="info" icon="el-icon-medal-1" @click="jump_Comment()"></el-button>
          <div class="footer-icon-text-2">comment</div>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 40px'}" type="info" icon="el-icon-notebook-1" @click="jump_TravelDiary()"></el-button>
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
    computed: {
        jump_Layout() {
            this.$router.push({path: '/Layout'})
        },
        jump_Comment() {
            this.$router.push({path: '/Comment'})
        },
        jump_TravelDiary() {
            this.$router.push({path: '/TravelDiary'})
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
    height: 77%;
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
