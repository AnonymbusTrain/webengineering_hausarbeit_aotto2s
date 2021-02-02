<template>
    <div class="uebung1">
        <div v-for="aufgabe in aufgaben" :key="aufgabe.name">
            <Aufgabe-muster :msg="aufgabe.name" ></Aufgabe-muster> 
            <div v-for="unteraufgabe in aufgabe.unteraufgaben" :key="unteraufgabe.beschreibung">
                <Aufgabe-muster :beschreibung="unteraufgabe.beschreibung"
                :loesung="unteraufgabe.loesung"
                :slug="unteraufgabe.slug"
                :image="unteraufgabe.image"></Aufgabe-muster>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import AufgabeMuster from '@/components/AufgabeMuster.vue'
import Uebung1 from '@/uebungen/uebung1/Uebung1.js'

export default {
    name: 'Uebung1',
    components: {
        AufgabeMuster
    },
    data() {
        return {
            aufgaben: Uebung1.aufgaben
        }
    }
}
</script>
