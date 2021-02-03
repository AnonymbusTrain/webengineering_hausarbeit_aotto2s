export default {
  aufgaben: [
    {
      name: "4.1. Funktionen",
      id: 1,
      unteraufgaben: [
        {
          beschreibung:
            "Schreiben Sie eine Funktion identity(), die ein Argument als Parameter entgegen nimmt und \n \
dieses als Ergebnis zurück gibt.",
          loesung: " \n \
function identity(x) { \n \
    return x; \n \
}",
        },
        {
          beschreibung:
            "Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt \n \
und eine Funktion zurück gibt, die dieses Argument zurück gibt.",
          loesung: " \n \
function identity_function(x) { \n \
    function identity(x){ \n \
        return x; \n \
    }; \n \
    return identity(x); \n \
}"
        },
        {
          beschreibung:
            "Schreiben Sie zwei binäre Funktionen add und mul, die Summe und Produkt berechnen.",
          loesung: " \n \
function add(a,b) { \n \
    return a+b; \n \
} \n \
function mul(a,b){ \n \
    return a*b; \n \
}"
        },
        {
          beschreibung:
            "Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. \n \
(Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)",
          loesung: " \n \
function addf(x) { \n \
    return function(y){ \n \
        return x + y; \n \
    }; \n \
}"
        },
        {
          beschreibung:
            "Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion \n \
addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) \n \
soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.",
          loesung: " \n \
function applyf(func) { \n \
    return function(x){ \n \
        return function(y){ \n \
            return func(x,y); \n \
        }; \n \
    }; \n \
}"
        }
      ]
    },
    {
        name: "4.2. Objekte",
        id: 2,
        unteraufgaben: [
             {
                 beschreibung: "Schreiben Sie die Prototypen Person und Auto in JavaScript, so dass jede Person weiß, \n \
welche Autos sie besitzt. Schreiben Sie eine Funktion conflict(), die feststellt, ob ein Auto von mehr \n \
als einer Person besessen wird.",
                 loesung: " \n \
function Person(vorname, nachname) { \n \
    this.vorname = vorname; \n \
    this.nachname = nachname; \n \
    this.autos = []; \n \
} \n \
\n \
Person.prototype.addAuto = function(auto) { \n \
    this.autos.push(auto); \n \
    if( typeof auto.personCounter == 'undefined' ) { \n \
        auto.personCounter = 0; \n \
    } \n \
    ++auto.personCounter; \n \
} \n \
\n \
Person.prototype.getAutos = function() {  \n \
    return this.autos; \n \
} \n \
\n \
function Auto(preis, marke) { \n \
    this.personCounter; \n \
    this.preis = preis; \n \
    this.marke = marke; \n \
} \n \
\n \
function conflict(auto) { \n \
    if(auto.personCounter > 1) { \n \
        console.log(\"Es besteht ein Konflikt! Auto wird von mehr als einer Person besetzt!!!\"); \n \
    } \n \
    else { \n \
        console.log(\"Es besteht kein Konflikt!\"); \n \
    } \n \
} \n \
\n \
var a1 = new Auto(2000, \"Mazda\"); \n \
var a2 = new Auto(3000, \"Toyota\"); \n \
var a3 = new Auto(4000, \"Volkswagen\"); \n \
var a4 = new Auto(5000, \"Porsche\"); \n \
var p1 = new Person(\"John\", \"Cena\"); \n \
var p2 = new Person(\"Stas\", \"Becker\"); \n \
p1.addAuto(a1); \n \
p1.addAuto(a2); \n \
p2.addAuto(a2); \n \
p2.addAuto(a3); \n \
console.log(p1.getAutos()); \n \
console.log(p2.getAutos()); \n \
console.log(conflict(a3)); \n \
console.log(conflict(a2)); \n \
console.log(conflict(a1)); \n \
                "
             }
         ]
     },
     {
        name: "4.3. Fibonacci",
        id: 3,
        unteraufgaben: [
             {
                 beschreibung: "Schreiben Sie im Browser die Fibonacci-Funktion in JavaScript und geben Sie \n \
die ersten 2000 Fibonacci-Zahlen 0,1,1,2,3,5,8,13,... auf der Konsole mit console.log() aus. \n \n \
Achten Sie auf Performanz: Berechnen Sie jeden Fibonacci-Wert nur einmal. Speichern Sie zu diesem Zweck \n \
jede bereits berechnete Fibonacci-Zahl in einer Tabelle.",
                 loesung: " \n \
<!DOCTYPE html> \n \
<html lang=\"en\"> \n \
<head> \n \
    <meta charset=\"UTF-8\"> \n \
    <meta name = \"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n \
    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> \n \
    <title>Document</title> \n \
</head> \n \
<body> \n \
    <script> \n \
    \n \
        function fibonachi() { \n \
            var body = document.getElementsByTagName(\"body\")[0]; \n \
            var table = document.createElement(\"table\"); \n \
            var tblBody = document.createElement(\"tbody\"); \n \
            var first = 0; \n \
            var second = 1; \n \
            var count = 0; \n \
            \n \
            for (var i = 0; i < 200; i++) { \n \
                var row = document.createElement(\"tr\"); \n \
                for (var j = 0; j < 5; j++) { \n \
                var cell1 = document.createElement(\"td\"); \n \
                var cell2 = document.createElement(\"td\"); \n \
                var cellText1 = document.createTextNode(++count + \": \" + first); \n \
                console.log(count + \":\" + first); \n \
                var cellText2 = document.createTextNode(++count + \": \" + second); \n \
                console.log(count + \":\" + second); \n \
                \n \
                cell1.appendChild(cellText1); \n \
                cell2.appendChild(cellText2); \n \
                row.appendChild(cell1); \n \
                row.appendChild(cell2); \n \
                \n \
                var tmp = second; \n \
                first = first + second; \n \
                second = tmp + first; \n \
                } \n \
                tblBody.appendChild(row); \n \
            } \n \
            \n \
            table.appendChild(tblBody); \n \
            \n \
            body.appendChild(table); \n \
            \n \
            table.setAttribute(\"border\", \"2\"); \n \
        } \n \
        \n \
    </script> \n \
    <input type=\"button\" value=\"Generate a table.\" onclick=\"fibonachi()\"> \n \
</body> \n \
</html>"
             },
             {
             beschreibung: "Was ist die größte Fibonacci-Zahl, die sich noch als Integer sicher speichern \n \
lässt (Number.MAX_SAFE_INTEGER)? Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das?",
             loesung: "Die größte Fibonacci-Zahl, die sich als Integer sicher speichern lässt ist 8944394323791464. \n \
Das ist die 79te Zahl in der Fibonacci-Folge, wenn 0 die erste und 1 die Zweite Zahl sind. "
             },
             {
                 beschreibung: "Was ist die größte Fibonacci-Zahl, die sich noch als Number speichern lässt (Number.MAX_VALUE)? \n \
Die wievielte Fibonacci-Zahl in der Fibonacci-Folge ist das (d.h. welche Stelle in der Fibonacci-Folge)?",
                 loesung: "Die größte Fibonacci-Zahl, die sich als Number sicher speichern lässt ist 1.3069892237633987e+308. \n \
Das ist die 1477te Zahl in der Fibonacci-Folge, wenn 0 die erste und 1 die Zweite Zahl sind. "
             },
             {
                 beschreibung: "Wechseln Sie zu BigInt, um alle 2000 Fibonacci-Zahlen korrekt anzuzeigen. Geben Sie hier HTML- und \n \
JavaScript-Code zusammen ein:",
                 loesung: " \n \
<!DOCTYPE html> \n \
<html lang=\"en\"> \n \
<head> \n \
    <meta charset=\"UTF-8\"> \n \
    <meta name = \"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n \
    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"> \n \
    <title>Document</title> \n \
</head> \n \
<body> \n \
    <script> \n \
    \n \
        function fibonachi() { \n \
            var body = document.getElementsByTagName(\"body\")[0]; \n \
            var table = document.createElement(\"table\"); \n \
            var tblBody = document.createElement(\"tbody\"); \n \
            var first = BigInt(\"0\"); \n \
            var second = BigInt(\"1\"); \n \
            var count = 0; \n \
            \n \
            for (var i = 0; i < 1000; i++) { \n \
                var row1 = document.createElement(\"tr\"); \n \
                var row2 = document.createElement(\"tr\"); \n \
                var cell1 = document.createElement(\"td\"); \n \
                var cell2 = document.createElement(\"td\"); \n \
                console.log(++count + \":\" + first); \n \
                var cellText1 = document.createTextNode(count + \": \" + first); \n \
                console.log(++count + \":\" + second); \n \
                var cellText2 = document.createTextNode(count + \": \" + second); \n \
                \n \
                cell1.appendChild(cellText1); \n \
                cell2.appendChild(cellText2); \n \
                row1.appendChild(cell1); \n \
                row2.appendChild(cell2); \n \
                \n \
                var tmp = second; \n \
                first = first + second; \n \
                second = tmp + first; \n \
                \n \
                tblBody.appendChild(row1); \n \
                tblBody.appendChild(row2); \n \
            } \n \
            \n \
            table.appendChild(tblBody); \n \
            \n \
            body.appendChild(table); \n \
            \n \
            table.setAttribute(\"border\", \"2\"); \n \
            \n \
            console.log((Number.MAX_VALUE+\"\")) \n \
            console.log((8944394323791464 + \"\"). length); \n \
        } \n \
        \n \
    </script> \n \
    <input type=\"button\" value=\"Generate a table.\" onclick=\"fibonachi()\"> \n \
</body> \n \
</html>"
             }
         ]
     }
  ]
};
