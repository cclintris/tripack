<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="Ask-title">customize your trip</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <img src="../assets/board4.png" width="100%" height="400px">
            <div class="Ask-buttons">
                <el-button class="button-1" icon="el-icon-back" @click="jumpTo('Layout')">last</el-button>
                <el-button class="button-2" @click="jumpTo('Ask-1')">next<i class="el-icon-right el-icon--right"></i></el-button>
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
    methods: {
        jumpTo(target) {
            this.$router.push({name: target})
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
    margin-top: 5%;
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

.el-button {
    font-size: 25px;
    color: black;
    font-family: 'Ink Free';
    font-weight: bold;
    border: 2px solid #B69F86;
    background-color: #FDFBF7;
}
</style>
