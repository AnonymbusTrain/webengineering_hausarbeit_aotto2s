export default {
    aufgaben: [
        {
            name: "10.1. Registrierung mit PHP",
            id: 1,
            unteraufgaben: [
                {
                    beschreibung: "Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de ein Registrierungsformular. Speichern \n \
Sie die eingegebenen Daten persistent in einer Datei auf www2.inf.h-brs.de. Schreiben \n \
Sie Ihre PHP-Scripte so, dass es zu keinen Nebenläufigkeitsartefakten (z.B. Lost Update) \n \
kommen kann, egal wie viele Nutzer sich gleichzeitig registrieren",
                    loesung: "\
<!doctype html> \n \
<html> \n \
<head> \n \
    <title>PHP-Test</title> \n \
</head> \n \
<body> \n \
<h1>Register</h1> \n \
<form method=\"post\"> \n \
    <fieldset> \n \
        <legend>Register a new Account:</legend> \n \
        Account name:<br> \n \
        <input type=\"text\" name=\"account\"> \n \
        <br> \n \
        Password:<br> \n \
        <input type=\"password\" name=\"password\"> \n \
        <br><br> \n \
        <input type=\"submit\" value=\"Submit\"> \n \
    </fieldset> \n \
</form> \n \
<?php \n \
    // SSH Verbindung zu dem \"ww2.inf.h-brs.de\" Server herstellen um die Datei abzulegen \n \
    /* \n \
    include './Password.php'; \n \
    include('Net/SSH2.php'); \n \
    $ssh = new Net_SSH2('www2.inf.h-brs.de'); \n \
    if (!$ssh->login('username', 'password')) { \n \
        exit('Login Failed'); \n \
    } \n \
    echo $ssh->exec(\"pwd\"); \n \
    */ \n \
    authentification(); \n \
    function authentification() { \n \
        $SALT = \"hg87rhg8742ht89u5891u50\"; \n \
        $correct = false; \n \
        if (!file_exists(\"./raw_passwd.csv\")) { \n \
            $fp = fopen('raw_passwd.csv', 'w'); \n \
            $file = './raw_passwd.csv'; \n \
            $new_line = \"username\" . ',' . \"password\" . \"\\n\"; \n \
            if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) { \n \
                echo \"<script>alert('CSV created!')</script>\"; \n \
            } \n \
            $new_line = \"sampleuser\" . ',' . \"samplePassword\" . \"\\n\"; \n \
            if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) { \n \
            } \n \
        } \n \
        $rows = array_map('str_getcsv', file('./raw_passwd.csv')); \n \
        $header = array_shift($rows); \n \
        $csv_array = array(); \n \
        foreach ($rows as $row) { \n \
            $csv_array[] = array_combine($header, $row); \n \
        } \n \
 \n \
        if (isset($_POST['account']) && isset($_POST['password'])) { \n \
            $account = hash(\"sha384\", $_POST['account'] . $SALT); \n \
            $passwd = hash(\"sha384\", $_POST['password'] . $SALT); \n \
            $file = './raw_passwd.csv'; \n \
            $new_line = $account . ',' . $passwd . \"\\n\"; \n \
            foreach ($csv_array as $array) { \n \
                if ($array[\"username\"] === $account) { \n \
                    $correct = true; \n \
                } \n \
            } \n \
            if (!$correct) { \n \
                if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) { \n \
                    echo \"<script>alert('Registered successfully!')</script>\"; \n \
                    header(\"Location: http://www2.inf.h-brs.de/\"); \n \
                    exit; \n \
                } \n \
            } else { \n \
                echo \"<script>alert('Benutzername wurde schon benutzt')</script>\"; \n \
            } \n \
        } \n \
    } \n \
?> \n \
</body> \n \
</html>"
                }
            ]
        },
        {
            name: "10.2: Login mit PHP",
            id: 2,
            unteraufgaben: [
                {
                    beschreibung: "Erstellen Sie mit PHP 5 auf www2.inf.h-brs.de ein Registrierungsformular. Speichern \n \
Sie die eingegebenen Daten persistent in einer Datei auf www2.inf.h-brs.de. Schreiben \n \
Sie Ihre PHP-Scripte so, dass es zu keinen Nebenläufigkeitsartefakten (z.B. Lost Update) \n \
kommen kann, egal wie viele Nutzer sich gleichzeitig registrieren.",
                    loesung: "\
<!doctype html> \n \
<html> \n \
<head> \n \
    <title>PHP-Test</title> \n \
</head> \n \
<body> \n \
<h1>Register</h1> \n \
<form method=\"post\"> \n \
    <fieldset> \n \
        <legend>Register a new Account:</legend> \n \
        Account name:<br> \n \
        <input type=\"text\" name=\"account\"> \n \
        <br> \n \
        Password:<br> \n \
        <input type=\"password\" name=\"password\"> \n \
        <br><br> \n \
        <input type=\"submit\" value=\"Submit\"> \n \
    </fieldset> \n \
</form> \n \
<?php \n \
    // SSH Verbindung zu dem \"ww2.inf.h-brs.de\" Server herstellen um die Datei abzulegen \n \
    /* \n \
    include './Password.php'; \n \
    include('Net/SSH2.php'); \n \
    $ssh = new Net_SSH2('www2.inf.h-brs.de'); \n \
    if (!$ssh->login('username', 'password')) { \n \
        exit('Login Failed'); \n \
    } \n \
    echo $ssh->exec(\"pwd\"); \n \
    */ \n \
    authentification(); \n \
    function authentification() { \n \
        $SALT = \"hg87rhg8742ht89u5891u50\"; \n \
        $correct = false; \n \
        if (!file_exists(\"./raw_passwd.csv\")) { \n \
            $fp = fopen('raw_passwd.csv', 'w'); \n \
            $file = './raw_passwd.csv'; \n \
            $new_line = \"username\" . ',' . \"password\" . \"\\n\"; \n \
            if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) { \n \
                echo \"<script>alert('CSV created!')</script>\"; \n \
            } \n \
            $new_line = \"sampleuser\" . ',' . \"samplePassword\" . \"\\n\"; \n \
            if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) { \n \
            } \n \
        } \n \
        $rows = array_map('str_getcsv', file('./raw_passwd.csv')); \n \
        $header = array_shift($rows); \n \
        $csv_array = array(); \n \
        foreach ($rows as $row) { \n \
            $csv_array[] = array_combine($header, $row); \n \
        } \n \
 \n \
        if (isset($_POST['account']) && isset($_POST['password'])) { \n \
            $account = hash(\"sha384\", $_POST['account'] . $SALT); \n \
            $passwd = hash(\"sha384\", $_POST['password'] . $SALT); \n \
            $file = './raw_passwd.csv'; \n \
            $new_line = $account . ',' . $passwd . \"\\n\"; \n \
            foreach ($csv_array as $array) { \n \
                if ($array[\"username\"] === $account) { \n \
                    $correct = true; \n \
                } \n \
            } \n \
            if (!$correct) { \n \
                if (file_put_contents($file, $new_line, FILE_APPEND | LOCK_EX)) { \n \
                    echo \"<script>alert('Registered successfully!')</script>\"; \n \
                    header(\"Location: http://www2.inf.h-brs.de/\"); \n \
                    exit; \n \
                } \n \
            } else { \n \
                echo \"<script>alert('Benutzername wurde schon benutzt')</script>\"; \n \
            } \n \
        } \n \
    } \n \
?> \n \
</body> \n \
</html>"
                }
            ]
        }
    ]
}