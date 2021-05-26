<template>
  <q-form
    ref="todoForm"
    @submit="onSubmit"
  >
    <q-input
      v-model="todo.task"
      class="q-mb-sm"
      color="dark"
      outlined
      lazy-rules
      :rules="[val => !!val || 'Field is required']"
      label="Task Name"
    />
    <todo-date-input
      v-model="todo.date"
      color="dark"
    />
    <todo-time-input
      v-model="todo.time"
      color="dark"
    />
    <q-btn
      label="Save"
      size=""
      type="submit"
      color="dark"
      class="q-mt-sm"
    />
  </q-form>
</template>

<script>
import TodoDateInput from 'src/components/TodoDateInput.vue';
import TodoTimeInput from 'src/components/TodoTimeInput.vue';

export default {
  name: 'TodoForm',
  components: { TodoDateInput, TodoTimeInput },
  data() {
    return {
      todo: {
        id: '',
        task: '',
        date: '',
        time: '',
        completed: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', { ...this.todo, id: (new Date()).getTime() });
      this.todo = { task: '', date: '' };
      this.$refs.todoForm.reset();
    },
  },
};
</script>
