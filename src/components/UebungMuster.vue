<template>
    <div class="uebungmuster">
        <h1> <span> {{ msg }} </span></h1>
        <hr>
        <router-link :to="uebungPath"><p>Zu den Lösungen</p></router-link>
        <br>
    </div>
</template>

<script>
export default {
    name: "Ueberschrift",
    props: {
        msg: String,
        uebungPath: String
    }
}
</script>

<style scoped>
h1 {
    padding-left: 1%;
    font-family: sans-serif;
    color: #ff1b1bf5;

}
h1 span {
    background-color: rgba(1, 240, 41, 0.192);
}
p {
    padding-left: 3%;
    padding-top: 12px;
    font-size: 22px;
    color: #1aa701;
}
hr {
    border-top: 5px solid #187bcd;
}
</style>