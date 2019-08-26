<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="title">settings</span>
            <el-button  class="title-button" icon="el-icon-back" @click="jumpTo('Layout')"></el-button>
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
    methods: {
        jumpTo(target) {
            this.$router.push({name: target})
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
    top: 5%;
    left: 7%;
    background-color: cornsilk;
    border: 0;
    color: orange;
}

.setting-points {
    width: 100%;
    height: 18%;
    border-bottom: 2px dashed green;
    line-height: 400%;
    padding-left: 3%;
}

.setting-text {
    float: left;
    display: block;
    font-size:  20px;
    font-family: 'Ink Free';
    font-weight: bold;
    color:orange;
    height: 100%;
}

.points-button {
    float: right;
    display: block;
    font-size: 15px;
    margin-top: 3%;
    border: 0;
    color: lightseagreen;
    font-weight: bold;
    background-color: cornsilk;
}
</style>
