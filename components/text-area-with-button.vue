<template>
  <validation-provider
    v-slot="{errors}"
    :name=veeName
    :rules=rules>
    <v-textarea
      ref="textarea"
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
            <template v-slot:activator="{ on: dialog, attrs }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="{...tooltip, ...dialog}"
                    icon
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>{{tooltip}}</span>
              </v-tooltip>
            </template>
            <validation-observer
              ref="observer"
            >
              <v-card>
                <v-card-title class="flex justify-center pt-6">
                  <span class="text-h5">{{dialogTitle}}</span>
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
    tooltip:{
      type: String,
      default: "",
    },
    dialogTitle: {
      type: String,
      default: "",
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
        return
      }
      this.dialog = false;
      let appendText = "(" + this.text_param + "." + this.length_param.toString() + ")";

      let textarea = this.$refs.textarea.$refs.input
      let sentence = textarea.value;
      let len = sentence.length
      let pos = textarea.selectionStart
      if (pos === undefined) {
        pos = 0
      }
      const before = sentence.substr(0, pos)
      const after = sentence.substr(pos, len)

      this.text = before + appendText + after

      this.$emit('input', this.text);
      // this.$refs.textarea.focus()
    },
  },

}
</script>

<style scoped>

</style>
