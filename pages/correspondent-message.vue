<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.correspondentMessage" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.correspondentMessage" />
    </template>

    <template v-slot:pageContent>
      <div v-if="hasError" class="text-red text-center my-12">
        <p>Unable to load Correspondent's Profile. Please try again later.</p>
      </div>
      <UserMessage
        v-else
        :userMessage="correspondentMessage"
        :userProfile="correspondentProfile"
        :loading="isLoading"
        class="mt-8"
      />
      <QuoteBlock class="mb-12" />
    </template>
  </PageLayout>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { pageHero, pageHeader } from "@/composables/usePageHeader.js";

const config = useRuntimeConfig();

const correspondentMessage = {
  title: "Correspondent's <span class='text-primary'> Message </span>",
  quote:
    "A School is a place entangling learning and joy, combining knowledge and lesson of life for an enriched tomorrow.",
  message: [
    "Schooling is not all about books and classes, it's about creating educated human beings and developing civilised, social, literates and successful citizens of the future. D.N.U. SMBM Matric School has been pursuing since its establishment.",
    "We endure to provide a stimulating academic programme to emphasize individual conscientiousness and respect individuality in its creative inference. Our School has a particular ethos, a rare quality of its own, which has been kept alive, over time by many people. We instill in all students, the ability to communicate freely and confidently.",
    "With utmost enthusiasm and sincerity, we invest to set a trend of specialised education to enable them to strive and survive in the advanced and competitive world of tomorrow by creating the tech-savvies of today to create an environment where the students can explore themselves and put forth a valiant effort.",
  ],
};

const correspondentProfile = reactive({
  name: "",
  title: "",
  imageUrl: "",
});

const isLoading = ref(true);
const hasError = ref(false);

onMounted(() => {
  fetchProfile();
});

async function fetchProfile() {
  try {
    const response = await $fetch(
      `${config.public.apiStaffBase}?title=Correspondent`,
    );

    if (response?.data?.length) {
      const user = response.data[0];
      correspondentProfile.name = user.name || correspondentProfile.name;
      correspondentProfile.title = user.title || correspondentProfile.title;
      correspondentProfile.imageUrl =
        user.image_message_url || correspondentProfile.imageUrl;
    } else {
      throw new Error("No data found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
}
</script>
