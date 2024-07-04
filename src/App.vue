<template>
  <div>
    <Store />
    <Hook />
    <DynamicTable />
    <div class="smart">
      <Button data-testid="MSC__start-btn" label="Click me Smart" />
    </div>

    <div class="stupid">
      <Button data-testid="MSC__start-btn" label="Click me Stupid" />
    </div>

    <Todo />
    <Dialog />
    <BigTable />
    <Autocomplete />
    <Form />
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
import Todo from "./Todo.vue";
import Store from "./Store.vue";
import BigTable from "./Table.vue";
import DynamicTable from "./TableDynamic.vue";
import Dialog from "./Dialog.vue";
import Autocomplete from "./Autocomplete.vue";
import Form from "./Form.vue";
import Hook from "./Hooks.vue";

const onClick = (ev: any) => {
  console.log(ev);
};
</script>
x
