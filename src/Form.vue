<template>
  <v-container>
    <v-form @submit.prevent="submitForm" ref="form">
      <v-text-field
        v-model="formData.name"
        label="Name"
        :rules="[rules.required]"
        required
      ></v-text-field>

      <v-text-field
        v-model="formData.email"
        label="Email"
        :rules="[rules.required, rules.email]"
        required
      ></v-text-field>

      <v-select
        v-model="formData.gender"
        :items="genders"
        label="Gender"
        :rules="[rules.required]"
        required
      ></v-select>

      <v-radio-group
        v-model="formData.subscription"
        label="Subscription"
        :rules="[rules.required]"
        required
      >
        <v-radio label="Monthly" value="monthly"></v-radio>
        <v-radio label="Yearly" value="yearly"></v-radio>
      </v-radio-group>

      <v-checkbox
        v-model="formData.agree"
        label="I agree to the terms and conditions"
        :rules="[rules.required]"
        required
      ></v-checkbox>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  gender: "",
  subscription: "",
  agree: false,
});

const genders = ["Male", "Female", "Other"];

const rules = {
  required: (value) => !!value || "Required.",
  email: (value) => /.+@.+\..+/.test(value) || "Email must be valid.",
};

const submitForm = () => {
  if ($refs.form.validate()) {
    alert("Form submitted successfully!");
    // Handle form submission logic here
  }
};
</script>
