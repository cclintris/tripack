<template>
    <el-container>
        <el-header :style="{height: 'none', padding: 0}">
            <span class="bug-title">feedback</span>
        </el-header>

        <el-main :style="{height: 'none', padding: 0}">
             <img src="../assets/CaCaZoo-cat.png" width="70%" height="12%" class="cat">
             <el-input type="textarea" :autosize="{minRows: 12, maxRows: 14}"
             placeholder="Give us some feedback:" v-model="textarea2"></el-input>
        </el-main>

        <el-footer :style="{height: 'none', padding: 0}">
            <img src="../assets/bug-flower-short.png" width="35%" height="40%" class="short-flower">
            <img src="../assets/bug-flower-long.png" width="32%" height="50%" class="long-flower">
            <div class="Bug-buttons">
                <el-button class="button-1" @click="jumpTo('Layout')">last</el-button>
                <el-button class="button-2">commit</el-button>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            textarea: '',
            textarea2: ''
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
    height: 10%;
    background-color: cornsilk;
    line-height: 500%;
}

.el-main {
    height: 70%;
    background-color: cornsilk;
}

.el-footer {
    height: 15%;
    background-color: cornsilk;
}

.bug-title {
    display: block;
    text-align: center;
    color: olivedrab;
    font-size: 50px;
    font-family: 'Ink Free';
    font-weight: bold;
}

.el-textarea {
    width: 90%;
    font-size: 20px;
    position: absolute;
    top: 21%;
    right: 5%;
}

.cat {
    position: absolute;
    right: 12.5%;
}

.short-flower {
    position: absolute;
    top: 5%;
    left: 2%;
}

.long-flower {
    position: absolute;
    top: 35%;
    left: 67%;
}

.el-button {
    font-family: 'Ink Free';
    font-weight: bold;
    font-size: 20px;
    width: 40%;
    color: white;
    background-color: darkseagreen;
}

.Bug-buttons {
    height: 100%;
    padding: 0 10%;
}

.button-1 {
    float: left;
    margin-top: 9%;
}

.button-2 {
    float: right;
    margin-top: 9%;
}
</style>
