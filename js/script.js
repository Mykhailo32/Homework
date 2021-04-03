// Задача 3.7 Найти в массиве все серии подряд идущих одинаковых элементов и удалить из них все элементы кроме одного.
let arr = [5, 5, 5, 4, 5, 6, 6, 12, 12, 12, 12, 2, 1, 4, 6, 8, 8, 8, 15, 1, 11, 11, 11, 15,]
document.write(`${arr}<br>`)
let newArr = arr.filter((val, i, arr) => {
    if (val != arr[i + 1])
        return val
})
document.write(newArr)