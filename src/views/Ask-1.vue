<template>
    <el-container>
        <el-main>
            <span class="header">路線規劃</span>
            <div class="main-background">
                <span class="main-context">是否有已定景點/餐廳/旅館?</span>
                <div class="buttons">
                    <el-button type="primary" round icon="el-icon-check" @click="jump_Choose()">是</el-button>
                    <el-button type="primary" round icon="el-icon-close">否</el-button>
                    <div class="previous">
                        <el-button type="primary" size="mini" icon="el-icon-back" @click="jump_Ask()">上一頁</el-button>
                    </div>
                </div>   
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    computed: {
        jump_Ask() {
            this.$router.push({path: '/Ask'})
        },
        jump_Choose() {
            this.$router.push({path: '/Choose'})
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

.header {
    font-size: 30px;
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

.main-context {
    position: relative;
    right: 80px;
    top: 180px;
    font-size: 25px;
}

.buttons {
    position: absolute;
    right: 93px;
    top: 290px;
    width: 200px;
    height: 100px;
}

.is-round {
    font-size: 20px;
}

.previous {
    width: 250px;
    height: 80px;
    position: relative;
    right: 30px;
    top: 55px;
}
</style>
