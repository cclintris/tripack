<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="Ask-title">customize your trip</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <div class="Ask-background">
                <div class="Ask-1-text">
                    <span class="Ask-1-ques">Any</span>
                    <span class="Ask-1-ques">attractions/restaurants/hotels</span>
                    <span class="Ask-1-ques">in mind?</span>
                    <el-button class="button-2">Yes</el-button>
                    <el-button class="button-3">No</el-button>
                </div>
            </div>
            <div class="Ask-buttons">
                <el-button class="button-1" icon="el-icon-back" @click="jumpTo('Ask')">last</el-button>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
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
    height: 10%;
    background-color: #FBF6EB;
    line-height: 500%;
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

.Ask-title {
    color: #755447;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 35px;
}

.el-main {
    background-color: #FBF6EB;
}

.Ask-buttons {
    height: 15%;
    padding: 0 10%;
    margin-top: 5%;
}

.Ask-1-text {
    z-index: 100;
    padding: 30% 0 9% 0;
    font-family: 'Ink Free';
    font-weight: bold;
    color: #EA9300;
    height: 75%;
}

.Ask-1-ques {
    display: block;
    font-size: 20px;
}

.button-1 {
    float: left;
    font-size: 15px;
}

.el-button {
    font-size: 25px;
    color: black;
    font-family: 'Ink Free';
    font-weight: bold;
    border: 2px solid #B69F86;
    background-color: #FDFBF7;
}

.button-2 {
    position: absolute;
    left: 20%;
    top: 50%;
}

.button-3 {
    position: absolute;
    right: 20%;
    top: 50%;
}
</style>
