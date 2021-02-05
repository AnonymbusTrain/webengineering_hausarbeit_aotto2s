export default {
    aufgaben: [
        {
            name: "Aufgabe 9.1: Komponente in Vue.js",
            id: 1,
            unteraufgaben: [
                {
                    beschreibung: "Schreiben Sie eine Vue.js Single File Component mit einem Text-Eingabefeld \n \
und 3 Ausgabefeldern, in denen man während des Tippens sehen kann, (a) wie \n \
viele Buchstaben (b) wie viele Leerzeichen und (c) wie viele Worte man in das \n \
Text-Eingabefeld bereits eingegeben hat. \n \
\n \
Vue.js Single File Component",
                    loesung: "\
App.vue \n \
<template> \n \
  <div id=\"app\"> \n \
    <input v-model=\"message\"> \n \
    <p>count letters: {{ message && message.length ? message.replace(/\\s+/g, '').length : 0 }}</p> \n \
    <p>count whitespaces: {{ message && message.length ? (message.split(\" \").length - 1) : 0 }}</p> \n \
    <p>count words: {{ message && message.length ? message.split(' ').length : 0 }}</p> \n \
  </div> \n \
</template> \n \
 \n \
<script> \n \
 \n \
export default { \n \
  name: 'App', \n \
  props: { \n \
    message: \" \" \n \
  } \n \
} \n \
</script> \n \
 \n \
<style> \n \
#app { \n \
  font-family: Avenir, Helvetica, Arial, sans-serif; \n \
  -webkit-font-smoothing: antialiased; \n \
  -moz-osx-font-smoothing: grayscale; \n \
  text-align: center; \n \
  color: #2c3e50; \n \
  margin-top: 60px; \n \
} \n \
</style> \n \
main.js \n \
import Vue from 'vue' \n \
import App from './App.vue' \n \
 \n \
Vue.config.productionTip = false \n \
 \n \
new Vue({ \n \
  render: function (h) { return h(App) }, \n \
}).$mount('#app') \n \
"
                },
                {
                    beschreibung: "Die Webseite, auf der die Komponente mehrfach getestet wird",
                    loesung: "\
index.html \n \
<!DOCTYPE html> \n \
<html lang=\"\"> \n \
  <head> \n \
    <meta charset=\"utf-8\"> \n \
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n \
    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\"> \n \
    <link rel=\"icon\" href=\"<%= BASE_URL %>favicon.ico\"> \n \
    <title><%= htmlWebpackPlugin.options.title %></title> \n \
  </head> \n \
  <body> \n \
    <noscript> \n \
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong> \n \
    </noscript> \n \
    <div id=\"app\"></div> \n \
    <!-- built files will be auto injected --> \n \
  </body> \n \
</html> \n \
"
                }
            ]
        }
    ]
}