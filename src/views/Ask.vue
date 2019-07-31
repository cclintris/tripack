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
            this.$router.push({path: '/Ask-1'})
        }
    }
}
</script>

<style scoped>
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
    background: url("../assets/board2.png");
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

.el-button--info {
  background-color: #3981D3;
  border-color: #3981D3;
}
</style>
