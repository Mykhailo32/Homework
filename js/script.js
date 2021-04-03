//Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.

let price =[200,90,50,270,180,20]
let priceStart = 100
let newPrice = price.filter(x=>x<100)
document.write(newPrice)