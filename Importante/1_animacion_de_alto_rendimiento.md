Hay 4 cosas que el navegador puede animar de manera economica
- position
- scale
- opacity
- rotation

Es posible que al cambiar un elemento se tenga que volver a calcular la geometria de otros elementos como es la posicion y el tamaño porcentaje de cambios en base a la propiedad cambiada https://docs.google.com/spreadsheets/d/1Hvi0nu2wG3oQ51XRHtMv-A_ZlidnwUYwgQsPQUg1R2s/pub?single=true&gid=0&output=html

Pintado del diseño

Hay propedades que pueden activar el pintado de algun elemento, el costo de este esfuerzo de pintura depende de en parte de los motores de navegación, los cuales necesitan recursos con es la GPU y CPU, esto tambien implica un mayor esfuerzo para los dispositivos moviles ya que no tienen los mismos recursos que uno de escritorio.

Animar con JavaScript(imperativa) o CSS(Declarativa)

_Imperativa_: Su ventaja es su mayor desventaja ya que la animacion se crea desde javaScript en el hilo principal de navegador, ya que existen otras tareas dentro de javaScript existe la posibilidad de que no cargue todos los cuadros de la animación. Aunque existen animaciones que solo se pueden efectuar desde JS como paralax.

_Declaratva_: La principal ventaja es que el navegador puede optimizar la animación, puedes crear capas si es necesario y ejecutar algunas operaciones desde el hilo principal, la principal desventaja que las animaciones pueden volverse complejas y tener errores constantemente.



