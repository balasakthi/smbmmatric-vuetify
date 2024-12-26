<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.principalMessage" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.principalMessage" />
    </template>

    <template v-slot:pageContent>
      <div v-if="hasError" class="text-red text-center my-12">
        <p>Unable to load Principal's Profile. Please try again later.</p>
      </div>
      <UserMessage
        v-else
        :userMessage="principalMessage"
        :userProfile="principalProfile"
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

const principalMessage = {
  title: "Principal's <span class='text-primary'> Message </span>",
  quote:
    "Education is a shared commitment of dedicated teachers, motivated students and enthusiastic parents with high expectation.",
  message: [
    "Education that blends with Tradition and Modernity is what the 21 st C Kids need. We, at SMBM MATRIC. believes that there is no reason to make a choice between Traditional values and Modern beliefs when it comes to educating our young ones. We approach in our 41 Years of excellence a perfect blend of both Tradition and Modernity to offer a Holistic Learning experience to young minds. We welcome your association with our school and look forward to working together to make these early years of education a rewarding for you and your child.",
    "A Perfect education develops and brings out all the hidden talents in individual and makes him master himself and fulfill his duties as a responsible citizen.",
    '"If a plant is carefully nurtured by a gardener, it will become good, and produce better fruits." Therefore, children must be given a good training from their earliest childhood. We are here for the same. I am sure that our students of today, tomorrow will carry forward the Motto "I CAN & I WILL" entrusted in their hands.',
    "We are an avid supporter of effective and innovative professional development that encourages teachers to be reflective and to continuously examine their practice to provide quality teaching and learning for each student.",
    "We enjoy being challenged and inspired by the people around us. It’s our aim to enthuse and challenge staff and students also be inventive and imaginative in their learning and day to day tasks.",
  ],
};

const principalProfile = reactive({
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
      `${config.public.apiStaffBase}?title=Principal`,
    );

    if (response?.data?.length) {
      const user = response.data[0];
      principalProfile.name = user.name || principalProfile.name;
      principalProfile.title = user.title || principalProfile.title;
      principalProfile.imageUrl =
        user.image_message_url || principalProfile.imageUrl;
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
