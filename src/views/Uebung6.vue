<template>
    <div class="uebung6">
        <div v-for="aufgabe in aufgaben" :key="aufgabe.name">
            <Aufgabe-muster :msg="aufgabe.name" ></Aufgabe-muster> 
            <div v-for="unteraufgabe in aufgabe.unteraufgaben" :key="unteraufgabe.beschreibung">
                <Aufgabe-muster 
                :beschreibung="unteraufgabe.beschreibung"
                :loesung="unteraufgabe.loesung"
                :image="unteraufgabe.image">        
                 </Aufgabe-muster>
            </div>
        </div>
    </div>
</template>
<script>
import AufgabeMuster from '@/components/AufgabeMuster.vue'
import Uebung6 from '@/uebungen/uebung6/Uebung6.js'

export default {
    name: 'Uebung6',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung6.aufgaben
        }
    }
}
</script>