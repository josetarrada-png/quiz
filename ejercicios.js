//Ejercicio 1: crea un array con 5 números y muestra cada uno en la consola con forEach.

// const numeros = [2,5,9,8,7]

// numeros.forEach(element => {	
// 	console.log(element);	
// });

// Ejercicio 2: suma los 5 números y muestra solo el total en la consola, una vez, al final.

// const numeros = [2,5,9,8,7]

// let suma = 0

// numeros.forEach(element => {
// 	suma = suma + element
// });

// console.log(suma);

// Ejercicio 3: muestra en la consola solo los números mayores que 6.

// const numeros = [2, 5, 9, 8, 7]

// numeros.forEach(element => {
// 	if (element > 6){
// 		console.log(element);
// 	}
// });



//  Ejercicio 4 Dado el array 

const numeros = [2, 5, 9, 8, 7]

 let mayores = []

 numeros.forEach(element => {
	if (element > 6 ) {
		mayores.push(element)
	}
 });

 console.log(mayores);
 





