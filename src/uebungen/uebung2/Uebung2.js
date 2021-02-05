export default {
    aufgaben: [
        {
           name: "2.1. CSS Selektoren und CSS Farben",
           id: 1,
           unteraufgaben: [
                {
                    beschreibung: "Berechnen Sie die Spezifität folgender CSS-Selektoren: \n \
    1. div div div:focus  .inner \n \
    2. h1 + div.main \n \
    3. div a:link[href*='h-brs'] \n \
    4. nav > a:hover::before \n \
    5. ul#primary-nav  li.active",
                    loesung: "\
1. 1 + 1 +1 + 10 + 10 = 23 \n \
2. 1 + 1 + 10 = 12 \n \
3. 1 + 1 + 10 + 10 = 22 \n \
4. 1 + 1 + 10 + 1 = 13 \n \
5. 1 + 100 + 1 + 10 = 112"
                },
                {
                    beschreibung: "Rechnen Sie folgende RGB-Werte in HSL-Werte um: \n \
    1. #ffffff \n \
    2. #000 \n \
    3. #ab0978 \n \
    4. rgb(127,255,33) \n \
    5. rgba(255,127,33,0.8)",
                    loesung: "\
1. (0°,0%,100%) \n \
2. (0°,0%,0%) \n \
3. (319°, 90.0%, 35.3%) \n \
4. (95°, 100%, 56.5%) \n \
5  (26°, 100%, 65%)"
                }
           ]
        },
        {
            name: "2.3. Wireframe with HTML and CSS",
            id: 3,
            unteraufgaben: [
                {
                    beschreibung: "Mit welchem HTML- und CSS-Code kann man diesen Wireframe exakt nachbilden?",
                    image: "survey_form.png",
                    loesung: "\
<html> \n \
<head> \n \
    <style> \n \
    input { \n \
    width: 20%; \n \
    } \n \
    .center { \n \
        padding-right:2px; \n \
    padding-top:20px; \n \
    text-align:right; \n \
    width:80%; \n \
    } \n \
    .custom-select { \n \
    width: 20%; \n \
        position: relative; \n \
        font-family: Arial; \n \
    } \n \
    .background { \n \
            width: 100%; \n \
            height: 100%; \n \
            background: #b2d6d1; \n \
            text-align: center; \n \
            position: absolute; \n \
    } \n \
    .container { \n \
        background-color: #ffffff; \n \
        width: 70%; \n \
        height: 100%; \n \
        position: relative; \n \
        margin-left: auto; \n \
        margin-right: auto; \n \
        font-size: 20px; \n \
        line-height: 40px; \n \
    } \n \
    \n \
    </style> \n \
</head> \n \
<body> \n \
    <div class = background> \n \
    <h1><center> Survey Form </center></h1> \n \
    <div class=\"container\"> \n \
    <div class=\"center\"> \n \
    \n \
    <p> Let us know how we can improve freeCodeCamp </p> \n \
    <form> \n \
    <label for = \"fname\" class = \"center\"> Name: &nbsp &nbsp </label> \n \
    <input type=\"text\" id=\"fname\" name=\"fname\" placeholder=\"Enter your name\"> <br><br> \n \
    <label for = \"femail\"> Email: &nbsp &nbsp </label> \n \
    <input type=\"text\" id=\"femail\" name=\"femail\" placeholder=\"Enter your Email\"><br><br> \n \
    <label for = \"fage\"> Age: &nbsp &nbsp &nbsp </label> \n \
    <input type= \"text\" id=\"fage\" name=\"fage\" placeholder=\"Age\"><br><br> \n \
    <label for = \"frole\"> Which option best describes your current role? &nbsp &nbsp </label> \n \
        <select class = custom-select> \n \
        <option value=\"0\">Student</option> \n \
            <option value=\"1\">Professor</option> \n \
            <option value=\"2\">Mitarbeiter</option> \n \
    </select> <br><br> \n \
    <label for = \"frecommend\"> How likely is that you would recommend freeCodeCamp to a friend?  </label> \n \
    <input type=\"checkbox\" name=\"check\" value=\"1\">Definitely<br> \n \
    <input type=\"checkbox\" name=\"check\" value=\"2\"> Maybe<br> \n \
    <input type=\"checkbox\" name=\"check\" value=\"3\"> Not Sure<br> <br> \n \
    <label for = \"flike\"> What do you like most in FCC: &nbsp &nbsp </label> \n \
    <select class = custom-select> \n \
        <option value=\"0\">Select an option</option> \n \
            <option value=\"1\">Option1</option> \n \
            <option value=\"2\">Option2</option> \n \
    </select> <br><br> \n \
    <label for = \"fthings\"> Things that should be improved in the future<br> (Check all that apply): &nbsp &nbsp </label> \n \
        <input type=\"checkbox\" name=\"check\" value=\"1\">Front-end Projects<br> \n \
            <input type=\"checkbox\" name=\"check\" value=\"2\"> Back-end Projects<br> \n \
            <input type=\"checkbox\" name=\"check\" value=\"3\"> Data Visualization<br> <br> \n \
    </form> \n \
    </div> \n \
    </div> \n \
    </div> \n \
</body> \n \
</html> \n \
"
                }
            ]
        }
    ]
}