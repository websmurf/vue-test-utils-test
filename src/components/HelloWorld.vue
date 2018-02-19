<template>
  <div class="hello">
    Dummy, doesn't matter for now
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    test () {
      console.log(this.$router.push)
      this.$router.push('test')
      console.log('boe')
    }
  }
}
</script>
