<template>
  <v-row class="mx-4 py-5 rounded-xl bg-blue-grey-lighten-5" justify="center">
    <v-col v-if="randomQuote" class="text-center" cols="12" md="8">
      <p class="text-sm-h5 text-subtitle-1 mb-6">“{{ randomQuote.quote }}”</p>

      <v-avatar
        color="surface-light"
        :image="randomQuote.imageUrl"
        variant="elevated"
      />

      <v-list-item
        v-if="randomQuote"
        :subtitle="randomQuote.title"
        :title="randomQuote.author"
      />
    </v-col>
    <v-col v-else>
      <v-skeleton-loader
        color="blue-grey-lighten-5"
        class="mx-auto"
        max-width="700"
        type="list-item-three-line"
      ></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { quotes } from "@/composables/useQuotes.js";

const randomQuote = ref(null);

onMounted(() => {
  fetchQuote();
});

async function fetchQuote() {
  try {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuote.value = quotes[randomIndex];
  } catch (error) {
    console.log(error);
  }
}
</script>
