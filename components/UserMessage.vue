<template>
  <v-row justify="center">
    <v-col cols="12" lg="7" order="2" order-lg="1">
      <v-card class="px-6 mb-8" elevation="5" rounded="lg" variant="elevated">
        <p class="text-subtitle-1 my-4">
          <v-icon
            class="pr-2"
            color="primary"
            icon="mdi-format-quote-open"
            size="30"
          ></v-icon>
          {{ userMessage.quote }}
        </p>
      </v-card>
      <p
        class="mt-4 mb-6"
        v-for="(message, index) in userMessage.message"
        :key="index"
      >
        {{ message }}
      </p>
    </v-col>

    <v-col cols="12" lg="4" offset-lg="1" order-lg="2">
      <div
        v-if="!loading"
        class="d-flex flex-column justify-center align-center text-center"
      >
        <div class="d-flex justify-center mb-4 w-100">
          <v-img
            v-if="userProfile.imageUrl"
            max-height="330"
            max-width="330"
            class="rounded-xl"
            :aspect-ratio="1 / 1"
            :src="userProfile.imageUrl"
            :lazy-src="userProfile.imageUrl"
            :alt="userProfile.name || 'Profile Image'"
            :aria-label="userProfile.name || 'Profile Image'"
            cover
          ></v-img>
          <v-icon
            v-else
            size="100"
            color="grey"
            class="d-flex justify-center align-center"
          >
            mdi-account-circle
          </v-icon>
        </div>
        <v-list-item>
          <v-list-item-title class="text-subtitle-1 text-h6">
            {{ userProfile.name || "Unknown Name" }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-2 pt-1">
            {{ userProfile.title || "No Title Provided" }}
          </v-list-item-subtitle>
        </v-list-item>
      </div>
      <v-skeleton-loader v-else type="card"></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  userMessage: {
    type: Object,
    required: true,
  },
  userProfile: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
