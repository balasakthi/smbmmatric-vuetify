<template>
  <v-list class="text-start" lines="three">
    <v-list-item
      class="text-subtitle-1"
      v-for="list in descriptionList"
      :key="list.title"
      :title="list.title"
      :subtitle="list.subtitle"
    >
      <template v-slot:prepend>
        <v-avatar color="primary">
          <v-icon :icon="list.icon"></v-icon>
        </v-avatar> </template
    ></v-list-item>
  </v-list>
</template>
<script setup>
const { descriptionList } = defineProps(["descriptionList"]);
</script>
