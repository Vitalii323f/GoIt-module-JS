// const name = 'Mango'
// console.log(name.split('')) // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно'
// console.log(message.split(' ')) // ["JavaScript", "это", "интересно"]

// const words = ['JavaScript', 'это', 'интересно']
// console.log(words.join('')) // "JavaScriptэтоинтересно"
// console.log(words.join(' ')) // "JavaScript это интересно"
// console.log(words.join('-')) // "JavaScript-это-интересно"

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries']
// const fruit = 'strawberry'
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit)

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`)
// }

// const numbers = []

// numbers.push(1)
// console.log(numbers) // [1]

// numbers.push(2)
// console.log(numbers) // [1, 2]

// numbers.push(3)
// console.log(numbers) // [1, 2, 3]

// numbers.push(4)
// console.log(numbers) // [1, 2, 3, 4]

// numbers.push(5)
// console.log(numbers) // [1, 2, 3, 4, 5]

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.pop()) //  5
// console.log(numbers) // [1, 2, 3, 4]

// console.log(numbers.pop()) //  4
// console.log(numbers) // [1, 2, 3]

// console.log(numbers.pop()) //  3
// console.log(numbers) // [1, 2]

// console.log(numbers.pop()) //  2
// console.log(numbers) // [1]

// console.log(numbers.pop()) //  1
// console.log(numbers) // []

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let words = message.split(' ')
//   console.log(words)
//   words = Number(words.length)
//   //const word = Number(words.length)
//   console.log(words)
//   pricePerWord = words * pricePerWord

//   console.log([message, pricePerWord])
//   return pricePerWord

//   // Change code above this line
// }

// calculateEngravingPrice('JavaScript is in my blood', 10)
// calculateEngravingPrice('JavaScript is in my blood', 20)
// calculateEngravingPrice('Web-development is creative work', 40)
// calculateEngravingPrice('Web-development is creative work', 20)

// function slugify(title) {
//   // Change code below this line
//   let slug = title.split(' ')
//   console.log(slug)

//   slug = slug.join('-')
//   console.log(slug)

//   slug = slug.toLowerCase()
//   console.log(slug)

//   return slug

//   // Change code above this line
// }

// slugify('Arrays for begginers')
// slugify('English for developer')

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi']
// const newClients = ['Peach', 'Houston']

// const allClients = oldClients.concat(newClients) // Change this line
// console.log(allClients)

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let allArray = firstArray.concat(secondArray)
//   console.log(allArray)

//   if (allArray.length > maxLength) {
//     allArray = allArray.slice(0, maxLength)
//     console.log(allArray)
//     return allArray
//   }
//   console.log(allArray)
//   return allArray

//   // Change code above this line
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)
// makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0
//   for (let i = 0; i <= number; i += 1) {
//     console.log(i)
//     sum += i
//   }

//   console.log('Сумма :', sum)

//   // Change code above this line
// }

// calculateTotal(1)
// calculateTotal(7)

// const fruits = ['apple', 'plum', 'pear', 'orange']

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i] // Change this line
//   console.table(fruit)
// }

// function calculateTotalPrice(order) {
//   console.log(order)
//   let total = 0
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     //console.log(order.length)

//     total += order[i]
//     console.log(i)
//     console.log('Число в массиве по индексу-', order[i])
//     console.log('Сумма чисел массива', total)
//   }
//   // Change code above this line
//   console.log(total)
//   return total
// }
// calculateTotalPrice([12, 85, 37, 4])

// calculateTotalPrice([412, 371, 94, 63, 176])

// function findLongestWord(string) {
//   // Change code below this line
//   console.log(string)

//   string = string.split(' ')
//   console.log(string)

//   let longestWord = 0

//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i].length > longestWord) {
//       longestWord = string[i].length

//       console.log(longestWord)
//     }
//   }
//   console.log(longestWord)
//   // Change code above this line
// }

// findLongestWord('The quick')
//----------------------------------------------------------------Задача 21---------------------------------------------------------
// function findLongestWord(string) {

//   const arrWord = string.split(' ')
//   console.log(arrWord)

//   let longestWord = arrWord[0]
//   console.log('Подставляется первое слово на проверку:', longestWord)

//   for (let i = 0; i < arrWord.length; i += 1) {
//     if (arrWord[i].length > longestWord.length)
//       //Сравниваем длину слов
//       console.log(longestWord.length)
//     console.log(arrWord[i].length)

//     {
//       longestWord = arrWord[i]

//       console.log(longestWord)
//     }
//   }
//   console.log('Самое длинное слово:', longestWord)
//   return longestWord
//   //console.log(longestWord);
//   // Change code above this line
// }
// findLongestWord('QQ The quick')
// findLongestWord('Google do a roll')
// findLongestWord('May the force be with you мммммм')

//------------------------------------------------------------Задача 22 --------------------------------------------------------------------------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = []
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//     console.log(numbers)
//   }
//   // Change code above this line
//   console.log(numbers)
//   return numbers
// }

// createArrayOfNumbers(1, 3)

//----------------------------------------------------------Задача 23 ----------------------------------------------------------------------------------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = []

//   for (let i = 0; i <= numbers.length - 1; i += 1) {
//     if (numbers[i] > value) console.log(numbers[i])
//     {
//       newArray.push(numbers[i])
//     }
//   }
//   console.log(newArray)
//   return newArray
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([12, 24, 8, 41, 76], 38)

//----------------------------------------------------------Задача 25 ----------------------------------------------------------------------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   const uniqueElement = []

//   for (const elements of array1) {
//     console.log('Перебираем массив ', elements)

//     if (array2.includes(elements)) {
//       console.log('Включает ли в себя элемент в массив? ', elements)
//       uniqueElement.push(elements)
//       console.log('Пушим значения в массив', uniqueElement)
//     }
//   }
//   console.log('Уникальное число', uniqueElement)
//   return uniqueElement

//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 278, 27])

//----------------------------------------------------------Задача 26 --------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const number of order) total += number
//   // Change code above this line
//   console.log(order)
//   //console.log(number)
//   console.log(total)
//   return total
// }

// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([412, 371, 94, 63, 176])

//----------------------------------------------------------Задача 27 --------------------------------------------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = []

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const number of numbers) {
//     console.log(number)
//     if (number > value) {
//       console.log('Искомое число', number)
//       filteredNumbers.push(number)
//     }
//   }
//   console.log(filteredNumbers)
//   return filteredNumbers
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)

//----------------------------------------------------------Задача 28 --------------------------------------------

// const a = 3 % 3
// console.log(a)

// const b = 4 % 3
// console.log(b)

// const c = 11 % 8
// console.log(c)

// const d = 12 % 7
// console.log(d)

// const e = 8 % 6
// console.log(e)

//----------------------------------------------------------Задача 29 --------------------------------------------
//Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = []
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }
//   console.log(evenNumbers)
//   return evenNumbers

//   // Change code above this line
// }

// getEvenNumbers(2, 5)
// getEvenNumbers(3, 11)

//----------------------------------------------------------Задача 30 --------------------------------------------
//Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6
// const end = 27
// let number

// for (let i = start; i < end; i += 1) {
//   console.log('Числа начиная со старт-', i)
//   if (i % 5 === 0) {
//     console.log(i)
//     number = i

//     break
//   }
// }
// console.log(number)

//----------------------------------------------------------Задача 31 --------------------------------------------

// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     console.log(i)
//     if (i % divisor === 0) {
//       console.log(i)
//       return i
//     }
//   }

//   // Change code above this line
// }

// findNumber(2, 6, 5) //возвращает 5
// findNumber(8, 17, 3) //возвращает 9

//----------------------------------------------------------Задача 32 --------------------------------------------

function includes(array, value) {
  // Change code below this line

  for (const ivalue of array) {
    console.log(ivalue)
    if (value === ivalue) {
      console.log('Искомое значение:', value)
      console.log('Значение из массива-', ivalue)
      console.log(true)
      return true
    }
  }
  console.log(false)
  return false
  // Change code above this line
}

includes([1, 2, 3, 4, 5], 3)
includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
