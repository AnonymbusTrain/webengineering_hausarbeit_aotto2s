export default {
    aufgaben: [
        {
            name: "7.1. Performanzmessungen von DOM-Operationen",
            id: 1,
            unteraufgaben: [
                {
                    beschreibung: "Implementieren Sie Performanzmessungen zum Vergleich von innerHTML, innerText, \n \
textContent und outerHTML selbstständig in JavaScript durch Nutzung der DOM API. \n \
Geben Sie die Messergebnisse als Tabelle aus",
                    loesung: "\
<!DOCTYPE html> \n \
<html lang=\"en\"> \n \
<head> \n \
    <meta charset=\"UTF-8\"> \n \
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> \n \
    <title>Document</title> \n \
    <style> \n \
        table, td { \n \
            border: 1px solid black; \n \
        } \n \
    </style> \n \
</head> \n \
<body> \n \
    <button onclick=\"performanceOfAll()\">Performance</button>    \n \
    <br> \n \
    <br> \n \
    <table id=\"performanceTable\"> \n \
        <tr id=\"row1\"> \n \
            <td id=\"cell1\"></td> \n \
            <td id=\"cell2\"></td> \n \
        </tr> \n \
        <tr id=\"row2\"> \n \
            <td id=\"cell3\"></td> \n \
            <td id=\"cell4\"></td> \n \
        </tr> \n \
    </table> \n \
    <p id=\"myText\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt lobortis lorem ut interdum. Praesent varius mi ut arcu vestibulum molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Duis posuere quam mauris, a porta neque fermentum non. Nullam ultricies ligula non ipsum molestie feugiat. Praesent aliquam sollicitudin magna ac tristique. Nulla viverra ante non pretium volutpat. Nulla luctus, lorem in rutrum ultricies, lorem tortor lobortis arcu, id eleifend lorem mi sit amet lorem. Aenean ornare eleifend pretium. \n \
 \n \
        Nulla sed enim in ex ornare euismod. Sed eu turpis scelerisque, porttitor nisl id, sollicitudin nunc. Nulla condimentum hendrerit ante non convallis. Aliquam mollis enim in nunc lacinia, vel feugiat lectus laoreet. Quisque enim orci, feugiat sed velit eu, feugiat vehicula neque. Praesent neque risus, hendrerit sit amet lectus quis, efficitur scelerisque neque. Quisque convallis molestie ipsum, eget maximus orci ultricies vel. Morbi tempus, enim eget consectetur rhoncus, est mi condimentum lorem, sit amet vulputate orci sem a odio. In mattis dui et tempus convallis. Vivamus nibh leo, hendrerit vitae placerat hendrerit, ultricies sit amet odio. Mauris eget ligula at ex faucibus blandit. Nunc interdum augue sagittis ex feugiat fringilla. Morbi consectetur erat nibh, non mattis orci lobortis sit amet. \n \
         \n \
        Aliquam erat volutpat. Vivamus eu hendrerit metus. Nulla hendrerit urna magna, in congue ex elementum sit amet. Fusce id ex sit amet tellus iaculis euismod eu nec erat. Integer pulvinar tellus velit, ac malesuada felis lobortis ac. Sed nisl libero, venenatis ut turpis in, faucibus eleifend elit. Morbi dolor ex, condimentum aliquam blandit sit amet, pellentesque non ipsum. Cras dignissim orci vitae libero pretium, at luctus mauris malesuada. Phasellus vitae arcu luctus, bibendum sem sed, ullamcorper urna. Vestibulum sagittis quam non varius commodo. Etiam egestas fringilla bibendum. Nulla bibendum augue in nibh euismod varius. Vivamus suscipit lorem at ligula mollis rutrum. Sed vel arcu in libero accumsan suscipit vel id quam. Ut egestas diam erat. \n \
         \n \
        Phasellus hendrerit gravida egestas. Nullam mollis viverra molestie. Fusce accumsan diam lorem, ac pharetra libero scelerisque sed. Suspendisse sagittis, est pretium mattis feugiat, ex massa dignissim augue, vel ultrices metus risus eu dolor. In maximus condimentum ex, et faucibus sapien fermentum non. Sed tincidunt, elit ac auctor cursus, lectus lorem convallis eros, a ultrices libero risus nec massa. Vestibulum sed dignissim elit, sit amet vulputate massa. Mauris scelerisque interdum augue non rhoncus. Nam a blandit massa. Cras interdum accumsan nulla, ut pulvinar ipsum. Sed pharetra dictum cursus. Donec ut eros non lectus ultrices tempus. Ut lobortis ligula augue, a volutpat leo tincidunt interdum. Suspendisse quis risus nec purus tempor ultricies ac quis dolor. Mauris tristique eleifend dignissim. \n \
         \n \
        Duis ut nunc dignissim, sagittis elit vitae, efficitur dolor. In et mi lorem. Duis in lectus vitae turpis bibendum sollicitudin. Vestibulum id laoreet nunc, eu fringilla sem. Proin sodales egestas nibh, id semper nulla fringilla nec. Mauris nunc sapien, vestibulum vel scelerisque at, sagittis a ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sed tellus lorem. \n \
         \n \
        Etiam vulputate auctor erat, eu porta nisi porttitor congue. Integer fringilla tempus tortor eu condimentum. Nullam et vestibulum ligula. Donec faucibus ante et diam feugiat, nec commodo tellus efficitur. Ut ac justo id mauris consequat congue. Vestibulum viverra eros viverra mauris ultrices porttitor. Vivamus malesuada viverra purus, vitae pretium dolor facilisis in. Quisque dignissim est in luctus accumsan. In tristique quam nibh. Donec gravida ligula malesuada erat ornare porttitor. Maecenas ut sodales dolor, eget euismod tellus. Morbi in lobortis purus. \n \
         \n \
        Maecenas faucibus felis eget libero maximus, at vestibulum urna hendrerit. Integer lobortis nibh tellus, non ornare magna interdum fermentum. Duis id felis sed erat fermentum mollis eget in neque. In tincidunt erat id malesuada venenatis. Maecenas vestibulum augue a sagittis lobortis. In hac habitasse platea dictumst. Nullam sed consectetur erat. Suspendisse dignissim nibh a varius pulvinar. Aenean quis turpis congue tortor rhoncus bibendum et vel urna. Donec congue neque eget dui pharetra mattis sit amet non purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in diam a tortor efficitur tincidunt. Morbi dignissim accumsan condimentum. Proin consequat odio est, at eleifend ante venenatis non. Nam at lacus nisi. Proin convallis luctus neque, at pharetra ipsum porttitor ac. \n \
         \n \
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ultrices ex vitae nunc facilisis, quis tincidunt elit molestie. Aenean nec nisi pulvinar leo condimentum porttitor non nec mi. Maecenas ac sollicitudin urna. Nam congue placerat nisi, eget congue metus venenatis non. Maecenas consequat sem ac tellus tristique condimentum. Morbi ultricies odio at turpis imperdiet, ac imperdiet nunc rutrum. In pellentesque efficitur dui lobortis tempor. Maecenas in consequat urna, bibendum pulvinar tortor. Morbi ultricies porta ex fringilla ultrices. Nam commodo velit quam, laoreet ullamcorper dolor euismod non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim eget dui eget imperdiet. Nullam vel condimentum orci. Donec vel est dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p> \n \
     \n \
    <script> \n \
 \n \
    const timeCheckInnerHTML = () => { \n \
        const t0 = performance.now(); \n \
        document.getElementById(\"myText\").innerHTML; \n \
        const t1 = performance.now(); \n \
        return t1-t0; \n \
    } \n \
 \n \
    const timeCheckInnerText = () => { \n \
        const t0 = performance.now(); \n \
        document.getElementById(\"myText\").innerText; \n \
        const t1 = performance.now(); \n \
        return t1-t0; \n \
    } \n \
 \n \
    const timeCheckTextContent = () => {     \n \
        const t0 = performance.now(); \n \
        document.getElementById(\"myText\").textContent; \n \
        const t1 = performance.now(); \n \
        return t1-t0; \n \
    } \n \
 \n \
    const timeCheckOuterHTML = () => { \n \
        const t0 = performance.now(); \n \
        document.getElementById(\"myText\").outerHTML; \n \
        const t1 = performance.now(); \n \
        return t1-t0; \n \
    } \n \
 \n \
    const performanceOfAll = () => { \n \
        document.getElementById(\"cell1\").innerText =  \"Inner HTML: \" + timeCheckInnerHTML() + \"ms\"; \n \
        document.getElementById(\"cell2\").innerText =  \"Inner Text: \" + timeCheckInnerText() + \"ms\"; \n \
        document.getElementById(\"cell3\").innerText =  \"Text Content: \" + timeCheckTextContent() + \"ms\"; \n \
        document.getElementById(\"cell4\").innerText =  \"Outer HTML: \" + timeCheckOuterHTML() + \"ms\"; \n \
    } \n \
     \n \
    </script> \n \
</body> \n \
</html>"
                }
            ]
        }
    ]
}