function calculadora(){
    const resultado = document.getElementById('res');
    const informa = document.getElementById('info');
    const tecla = document.querySelectorAll('.botao');
    let n1 = '';
    let n2 = '';
    let operador = '';
    let etapa = 'n1'
    let soma;

    tecla.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            resultado.classList.remove('erro');
            informa.textContent = 'Calculando...';
            let verfica = Number(tecla[indice].value);

            if(botao.value === 'AC'){
                informa.textContent = 'Aguardando cálculo...';
                resultado.textContent = '';
                n1 = '';
                n2 = '';
                operador = '';
                etapa = 'n1';
                return;
            }

            if(botao.value === '='){
                informa.textContent = 'Resultado:';

                if(n1 === '' || n2 === '' ){
                    resultado.classList.toggle('erro');
                    resultado.textContent = 'Operação Invalida!';
                    return;
                }
    
                switch(operador){
                    case '+':
                        soma = Number(n1) + Number(n2);
                        resultado.textContent = soma;
                        break;

                    case '-':
                        soma = Number(n1) - Number(n2);
                        resultado.textContent = soma;
                        break;

                    case 'x':
                        soma = Number(n1) * Number(n2);
                        resultado.textContent = soma;
                        break;

                     case '/':
                        if(Number(n2) === 0){
                            resultado.textContent = 'Indisponivel!';
                            return;
                        } else{
                            soma = Number(n1) / Number(n2);
                            resultado.textContent = soma;
                        }
                        break;
                }

                n1 = '';
                n2 = '';
                operador = '';
                etapa = 'n1';
                return;
            }

            if (Number.isNaN(verfica) === false ){
                if(etapa === 'n1'){
                    n1 += String(verfica);
                } else{
                    n2 += String(verfica);
                }

            } else if (botao.value === '+' || botao.value === '-' || botao.value === 'x' || botao.value === '/'){
                operador = String(tecla[indice].value);
                etapa = 'n2';
            }

            resultado.textContent = `${n1} ${operador} ${n2}`;
        });
    });
}

calculadora()