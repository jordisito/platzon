# Platzom

Platzom es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js) de platzi

## Descripcion del idioma

- si la palabra termina en ar se le quita los 2 ultimos caracteres

- si la palabra comienza con z se le añade pe al final

- si la palabra tiene 10 o mas letras partirla ala mitad y agregar '-' en el medio

- si la palabra es un palindromo imprimir la misma palabra pero en capitalize

## Instalacion

´´´
npm install platzom
´´´

## Uso

´´´
import platzom from 'platzom'

platzom('Programar') // Program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('abecedario') // abece-dario
platzom('sometemos') // SoMeTeMoS
´´´

## License

[MIT](https://opensource.org/licenses/MIT)