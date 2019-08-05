<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <div class="choose-header">
                <div class="header-part1">
                    <span class="choose-title">Let's begin</span>
                </div>
                <el-input placeholder="Search" prefix-icon="el-icon-search" v-model="search"></el-input>
            </div>
        </el-header>
        <el-container>
            <el-aside :style="{width: 'none'}">
                <el-button type="primary" @click="jump_ViewPoints()">view</el-button>
                <el-button type="primary" @click="jump_Restaurants()">dine</el-button>
                <el-button type="primary" @click="jump_Resorts()">hotel</el-button>
            </el-aside>
            <el-main :style="{width: 'none'}">
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
        },
        jump_Complete() {
            this.$router.push({path: '/Complete'})
        }
    }
}
</script>

<style scoped>
.el-header {
    height: 15%;
    background-color: #FBF6EB;
    color: #755447;
}

.el-aside {
    background-color: lightyellow;
    width: 25%;
}

.el-main {
    background-color: lightyellow;
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
    font-family: 'Ink Free';
    font-weight: bold;
}

.el-input {
    width: 90%;
    height: 40px;
    margin-top: -5px;
}

.el-input__inner {
    width: 90%;
}

.el-input__icon {
    margin-left: 13px;
}

.el-button {
    height: 50px;
    margin-top: 20px;
    font-size: 18px;
    background-color: #FDECB4;
    border: 0;
    color: #3981D3;
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
}
</style>
