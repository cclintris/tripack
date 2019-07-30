<template>
    <el-container>
        <el-main>
            <span class="header">路線規劃</span>
            <div class="main-background"></div>
            <div class="main-content">馬上生成專屬旅行路線!
                <div class="content-1">
                    旅行時長<el-input v-model="day"></el-input>天<el-input v-model="night"></el-input>夜
                </div>
                <div class="content-1">
                    消費預算<el-input v-model="budget"></el-input>RMB
                </div>
                <span class="button">
                    <el-button size="mini" @click="jump_Ask_1()">下一步<i class="el-icon-right el-icon--right"></i></el-button>
                </span>
            </div>        
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
</template>

<script>
export default {
    data() {
        return {
            day: '',
            night: '',
            budget: ''
        }
    },
    computed: {
        jump_Ask_1() {
            this.$router.push({path: '/Ask_1'})
        },
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

.header {
    font-size: 30px;
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

.main-content {
    height: 350px;
    margin-top: 160px;
    margin-left: 10px;
    color: #3981D3;
    font-size: 30px;
    position: absolute;
    z-index: 200;
}

.content-1 {
    height: 100px;
    font-size: 25px;
    line-height: 100px;
}

.el-input {
    height: 25px;
    width: 50px;
}

.el-input__inner {
    height: 25px;
    width: 40px;
    padding: 0;
}

.button {
    float: right;
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
