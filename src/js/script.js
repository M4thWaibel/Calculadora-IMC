const form = document.getElementById('form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height*height)).toFixed(2);

    if(!isNaN(bmi)){

        const value = document.getElementById('value');
        let description = ' ';

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');

        if(bmi < 18.5){
            description = 'Cuidado, você está abaixo do peso!';
        } else if(bmi >= 18.5 && bmi <= 25){
            description = 'Você está no peso ideal! Parabéns!';
            value.classList.remove('attention');
            value.classList.add('normal');
        }else if(bmi > 25 && bmi <= 30){
            description = 'Cuidado! Você está em sobrepeso.';
        }else if(bmi > 30 && bmi <=35){
            description = 'Cuidado! Você está com obsidade moderada!';
        }else if(bmi > 35 && bmi <= 40){
            description = 'Cuidado! Você está com obesidade severa!!';
        }else{
            description = 'Cuidado! Você está com obsidade morbida!!!';
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;

    }
});

form.addEventListener('keypress', function(event){
    if(event.key === 'press'){
        document.getElementById('#calculate').click();
    }
});