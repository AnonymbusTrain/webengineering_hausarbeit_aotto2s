<template>
    <div class="uebung7">
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
import Uebung7 from '@/uebungen/uebung7/Uebung7.js'

export default {
    name: 'Uebung7',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung7.aufgaben
        }
    }
}
</script>