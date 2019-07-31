<template>
   <el-footer :style="{height: 'none', padding: 0}">
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 33px'}" type="info" icon="el-icon-house" @click="jump_Layout() "></el-button>
        <div class="footer-icon-text-1">主頁</div>
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 30px 0 45px'}" type="info" icon="el-icon-medal-1" @click="jump_Comment()"></el-button>
        <div class="footer-icon-text-2">大眾評</div>
        <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 40px'}" type="info" icon="el-icon-notebook-1" @click="jump_TravelDiary()"></el-button>
        <div class="footer-icon-text-3">旅行日記</div>
   </el-footer>
</template>

<script>
export default {
    name: "triBottom",
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

