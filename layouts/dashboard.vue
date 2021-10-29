<template>
  <v-app>

    <v-app-bar app color="primary" dark id="main-navigation-bar">
      <v-toolbar-title class="ml-0 px-3">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-toolbar-title>
      <v-spacer>

      </v-spacer>
      <v-btn icon>
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list :max-width="'10rem'" class="py-0">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-if="this.$auth.loggedIn">{{ this.$auth.user.username }}</v-list-item-title>
              <v-list-item-title v-else>Chưa đăng nhập</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item
          >
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
          >
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Tùy chỉnh</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            @click="logout"
          >
            <v-list-item-icon>
              <v-icon>mdi-fullscreen-exit</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Đăng xuất</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      width="260"
    >
      <nuxt-link to="/dashboard">
        <v-toolbar dark color="blue darken-3">
          <v-toolbar-title>
            <div class="ml-0 pl-3 text-decoration-none font-weight-bold">
              VDA
            </div>
          </v-toolbar-title>
        </v-toolbar>
      </nuxt-link>
      <v-list
        dense
        nav
        class="px-0"
      >
        <v-list-item :nuxt="true" :to="'dashboard'" class="px-4">
          <v-list-item-icon class="mr-4">
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="py-2">
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true
    }
  },
  methods: {
    async logout() {
     try{
       await this.$auth.logout().then(()=>{
         this.$router.push({path: 'login'})
       })
     }catch (err){
       console.log(err)
     }
    }
  }
}
</script>

<style scoped>
#main-navigation-bar {
  z-index: 9999 !important;
}
</style>
