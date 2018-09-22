<?php

$arreglo1 = array(2, 8, 5, 12, 11, 4, 34, 25, 23, 17, 28, 3, 6);
$arreglo2 = array(6, 3, 7, 4, 9, 1, 23, 10, 5, 20, 17, 14);

function imprime_arr($arreglo){ 

    foreach($arreglo as $valor) {
        echo $valor;
        echo ", ";
    }
}

function prom($arreglo){
    
    $prome = array_sum($arreglo) / count($arreglo);
    echo $prome ;  
}

function mediana($arreglo){
    
    $arrlenght = count($arreglo);
    sort($arreglo);
    
    $arrmed=floor(($arrlenght - 1) / 2);
    if($arrlenght % 2 != 0){
        $med = $arreglo[$arrmed];
    } 
    else{ 
       $med = ($arreglo[$arrmed] + ($arreglo[$arrmed + 1])) / 2;
    }
    
    echo $med ;
}

function cosaFea($arreglo){
    echo "<p>El arreglo creado por yo es: ";
    imprime_arr($arreglo);
    echo "</p>";
    echo "Promedio: ";
    prom($arreglo);
    echo "<br>";
    echo "Mediana: ";
    mediana($arreglo);
    echo "<br>";
    echo "Orden ascendente: ";
    sort($arreglo);
    imprime_arr($arreglo);
    echo "<br>";
    echo "Orden descendente: ";
    rsort($arreglo);
    imprime_arr($arreglo);
    
}

function tabla(){ 
    echo '<table class="table table-dark">';
    for($i=0 ; $i <= 10; $i++){
        echo '<tr>';
        for($j = 1; $j <= 3; $j++){
            $num = pow($i,$j);
            echo '<td>' . $num . '</td>';        
        }
        echo '</tr>';   
    }
    echo '</table>';
    
}
    

?>