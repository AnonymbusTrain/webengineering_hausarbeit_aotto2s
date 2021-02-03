export default {
    aufgaben: [
        {
           name: "3.1. Responsiv mit Flexbox Desktop-First",
           id: 1,
           unteraufgaben: [
                {
                    beschreibung: "mit HTML und CSS Flexbox folgendes responsive Webdesign \n \
nach der Desktop-First-Strategie!",
                    loesung: "<!DOCTYPE html> \n \
\n \
<html> \n \
<head> \n \
<style> \n \
.wrapper { \n \
  display: flex; \n \
  flex-flow: row wrap; \n \
} \n \
\n \
.wrapper > * { \n \
  padding: 50px; \n \
  flex: 1 100%; \n \
} \n \
\n \
.header { \n \
  background: red; \n \
  height: 100px; \n \
  margin-down: 10px; \n \
  \n \
} \n \
.left-aside { \n \
  background: #0eff00; \n \
  margin-top: 10px; \n \
  margin-right: 10px; \n \
  height: 1000px; \n \
  order: 1;  \n \
} \n \
\n \
.center {  \n \
  background: blue; \n \
  margin-top: 10px; \n \
  height: 1000px; \n \
  order: 2; \n \
  \n \
} \n \
\n \
.right-aside { \n \
  background: violet; \n \
  margin-top: 10px; \n \
  margin-left: 10px; \n \
  height: 1000px; \n \
  order: 3; \n \
} \n \
.aside { \n \
  flex: 1 0 0; \n \
} \n \
@media all and (max-width: 1000px) { \n \
    .center{ flex: 100%; } \n \
    \n \
} \n \
\n \
@media all and (max-width: 1500px) { \n \
    .center{ flex: 75% ; } \n \
} \n \
\n \
</style> \n \
</head> \n \
\n \
\n \
<div class=\"wrapper\"> \n \
  <header class=\"header\"></header> \n \
  <aside class=\"aside center\"> </aside> \n \
  <aside class=\"aside left-aside\"></aside> \n \
  <aside class=\"aside right-aside\"></aside> \n \
</div> \n \
</html>",
                    image: "holy-grail1.png"
                }
            ]
        },
        {
          name: "3.2. Responsiv mit Grid Mobile-First",
          id: 2,
           unteraufgaben: [
                {
                  beschreibung: "Implementieren Sie das gleiche responsive Webdesign wie in Aufgabe 3.1 allerdings mit Grid \n \
und der Mobile-First-Strategie! Vermeiden Sie diesmal außerdem das Erscheinen von Scrollbars.",
                  loesung: "<!DOCTYPE html> \n \
<html> \n \
<head> \n \
<style> \n \
.container{ \n \
  display: grid; \n \
  grid-template-columns: 33% 33% 33% ; \n \
  grid-template-rows: 12% 29% 29% 30% ; \n \
    column-gap: 10px; \n \
    row-gap: 10px; \n \
} \n \
.header { \n \
  background: red; \n \
  height: 200px; \n \
  grid-row: 1 / 1; \n \
  grid-column: 1 / 4; \n \
} \n \
.item1 { \n \
  background: #0eff00; \n \
  height: 500px; \n \
  grid-row: 2 / 2; \n \
  grid-column: 1 / 4; \n \
} \n \
.item2 {  \n \
  background: blue; \n \
  height: 500px; \n \
  grid-row: 3 / 3; \n \
  grid-column: 1 / 4; \n \
} \n \
\n \
.item3 { \n \
  background: violet; \n \
  height: 500px; \n \
  grid-row: 4 / 4; \n \
  grid-column: 1 / 4; \n \
} \n \
@media all and (min-width: 700px) { \n \
    .container{ grid-template-rows: 17% 42% 40% ; } \n \
    .item1{ grid-column: 1 / 2 } \n \
    .item2{ grid-column: 2 / 4 } \n \
    .item2{ grid-row: 2 / 2 } \n \
    .item3{ grid-row: 3 / 3 } \n \
} \n \
\n \
@media all and (min-width: 900px) { \n \
  .container{ grid-template-rows: 30% 70%; } \n \
    .item1{ grid-column: 1 / 2 } \n \
    .item2{ grid-column: 2 / 3 } \n \
    .item3{ grid-row: 2 / 2; grid-column: 3 / 4;  } \n \
} \n \
</style> \n \
</head> \n \
<body> \n \
<div class=\"container\"> \n \
  <header class=\"header\"> </header> \n \
  <item class=\"item1\"> </item> \n \
  <item class=\"item2\"> </item> \n \
  <item class=\"item3\"> </item> \n \
</div> \n \
</body> \n \
</html> \n \
"
                }
            ]
        },
        {
          name: "3.3. Responsiv mit Grid",
          id: 3,
          unteraufgaben: [
               {
                   beschreibung: "Implementieren Sie folgende Landing Page responsiv mit Grid Layout. Vermeiden Sie außerdem das \n \
Erscheinen von Scrollbars so weit wie möglich.",
                   loesung: "<!DOCTYPE html> \n \
<html> \n \
<head> \n \
<style> \n \
.empty-item1 {grid-area: empty1;  } \n \
.empty-item2 {grid-area: empty2; } \n \
.item1 { grid-area: text1; color: #ffffff; } \n \
.item2 { grid-area: text2; color: #ffffff; } \n \
.item3 { grid-area: text3; color: #ffffff; } \n \
.item4 { grid-area: text4; color: #ffffff; } \n \
.picture-item { grid-area: picture; } \n \
.image { \n \
    grid-column: 1 / 1; \n \
    grid-row: 1 / 8; \n \
} \n \
.head-container{ \n \
  display: grid; \n \
  grid-template-areas:  \n \
    'empty1 empty1 empty1 text1 text2 text3 text4 empty2 empty2'; \n \
} \n \
.head-container > div { \n \
  text-align: center; \n \
  padding: 20px 0; \n \
  font-size: 30px;  \n \
  background-color: #363636; \n \
} \n \
.main-container { \n \
  display: grid; \n \
  grid-template-columns: 700px 43%; \n \
  grid-template-rows: repeat(8, 12.5%); \n \
  background-color: #ebeae6; \n \
  \n \
} \n \
.button { \n \
  background-color: #f88e37; \n \
  color: #ffffff; \n \
  margin: 2rem 0; \n \
  padding: 2rem; \n \
  padding-top:30px; \n \
  border: none; \n \
  border-radius: 5px; \n \
  text-transform: uppercase; \n \
  font-size: 1.3rem; \n \
  font-family: Arial, Helvetica, sans-serif; \n \
  font-weight: bold; \n \
  text-align: center; \n \
  line-height: 0px; \n \
  grid-column: 2 / 2; \n \
  grid-row: 5 / 5; \n \
} \n \
.text1{ \n \
  font-size: 1.5rem; \n \
  font-family: Arial, Helvetica, sans-serif; \n \
  text-align: center; \n \
    grid-column: 2 / 2; \n \
    grid-row: 2 / 2; \n \
} \n \
.text2{ \n \
  font-size: 1.5rem; \n \
  font-family: Arial, Helvetica, sans-serif; \n \
  text-align: center; \n \
    grid-column: 2 / 2; \n \
    grid-row: 3 / 3; \n \
} \n \
.text3{ \n \
  font-size: 1.5rem; \n \
  font-family: Arial, Helvetica, sans-serif; \n \
  text-align: center; \n \
    grid-column: 2 / 2; \n \
    grid-row: 4 / 4; \n \
} \n \
.footer{ \n \
  background-color: #011826; \n \
  background-size: auto; \n \
    padding: 85px; \n \
} \n \
.footer-text{ \n \
  font-size: 2rem; \n \
  color: #ffffff; \n \
} \n \
</style> \n \
</head> \n \
<body> \n \
<div class=\"head-container\"> \n \
  <div class=\"empty-item1\"> </div> \n \
  <div class=\"item1\"> The book series </div> \n \
    <div class=\"item2\"> Testimonials </div> \n \
    <div class=\"item3\"> The Author </div> \n \
    <div class=\"item4\"> Free Resources </div> \n \
    <div class=\"empty-item2\"> </div> \n \
</div> \n \
<h1><center> You dont know JavaScript </center></h1> \n \
<div class=\"main-container\"> \n \
  <div class=\"image\">   <img src=\"https://kaul.inf.h-brs.de/we/assets/img/landing-img.png\" style=\"width:70%\">  </div> \n \
  <div class=\"empty-item1\"> </div> \n \
  <div > </div> \n \
  <div class=\"text1\"> Don't just drift through javascript.</div> \n \
  <div class=\"text2\">Understand how javascript works </div> \n \
  <div class=\"text3\">Start your journey through the bumpy side of javascript </div> \n \
  <div class=\"button\">order your copy now  </div> \n \
  <div class=\"myfont\"></div> \n \
  <div class=\"myfont\"> </div> \n \
</div> \n \
<div class=\"footer\"> \n \
  <div class=\"footer-text\"><center> The first ebook in the book series is absolutely free. </center></div> \n \
  <div class=\"button\"> Find out more about this offer </div> \n \
</div> \n \
</body> \n \
</html> \n \
",
                   image: "landing (1).png"
               }
           ]
       }
    ]
}