<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <div class="Plans-title">Select</div>
            <div class="Plans-subtitle">choose one you like ~</div>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
            <div class="plans">
                <span class="plans-text">Plan 1</span>
                <el-button  type="warning" icon="el-icon-circle-check" @click="jumpTo('Complete')"></el-button>
            </div>
            <div class="plans">
                <span class="plans-text">Plan 2</span>
                <el-button  type="warning" icon="el-icon-circle-check" @click="jumpTo('Complete')"></el-button>
            </div>
            <div class="plans">
                <span class="plans-text">Plan 3</span>
                <el-button  type="warning" icon="el-icon-circle-check" @click="jumpTo('Complete')"></el-button>
            </div>
        </el-main>

        <el-footer :style="{height: 'none'}">
            <el-button type="success" @click="jumpTo('Choose')">last</el-button>
        </el-footer>
    </el-container>
</template>>

<script>
export default {
    methods: {
        jumpTo(target) {
            this.$router.push({name: target})
        }
    }
}
</script>>

<style scoped>
.el-header {
    height: 15%;
    background-color: #FBF6EB;
}

.el-main {
    height: 70%;
    background-color: #FBF6EB;
}

.el-footer {
    height: 15%;
    background-color: #FBF6EB;
    padding-left: 10%;
}

.Plans-title {
    color: black;
    height: 60%;
    font-size: 35px;
    line-height: 200%;
    font-family: 'Ink Free';
    font-weight: bold;
    color: olivedrab;
}

.Plans-subtitle {
    color: #EA9300;
    height: 40%;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 25px;
}

.plans {
    height: 25%;
    width: 85%;
    margin: 0 auto;
    margin-bottom: 4%;
    margin-top: 4%;
    background-color: #F2E7CB;
    border: 3px darkseagreen dotted;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 1%;
}

.el-button--success {
    float: left;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 20px;
}

.plans-text {
    float: left;
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 20px;
    color: #755447;
}

.el-button--warning {
    background-color: #F2E7CB;
    color: black;
    font-size: 25px;
    float: right;
    border: none;
    padding: 0;
}
</style>