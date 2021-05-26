<template>
  <p v-if="isEmpty" class="text-h6">{{message}}</p>
</template>

<script>
export default {
  name: 'TodoEmptyList',
  props: {
    isEmpty: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    message: {
      type: String,
      required: false,
      default: () => 'The list is empty',
    },
  },
};
</script>
