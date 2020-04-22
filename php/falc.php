<?php






    public function run()
    {
        //echo ( '<pre>'.print_r( $_POST, 1).'</pre>');
        if (isset($_POST['mailForm'])) {


            $nom = $_POST['nom'];
            $prenom = $_POST['prenom'];
            $email = trim($_POST['email']);
            $Error = false;

            $message = $_POST['message'];
            $message = wordwrap($message, 70, "\r\n");

            function test_input($data)
            {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }

            if (empty($_POST["nom"]) or empty($_POST['prenom']) or empty($_POST['email']) or empty($_POST['message'])) {
                $Error = true;
                // echo "11\n";
            } else {
                //echo "12\n";
                $nom = test_input($_POST["nom"]);
                $prenom = test_input($_POST['prenom']);
                $email = test_input($_POST['email']);
                $message = test_input($_POST['message']);

                // check if name only contains letters and whitespace
                if (!preg_match("/^[a-zA-Z ]*$/", $nom) or !preg_match("/^[a-zA-Z ]*$/", $prenom) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    $Error = true;
                    //echo "13\n";
                }
            }
            //mermet de pas se faire spammm
            /* if ($_SERVER['HTTP_REFERER'] != 'http://localhost/siteFalc/falc.html')
             {
                 header('Location: http://localhost/siteFalc/falc.html');
                 $spam = "true";

             }*/
            // echo "$nameErr \n $emailErr";

            if (!$Error) {
                //echo "envoyé";
                $formcontent = "De: $nom  $prenom \n\n Message: $message \n\n E-mail : $email";
                $replycontent = "Nous avons bien reçu votre message";

                $to = "falcohm6TM@outlook.com";

                $subject = "Formulaire de contact";
                $replysubject = "Formulaire de contact Falc'ohm System";

                $mailheader = "From: $email \r\n";


                // $header.='Content-Type:text/html; charset="uft-8"'."\n";
                //$header.='Content-Transfer-Encoding: 8bit';

                $headers = array(
                    'From' => $email,
                    'Reply-To' => $email,
                    'X-Mailer' => 'PHP/' . phpversion(),
                    //'charset' => "uft-8",
                    //'Content-Type' =>'text'
                );

                mail($to, $subject, $formcontent, implode("\r\n", $headers));
                //mail($email, $replysubject, $replycontent, implode("\r\n", $headers));
                //setcookie('sent', '1', time() + 120);
                /*if (mail($to, $subject, $formcontent, implode("\r\n", $headers)))*/
            }
        }

        require_once(CHEMIN_VUES . 'accueil.php');

    }



?>
