<template>
  <div>
    <slider-input-combo v-model="walletData"/>
  </div>
</template>

<script>
export default {
  name: "slider-input-combo-test",
  layout: "dashboard",
  data: () => ({
    walletData: [
      {
        name: "total",
        balance: 4000000.75,
      },
      {
        name: "mms",
        balance: 1200000,
        active: true,
      }
      , {
        name: "cms",
        balance: 800000,
        active: true,
      },
      {
        name: "cms2",
        balance: 500000,
        active: false,
      },
      {
        name: "lms",
        balance: 600000,
        active: false,
      }
    ]
  }),
}
</script>

<style scoped>

</style>
