<template>
    <el-row type="flex" class="row-bg" justify="center" >
        <el-card class="card">
            <h1 style="text-align: center">Change password</h1>
            <el-form :model="info" :rules="rules"  ref="ruleForm" label-width="150px" class="demo-ruleForm" style="width: 50%; margin: 0 auto" @submit.native.prevent="update">
                <el-form-item label="Current password" props="currentPassword">
                    <el-input type="password" v-model="info.currentPassword" autocomplete="off" prefix-icon="el-icon-lock" ></el-input>
                </el-form-item>
                <el-form-item label="New Password" props="newPassword">
                    <el-input type="password" v-model="info.newPassword" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item label="Confirm password" props="passwordConfirm">
                    <el-input type="password" v-model="info.passwordConfirm" autocomplete="off" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item style="text-align:center">
                    <el-button type="primary">Update</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </el-row>
</template>
<script>
export default {
   name: 'ChangePasswordScreen',
   data() {
       return {
           info: {
                currentPassword: '',
                newPassword: '',
                passwordConfirm: '',
           },
           rules: {
                currentPassword: [
                   { required: true, message: 'Please input current password'},
                ],
                newPassword: [
                   { required: true, message: 'Please input new password'},
                ],
                passwordConfirm: [
                   { required: true, message: 'Please input confirm password'},
                ],
           }
       }
   },
   methods: {
       update: function() {
       }
   }
}
</script>
<style scoped>
    .card {
        width:90%;
        margin: 20px auto;
    }
</style>