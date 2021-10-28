<template>
  <div>
    <h1>Dashboard Page</h1>
<!--    <v-btn-->
<!--      class="text-uppercase"-->
<!--      :color="'primary'"-->
<!--      :depressed="true"-->
<!--      :nuxt="true"-->
<!--      :to="'login'"-->
<!--    >về đăng nhập</v-btn>-->
<!--    <v-btn-->
<!--      class="text-uppercase"-->
<!--      :color="'primary'"-->
<!--      :depressed="true"-->
<!--      :nuxt="true"-->
<!--      :to="'password-reset'"-->
<!--    >password reset</v-btn>-->
<!--    <v-btn-->
<!--      class="text-uppercase"-->
<!--      :color="'primary'"-->
<!--      :depressed="true"-->
<!--      :nuxt="true"-->
<!--      :to="'registration'"-->
<!--    >về đăng ki</v-btn>-->
<!--    <v-btn-->
<!--      class="text-uppercase"-->
<!--      :color="'primary'"-->
<!--      :depressed="true"-->
<!--      :nuxt="true"-->
<!--      :to="'index'"-->
<!--    >index</v-btn>-->
<!--    <v-btn-->
<!--      class="text-uppercase"-->
<!--      :color="'primary'"-->
<!--      :depressed="true"-->
<!--      :nuxt="true"-->
<!--      :to="'/'"-->
<!--    >về dashboard</v-btn>-->
<!--    <v-btn-->
<!--      class="text-uppercase"-->
<!--      :color="'primary'"-->
<!--      :depressed="true"-->
<!--      :nuxt="true"-->
<!--      :to="'inspire'"-->
<!--    >về inspire</v-btn>-->
  </div>
</template>

<script>
export default {
  name: "dashboard",
  middleware: "named-route",
  layout: "dashboard"
}
</script>

<style scoped>

</style>
