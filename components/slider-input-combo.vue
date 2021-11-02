<template>
  <div>
    <div class="mb-1 text-h5 pl-8">
      Giá trị ví {{ walletData[0].name }}:
      {{ (walletData[0].balance).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}
      VND
      <div class="subtitle-1 mt-2">Phân bổ được:
        {{ remainingDivisibleWallet.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}
        VND
      </div>
      <div class="subtitle-2 mt-2">Còn lại:
        {{ remainingWallet.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}
        VND
      </div>
    </div>

    <div v-for="(item, index) in subWallets">
      <slider-with-input
        v-model="walletData[index+1].balance"
        :header="item.name"
        :max-value="maxSubWalletValue[index]"
        :disable="!item.active"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "slider-input-combo",
  props: {
    value: {
      type: Array,
      default: []
    },
  },
  data: () => {
    return {
      walletData: [],
    }
  },
  computed: {
    subWallets: function () {
      return this.walletData.slice(1, this.walletData.length);
    },
    remainingWallet: function () {
      return this.walletData[0].balance - this.subWallets.reduce((a, b) =>
        ({balance: a.balance + b.balance})).balance
    },
    remainingDivisibleWallet: function () {
      return this.walletData[0].balance - this.subWallets.reduce((a, b) =>
        ({balance: (a.active ? 0 : a.balance) + (b.active ? 0 : b.balance)})).balance
    },
    maxSubWalletValue: function () {
      return this.subWallets.map((item) => {
        return this.walletData[0].balance - this.subWallets.reduce((a, b) =>
          ({balance: a.balance + b.balance})).balance + item.balance
      })
    }
  },
  created() {
    this.walletData = this.value
    // console.log(this.subWallets)
    // console.log(this.remainingWallet)
    // console.log(this.maxSubWalletValue)
  },
}
</script>

<style scoped>

</style>
