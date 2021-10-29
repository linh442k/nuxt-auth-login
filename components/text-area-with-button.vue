<template>
  <validation-provider
    v-slot="{errors}"
    :name=veeName
    :rules=rules>
    <v-textarea
      :id="componentId"
      :value="value"
      @input="$emit('input', text)"
      v-model="text"
      :error-messages="errors"
      :label="label"
      :class="vuetifyClass"
    >
        <template v-slot:append>
          <!--    BEGIN DIALOG PART-->
          <v-row justify="center" class="my-3 mx-1" align="center">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
              class="mb-6"
            >

              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  icon
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <validation-observer
                ref="observer"
              >
                <v-card>
                  <v-card-title class="flex justify-center pt-6">
                    <span class="text-h5">Param Change</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <default-text-field
                            :vuetify-class="''"
                            :label="'Name Parameter*'"
                            :vee-name="'Name Parameter'"
                            :rules="nameRule"
                            v-model="text_param"/>
                        </v-col>
                        <v-col cols="12">
                          <default-text-field
                            :vuetify-class="''"
                            :label="'Length Parameter*'"
                            :vee-name="'Length Parameter'"
                            :rules="lengthRule"
                            v-model="length_param"/>
                        </v-col>
                      </v-row>
                      <div class="mt-3">
                        <small>*indicates required field</small>
                      </div>
                    </v-container>

                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="appendText"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </validation-observer>
            </v-dialog>
          </v-row>
          <!--    END OF DIALOG PART-->
        </template>
    </v-textarea>
  </validation-provider>
</template>

<script>
export default {
  name: "text_area_with_button",
  props: {
    value: {
      default: null,
    },
    label: {
      type: String,
    },
    rules: {
      type: [String, Object],
    },
    veeName: {
      type: String,
      default: "",
    },
    vuetifyClass: {
      type: String,
      default: "",
    },
    nameRule: {
      type: [String, Object],
    },
    lengthRule: {
      type: [String, Object]
    },
    componentId: {
      type: String,
      default:  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }
  },
  data: () => {
    return {
      text: "",
      dialog: false,
      text_param: "",
      length_param: 0,
    }
  },
  methods: {
    async appendText() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.dialog = true;
        // this.length_param=0;
        // this.text_param="";
        return
      }
      this.dialog = false;
      let text_area_value = document.getElementById(this.componentId);
      let start = text_area_value.selectionStart;
      let end = text_area_value.selectionEnd;
      let appendText = "(" + this.text_param + "." + this.length_param.toString() + ")";
      let newText = text_area_value.value.substring(0, start) + appendText + text_area_value.value.substring(end);
      this.text = newText;
    },
  },

}
</script>

<style scoped>

</style>
