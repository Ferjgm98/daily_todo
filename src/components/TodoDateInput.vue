<template>
  <q-input
    outlined
    :value="value"
    @input="$emit('update', $event)"
    :rules="[val => !!val || 'Field is required', 'date']"
    class="q-mb-sm"
    :color="color"
    label="Start Date"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date
            @input="$emit('update', $event)"
            :value="value"
            today-btn
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'TodoDateInput',
  props: {
    value: {
      type: String,
      required: true,
      default: () => '',
    },
    color: {
      type: String,
      required: false,
      default: () => 'dark',
    },
  },
  model: {
    prop: 'value',
    event: 'update',
  },
};
</script>
