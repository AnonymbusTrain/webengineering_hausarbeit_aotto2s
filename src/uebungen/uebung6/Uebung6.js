export default {
    aufgaben: [
        {
            name: "Aufgabe 6.1: Funktionen in JavaScript",
            id: 1,
            unteraufgaben: [
                {
                    beschreibung: "Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter \n \
entgegen nimmt und eine Funktion zurück gibt, die dieses Argument zurück gibt.",
                    loesung: "\
const identity_funcition = (x) => { \n \
    return identity = () => { \n \
        return x; \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt. \n \
(Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die \n \
auf y angewandt wird.)",
                    loesung: "\
const addf = (x) => { \n \
    return add = (y) => { \n \
        return x+y; \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine \n \
Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf \n \
= applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend applyf(mul)(5)(6) soll \n \
30 liefern, wenn mul die binäre Multiplikation ist.",
                    loesung: "\
const applyf = (binaryFunction) => { \n \
    return (x) => { \n \
        return (y) => { \n \
            return binaryFunction(x,y); \n \
        } \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein \n \
Argument nimmt, um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen \n \
nimmt, z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.",
                    loesung: "\
const curry = (func, x) => { \n \
    return (y) => { \n \
        return func(x, y); \n \
    } \n \
}"
                },
                {
                    beschreibung: "Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den \n \
letzten Aufgaben, ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 \n \
ergeben und lässt sich natürlich auch direkt implementieren. Das ist aber hier nicht die Aufgabe.) \n \
Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?",
                    loesung: "\
var inc = addf(1); \n \
var inc = applyf((x, y) => {return x+y})(1); \n \
var inc = curry((x, y) => {return x+y}, 1);"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre \n \
Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.",
                    loesung: "\
const methodize = (func) => { \n \
    return function(x) { \n \
        return func(this, x); \n \
    } \n \
} \n \
Number.prototype.add = methodize((x, y) => x+y);"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre \n \
Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.",
                    loesung: "\
const demethodize = (func) => { \n \
    return (x, y) => { \n \
        return func.apply(x, [y]); \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt, \n \
die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); double(11) soll 22 \n \
ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.",
                    loesung: "\
const twice = (func) => { \n \
    return (x) => { \n \
        return func(x, x); \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion \n \
transformiert, die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.",
                    loesung: "\
const composeu = (func1, func2) => { \n \
    return (x) => { \n \
        return func2(func1(x)); \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert, \n \
die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.",
                    loesung: "\
const composeb = (func1, func2) => { \n \
    return (x, y, z) => { \n \
        return func2(func1(x, y), z); \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden, \n \
z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch \n \
add_once(3, 4) einen Fehlerabbruch bewirken.",
                    loesung: "\
const once = (func) => { \n \
    var executed = false; \n \
    return (x, y) => { \n \
        if (executed === false){ \n \
            executed = true; \n \
            return func(x, y); \n \
        } else { \n \
            throw \"You can't use this function twice!\"; \n \
        } \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen \n \
Zähler hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und \n \
counter.dec() wieder 10 ergeben.",
                    loesung: "\
const counterf = (count) => { \n \
    return { \n \
        inc: function() { \n \
            return ++count; \n \
        }, \n \
        dec: function() { \n \
            return --count; \n \
        } \n \
    } \n \
}"
                },
                {
                    beschreibung: "Schreiben Sie eine rücknehmbare Funktion revocable(), die als Parameter eine Funktion nimmt und diese bei \n \
Aufruf ausführt. Sobald die Funktion aber mit revoke() zurück genommen wurde, führt ein erneuter Aufruf \n \
zu einem Fehler.",
                    loesung: "\
const revocable = (func) => { \n \
    var executable = true; \n \
    return { \n \
        invoke: function(x) { \n \
            if (executable) { \n \
                return func(x); \n \
            } else { \n \
                throw \"The function is not executable!\"; \n \
            } \n \
        }, \n \
        revoke: function() { \n \
            executable = false; \n \
        } \n \
    } \n \
}"
                },
                {
                    beschreibung: "Implementieren Sie ein \"Array Wrapper\"-Objekt mit den Methoden get, store und append, so dass ein Angreifer \n \
keinen Zugriff auf das innere, private Array hat.",
                    loesung: "\
const vector = () => { \n \
    var my_array = []; \n \
    return { \n \
        append: function(item) { \n \
            my_array.push(item); \n \
        }, \n \
        store: function(position, item){ \n \
            my_array[position] = item; \n \
        }, \n \
        get: function(position){ \n \
            return my_array[position]; \n \
        } \n \
    } \n \
}"
                }
            ]
        }
    ]
}