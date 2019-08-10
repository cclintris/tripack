<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="title-ready">your trip is ready</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <div class="simple-plan">
                <div class="schedule">
                    <span class="day">Day1</span>
                </div>
                <div class="schedule-down">
                    <span class="day">Day2</span>
                </div>
            </div>
        </el-main>

        <el-footer :style="{height: 'none', padding: 0}">
            <el-button type="primary" class="button-more">click for more</el-button>
            <el-button type="primary" class="button-save">click to save</el-button>
        </el-footer>
    </el-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-header {
    height: 15%;
    width: 100%;
    background-color: blanchedalmond;
}

.el-main {
    height: 65%;
    width: 100%;
    background-color: blanchedalmond;
}

.el-footer {
    height: 20%;
    width: 100%;
    background-color: blanchedalmond;
}

.title-ready {
    display: block;
    text-align: center;
    color: royalblue;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 40px;
    line-height: 100px;
}

.simple-plan {
    height: 350px;
    width: 80%;
    margin: 0 auto;
    border-style: dashed;
    border-color: salmon; 
    position: relative;
    top: 55px;
    background-color: lightgreen;
}

.el-button {
    font-size: 15px;
    font-family: 'Ink Free';
    font-weight: bold;
    width: 130px;
    background-color: deepskyblue;
    border-color: royalblue;
    color:white;
}

.button-more {
    position: absolute;
    left: 40px;
    bottom: 60px;
}

.button-save {
    position: absolute;
    right: 40px;
    bottom: 60px;
}

.schedule {
    width: 100%;
    height: 50%;
    border-bottom: salmon dashed;
}

.schedule-down {
    width: 100%;
    height: 50%;
}

.day {
    position: relative;
    top: 5px;
    left: -115px;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 25px;
    color: royalblue;
}
</style>
