<template>
    <div class="uebungmuster">
        <h1> <span> {{ msg }} </span></h1>
        <router-link to="/uebung1"><p>Lösung der Übungsaufgabe</p></router-link>
    </div>
</template>

<script>
export default {
    name: "Ueberschrift",
    props: {
        msg: String
    }
}
</script>

<style scoped>
h1 {
    padding-left: 1%;
    font-family: sans-serif;
    color: #187bcd;

}
h1 span {
    background-color: rgba(1, 240, 41, 0.192);
}
p {
    padding-left: 3%;
    padding-top: 12px;
    font-size: 22px;
    color: #187bcd;
}
</style>