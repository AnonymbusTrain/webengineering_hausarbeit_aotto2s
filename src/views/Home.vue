<template>
  <div class="home">

    <h1>Lösungen für die Aufgaben</h1>
    <br>
    <UebungMuster msg="1. Einführung" uebungPath="/uebung1"/>
    <UebungMuster msg="2. CSS 1. Teil" uebungPath="/uebung2"/>
    <UebungMuster msg="3. CSS 2. Teil" uebungPath="/uebung3"/>
    <UebungMuster msg="4. JavaScript" uebungPath="/uebung4"/>
    <UebungMuster msg="5. ECMAScript" uebungPath="/uebung5"/>
    <UebungMuster msg="6. Functional" uebungPath="/uebung6"/>
    <UebungMuster msg="7. DOM" uebungPath="/uebung7"/>
    <UebungMuster msg="8. Async" uebungPath="/uebung8"/>
    <UebungMuster msg="9. Vue" uebungPath="/uebung9"/>
    <UebungMuster msg="10. PHP" uebungPath="/uebung10"/>
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