<template>
  <div class="home">
    <UebungMuster msg="1. Einführung" uebungPath="/uebung1"/>
    <UebungMuster msg="2. CSS 1. Teil" uebungPath="/uebung2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import UebungMuster from '@/components/UebungMuster.vue'
export default {
  name: 'Home',
  components: {
    UebungMuster
  }
}
</script>
<style scoped>
p {
    padding-left: 3%;
    padding-top: 12px;
    font-size: 22px;
    color: #187bcd;
}
</style>