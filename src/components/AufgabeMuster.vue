<template>
    <div class="aufgabemuster">
        <h3>{{ msg }} </h3>
        <p> {{ beschreibung }}</p>
        <textarea v-model="text" color="blue"></textarea>
    </div>
</template>

<script>
export default {
    name: "Aufgabe",
    props: {
        text: String,
        beschreibung: String,
        msg: String
    }
}
</script>

<style scoped>
.text-field {
    background-color: brown;
}
</style>