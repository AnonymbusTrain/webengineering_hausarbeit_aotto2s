<template>
  <div class="home">
    <UebungMuster msg="1. Einführung"/>
    <div v-for="aufgabe in aufgaben" :key="aufgabe.name">
      <Aufgabe-Muster :msg="aufgabe.name" ></Aufgabe-Muster>  
      <div v-for="unteraufgabe in aufgabe.unteraufgaben" :key="unteraufgabe.beschreibung">
        <Aufgabe-Muster  msg="" :beschreibung="unteraufgabe.beschreibung" ></Aufgabe-Muster>  
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UebungMuster from '@/components/UebungMuster.vue'
import AufgabeMuster from '@/components/AufgabeMuster.vue'
import Uebung1 from '@/Uebungen/Uebung1.js'
export default {
  name: 'Home',
  components: {
    UebungMuster,
    AufgabeMuster
  },
  data() {
    return {
        aufgaben: Uebung1.aufgaben
    }
  }
}
</script>

