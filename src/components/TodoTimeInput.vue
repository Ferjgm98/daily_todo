<template>
  <q-input
    outlined
    :value="value"
    @input="$emit('update', $event)"
    :rules="[val => !!val || 'Field is required', 'time']"
    class="q-mb-sm"
    :color="color"
    label="Start Time"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            :value="value"
            @input="$emit('update', $event)"
            now-btn
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'TodoTimeInput',
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
