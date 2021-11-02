<template>
  <v-card
    flat
    color="transparent"
  >
    <v-subheader class="pl-8">{{ header }}</v-subheader>
    <v-row class="pl-8">
      <v-col cols="3" sm="2" md="2" lg="2" xl="1">
        <v-text-field
          v-model="slider_value"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          @input="changeParent"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-slider
          v-model="slider_value"
          class="align-center"
          :max="maxValue"
          :min="minValue"
          hide-details
          @mouseup="changeParent"
          :color="sliderColor"
          :track-color="sliderColor"
        >
        </v-slider>
      </v-col>
      <v-col cols="3" sm="4" md="4" lg="4" xl="5">
       <div> Max ví {{header}}: {{maxValue}}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xl="9" lg="11">
        <div class="px-6 py-3">
          <v-divider></v-divider>
        </div>
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
    },
    sliderColor: function (){
      const color_index = this.slider_value/this.maxValue * 100;
      if(color_index === 100) return "red";
      else if(color_index >= 80) return "orange";
      else if(color_index >= 60) return "yellow";
      else if (color_index >= 40) return "green";
      else return "blue";
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
