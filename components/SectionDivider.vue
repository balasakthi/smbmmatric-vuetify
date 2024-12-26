<template>
  <v-container fluid>
    <div v-if="showLogo" class="d-flex">
      <v-divider class="my-6 mr-4" thickness="2"></v-divider>
      <div class="text-center">
        <v-avatar size="50">
          <v-img
            alt="SMBM Matric. Logo"
            src="/logo/smbm-matric-logo-256.webp"
            lazySrc="/logo/smbm-matric-logo-256.webp"
          ></v-img>
        </v-avatar>
      </div>
      <v-divider class="my-6 ml-4" thickness="2"></v-divider>
    </div>

    <div v-else>
      <v-divider class="my-6" thickness="2" />
    </div>
  </v-container>
</template>

<script setup>
const props = defineProps({
  showLogo: {
    type: Boolean,
    default: false,
  },
});
</script>
