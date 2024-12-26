<template>
  <v-responsive class="text-center mx-auto" v-if="pageHeader">
    <h2 class="mt-2 text-h4 font-weight-bold" v-html="pageHeader.title"></h2>
    <p
      v-if="pageHeader.description"
      class="mt-5 text-h6"
      v-html="pageHeader.description"
    ></p>
  </v-responsive>
</template>

<script setup>
const props = defineProps({
  pageHeader: {
    type: Object,
    required: true,
  },
});
</script>
