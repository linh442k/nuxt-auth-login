<template>
  <div>
    <text-area-with-button
      :vuetify-class="'mx-3'"
      :label="'Nhãn textarea'"
      :vee-name="'Nhãn textarea'"
      :rules="''"
      v-model="data"
      :name-rule="'required'"
      :length-rule="'required|numeric|between:0,50'"
      :component-id="'text_area_default'"
    :tooltip="'Append Parameter'"
    :dialog-title="'Doi Param'">
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
