<template>
  <div id="login">
    <div class="login">
      <el-card>
        <h2><i class="el-icon-user"></i>Login</h2>
        <el-alert title="Wrong email or password"  type="error" show-icon v-if="isLoginFail">
        </el-alert>
        <el-form class="login-form" :model="info" :rules="rules" ref="form" @submit.native.prevent="login">
          <el-form-item prop="email">
            <el-input v-model="info.email" placeholder="Email" prefix-icon="fas fa-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="info.password" placeholder="Password" type="password" prefix-icon="fas fa-lock"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login-button" type="primary" native-type="submit" block>Login</el-button>
            <el-button class="login-socical" ><i class="fab fa-google-plus-g"></i> Login by google</el-button>
          </el-form-item>
          <a class="forgot-password" >Forgot password ?</a>
        </el-form>
      </el-card>
    </div>
    <div class="footer">
      <div class="version">Version 1.02.05</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginScreen",
  data: function() {
    return {
      validCredentials: {
        email: "lightscope",
        password: "lightscope"
      },

      info: {
        email: "",
        password: ""
      },

      loading: false,
      
      rules: {
        email: [
          { required: true, message: "Please input email address", trigger: "blur"},
          { type: 'email', message: "Please input correct email address", trigger: "blur" }
        ],
        password: [
          { required: true, message: "Please input password", trigger: "blur" },
          { min: 6, message: "Password length should be at least 6 characters",trigger: "blur" }
        ]
      },
    }
  },

  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 800);
      });
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      this.$store.dispatch('auth/login', this.info);
    }
  },

  computed: {
    isLoginFail() {
      return this.$store.state.auth.isLoginFail;
    }
  },

   created() {
    this.$store.watch((state) => state.auth.isLoginFail);
  },
   
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background: #102a43;
  }

  .login-button {
    width: 100%;
    margin-top: 40px;
  }
  .login-socical {
    width: 100%;
    margin-top: 20px;
    margin-left: 0;
    background: #f56c6c;
    color: white
  }
  .login-form {
    width: 100%;
    margin-top: 5px;
  }
  .forgot-password {
    margin-top: 10px;
  }

</style>
<style lang="scss" >
  #login {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .footer, .header {
    color: #f0f4f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1, h2, h3 {
      color: #f0f4f8;
      padding: 0;
      margin: 0;
    }
    .links {
      display: flex;
      font-family: "Open Sans";
      span {
        padding: 0 10px;
        font-size: 18px;
        border-right: 1px solid #9fb3c8;
        &:last-child {
          border-right: none;
        }
      }
    }
    .version {
      font-family: "Open Sans";
      padding: 0 10px;
      color: #2f3338;
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .header {
    padding: 10px 20px;
    .logo {
      font-family: "Open Sans";
      letter-spacing: 3px;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    .logo .part-2 {
      color: #d64545;
    }
  }
  $teal: rgb(0, 124, 137);
  .el-button--primary {
    background: $teal;
    border-color: $teal;

    &:hover,
    &.active,
    &:focus {
      background: lighten($teal, 7);
      border-color: lighten($teal, 7);
    }
  }
  .login .el-input__inner:hover {
    border-color: $teal;
  }
  .login .el-input__prefix {
    background: rgb(238, 237, 234);
    left: 0;
    height: calc(100% - 2px);
    left: 1px;
    top: 1px;
    border-radius: 3px;
    .el-input__icon {
      width: 30px;
    }
  }
  .login .el-input input {
    padding-left: 35px;
  }
  .login .el-card {
    padding-top: 0;
    padding-bottom: 30px;
    width: 450px;
    display: flex;
    justify-content: center;
  }
  h2 {
    font-family: "Open Sans";
    letter-spacing: 1px;
    font-family: Roboto, sans-serif;
    padding-bottom: 20px;
  }
  a {
    color: $teal;
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      color: lighten($teal, 7);
    }
  }

  .login .el-card__body {
    width: 400px;
  }
  
  .login .el-icon-user {
    margin-right: 15px;
  }
</style>
