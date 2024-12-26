<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: "en" },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});

useSeoMeta({
  title: "SMBM Matriculation Higher Secondary School | Dindigul",
  ogTitle: "SMBM Matriculation Higher Secondary School | Dindigul",
  description:
    "SMBM Matric offers a nurturing environment focused on excellence in education, fostering academic and personal growth to prepare students for a bright future.",
  ogDescription:
    "Experience excellence in education at SMBM Matric. We nurture academic and personal growth, preparing students for a bright future.",
  ogImage: "https://smbmmatricschool.com/images/school-building.webp",
  ogUrl: "https://smbmmatricschool.com",
  twitterTitle: "SMBM Matriculation Higher Secondary School | Dindigul",
  twitterDescription:
    "Experience excellence in education at SMBM Matric. We nurture academic and personal growth, preparing students for a bright future.",
  twitterImage: "https://smbmmatricschool.com/images/school-building.webp",
  twitterCard: "summary_large_image",
});
</script>
