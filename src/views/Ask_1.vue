<template>
    <el-container>
        <el-main>
            <div class="main-background">
                <span class="main-context">是否有已定景點/餐廳/旅館?</span>
                <el-button></el-button>
                <el-button></el-button>    
            </div>
        </el-main>
        <el-footer>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 33px'}" type="info" icon="el-icon-house" @click="jump_Layout() "></el-button>
          <div class="footer-icon-text-1">主頁</div>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 30px 0 45px'}" type="info" icon="el-icon-medal-1" @click="jump_Comment()"></el-button>
          <div class="footer-icon-text-2">大眾評</div>
          <el-button :style="{padding: '5px 10px', float: 'left', margin: '0 18px 0 40px'}" type="info" icon="el-icon-notebook-1" @click="jump_TravelDiary()"></el-button>
          <div class="footer-icon-text-3">旅行日記</div>
        </el-footer>
    </el-container>
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
        }
    }
}
</script>

<style>
.el-container {
    background-color: #FBFBFB;
}

.el-main {
    background-color: #FBFBFB;
}

.main-background {
    background: url("../assets/board.png");
    background-repeat: no-repeat;
    background-size: 380px 540px;
    float: left;
    width: 500px;
    height: 500px;
    z-index: 1;
    background-position-x: -24px;
    background-position-y: -20px;
}

.main-context {
    position: relative;
    right: 80px;
    top: 160px;
    font-size: 25px;
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
</style>
