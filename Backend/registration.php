<?php

        header("Access-Control-Allow-Methods:*");
        header("Access-Control-Allow-Methods:GET,POST");
        header("Access-Control-Allow-Methods:Content-Type");



        $conn =  new mysqli("localhost","root","","moviedb");
        if(mysqli_connect_error()){
            echo mysqli_connect_error();
            exit();
        }
        else{
            $eData = file_get_conetents("php://input");
            $dData = json_decode($eData,true);


            $fname = $dData['fname'];
            $lname = $dData['lname'];
            $email = $dData['email'];
            $number = $dData['number'];
            $message = $dData['message'];

            $result = "";

            if($fname !== "" and $lname !== "" and $email !== "" and $number !== "" and $message !== ""){
                $sql = "INSERT INTO user(fname,lname,email,number,message) VALUES ('$fname','$lname','$email','$number','$message');";
                $res = mysqli_query($conn,$sql);
                if($res){
                    $result = "You have registered successfully!";
                }
                else{
                    $result = "";
                }
            }else{
                $result = "";
            }

            $conn -> close();
            $response[] = array("result" => $result);
            echo json_encode($response);

        }
?>