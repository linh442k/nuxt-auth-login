<template>
  <div>
    <div class="mb-6">
      Ví chính còn lại: {{remainingWallet}}
    </div>
    <slider-with-input
      v-model="wallet_value"
      :header="'wallet 0'"
      :max-value="maxWallet"
    />
    <div class="pa-6 pt-12">
      <v-divider></v-divider>
    </div>
    <slider-with-input
      v-model="wallet_value_1"
      :header="'wallet 1'"
      :max-value="maxWallet1"
    />
    <div class="pa-6 pt-12">
      <v-divider></v-divider>
    </div>
    <slider-with-input
      v-model="wallet_value_2"
      :header="'wallet 2'"
      :max-value="maxWallet2"
    />
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  // middleware: "named-route",
  data: () => ({
    wallet_value: 1000000,
    wallet_value_1: 1000000,
    wallet_value_2: 1000000,
    total_wallet: 4000000,
  }),
  computed: {
    maxWallet: function (){
      return this.total_wallet - this.wallet_value_1 -this.wallet_value_2;
    },
    maxWallet1: function (){
      return this.total_wallet - this.wallet_value - this.wallet_value_2;
    },
    maxWallet2: function (){
      return this.total_wallet - this.wallet_value - this.wallet_value_1;
    },
    remainingWallet: function(){
      return this.total_wallet - this.wallet_value_1 - this.wallet_value - this.wallet_value_2
    }
  }
}
</script>
