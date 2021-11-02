<template>
  <div>
    <div class="mb-3 text-h5 pl-8">
      Giá trị ví {{wallet_text[0]}}: {{wallet_value[0]}}
    </div>
    <div v-for="(item, index) in wallet_value" v-if="index!==0">
      <slider-with-input
      v-model="wallet[wallet_text[index]]"
      :header="wallet_text[index]"
      :max-value="max_wallet_value[index]"
      />

    </div>
  </div>
</template>

<script>
export default {
  name: "slider-input-combo",
  props: {
    value: {
      type: Object,
      default: null
    },
  },
  data: () => {
    return {
      wallet: null,
    }
  },
  computed : {
    wallet_text: function(){
      return Object.keys(this.wallet);
    },
    wallet_value: function(){
      return Object.values(this.wallet);
    },
    max_wallet_value: function (){
      return this.wallet_value.map((item, index)=>{
        if(index === 0) return this.wallet_value[0] - this.wallet_value.slice(1, this.wallet_value.length).reduce((a,b)=>a+b);
        return this.wallet_value[0] - this.wallet_value.slice(1, this.wallet_value.length).reduce((a,b)=>a+b) + item
      })
    }
  },
  created() {
    this.wallet = this.value
    // console.log(this.wallet)
    // console.log(this.wallet_value)
    // console.log(this.wallet_text)
    // console.log(this.max_wallet_value)
  },
}
</script>

<style scoped>

</style>
