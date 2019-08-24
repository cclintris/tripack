<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="Ask-title">customize your trip</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <img src="../assets/board4.png" width="100%" height="400px">
            <div class="Ask-buttons">
                <el-button class="button-1" icon="el-icon-back">last</el-button>
                <el-button class="button-2">next<i class="el-icon-right el-icon--right"></i></el-button>
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
        },
        jump_Layout() {
            this.$router.push({path: '/Layout'})
        }
    }
}
</script>

<style scoped>
.el-container {
    background-color: #FBF6EB;
}

.el-header {
    height: 15%;
    background-color: #FBF6EB;
}

.Ask-title {
    color: #755447;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 35px;
    line-height: 100px;
}

.el-main {
    background-color: #FBF6EB;
}

.Ask-buttons {
    height: 15%;
    padding: 0 10%;
}

.button-1 {
    float: left;
    font-size: 15px;
}

.button-2 {
    float: right;
}
</style>
