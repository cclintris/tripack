<template>
    <el-container>
        <el-main>
            <div class="main-content">馬上生成專屬旅行路線!
                <div class="content-1">
                    旅行時長<el-input v-model="day"></el-input>天<el-input v-model="night"></el-input>夜
                </div>
                <div class="content-1">
                    消費預算<el-input v-model="budget"></el-input>RMB
                </div>
                <span class="button">
                    <el-button size="mini" @click="jump_NewTravel()">下一步<i class="el-icon-right el-icon--right"></i></el-button>
                </span>
            </div>        
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            day: '',
            night: '',
            budget: ''
        }
    },
    computed: {
        jump_NewTravel() {
            this.$router.push({path: '/NewTravel'})
        }
    }
}
</script>

<style>
    .el-container {
        background-color: green;
    }

    .el-main {
        background-color: green;
    }

    .main-content {
        height: 350px;
        margin-top: 150px;
        color: white;
        font-size: 30px;
    }

    .content-1 {
        height: 100px;
        font-size: 25px;
        line-height: 100px;
    }

    .el-input {
        height: 25px;
        width: 50px;
    }

    .el-input__inner {
        height: 25px;
        width: 40px;
        padding: 0;
    }

    .button {
        float: right;
    }
</style>
