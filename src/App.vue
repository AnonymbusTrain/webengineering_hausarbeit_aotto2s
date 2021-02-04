<template>
  <div id="app">
    <div class="header">
    <div id="nav">
        <router-link to="/">Home</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  position: sticky;
  top: 0;
  padding: 3px;
  background: white;
  color: white;
  font-size: 20px;
  border-bottom: 1px solid #231422;
}
</style>
