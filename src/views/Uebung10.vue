<template>
    <div class="uebung10">
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
import Uebung10 from '@/uebungen/uebung10/Uebung10.js'

export default {
    name: 'Uebung10',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung10.aufgaben
        }
    }
}
</script>