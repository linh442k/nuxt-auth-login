<template>
  <div>
    <text-area-with-button
      :vuetify-class="'mx-3'"
      :label="'Nhãn textarea'"
      :vee-name="'textare'"
      :rules="'required'"
      v-model="data"
    :name-rule="'required'"
    :length-rule="'required|numeric|between:0,50'">

    </text-area-with-button>
  </div>
</template>
<script>
export default {
  layout: "dashboard",
  // middleware: "named-route",
  data: () => ({
    data: "",
  })
}
</script>
