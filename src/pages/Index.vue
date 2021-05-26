<template>
  <q-page class="q-py-md">
    <div class="row">
      <div class="col-12 col-md-3 q-pa-lg flex flex-center">
        <q-card class="q-pa-md full-width">
          <q-card-section>
            <p>You are using me on
              <strong>{{$q.platform.is.desktop ? 'Desktop' : 'Mobile'}}</strong>
            </p>
            <h1 class="text-h6 text-indigo">Create a new Task</h1>
            <todo-form @onSubmit="onSubmit" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-8 q-pa-lg">
        <h2 class="text-h5 text-weight-bold text-indigo">Incoming tasks in the next 30 minutes</h2>
        <todo-list />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapMutations } from 'vuex';
import TodoForm from 'src/components/TodoForm';
import TodoList from 'src/components/TodoList.vue';

export default {
  name: 'PageIndex',
  components: { TodoForm, TodoList },
  methods: {
    ...mapMutations('todos', ['addTodo']),
    onSubmit(todo) {
      this.addTodo(todo);
      this.$q.notify({
        color: 'green',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Todo added to the list',
      });
    },
  },
};
</script>
