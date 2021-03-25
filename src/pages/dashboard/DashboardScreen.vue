<template>
   <div>
      <h1>This is Dashboard</h1>
      <h2>{{userLogin}}</h2>
   </div>
</template>

<script>

export default {
  name: "DashboardScreen",

  data: function() {
    return {}

  },

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
