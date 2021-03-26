<template>
    <el-header class="header-custom">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><a @click="changeInfo"><i class="el-icon-user"/>Change info</a></el-dropdown-item>
                <el-dropdown-item><a @click="changePassword"><i class="el-icon-lock"/>Change password</a></el-dropdown-item>
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

        },
        
        changePassword: function() {
            this.$router.push('change-password');
        },
        
        changeInfo: function() {
            
        }
    },

    computed: {
        userLogin() {
            return this.$store.state.auth.userLogin;
        }
    }
}
</script>

<style scoped>
    .header-custom {
        height: 60px;
        text-align: right;
    }
</style>
