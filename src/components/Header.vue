<template>
    <el-header>
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item><a @click="logout"><i class="el-icon-switch-button"/>Logout</a></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>{{userLogin.name}}</span>
    </el-header>
</template>
<script>
export default {
    methods: {
        logout: function() {
            this.$store.dispatch('auth/logout');
        }
    },
    computed: {
        userLogin() {
            return this.$store.state.auth.userLogin;
        }
    }
}
</script>
