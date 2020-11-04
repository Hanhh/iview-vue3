<template>
  <div>hello app.vue</div>
  <!-- <div>{{name}}</div>
  <div>{{age}}</div> -->
</template>

<script>
  export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, { slots }) {
    const name = 'hjj'
    const age = 28
  }
}
</script>
