<template>
  <div>
    <v-row>
      <v-col cols="7" sm="8" lg="9" xl="10">
        <div class="mb-1 text-h5 pl-8">
          Giá trị ví {{ mainWallet.name }}:
          {{
            formatCurrency(mainWallet.balance)
          }}
          VND
          <div class="subtitle-1 mt-2">Phân bổ được:
            {{
              formatCurrency(remainingDivisibleWallet)
            }}
            VND
          </div>
          <div class="subtitle-2 mt-2">Còn lại:
            {{ formatCurrency(remainingWallet) }}
            VND
          </div>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" sm="3" lg="2" xl="2" align-self="center">
        <v-btn
          @click="distributeWallet">
          Phân bổ đều
        </v-btn>
      </v-col>

    </v-row>
    <div v-for="(item, index) in subWallets">
      <slider-with-input
        v-model="walletData.find(i=>JSON.stringify(i) === JSON.stringify(item) ).balance"
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
      return this.walletData.filter((item => item.name !== "total"));
    },
    activeWallets: function () {
      return this.walletData.filter((item) => item.active);
    },
    mainWallet: function () {
      return this.walletData.find((item => item.name === "total"));
    },
    remainingWallet: function () {
      return this.mainWallet.balance - this.subWallets.reduce((a, b) =>
        ({balance: a.balance + b.balance})).balance
    },
    remainingDivisibleWallet: function () {
      return this.mainWallet.balance + this.activeWallets.reduce((a, b) =>
        ({balance: a.balance + b.balance})).balance - this.subWallets.reduce((a, b) =>
        ({balance: a.balance + b.balance})).balance
    },
    maxSubWalletValue: function () {
      return this.subWallets.map((item) => {
        return this.mainWallet.balance - this.subWallets.reduce((a, b) =>
          ({balance: a.balance + b.balance})).balance + item.balance
      })
    }
  },
  created() {
    this.walletData = this.value
    // console.log(this.remainingDivisibleWallet)
  },
  methods: {
    distributeWallet() {
      const activeWalletLength = this.activeWallets.length
      const newWalletValue = this.walletData.map((item) => ({
        ...item,
        balance: (item.active ? Math.floor(this.remainingDivisibleWallet / activeWalletLength) : item.balance)
      }))
      for (let i = 0; i < this.walletData.length; i++) {
        this.$set(this.walletData[i], 'balance', newWalletValue[i].balance)
      }
    },
    formatCurrency(money, decimalPoint = 0) {
      return (decimalPoint === 0 ? Math.floor(money) : money).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  },
}
</script>

<style scoped>

</style>
