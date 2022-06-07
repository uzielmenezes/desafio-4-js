
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;       
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            carArr.push(carClass);           
        } else {
            carArr.pop();
        }

    } else {
        throw new Error("You need to set a Car Class");
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Por favor, marque 2 carros para apresentar a comparação.");
        return;
    } else if(carArr.length == 3) {
        alert('Porfavor, compare de 2 carros por vez.')
        throw new Error('Comparação somente de 2 em 2.')
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    if(carArr.length > 1) {         

        for(let i = 0; i < carArr.length; i++) {
            
            document.getElementById('image_'+i).setAttribute('src', carArr[i].image)
            document.getElementById('compare_modelo_'+i).innerHTML = 
            carArr[i].nome;
            document.getElementById('compare_alturacacamba_'+i).innerHTML = 
            carArr[i].alturaCacamba;
            document.getElementById('compare_alturaveiculo_'+i).innerHTML = 
            carArr[i].alturaVeiculo;
            document.getElementById('compare_alturasolo_'+i).innerHTML = 
            carArr[i].alturaSolo;
            document.getElementById('compare_capacidadecarga_'+i).innerHTML = 
            carArr[i].capacidadeCarga;
            document.getElementById('compare_motor_'+i).innerHTML = 
            carArr[i].motor;
            document.getElementById('compare_potencia_'+i).innerHTML = 
            carArr[i].potencia;
            document.getElementById('compare_volumecacamba_'+i).innerHTML = 
            carArr[i].volumeCacamba;
            document.getElementById('compare_roda_'+i).innerHTML = 
            carArr[i].roda;
            document.getElementById('compare_preco_'+i).innerHTML = 
            carArr[i].preco;
        }        
    }
}