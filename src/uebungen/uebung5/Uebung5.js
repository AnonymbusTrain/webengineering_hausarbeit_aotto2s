export default {
    aufgaben: [
        {
           name: "5.1. Klasse für Vorrangrelationen",
           id: 1,
           unteraufgaben: [
                {
                    beschreibung: "\
Schreiben Sie eine ES6-Klasse Vorrang für Vorrangrelationen, z.B. new Vorrang([[\"schlafen\", \"studieren\"], \n \
[\"essen\", \"studieren\"], [\"studieren\", \"prüfen\"] ]). Wählen Sie eine Implementierung, die universell \n \
gültig, also nicht nur für dieses Beispiel gilt. (Überlegen Sie sich, über welche Properties und Methoden \n \
eine solche Klasse verfügen sollte und wie TopSort hier hinein spielt. Topologische Iterierbarkeit und topologischer \n \
Generator sind jedoch Gegenstand der nächsten Übungen weiter unten auf diesem Übungsblatt und sollten für diese \n \
Aufgaben aufgespart werden.)",
                    loesung: " \
class Vorrang { \n \
    constructor(data) { \n \
        this.data = this.topsortUtil(data); \n \
    } \n \
    getData() { \n \
        return this.data; \n \
    } \n \
    [Symbol.iterator]() { \n \
\n \
    } \n \
    topsortUtil(data, resArray = [], count = 0){ \n \
        for(var row = 0; data.length > row; ++row){ \n \
            for(var col = 0; data[row].length > col; ++col){   \n \
                if(this.getPredecessors(data[row][col], data) === 0 && !resArray.includes(data[row][col])){ \n \
                    resArray.push(data[row][col]); \n \
                } \n \
            } \n \
        } \n \
        if(count-1 === data.length){ \n \
            let result = resArray; \n \
            return result; \n \
        } \n \
        data = (this.deleteNode(resArray[count-1], data)).slice(); \n \
        \n \
        return this.topsortUtil(data, resArray, ++count); \n \
    } \n \
    deleteNode(node, data){ \n \
        var res = []; \n \
        for(var row = 0; data.length > row; ++row){ \n \
            let arr = []; \n \
            for(var col = 0; data[row].length > col; ++col){ \n \
                if(data[row][col] !== node){ \n \
                    arr.push(data[row][col]); \n \
                } \n \
            } \n \
            res.push(arr); \n \
        } \n \
        return res; \n \
    } \n \
    getPredecessors(node, data){ \n \
        var descedantCounter = 0; \n \
        for(var row=0; data.length > row; ++row){ \n \
            if(data[row][1] === node){ \n \
                ++descedantCounter; \n \
            } \n \
        } \n \
        return descedantCounter; \n \
    } \n \
} \n \
var v1 = new Vorrang([[\"studieren\", \"prüfen\"], [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"prüfen\", \"gehen\"], [\"gehen\", \"stehen\"], [\"essen\", \"schlafen\"], [\"sitzen\", \"gehen\"] ]); \n \
var v2 = new Vorrang([[5,4], [5,3], [4,3], [3,2], [2, 0], [0, 1]]) \n \
var actualData1 = v1.getData(); \n \
var actualData2 = v2.getData(); \n \
var checkData1 = [\"essen\", \"sitzen\", \"schlafen\", \"studieren\", \"prüfen\", \"gehen\", \"stehen\"]; \n \
var checkData2 = [5, 4, 3, 2, 0, 1]; \n \
console.log(actualData1); \n \
console.assert(JSON.stringify(actualData1) === JSON.stringify(checkData1), {actual: actualData1, expected: checkData1}); \n \
console.assert(JSON.stringify(actualData2) === JSON.stringify(checkData2), {actual: actualData2, expected: checkData2} );"
                }
            ]
        },
        {
            name: "5.2. Topologische Iterierbarkeit",
            id: 2,
            unteraufgaben: [
                 {
                     beschreibung: "Stellen Sie bei Ihrer Klasse aus der letzten Aufgabe die topologische Iterierbarkeit her \n \
(zunächst über das Iterationsprotokoll, ohne Generator, ohne yield).",
                     loesung: "\
class Vorrang { \n \
    constructor(data) { \n \
        this.data = data; \n \
        this.myMap = new Map(); \n \
        this.mySet = new Set(); \n \
    } \n \
    [Symbol.iterator]() { \n \
        var nextIndex = -1; \n \
        const thatData = this.data; \n \
        const thatSet = this.mySet; \n \
        const thatMap = this.myMap; \n \
        var it = thatSet.keys(); \n \
        return { \n \
            next: () => { \n \
                ++nextIndex; \n \
                this.createMap(); \n \
                this.addValueToSet(); \n \
                this.deleteValuesFromArray(); \n \
                return it.next(); \n \
            } \n \
        } \n \
    } \n \
    deleteValuesFromArray() { \n \
        const thatData = this.data; \n \
        const thatSet = this.mySet; \n \
        for(let row = 0; thatData.length > row; ++row){ \n \
            for(let col = 0; thatData[row].length > col; ++col){ \n \
                if(thatSet.has(thatData[row][col])){ \n \
                    thatData[row][col] = thatData[row][col+1]; \n \
                    thatData[row][col+1] = undefined; \n \
                } \n \
            } \n \
        } \n \
    } \n \
    addValueToSet() { \n \
        const thatMap = this.myMap; \n \
        const thatSet = this.mySet; \n \
        for(let key of thatMap.keys()){ \n \
            if(thatMap.get(key) === 0 && !thatSet.has(key)){ \n \
                thatSet.add(key); \n \
                break; \n \
            } \n \
        } \n \
    } \n \
    createMap() { \n \
        const thatData = this.data; \n \
        const thatMap = this.myMap; \n \
        for(let row = 0; thatData.length > row; ++row){ \n \
            for(let col = 0; thatData[row].length > col; ++col){ \n \
                thatMap.set(thatData[row][col], this.getPredecessors(thatData[row][col])); \n \
            } \n \
        } \n \
    } \n \
    getPredecessors(node) { \n \
        const thatData = this.data; \n \
        var descedantCounter = 0; \n \
        for(var row=0; thatData.length > row; ++row){ \n \
            if(thatData[row][1] === node){ \n \
                ++descedantCounter; \n \
            } \n \
        } \n \
        return descedantCounter; \n \
    } \n \
} \n \
 \n \
var checkData1 = [[\"studieren\", \"prüfen\"], [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"prüfen\", \"gehen\"]]; \n \
var checkData2 = [[1, 2], [1, 4], [3, 4], [2, 3], [1, 5]]; \n \
var expectedData1 = [\"schlafen\", \"essen\", \"studieren\", \"prüfen\", \"gehen\"]; \n \
var expectedData2 = [1, 2, 3, 4, 5]; \n \
var v1 = new Vorrang(checkData1); \n \
var v2 = new Vorrang(checkData2); \n \
const checkMap = new Map(); \n \
const checkSet = new Set(); \n \
var count1 = 0; \n \
for(const next of v1){ \n \
    console.log(next); \n \
    console.assert(next === expectedData1[count1++], {actual: next, expected: expectedData1[count1]}); \n \
} \n \
var count2 = 0; \n \
for(const next of v2){ \n \
    console.log(next); \n \
    console.assert(next === expectedData2[count2++], {actual: next, expected: expectedData2[count2]}); \n \
}"
                 }
             ]
         },
         {
            name: "5.3. Topologischer Generator",
            id: 3,
            unteraufgaben: [
                 {
                     beschreibung: "Stellen Sie bei Ihrer Klasse aus der vorletzten Aufgabe die topologische \n \
Iterierbarkeit mittels Generator her.",
                     loesung: "\
class Vorrang { \n \
    constructor(data) { \n \
        this.data = this.topsortUtil(data); \n \
    } \n \
    getData() { \n \
        return this.data; \n \
    } \n \
    * [Symbol.iterator]() { \n \
        const data = this.data; \n \
        for(const element of data){ \n \
            yield element; \n \
        } \n \
    } \n \
    topsortUtil(data, resArray = [], count = 0){ \n \
        for(var row = 0; data.length > row; ++row){ \n \
            for(var col = 0; data[row].length > col; ++col){   \n \
                if(this.getPredecessors(data[row][col], data) === 0 && !resArray.includes(data[row][col])){ \n \
                    resArray.push(data[row][col]); \n \
                } \n \
            } \n \
        } \n \
        if(count-1 === data.length){ \n \
            let result = resArray; \n \
            return result; \n \
        } \n \
        data = (this.deleteNode(resArray[count-1], data)).slice(); \n \
         \n \
        return this.topsortUtil(data, resArray, ++count); \n \
    } \n \
    deleteNode(node, data){ \n \
        var res = []; \n \
        for(var row = 0; data.length > row; ++row){ \n \
            let arr = []; \n \
            for(var col = 0; data[row].length > col; ++col){ \n \
                if(data[row][col] !== node){ \n \
                    arr.push(data[row][col]); \n \
                } \n \
            } \n \
            res.push(arr); \n \
        } \n \
        return res; \n \
    } \n \
    getPredecessors(node, data){ \n \
        var descedantCounter = 0; \n \
        for(var row=0; data.length > row; ++row){ \n \
            if(data[row][1] === node){ \n \
                ++descedantCounter; \n \
            } \n \
        } \n \
        return descedantCounter; \n \
    } \n \
} \n \
var v1 = new Vorrang([[\"studieren\", \"prüfen\"], [\"schlafen\", \"studieren\"], [\"essen\", \"studieren\"], [\"prüfen\", \"gehen\"], [\"gehen\", \"stehen\"], [\"essen\", \"schlafen\"], [\"sitzen\", \"gehen\"] ]); \n \
var v2 = new Vorrang([[5,4], [5,3], [4,3], [3,2], [2, 0], [0, 1]]) \n \
var actualData1 = v1.getData(); \n \
var actualData2 = v2.getData(); \n \
var expectedData1 = [\"essen\", \"sitzen\", \"schlafen\", \"studieren\", \"prüfen\", \"gehen\", \"stehen\"]; \n \
var expectedData2 = [5, 4, 3, 2, 0, 1]; \n \
var counter1 = 0; \n \
for(const elem of v1){ \n \
    console.log(elem); \n \
    console.assert(elem === expectedData1[counter1++], {actual: elem, expected: expectedData1[counter1]}) \n \
} \n \
var counter2 = 0; \n \
for(const elem of v2){ \n \
    console.log(elem); \n \
    console.assert(elem === expectedData2[counter2++], {actual: elem, expected: expectedData2[counter2]}) \n \
}"
                 }
             ]
         }
    ]
}