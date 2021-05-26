<template>
  <q-page class="q-py-md">
    <div class="row">
      <div class="col-12 col-md-8 q-pa-lg">
        <h2 class="text-h5 text-weight-bold text-indigo">Tasks</h2>
        <todo-list :showAll="true" />
      </div>
    </div>
  </q-page>
</template>

<script>
import TodoList from 'src/components/TodoList.vue';

export default {
  name: 'PageIndex',
  components: { TodoList },
};
</script>
