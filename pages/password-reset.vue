<template>
  <div>
    <h1>
      Hello this is password reset page
    </h1>
    <v-btn
      class="text-uppercase"
      :color="'primary'"
      :depressed="true"
      :nuxt="true"
      :to="'login'"
    >về đăng nhập</v-btn>
  </div>
</template>

<script>
export default {
  name: "password-reset",
  layout: "login",
  middleware: "named-route",
}
</script>

<style scoped>

</style>
