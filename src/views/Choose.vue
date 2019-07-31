<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <div class="choose-header">
                <div class="header-part1">
                    <span class="choose-title">選擇</span>
                </div>
                <el-input placeholder="搜尋" prefix-icon="el-icon-search" v-model="search"></el-input>
            </div>
        </el-header>
        <el-container>
            <el-aside :style="{width: 'none'}">
                <el-button @click="jump_ViewPoints()">景點</el-button>
                <el-button @click="jump_Restaurants()">餐廳</el-button>
                <el-button @click="jump_Resorts()">旅店</el-button>
            </el-aside>
            <el-main :style="{width: 'none'}">
                <router-view></router-view>
                <div class="main-button">
                    <el-button class="main-button-1" type="danger">上一頁</el-button>
                    <el-button class="main-button-1" type="danger" @click="jump_Complete()">完成</el-button>
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
        // 沒辦法多次點擊?
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
        }, //沒辦法成功渲染?
        jump_Complete() {
            this.$router.push({path: '/Complete'})
        }
    }
}
</script>

<style>
.el-header {
    height: 15%;
    background-color: green;
}

.el-aside {
    background-color: red;
    width: 25%;
}

.el-main {
    background-color: blue;
    height: 100%;
    padding: 0px;
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
}

.el-input {
    width: 90%;
    height: 40px;
}

.el-input__inner {
    width: 90%;
    height: 40px;
}

.el-input__icon {
    margin-left: 13px;
}

.el-button {
    width: 70px;
    height: 70px;
    margin-top: 20px;
    font-size: 20px;
    white-space: normal;
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
}
</style>
