<template>
    <div class="uebung2">
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
import Uebung2 from '@/uebungen/uebung2/Uebung2.js'

export default {
    name: 'Uebung2',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung2.aufgaben
        }
    }
}
</script>