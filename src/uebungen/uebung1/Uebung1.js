export default {
    aufgaben: [
        {
           name: "1.1 Fachliche Argumentation über Erfolgsprinzipien des WWW",
           id: 1,
           unteraufgaben: [
                {
                    beschreibung: "Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?",
                    loesung: "Die referentielle Integrität war verletzt, deswegen könnten broken links entstehen. \n \
Das Projekt von Tim-Berners-Lee war viel zu wage für die Jury. "
                },
                {
                    beschreibung: "Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?",
                    loesung: "das WWW hatte ein sehr großes potential für zukünftige Weiterentwicklung."
                },
                {
                    beschreibung: "Was wäre der Preis für die garantierte Verhinderung von “broken links”?",
                    loesung: "Zentrale Kontrolle und Geschlossenheit. "
                } 
           ]
        },
        {
            name: "1.2 HTTP",
            id: 2,
            unteraufgaben: [
                {
                    beschreibung: "Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?",
                    loesung: "Die Anfrage war erfolgreich"
                },
                {
                    beschreibung: "Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?",
                    loesung: "Die angeforderte Ressource steht ab sofort unter der im „Location“-Header-Feld angegebenen \n \
Adresse bereit (auch Redirect genannt). Die alte Adresse ist nicht länger gültig."
                },
                {
                    beschreibung: "Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? \n \
Was können Sie dagegen tun?",
                     loesung: "Die Anfrage-Nachricht war fehlerhaft"
                },
                {
                    beschreibung: "Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? \n \
Was können Sie dagegen tun?",
                     loesung: "Der Client hat keine ausreichende Berechtigung um auf die angefragene Ressource zugreifen zu können."
                },
                {
                    beschreibung: "In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen \n \
des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die \n \
Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?",
                      loesung: "Statt der OPTIONS-Anfrage könnte man die GET-Anfrage benutzen."
                }
            ]
        },
        {
            name: "1.3 HTML-Literatur lesen und Fragen beantworten",
            id: 3,
            unteraufgaben: [
                {
                    beschreibung: "Was ist HTML?",
                    loesung: "Das ist eine Hypertext-Auszeichnungssprache, die zur Strukturierung von Dokumenten dient. "
                },
                {
                    beschreibung: "Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?",
                    loesung: "<ol> \n \
<li>something</li> \n \
<ol> \n \
<li>something</li> \n \
<ol> \
<li>something</li> \n \
</ol> \n \
<li>something</li> \n \
</ol> \n \
<li>something</li> \n \
</ol>"
                },
                {
                    beschreibung: "Wie ist eine HTML-Tabelle aufgebaut?",
                    loesung: "HTML-Tabellen werden Zeile für Zeile aufgebaut. Das Innenleben einer Tabelle \n \
besteht aus Tabellenzeilen (<tr>), in denen die einzelnen Tabellenzellen liegen, und \n \
dem caption-Tag. "
                },
                {
                    beschreibung: "Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?",
                    loesung: "Die Namen sollen konsistent und selbsterklärend sein. Bei Unix Systemen \n \
wird bei den Dateinamen mit low und upper case unterschieden, in Windows ist jedoch \n \
nicht der Fall, deswegen sollte man Namen, die sich nur von der größe der Buchstaben \n \
unterscheiden, vermeiden. Sonderzeichen sollte man besser nicht benutzten nur '_' ist \n \
erlaubt. Die Länge eines Dateinamen sollte nicht größer, als 256 sein. "
                },
                {
                    beschreibung: "Wie baut man in HTML ein Menü?",
                    loesung: "Mit dem <menu> tag kann man Menüs aufbauen. die Elemente fügt man mit dem <li> Tag hinzu."
                },
                {
                    beschreibung: "Welche Attribute sollte man bei Bildern wie verwenden?",
                    loesung: "Der <picture> Tag hat einen oder mehr <source> Elemente, diese verfügen über ein media Attribut, \n \
welches definiert, wie das Bild am ehesten passt und ein srcset Attribut, welches es ermöglicht dem \n \
Browser das Bild auszusuchen, was am besten zu der aktuellen Ansicht/Gerät passt.  Das Element \n \
<img> sollte zuletzt verwendet werden. Es hat das Atribut src, welches den Pfad der Datei angibt"
                }
            ]
        },
        {
            name: "1.4. HTML Wireframe",
            id: 4,
            unteraufgaben: [
                {
                    beschreibung: "Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man diesen Wireframe exakt nachbilden?",
                    image: "wireframe01.jpg",
                    loesung: "\
<!DOCTYPE html>\n \
<html> \n \
<head> \n \
<title>Page Title</title> \n \
</head> \n \
<body> \n \
<h1>Übung 1.2: Inventors of the Web</h1> \n \
<ul> \n \
    <li><u><mark><strong>Tim Berners-Lee:</u></mark></strong> WWW, HTTP, HTML, URI</li> \n  \
    <li><strong>Hakom Lie and Bert Bos:</strong> CSS</li> \n  \
    <li><strong>Brendan Eich:</strong> JavaScript</li> \n  \
</ul> \n \
<h2>Inventors of the WWW</h2> \n \
<table cellspacing=\"1\" bgcolor = \"#000000\"> \n \
    <tr bgcolor=\"#ffffff\"> \n \
            <th colspan=\"4\"> Inventors of the WWW </th > \n \
    </tr> \n \
    <tr bgcolor=\"#ffffff\"> \n \
            <th><strong>WWW</strong></th> \n \
            <th><strong>HTML</strong></th> \n \
            <th><strong>CSS</strong></th> \n \
            <th><strong>JavaScript</strong></th> \n \
    </tr> \n \
    <tr bgcolor=\"#ffffff\"> \n \
        <th><mark>Tim Berners-Lee</mark></th> \n \
        <th><mark>Tim Berners-Lee</mark></th> \n \
        <th>Hakom Lie and Bert Bos</th> \n \
        <th>Brendon Eich</th> \n \
    </tr> \n \
</table> \n \
<hr> \n \
<h2>Inventors of the WWW</h2> \n \
<table> \n \
    <tr> \n \
        <th><strong> HTML </strong></th> \n \
        <th>|</th> \n \
        <th> Javascript </th> \n \
    </tr> \n \
    <tr> \n \
        <th><img src=\"https://kaul.inf.h-brs.de/we/assets/img/tbl.jpg\" /></th> \n \
        <th>|</th> \n \
        <th><img src=\"https://kaul.inf.h-brs.de/we/assets/img/eich.jpg\"/></th> \n \
    </tr> \n \
    <tr> \n \
        <th><mark>Tim Berners-Lee</mark></th> \n \
        <th>|</th> \n \
        <th>Brendon Eich</th> \n \
    </tr> \n \
</table> \n \
</body> \n \
</html>"
                }
            ]
        }
    ]
}