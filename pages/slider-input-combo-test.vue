<template>
  <div>
    <slider-input-combo v-model="wallet_data"/>
  </div>
</template>

<script>
export default {
  name: "slider-input-combo-test",
  layout: "dashboard",
  data: () => ({
    wallet_data: {
      "Tổng": 4000000,
      "ăn uống": 1000000,
      "cà phê": 500000,
      "tiết kiệm": 1200000,
      "phòng": 600000,
    }
  }),
}
</script>

<style scoped>

</style>
