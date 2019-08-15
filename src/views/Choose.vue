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
                <el-button type="primary" style="border: 0" @click="jump_ViewPoints()">view</el-button>
                <el-button type="primary" style="border: 0" @click="jump_Restaurants()">dine</el-button>
                <el-button type="primary" style="border: 0" @click="jump_Resorts()">hotel</el-button>
            </el-aside>
            <el-main :style="{width: 'none'}">
                <div class="input">
                    <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="search"></el-input>
                </div>
                <router-view></router-view>
                <div class="main-button">
                    <el-button class="main-button-1" type="danger" @click="jump_Ask_1()">Last</el-button>
                    <el-button class="main-button-1" type="danger" @click="jump_Complete()">Done</el-button>
                </div>
            </el-main>
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
    computed: {
        // 沒辦法多次重複點擊?
        jump_ViewPoints() {
            this.$router.push({path: '/ViewPoints'})
        },
        jump_Restaurants() {
            this.$router.push({path: '/Restaurants'})
        },
        jump_Resorts() {
            this.$router.push({path: '/Resorts'})
        },
        jump_Ask_1() {
            this.$router.push({path: '/Ask-1'})
        },
        jump_Complete() {
            this.$router.push({path: '/Complete'})
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
}

.input {
    height: 70px;
    width: 280px;
}

.choose-header {
    height: 100%;
}

.header-part1 {
    height: 50%;
}

.choose-title {
    display: block;
    margin-top: 5px;
    font-size: 30px;
    font-family: 'Ink Free';
    font-weight: bold;
}

.el-input {
    width: 90%;
    height: 40px;
    position: relative;
    top: 14px;
}

.el-input__inner {
    width: 90%;
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
    position: absolute;
    bottom: 0;
}

.main-button-1 {
    width: 80px;
    height: 30px;
    margin: -5px 20px 0 28px;
    padding: 0;
    font-size: 15px;
    white-space: nowrap;
    background-color: #FDECB4;
    font-family: 'Ink Free';
    font-weight: bold;
    color: #FF7A00;
    border-width: 2px;
    border-color: #F9C000;
}
</style>
