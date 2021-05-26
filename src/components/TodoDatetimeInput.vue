<template>
  <q-input
    outlined
    :value="value"
    @input="$emit('update', $event)"
    :rules="[val => !!val || 'Field is required']"
    class="q-mb-sm"
    :color="color"
    label="Start Date and Time"
  >
    <template v-slot:prepend>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-date
            mask="YYYY-MM-DD HH:mm"
            @input="$emit('update', $event)"
            :value="value"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            mask="YYYY-MM-DD HH:mm"
            :value="value"
            @input="$emit('update', $event)"
            format24h
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
  name: 'TodoDateTimeInput',
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
