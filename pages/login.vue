<template>
  <v-row no-gutters justify="center" align="center" class="fill-height">
    <v-col xl="4" lg="6" md="8" sm="10" class="rounded pa-3 login-form-wrapper">
      <no-ssr>
        <validation-observer
          ref="observer"
        >
          <!--          upper login form-->
          <form @submit.prevent="login">
            <div class="upper-login-form pa-4">
              <v-alert v-if="incorrect_info" width="100%" outlined class="mb-3" type="error">
                {{ error_mess }}
              </v-alert>
              <default-text-field
                :vuetify-class="''"
                :label="'Tên tài khoản'"
                :vee-name="'Tên tài khoản'"
                :rules="'required'"
                :append="'mdi-account'"
                :loading="loading"
                v-model="username"/>
              <default-text-field
                :label="'Mật khẩu'"
                :vee-name="'Mật khẩu'"
                :rules="'required'"
                :append="'mdi-lock'"
                :type="'password'"
                :loading="loading"
                v-model="password"/>
            </div>
            <!--            <default-btn-->
            <!--              :vuetify-class="'text-uppercase white&#45;&#45;text px-2 ml-2'"-->
            <!--              :color="'blue'"-->
            <!--              :depressed="true"-->
            <!--              :type="'submit'"-->
            <!--              :content="'đăng nhập'"-->
            <!--              :elevation="1"-->
            <!--              :loading="loading"-->
            <!--              id="login-btn"-->
            <!--            />-->
            <v-btn
              class="text-uppercase white--text px-2 ml-2"
              :color="'blue'"
              :depressed="true"
              :type="'submit'"
              :elevation="1"
              :loading="loading"
              id="login-btn">
              Đăng nhập
            </v-btn>
          </form>
        </validation-observer>
      </no-ssr>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "login-page",
  middleware: "named-router",
  layout: "login",
  data: () => ({
    username: "",
    password: "",
    incorrect_info: false,
    loading: false,
    error_mess: "",
  }),
  methods: {
    async login() {
      this.loading = true
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.loading = false
        // ABORT!!
      } else {

        try {
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password
            }
          }).then((res) => {console.log(res.data.access_token); this.$auth.setUserToken(res.data.access_token)})
        } catch (error) {
          this.error_mess = error.response.data.message
          this.incorrect_info = true
          console.log(error)
        }
        this.loading = false
        // console.log(this.$auth.user)
      }
    }
  }
}
</script>

<style scoped>
.login-form-wrapper {
  background-color: white !important;
}

#login-btn {
  width: 40%;
}
</style>
