<template>
  <div class="row">
    <div v-for="item in items" :key="item.id" class="col-12 col-md-6 col-lg-4 full-height">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoGrid',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
