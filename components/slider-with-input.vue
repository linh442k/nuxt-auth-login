<template>
  <v-card
    flat
    color="transparent"
  >
    <v-subheader class="mb-3">{{ header }}</v-subheader>
    <v-row>
      <v-col cols="2">
        <v-text-field
          v-model="slider_value"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          @input="changeParent"
        ></v-text-field>
      </v-col>
      <v-col cols="8">
        <v-slider
          v-model="slider_value"
          class="align-center"
          :max="maxValue"
          :min="minValue"
          hide-details
          @mouseup="changeParent"
        >
        </v-slider>
      </v-col>
      <v-col cols="2">
        Max {{header}}: {{maxValue}}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "slider-with-input",
  props: {
    value: {
      default: null,
    },
    maxValue: {
      type: Number,
      default: 50,
    },
    minValue: {
      type: Number,
      default: 0,
    },
    vuetifyClass: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      default: "",
    }
  },
  computed: {
    inputRule: function () {
      return "required|numeric|between:" + this.minValue.toString() + "," + this.maxValue.toString()
    }
  },
  data: () => {
    return {
      slider_value: 0,
    }
  },
  mounted() {
    this.slider_value = this.value
  },
  methods: {
    changeParent() {
      let emitValue = parseInt(this.slider_value)
      if (this.slider_value === "") {
        emitValue = this.minValue;
      }
      if (parseInt(this.slider_value) > this.maxValue) {
        emitValue = this.maxValue;
      }
      if (parseInt(this.slider_value) < this.minValue) {
        emitValue = this.minValue;
      }
      // console.log(emitValue)
      this.$emit('input', emitValue)
    }
  }

}
</script>
