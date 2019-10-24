<template>
  <div>
    <p>いいね（ {{ num }} ）</p>
    <button @click="inc"> +1 </button>
    <button @click="reset"> reaet </button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        num: 5
      }
    },
    methods: {
      inc: function () {
        this.num += 1
      },
      reset: function () {
        this.num = 0
      }
    }
  }
</script>

<style scoped>

</style>
