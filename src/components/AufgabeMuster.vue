<template>
    <div class="aufgabemuster">
        <h3> {{ msg }} </h3>
        <pre class="beschreibung" v-if="beschreibung"> {{ beschreibung }} </pre>
        <img v-if="image" :src="require(`@/assets/${image}`)" :alt="msg" :width="500" :height="600">
        <h4 v-if="loesung"> Lösung: </h4>
        <pre class="loesung" v-if="loesung" > {{ loesung }} </pre>
        <br><hr>
    </div>
</template>

<script>
export default {
    name: "Aufgabe",
    props: {
        text: String,
        msg: String,
        beschreibung: String,
        loesung: String,
        image: String
    }
}
</script>

<style scoped>
hr {
    border-top: 5px solid #187bcd;
}
pre.beschreibung {
    color: red;
    font-size: 17px;
}
pre.loesung {
    color: green;
    padding-left: 2%;
    font-size: 17px;
}


</style>