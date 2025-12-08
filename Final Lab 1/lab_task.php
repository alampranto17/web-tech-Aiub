<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <table>
            <tbody>
                <tr>
                   <td><label for="length">Length</label></td> 
                   <td><input type="text" name="length" id="length"></td>
                </tr>
                <tr>
                    <td><label for="width">Width</label></td>
                    <td><input type="text" name="width" id="width"></td>
                </tr>
                <tr>
                    <td><label for="amount">Amount</label></td>
                    <td><input type="text" name="amount" id="amount"></td>

                </tr>
                <tr>
                    <td><label for="number">Number</label></td>
                    <td><input type="text" name="number" id="number"></td>
                </tr>
                <tr>
                    <td><label for="number1">Number1</label></td>
                    <td><input type="number" name="number1" id=""></td>
                </tr>
                <tr>
                    <td><label for="number2">Number2</label></td>
                    <td><input type="number" name="number2" id=""></td>
                </tr>
                <tr>
                    <td><label for="number3">Number3</label></td>
                    <td><input type="number" name="number3" id=""></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button type="submit">Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>

  
</body>
</html>

<?php  

function calculateRectangle($length, $width){
    return $length * $width;
}

function calculateVat($money, $vat = 0.15){
    return $money * $vat;
}

function even($number){
    if($number%2==0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

function calBigNumber($number1,$number2,$number3){
    if($number1>$number2 && $number1>$number3){
        return $number1;
    }
    else if ($number2>$number3){
        return $number2;
    }
    else{
        return $number3;
    }
}

if($_SERVER['REQUEST_METHOD'] == "POST"){

    $length = floatval($_POST['length']);
    $width  = floatval($_POST['width']);
    $money  = floatval($_POST['amount']);
    $number = floatval($_POST['number']);
    $number1 = floatval($_POST['number1']);
    $number2 = floatval($_POST['number2']);
    $number3 = floatval($_POST['number3']);



    $area  = calculateRectangle($length, $width);
    $vat   = calculateVat($money);
    $total = $money + $vat;
    $even  = even($number);
    $bigNumber=calBigNumber($number1,$number2,$number3);

    echo "Rectangle area is: $area <br>";
    echo "VAT: $vat <br>";
    echo "Total after VAT: $total <br>";
    echo "$number is $even <br>";
    echo "Big Number is $bigNumber <br>";
    echo "Odd Number <br>";
    for($i=10;$i<100;$i++){
            if($i%2!=0){
                echo "$i <br>";
            }
    }
}
?>





