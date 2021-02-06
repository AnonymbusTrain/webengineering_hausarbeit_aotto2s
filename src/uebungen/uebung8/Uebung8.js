export default {
    aufgaben: [
        {
            name: "8.1. Promises",
            id: 1,
            unteraufgaben: [
                {
                    beschreibung: "Erstellen Sie auf Ihrem Server www2.inf.h-brs.de (oder localhost) zwei Text-Dateien A.txt und B.txt \n \
mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. \n \
Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus \n \
A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. \n \
Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. \n \
Verwenden Sie dabei ausschließlich die Promise API ohne async / await.",
                    loesung: "DIESE LÖSUNG IST FREMDBEZOGEN!!!\n \n \
<!DOCTYPE html> \n \
<html> \n \
<head> \n \
<script> \n \
let [res1, res2] = await Promise.all([ \n \
            fetch('https://www2.inf.h-brs.de/~aotto2s/public_html/A.txt') \n \
            .then(response => response.text()) \n \
            .then(data => console.log(data)); \n \
            fetch('https://www2.inf.h-brs.de/~aotto2s/public_html/B.txt') \n \
            .then(response => response.text()) \n \
            .then(data => console.log(data)); \n \
        ]); \n \
var text1 = res1.split('/n') \n \
var text2 = res2.split('/n') \n \
var c = 0; \n \
text1.forEach(myFunction); \n \
function myFunction(item) { \n \
    \n \
    document.getElementById(\"text\").innerHTML += item + text2[c]; \n \
    c += 1; \n \
} \n \
    \n \
        \n \
</script> \n \
<style> \n \
</style> \n \
</head> \n \
<body> \n \
<div id=\"text\"> \n \
</div> \n \
</body> \n \
</html>"
                }
            ]
        },
        {
            name: "8.2. async / await",
            id: 2,
            unteraufgaben: [
                {
                    beschreibung: "Lösen Sie die letzte Aufgabe mit async / await statt Promise.",
                    loesung: "DIESE LÖSUNG IST FREMDBEZOGEN!!! \n \n \
<!DOCTYPE html> \n \
<html> \n \
<head> \n \
<script> \n \
    \n \
    \n \
var parallel = async function (){ \n \
        \n \
    await Promise.all([ \n \
            fetch('https://www2.inf.h-brs.de/~fbende2s/public_html/A.txt') \n \
            .then(response => response.text()) \n \
            .then(data => data.split('/n'); \n \
        .then(data => data.forEach(myFunction); \n \
            fetch('https://www2.inf.h-brs.de/~fbende2s/public_html/B.txt') \n \
            .then(response => response.text()) \n \
            .then(data => console.log(data)) \n \
        .then(data => data.split('/n'); \n \
        .then(data => data.forEach(myFunction); \n \
        ]); \n \
    \n \
function myFunction(item) { \n \
    \n \
    document.getElementById(\"text\").innerHTML += item; \n \
} \n \
    \n \
        \n \
</script> \n \
<style> \n \
</style> \n \
</head> \n \
<body> \n \
<div id=\"text\"> \n \
</div> \n \
</body> \n \
</html>"
                }
            ]
        }
    ]
}