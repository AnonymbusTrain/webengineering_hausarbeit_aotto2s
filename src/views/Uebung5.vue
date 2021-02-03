<template>
    <div class="uebung5">
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
import Uebung5 from '@/uebungen/uebung5/Uebung5.js'

export default {
    name: 'Uebung5',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung5.aufgaben
        }
    }
}
</script>