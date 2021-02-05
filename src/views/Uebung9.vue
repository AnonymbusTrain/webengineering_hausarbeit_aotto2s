<template>
    <div class="uebung9">
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
import Uebung9 from '@/uebungen/uebung9/Uebung9.js'

export default {
    name: 'Uebung9',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung9.aufgaben
        }
    }
}
</script>