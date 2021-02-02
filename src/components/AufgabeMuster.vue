<template>
    <div class="aufgabemuster">
        <h3> {{ msg }} </h3>
        <p class="beschreibung"> {{ beschreibung }} </p>
        <img v-if="image" :src="require(`@/assets/${image}`)" :alt="msg" width="500" height="600">
        <h4 v-if="loesung || slug"> Lösung: </h4>
        <p class="loesung" > {{ loesung }} </p>
        <router-link :to="slug"> {{ slug }} </router-link>
        <br>
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
        slug: String,
        image: String
    }
}
</script>

<style scoped>

p.beschreibung {
    color: red;
    max-width: 50%;
    font-size: 19px;
}
p.loesung {
    color: green;
    padding-left: 2%;
    max-width: 50%;
    font-size: 17px;
}


</style>