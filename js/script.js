//Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).

let carsWeight = [1500,1300,1600,1800]
let b = carsWeight.every((val,i,arr)=>val<2000)
 if (b) {
     document.write('Всі легкові')
 }
 else
 document.write('Не всі легкові')