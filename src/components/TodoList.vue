<template>
  <div>
    <component
      :is="componentName"
      :items="showAll ? todos : filtered"
      message="There is no task incoming, you can add one now :)"
      :isEmpty="Array.isArray(filtered) ? !filtered.length : false"
    >
      <template v-slot:default="slotProps">
        <todo-list-item :todo="slotProps.item" />
      </template>
    </component>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import TodoGrid from 'src/components/TodoGrid';
import TodoListItem from 'src/components/TodoListItem';
import TodoEmptyList from './TodoEmptyList.vue';

export default {
  name: 'TodoList',
  components: { TodoGrid, TodoListItem, TodoEmptyList },
  props: {
    showAll: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data() {
    return {
      componentName: 'todo-grid',
    };
  },
  created() {
    this.startTicker();
  },
  destroyed() {
    this.haltTicker();
  },
  computed: {
    ...mapGetters('todos', ['getIncomingTasks']),
    ...mapState('todos', ['todos']),
    filtered() {
      return this.getIncomingTasks;
    },
  },
  methods: mapActions('todos', ['startTicker', 'haltTicker']),
  watch: {
    filtered(values) {
      this.componentName = !values.length ? 'todo-empty-list' : 'todo-list';
    },
  },
};
</script>
