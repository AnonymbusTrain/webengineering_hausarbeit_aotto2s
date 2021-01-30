<template>
    <div class="aufgabemuster">
        <h3>{{ msg }} </h3>
        <p class="beschreibung"> {{ beschreibung }} </p>
        <p class="loesung"> {{ loesung }}</p>
        <router-link :to="loesungspath"> {{ loesungspath }} </router-link>
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
        loesungspath: String,
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