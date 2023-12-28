<template>
  <div class="form-container">
    <h2>My Form</h2>
    <div><slot name="prefix"></slot></div>
    <br />
    <img src="/assets/greecestuff.jpg" alt="more stuff" />
    <br />

    <br />
    <button type="button" @click="count = count + 1">
      COUNTER FROM PROP {{ count }}
    </button>

    <br />
    <br />

    <button type="button" @click="clicked">COUNT THAT RUNS PROP FUNC {{ count2 }}</button>
    <!-- <v-btn> pretty button</v-btn> -->
    <br />
    <br />

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="field1">Field 1:</label>
        <input type="text" id="field1" v-model="formData.field1" />
      </div>

      <div class="form-group">
        <label for="field2">Field 2:</label>
        <input type="text" id="field2" v-model="formData.field2" />
      </div>

      <div class="form-group">
        <label for="field3">Field 3:</label>
        <input type="text" id="field3" v-model="formData.field3" />
      </div>

      <div class="form-group">
        <label for="field4">Field 4:</label>
        <input type="text" id="field4" v-model="formData.field4" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { VBtn } from "vuetify/components/VBtn";

const props = defineProps({
  countDefault: {
    type: String,
    default: "1000",
  },
  func: {
    type: Function,
    default: () => {
      console.log("default function");
    },
  },
});

defineComponent({
  components: {
    VBtn,
  },
});

const count = ref(parseInt(props.countDefault));
const count2 = ref(0);
const formData = ref({
  field1: "",
  field2: "",
  field3: "",
  field4: "",
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log("Form submitted with data:", formData.value);
};
const clicked = () => {
  const delta: number = 2;
  count2.value += delta;
  props.func();
};
</script>

<style scoped>
* {
  direction: rtl;
}
.form-container {
  padding: 20px;
}

h2 {
  color: #e94196;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 30%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #e94196;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #e664a5;
}
</style>
