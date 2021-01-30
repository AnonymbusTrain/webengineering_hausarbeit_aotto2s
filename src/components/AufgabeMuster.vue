<template>
    <div class="aufgabemuster">
        <h3>{{ msg }} </h3>
        <p class="beschreibung"> {{ beschreibung }} </p>
        <p class="loesung"> {{ loesung }}</p>

    </div>
</template>

<script>
export default {
    name: "Aufgabe",
    props: {
        text: String,
        beschreibung: String,
        loesung: String,
        msg: String
    }
}
</script>

<style scoped>
p.beschreibung {
    color: red;
    max-width: 50%;
}
p.loesung {
    color: green;
    padding-left: 2%;
    max-width: 50%;
}

</style>