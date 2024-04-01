<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default Title',
  },
  description: {
    type: String,
    default: 'Default description.',
  },
});
</script>

<template>
  <article>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>
