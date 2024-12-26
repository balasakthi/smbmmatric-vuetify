<template>
  <PageLayout>
    <template v-slot:pageHero>
      <PageHero :pageHero="pageHero.vicePrincipalMessage" />
    </template>

    <template v-slot:pageHeader>
      <PageHeader :pageHeader="pageHeader.vicePrincipalMessage" />
    </template>

    <template v-slot:pageContent>
      <div v-if="hasError" class="text-red text-center my-12">
        <p>Unable to load vicePrincipal's Profile. Please try again later.</p>
      </div>
      <UserMessage
        v-else
        :userMessage="vicePrincipalMessage"
        :userProfile="vicePrincipalProfile"
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

const vicePrincipalMessage = {
  title: "Vice Principal's <span class='text-primary'> Message </span>",
  quote:
    "Education is about awakening – Awakening to the power and beauty that lies within all of us.",
  message: [
    "To my mind, education as an idea, is not just about bricks, mortar and concrete, but about building character, enriching minds and about varied experiences that last a lifetime.",
    "Education is a process of awakening individual potential to creative knowledge, but more importantly enlightening students with the wisdom.",
    "We, at S.M.B.M. MATRIC. believes that 'individuals' are the atoms that hold tremendous power within to serve as agents of change. Thus our students enriched with a sense of high morality and social responsibility and will be makers of a virtuous society.",
    "I foresee a better future of the children in this institution and with the cooperation of the teachers along with the parents we can take our students to a great new height. I wish all the best to our staff and children. Let us make the difference in the world!",
  ],
};

const vicePrincipalProfile = reactive({
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
      `${config.public.apiStaffBase}?title=vice principal`,
    );

    if (response?.data?.length) {
      const user = response.data[0];
      vicePrincipalProfile.name = user.name || vicePrincipalProfile.name;
      vicePrincipalProfile.title = user.title || vicePrincipalProfile.title;
      vicePrincipalProfile.imageUrl =
        user.image_message_url || vicePrincipalProfile.imageUrl;
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
