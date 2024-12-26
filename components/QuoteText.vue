<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :elevation="isHovering ? 8 : 5"
        class="mt-2 px-6"
        rounded="xl"
        variant="elevated"
      >
        <p class="text-subtitle-1 my-4">
          <v-icon
            class="pr-2"
            color="primary"
            icon="mdi-format-quote-open"
            size="30"
          ></v-icon>
          {{ quoteText }}
        </p>
      </v-card>
    </template>
  </v-hover>
</template>

<script setup>
const props = defineProps({
  quoteText: {
    type: String,
    default: "",
  },
});
</script>
