 var saldo = Number(prompt('Seu saldo atual'))
 var compra = Number(prompt('Valor da compra'))
 var x = saldo-compra

if (saldo>=compra) {
  alert('Seu saldo ficará ' +x);
} else if (saldo<compra) {
  alert('Saldo insuficiente');
}

  
  var i = Number(5), texto = '';
  var z = Number(prompt('Seu salário'))
  var y = z*i
  var t = y/100
while(z<=1500){
   texto += 'Seu salário era ' + z + ' aumentou ' + t 
   i++
  alert(texto)
}

while(z<=700){
  texto += 'Seu salário era ' + z + 'aumentou ' + t;
i++
}


 let j = prompt('Primeiro lado')
 let k = prompt('Segundo lado')
 let o = prompt('Terceiro lado')

if(j == k == o)
    alert('Equilátero');

else if (j == k !== o)
    alert('Isósceles');

else(j !== k !== o);
    alert('Escaleno')
