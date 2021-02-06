<template>
    <div class="uebung8">
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
import Uebung8 from '@/uebungen/uebung8/Uebung8.js'

export default {
    name: 'Uebung8',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung8.aufgaben
        }
    }
}
</script>