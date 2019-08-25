<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="title">settings</span>
            <el-button  class="title-button" icon="el-icon-back" @click="jump_Layout()"></el-button>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <div class="setting-points">
                <span class="setting-text">new message</span>
                <el-button class="points-button" icon="el-icon-arrow-right"></el-button>
            </div>
            <div class="setting-points">
                <span class="setting-text">privacy</span>
                <el-button class="points-button" icon="el-icon-arrow-right"></el-button>
            </div>
            <div class="setting-points">
                <span class="setting-text">skin</span>
                <el-button class="points-button" icon="el-icon-arrow-right"></el-button>
            </div>
            <div class="setting-points">
                <span class="setting-text">language</span>
                <el-button class="points-button" icon="el-icon-arrow-right"></el-button>
            </div>
            <div class="setting-points">
                <span class="setting-text">font-size</span>
                <el-button class="points-button" icon="el-icon-arrow-right"></el-button>
            </div>
        </el-main>
        
        <el-footer :style="{height: 'none', padding: 0}">

        </el-footer>
    </el-container>
</template>

<script>
export default {
    computed: {
        jump_Layout() {
            this.$router.push({path: '/Layout'})
        }
    }
}
</script>

<style scoped>
.el-container  {
  height: 100%;
}

.el-header {
    height: 15%;
    background-color: cornsilk;
    padding: 0;
    border-bottom: 2px green dashed;
}

.el-main {
    padding: 0;
    background-color: cornsilk;
}

.el-footer {
    height: 30%;
    background-color: cornsilk;
}

.title {
    display: block;
    font-size: 55px;
    color: olivedrab;
}

.title-button {
    font-size: 35px;
    padding: 0;
    position: absolute;
    top: 34px;
    left: 25px;
    background-color: cornsilk;
    border: 0;
    color: orange;
}

.setting-points {
    width: 100%;
    height: 18%;
    border-bottom: 2px dashed green;
}

.setting-text {
    float: left;
    display: block;
    line-height: 60px;
    margin-left: 5px;
    font-size: 20px;
    font-family: 'Ink Free';
    font-weight: bold;
    color:orange;
}

.points-button {
    float: right;
    display: block;
    font-size: 20px;
    margin-top: 8px;
    border: 0;
    color: lightseagreen;
    font-weight: bold;
    background-color: cornsilk;
}
</style>
