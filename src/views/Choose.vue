<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <div class="choose-header">
                <div class="header-part1">
                    <span class="choose-title">Let's begin</span>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside :style="{width: 'none'}">
                <el-button type="primary" style="border: 0" @click="jumpTo('ViewPoints')">view</el-button>
                <el-button type="primary" style="border: 0" @click="jumpTo('Restaurants')">dine</el-button>
                <el-button type="primary" style="border: 0" @click="jumpTo('Resorts')">hotel</el-button>
                <div class="fox-pic">
                    <img src="../assets/fox.png" width="90%" height="60%">
                </div>
            </el-aside>
            <el-container>
                <el-main :style="{width: 'none'}">
                    <div class="input">
                        <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="search"></el-input>
                    </div>
                    <router-view></router-view>
                    <el-footer>
                        <el-button class="main-button-1" @click="jumpTo('Ask-1')">last</el-button>
                        <el-button class="main-button-2" @click="jumpTo('Complete')">done</el-button>
                    </el-footer>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            search: ''
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
.el-header {
    height: 8%;
    background-color: #FBF6EB;
    color: #755447;
    border-bottom: 2px dotted;
}

.el-aside {
    background-color: #FBF6EB;
    width: 25%;
}

.el-main {
    background-color: #FBF6EB;
    height: 100%;
    padding: 0px;
    width: 75%;
}

.el-footer {
    background-color: #FBF6EB;
    position: absolute;
    bottom: 0;
    width: 75%;
    padding: 0 10%;
    z-index: 99;
}

.input {
    height: 11%;
    width: 100%;
}

.choose-header {
    height: 100%;
}

.header-part1 {
    height: 50%;
}

.choose-title {
    display: block;
    margin-top: 2%;
    font-size: 30px;
    font-family: 'Ink Free';
    font-weight: bold;
}

.el-input {
    width: 90%;
    top: 14px;
}

.el-input__inner {
    width: 90%;
    font-size: 15px;
}

.el-input__icon {
    margin-left: 13px;
}

.el-button {
    width: 76px;
    height: 50px;
    margin-top: 20px;
    font-size: 18px;
    font-family: 'Ink Free';
    font-weight: bold;
    background-color: #F8D26A;
    color: #FF7A00;
}

.el-button+.el-button {
    margin-left: 0px;
}

.main-button {
    height: 60px;
    width: 100%;
}

.main-button-1 {
    height: 60%;
    margin: 0;
    padding: 0;
    font-size: 18px;
    white-space: nowrap;
    background-color: darkseagreen;
    font-family: 'Ink Free';
    font-weight: bold;
    color: white;
    border-width: 2px;
    border-color: white;
    float: left;
}

.main-button-2 {
    height: 60%;
    margin: 0;
    padding: 0;
    font-size: 18px;
    white-space: nowrap;
    background-color: darkseagreen;
    font-family: 'Ink Free';
    font-weight: bold;
    color: white;
    border-width: 2px;
    border-color: white;
    float: right;
}

.fox-pic {
    position: absolute;
    bottom: 0;
    height: 55%;
    width: 25%;
    z-index: 100;
}
</style>
