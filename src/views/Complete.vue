<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="title-ready">your trip is ready</span>
        </el-header>

        <el-main :style="{height: 'none'}">
            <div class="simple-plan">
                <div class="schedule">
                    <span class="day">Day1</span>
                </div>
                <div class="schedule-down">
                    <span class="day">Day2</span>
                </div>
            </div>
        </el-main>

        <el-footer :style="{height: 'none'}">
            <el-button type="primary" class="button-more">more</el-button>
            <el-button type="primary" class="button-save">save</el-button>
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
.el-header {
    height: 15%;
    width: 100%;
    background-color: cornsilk;
}

.el-main {
    height: 65%;
    width: 100%;
    background-color: cornsilk;
    padding: 10% 0;
}

.el-footer {
    height: 20%;
    width: 100%;
    padding: 5% 15%;
    background-color: cornsilk;
}

.title-ready {
    display: block;
    text-align: center;
    color: olivedrab;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 40px;
    line-height: 250%;
}

.simple-plan {
    height: 98%;
    width: 80%;
    margin: 0 auto;
    border-style: dashed;
    border-color: #EAB000; 
    background-color: bisque;
}

.el-button {
    font-family: 'Ink Free';
    font-weight: bold;
    border-color: royalblue;
    color:white;
    margin: 0;
    padding: 5%;
    width: 30%;
    height: 50%;
    font-size: 20px;
    background-color: darkseagreen;
}

.button-more {
    float: left;
}

.button-save {
    float: right;
}

.schedule {
    width: 100%;
    height: 50%;
    border-bottom: #EAB000 dashed;
    background-color: seashell;
}

.schedule-down {
    width: 100%;
    height: 50%;
    background-color: seashell;
    border-bottom:#EAB000 dashed;
}

.day {
    position: relative;
    top: 2%;
    left: -39%;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 25px;
    color: #EA9300;
}
</style>
