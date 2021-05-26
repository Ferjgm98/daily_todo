<template>
  <q-card class="q-mr-md q-mb-md full-height">
    <q-card-section>
      <h3 class="text-h6 text-indigo">{{todo.task}}</h3>
      <p>
        Starts at:
        <strong>{{todo.date}}</strong>
          - <strong>{{todo.time}}</strong>
      </p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({
        task: 'Placeholder Task',
        date: '2021/05/26',
        time: '16:31',
        id: (new Date().getTime()),
        completed: false,
      }),
    },
  },
};
</script>
