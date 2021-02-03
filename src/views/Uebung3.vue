<template>
    <div class="uebung3">
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
import Uebung3 from '@/uebungen/uebung3/Uebung3.js'

export default {
    name: 'Uebung3',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung3.aufgaben
        }
    }
}
</script>