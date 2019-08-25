<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="Ask-title">customize your trip</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <div class="Ask-background">
                <div class="Ask-text">
                    <span class="text-1">begin your trip!</span>
                    <span class="text-2">travel time</span>
                    <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="to"
                    start-placeholder="start"
                    end-placeholder="end"></el-date-picker>
                    <span class="text-3">budget ?</span>
                    <el-input placeholder="RMB" v-model="budget" suffix-icon="el-icon-money"></el-input>
                </div>
            </div>
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
            value1: '',
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

.Ask-background {
    width: 100%;
    height: 80%;
    background: url('../assets/cat-board.png');
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: 60%;
    z-index: 99;
}

.el-header {
    height: 10%;
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

.Ask-text {
    z-index: 100;
    padding: 30% 9% 9%;
    font-family: 'Ink Free';
    font-weight: bold;
    color: royalblue;
}

.text-1 {
    display: block;
    font-size: 35px;
    margin-top: 10%;
    margin-left: 10%;
    margin-bottom: 10%;
}

.text-2 {
    display: block;
    font-size: 25px;
    float: left;
    margin-left: 5%;
}

.el-date-editor--daterange {
    margin-top: 4%;
    width: 82%;
}

.text-3 {
    display: block;
    font-size: 25px;
    float: left;
    margin-left: 5%;
    margin-top: 5%;
}

.el-input {
    width: 82%;
    margin-top: 5%;
}
</style>
