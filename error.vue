<template>
  <NuxtLayout>
    <PageLayout>
      <template v-slot:pageHero>
        <PageHero
          :pageHero="{
            title: error?.statusCode || 'Error',
            links: [
              { title: 'Home', disabled: false, to: '/' },
              {
                title: 'Careers',
                disabled: false,
                to: '/career-opportunities',
              },
              {
                title: 'Curriculum',
                disabled: false,
                to: '/academic-curriculum',
              },
              {
                title: 'Courses Offered',
                disabled: false,
                to: '/courses-offered',
              },
            ],
            imageUrl: '/images/hero/error.webp',
          }"
        />
      </template>

      <template v-slot:pageHeader>
        <PageHeader
          :pageHeader="{
            title: error?.message || 'Oops! Something went wrong',
            description:
              'We\'re sorry you didn\'t find what you were looking for! To learn more about SMBM Matric. please browse our navigation menu at the top of this page.',
          }"
        />
      </template>

      <template v-slot:pageContent>
        <v-img
          class="mb-md-12"
          alt="404 Not found"
          height="300"
          lazy-src="/images/404.svg"
          src="/images/404.svg"
        >
        </v-img
      ></template>
    </PageLayout>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps(["error"]);

const statusCode = props.error?.statusCode || 404;
const title = statusCode === 404 ? "404 Page Not Found" : `${statusCode} Error`;
const description =
  "We're sorry, the page you're looking for does not exist or has been moved. Please explore other sections of SMBM Matric. School.";

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { name: "robots", content: "noindex, nofollow" },
  ],
});
</script>
