<template>
  <v-card class="rounded-xl" :height="height" hover>
    <iframe
      class="h-100 w-100 border-sm"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d981.1788476908555!2d77.9889865!3d10.3646264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aba1a72af6a3%3A0x6b25b1b79dedbff1!2sDNU%20S.M.B.M.%20MATRIC.%20HIGHER%20SECONDARY%20SCHOOL.!5e0!3m2!1sen!2sin!4v1726123787691!5m2!1sen!2sin"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
      aria-label="Google Map showing the location of SMBM Matric Higher Secondary School"
    ></iframe>
  </v-card>
</template>

<script setup>
defineProps(["height"]);
</script>
