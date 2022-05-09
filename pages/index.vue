<template>
  <div>
    <navbar />
  </div>
</template>

<script>
import navbar from './navbar.vue'
export default {
  layout: 'thumnail',
  name: 'IndexPage',
  components: {
    navbar,
  },
}
</script>
