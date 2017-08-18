// JavaScript Document

// Definición de Arrays
var fila1 = ["08", "02", "22", "97", "38", "15", "00", "40", "00", "75", "04", "05", "07", "78", "52", "12", "50", "77", "91", "08"];
var fila2 = ["49", "49", "99", "40", "17", "81", "18", "57", "60", "87", "17", "40", "98", "43", "69", "48", "04", "56", "62", "00"];
var fila3 = ["81", "49", "31", "73", "55", "79", "14", "29", "93", "71", "40", "67", "53", "88", "30", "03", "49", "13", "36", "65"];
var fila4 = ["52", "70", "95", "23", "04", "60", "11", "42", "69", "24", "68", "56", "01", "32", "56", "71", "37", "02", "36", "91"];
var fila5 = ["22", "31", "16", "71", "51", "67", "63", "89", "41", "92", "36", "54", "22", "40", "40", "28", "66", "33", "13", "80"];
var fila6 = ["24", "47", "32", "60", "99", "03", "45", "02", "44", "75", "33", "53", "78", "36", "84", "20", "35", "17", "12", "50"];
var fila7 = ["32", "98", "81", "28", "64", "23", "67", "10", "26", "38", "40", "67", "59", "54", "70", "66", "18", "38", "64", "70"];
var fila8 = ["67", "26", "20", "68", "02", "62", "12", "20", "95", "63", "94", "29", "63", "08", "40", "91", "66", "49", "94", "21"];
var fila9 = ["24", "55", "58", "05", "66", "73", "99", "26", "97", "17", "78", "78", "96", "83", "14", "88", "34", "89", "63", "72"];
var fila10 = ["21", "36", "23", "09", "75", "00", "76", "44", "20", "45", "35", "14", "00", "61", "33", "97", "34", "31", "33", "95"];
var fila11 = ["78", "17", "53", "28", "22", "75", "31", "67", "14", "94", "03", "80", "04", "62", "16", "14", "09", "53", "56", "92"];
var fila12 = ["16", "39", "05", "42", "96", "35", "31", "47", "55", "58", "88", "24", "00", "17", "54", "24", "36", "29", "85", "57"];
var fila13 = ["86", "56", "00", "48", "35", "71", "89", "07", "05", "44", "44", "37", "44", "60", "21", "58", "51", "54", "17", "58"];
var fila14 = ["19", "80", "81", "68", "05", "94", "47", "69", "28", "73", "92", "13", "86", "52", "17", "77", "04", "89", "55", "40"];
var fila15 = ["04", "52", "08", "83", "97", "35", "99", "16", "07", "97", "57", "32", "16", "26", "26", "79", "33", "27", "98", "66"];
var fila16 = ["88", "36", "68", "87", "57", "62", "20", "72", "03", "46", "33", "67", "46", "55", "12", "32", "63", "93", "53", "69"];
var fila17 = ["04", "42", "16", "73", "38", "25", "39", "11", "24", "94", "72", "18", "08", "46", "29", "32", "40", "62", "76", "36"];
var fila18 = ["20", "69", "36", "41", "72", "30", "23", "88", "34", "62", "99", "69", "82", "67", "59", "85", "74", "04", "36", "16"];
var fila19 = ["20", "73", "35", "29", "78", "31", "90", "01", "74", "31", "49", "71", "48", "86", "81", "16", "23", "57", "05", "54"];
var fila20 = ["01", "70", "54", "71", "83", "51", "54", "69", "16", "92", "33", "48", "61", "43", "52", "01", "89", "19", "67", "48"];

// Declaración de Variables
var matriz = new Array (fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9, fila10, fila11, fila12, fila13, fila14, fila15, fila16, fila17, fila18, fila19, fila20);
var fila = 0;
var columna = 0;
var mayor = 0;
var multiplo_mayor = 0;
var total = 0;
var x = 0;
var y = 0;
var direccion = "";
var multiplo_derecha = 0;
var multiplo_izquierda = 0;
var multiplo_arriba = 0;
var multiplo_abajo = 0;
var multiplo_diagonal_izquierda_arriba = 0;
var multiplo_diagonal_izquierda_abajo = 0;
var multiplo_diagonal_derecha_arriba = 0;
var multiplo_diagonal_derecha_abajo = 0;

// Enunciado e impresión de matriz
document.write 	("Problema 11: Identifique el multiplo mayor resultante de multiplicar cuatro números adyacentes de la siguiente matriz sin importar la dirección (arriba, abajo, izquierda, derecha o en diagonal): " + "<br>" + "<br>");

// Aqui inicia la definición del objeto_calculo
var objeto_calculo =
{
	// Imprime en pantalla la matriz que se utilizara para el ejercicio
	imprimir_matriz : function()	
		{
			for (var coordenada_x = 0; coordenada_x < fila1.length; coordenada_x++)
				{
				for (var coordenada_y = 0; coordenada_y < matriz.length; coordenada_y++)
				
				document.write (matriz [coordenada_x] [coordenada_y] + " ");
				document.write ("<br>");
				}
		document.write ("<br>");
		},
	
	// Preguntar coordenadas del número y la dirección en la que se desea realizar el multiplo
	indicar_coordenadas : function()
		{
		fila = Number(prompt("Por favor ingrese un valor entre 0 y 19 correspondiente a la coordenada en el eje X (filas): "));
			if ((fila<0) || (fila>19))
				{
				document.write ("Número de fila no valido, debe estar entre 0 y 19" + "<br>" + "<br>");
				}
					else
					{
					columna = Number(prompt("Por favor ingrese un valor entre 0 y 19 correspondiente a la coordenada en el eje Y (columnas): "));
						if ((columna < 0) || (columna > 19))
						{
						document.write ("Número de columna no valido, debe estar entre 0 y 19" + "<br>" + "<br>");
						}
						else
							{
							document.write ("Las coordenadas XY recibidas fueron (" + fila + ", " + columna + ") " + "correspondiente al número " + matriz[fila][columna] + "<br>" + "<br>");
							}
					}
		},
	
	// Cálculo de Multiplo de 4 números hacia la derecha a partir de la coordenada suministrada
	derecha : function()
		{
		if (columna<17)
			{
			multiplo_derecha = matriz[fila][columna] * matriz[fila][columna+1] * matriz [fila][columna+2] * matriz[fila][columna+3];
			}
			else
			{
			multiplo_derecha = 0;
			}
		return multiplo_derecha
		},
	
	// Cálculo de Multiplo de 4 números hacia la izquierda a partir de la coordenada suministrada
	izquierda : function()
		{
		if (columna>2)
			{
			multiplo_izquierda = matriz[fila][columna] * matriz[fila][columna-1] * matriz [fila][columna-2] * matriz[fila][columna-3];
			}
			else
			{
			multiplo_izquierda = 0;
			}
		return multiplo_izquierda
		},
	
	
	// Cálculo de Multiplo de 4 números hacia la arriba a partir de la coordenada suministrada
	arriba : function()
		{
		if (fila>2)
			{
			multiplo_arriba = matriz[fila][columna] * matriz[fila-1][columna] * matriz [fila-2][columna] * matriz[fila-3][columna];
			}
			else
			{
			multiplo_arriba=0;
			}
		return multiplo_arriba
		},
		
	// Cálculo de Multiplo de 4 números hacia abajo a partir de la coordenada suministrada
	abajo : function()
		{
		if (fila<17)
			{
			multiplo_abajo = matriz[fila][columna] * matriz[fila+1][columna] * matriz [fila+2][columna] * matriz[fila+3][columna];
			}
			else
			{
			multiplo_abajo=0;
			}
		return multiplo_abajo
		},
		
	// Cálculo de Multiplo de 4 números en diagonal hacia arriba y hacia la izquierda a partir de la coordenada suministrada
	diagonal_izquierda_arriba : function()
		{
		if ((fila<3) || (columna<3))
			{
			multiplo_diagonal_izquierda_arriba=0;
			}
			else
			{
			multiplo_diagonal_izquierda_arriba = matriz[fila][columna] * matriz[fila-1][columna-1] * matriz [fila-2][columna-2] * matriz[fila-3][columna-3];
			}
		return multiplo_diagonal_izquierda_arriba
		},
	
	// Cálculo de Multiplo de 4 números en diagonal hacia arriba y hacia la derecha a partir de la coordenada suministrada
	diagonal_derecha_arriba : function()
		{
		if ((fila<3) || (columna>16))
			{
			multiplo_diagonal_derecha_arriba=0;
			}
			else
			{
			multiplo_diagonal_derecha_arriba = matriz[fila][columna] * matriz[fila-1][columna+1] * matriz [fila-2][columna+2] * matriz[fila-3][columna+3];
			}
		return multiplo_diagonal_derecha_arriba
		},
	
	// Cálculo de Multiplo de 4 números en diagonal hacia abajo y hacia la izquierda a partir de la coordenada suministrada
	diagonal_izquierda_abajo : function()
		{
		if ((fila>16) || (columna<3))
			{
			multiplo_diagonal_izquierda_abajo=0;
			}
			else
			{
			multiplo_diagonal_izquierda_abajo = matriz[fila][columna] * matriz[fila+1][columna-1] * matriz [fila+2][columna-2] * matriz[fila+3][columna-3];
			}
		return multiplo_diagonal_izquierda_abajo
		},
	
	// Cálculo de Multiplo de 4 números en diagonal hacia abajo y hacia la derecha a partir de la coordenada suministrada
	diagonal_derecha_abajo : function()
		{
		if ((fila>16) || (columna>16))
			{
			multiplo_diagonal_derecha_abajo = 0;
			}
			else
			{
			multiplo_diagonal_derecha_abajo = matriz[fila][columna] * matriz[fila+1][columna+1] * matriz [fila+2][columna+2] * matriz[fila+3][columna+3];
			}
		return multiplo_diagonal_derecha_abajo
		},
	
	// Imprime el mayor multiplo en cualquier dirección a partir de una coordenada especifica suministrada por el usuario
	mayor_resultado_coordenada : function()
		{
		mayor = Math.max(multiplo_derecha, multiplo_izquierda, multiplo_arriba, multiplo_abajo, multiplo_diagonal_izquierda_arriba, multiplo_diagonal_derecha_arriba, multiplo_diagonal_izquierda_abajo, multiplo_diagonal_derecha_abajo);
		
		document.write ("<br>" + "El valor del multiplo mayor tendiendo en cuenta las direcciones posibles es: " + mayor + "<br>");
		}
}
// Aqui termina la definición del objeto_calculo

// Aqui incia la ejecución del ejercicio
var calculo_mayor_multiplo = function()
	{
	// Primero se imprime la matriz suministrada ennel ejercicio
	objeto_calculo.imprimir_matriz();
	
	// Se pregunta si se desea calcular el valor mayor del multiplo de 4 digitos consecutivos a partir de una coordenada especifica o del mayor de todos de acuerdo a todos los datos de la matriz
	var opcion_calculo = Number(prompt("Presione 1 + ENTER, si desea hacer el calculo para una coordenada especifica de la matriz..., ó presione 2 + ENTER, si desea conocer el mayor multiplo de cuatro digitos consecutivos en cualquier direccion dentro de todas las opciones existentes en matriz: "));
	
	// La opción 1 es para clacular el múltiplo mayor de 4 digitos consecutivos a partir de una coordenada especifica suministrada por el usuario
	if (opcion_calculo == 1)
		{
		// Aqui se le solicita al usuario que ingrese un par de coordenadas para calcular a partir de las mismas el multiplo mayor de cuatro números consecutivos sin importar la dirección
		objeto_calculo.indicar_coordenadas();
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección hacia la derecha a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.derecha();
			if (columna<17)
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos hacia la derecha es: " + objeto_calculo.derecha() + "<br>");
			}
			else
			{
			document.write ("La coordenada indicada esta demasiado a la derecha y no es posible realizar el cálculo del multiplo de los cuatro numeros consecutivos hacia la derecha" + "<br>");
			}
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección hacia la izquierda a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.izquierda();
			if (columna>2)
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos hacia la izquierda es: " + objeto_calculo.izquierda() + "<br>");
			}
			else
			{
			document.write ("La coordenada indicada esta demasiado a la izquierda y no es posible realizar el cálculo del multiplo de los cuatro numeros consecutivos hacia la izquierda" + "<br>");
			}
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección hacia arriba a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.arriba();
			if (fila>2)
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos hacia arriba es: " + objeto_calculo.arriba() + "<br>");
			}
			else
			{
			document.write ("La coordenada indicada esta demasiado arriba y no es posible realizar el cálculo del multiplo de los cuatro numeros consecutivos hacia arriba" + "<br>");
			}
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección hacia abajo a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.abajo();
			if (fila<17)
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos hacia abajo es: " + objeto_calculo.abajo() + "<br>");
			}
			else
			{
			document.write ("La coordenada indicada esta demasiado abajo y no es posible realizar el cálculo del multiplo de los cuatro numeros consecutivos hacia abajo" + "<br>");
			}
			
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección en diagonal hacia la izquierda y hacia arriba a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.diagonal_izquierda_arriba();
			if ((fila<3) || (columna<3))
			{
			document.write ("La fila de la coordenada esta demasiado a la derecha o la columa demasiado arriba, por lo que no se puede calcular el multiplo de cuatro digitos en direccion diagonal hacia la izquierda y hacia arriba" + "<br>");
			}
			else
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos en diagonal hacia la izquierda y hacia arriba es: " + objeto_calculo.diagonal_izquierda_arriba() + "<br>");
			}
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección en diagonal hacia la derecha y hacia arriba a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.diagonal_derecha_arriba();
			if ((fila<3) || (columna>16))
			{
			document.write ("La fila de la coordenada esta demasiado a la derecha o la columa demasiado arriba, por lo que no se puede calcular el multiplo de cuatro digitos en direccion diagonal hacia la derecha y hacia arriba" + "<br>");
			}
			else
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos en diagonal hacia la derecha y hacia arriba es: " + objeto_calculo.diagonal_derecha_arriba() + "<br>");
			}
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección en diagonal hacia la izquierda y hacia abajo a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.diagonal_izquierda_abajo();
			if ((fila>16) || (columna<3))
			{
			document.write ("La fila de la coordenada esta demasiado a la izquierda o la columa demasiado abajo, por lo que no se puede calcular el multiplo de cuatro digitos en direccion diagonal hacia la izquierda y hacia abajo" + "<br>");
			}
			else
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos en diagonal hacia la izquierda y hacia abajo es: " + objeto_calculo.diagonal_izquierda_abajo() + "<br>");
			}
		
		// Calculo del múltiplo mayor de 4 digitos consecutivos en dirección en diagonal hacia la derecha y hacia abajo a partir de la coordenada suministrada por el usuario con impresión de mensajes
		objeto_calculo.diagonal_derecha_abajo();
			if ((fila>16) || (columna>16))
			{
			document.write ("La fila de la coordenada esta demasiado a la derecha o la columa demasiado abajo, por lo que no se puede calcular el multiplo de cuatro digitos en direccion diagonal hacia la derecha y hacia abajo" + "<br>");
			}
			else
			{
			document.write ("El resultado de multiplicar cuatro números consecutivos en diagonal hacia la derecha y hacia abajo es: " + objeto_calculo.diagonal_derecha_abajo() + "<br>");
			}
		
		// Calculo e impresión del múltiplo mayor de 4 digitos consecutivos en cualquier dirección a partir de la coordenada suministrada por el usuario
		objeto_calculo.mayor_resultado_coordenada();	
		}
		
		// La opción 2 es para calcular el múltiplo mayor de 4 digitos consecutivos sin importar la dirección entre todos los valores dispuestos en la matriz partir
		else if (opcion_calculo == 2)
			{
			for (var coordenada_x = 0; coordenada_x < fila1.length; coordenada_x++)
				{
				for (var coordenada_y = 0; coordenada_y < matriz.length; coordenada_y++)
					{
					fila = coordenada_x;
					columna = coordenada_y
					
					multiplo_mayor = Math.max(objeto_calculo.derecha(), objeto_calculo.izquierda(), objeto_calculo.arriba(), objeto_calculo.abajo(), objeto_calculo.diagonal_izquierda_arriba(), objeto_calculo.diagonal_derecha_arriba(), objeto_calculo.diagonal_izquierda_abajo(), objeto_calculo.diagonal_derecha_abajo());
						
						// Toma de valores de variables de interes para mostrar en el resultado final
						if (multiplo_mayor >= total)
							{
							total = multiplo_mayor;
							x = fila;
							y = columna;
							
							if (total == objeto_calculo.derecha())
								{
								direccion = "derecha horizontalmente";
								}
								else if (total == objeto_calculo.izquierda())
									{
									direccion = "izquierda horizontalmente";
									}
									else if (total == objeto_calculo.arriba())
										{
										direccion = "hacia arriba verticalmente";
										}
										else if (total == objeto_calculo.abajo())
											{
											direccion = "hacia abajo verticalmente";
											}
											else if (total == objeto_calculo.diagonal_izquierda_arriba())
												{
												direccion = "diagonal, hacia la izquierda y hacia arriba";	
												}
												else if (total == objeto_calculo.diagonal_derecha_arriba())
													{
													direccion = "diagonal, hacia la derecha y hacia arriba";
													}
													else if (total == objeto_calculo.diagonal_izquierda_abajo())
														{
														direccion = "diagonal, hacia la izquierda y hacia abajo";
														}
														else if (total == objeto_calculo.diagonal_derecha_abajo())
															{
															direccion = "diagonal, hacia la derecha y hacia abajo";
															}
							}
					}
				}
			// Impresión de mensajes con el resultado del ejercicio del cálculo del mayor multiplo de 4 números consecutivos en cualquier dirección
			document.write ("<br>" + "El multiplo mayor de 4 números consecutivos sin importar la dirección dentro de la matriz es: " + total + "<br>");
			document.write ("Este valor corresponde a la coordenada :" + "(" + x + ", " + y + ")" + " ... Importante!!!  Tenga en cuenta que la primera fila y columna es 0 y la ultima es 19" + "<br>");
			document.write ("En esta posición se ubica en número :" + matriz[x][y] + "<br>");
			document.write ("Este resultado de obtiene luego de multiplicar 4 números consecutivos desde las coordenadas " + "(" + x + ", " + y + ")" + " en dirección: " + "<br>" + direccion);
			}
			
			// Esta opción imprime un mensaje de error cuando el usuario ingresa un valor diferente a 1 o 2
			else
				{
				document.write("La opción ingresada no es válida, por lo que no se puede continuar. Por favor reinicie el programa y escoja la opción 1 o 2 de acuerdo a lo expuesto del el cuadro de diálogo");
				}
	
	}

// Aqui inicia la ejecución de la función general
calculo_mayor_multiplo();




