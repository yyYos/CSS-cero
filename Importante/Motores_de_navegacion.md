Motores de navegación
=====================

Para aprovechar la tarjeta de graficos, los motores de navegación han cambiado la forma en como renderizan la pagina, se le denomina "aceleración de hardware"; recordemos que renderizar es la forma, el proceso que transforma los documentos HTML y otros recursos de una pagina web en una representación visual interactiva para el usuario.

¿Cuales son los motores de navegación mas conocios?
- Gecko: por mozilla
- Blink: por chrome, entre otros, fue desarrollado por Google, creado de una vifurcacion de Webkit, programado en C++ y JavaScript.
- WebKit: por Safari, entre otros

¿Como se hacen su trabajo los motores de navegación?

RenderLayers, que son responsables de los subárboles del DOM, y GraphicsLayers, que son responsables de los subárboles de RenderLayers.

_GraphicsLayers_ : capas
------------------------
Son capas que se cargan en la GPU (Unidad de procesos graficos o tarjetas de video) como texturas.
    ¿Que es una textura?
    Es una malla de bits almacenadas en la GPU que se utilizan para dar "piel" a los formatos de 3D o videojuegos, los motores de navegacion utilizan este metodo para poder obtener partes de una pagina web.
Para mostrar estas capas (_GraphicsLayers_) se utiliza las herramientas de desarrollo, es una bandera que muestra los bordes de las capas compuestas.
Una ventaja de tener las texturas antes de pasarlas al GPU es, si la textura no cambia no vuelve a cargarse, esto ayuda a que se ocupa el tiempo en ejecutar otros procesos como archivos JS u otros, por ejemplo una animacion, si vemos en dev tools en la linea de tiempo de esa animacion, no muestra generacion de pintura por cada vez que se mueve causa de la animacion que se hace en CSS.

¿Como es que chrome convierte el DOM en una imagen de pantalla?
1. Toma el DOM y lo divide en varias capas.
2. Pinta cada capa de forma independiente en mapas de bits de software
3. Los sube al GPU como texturas
4. Combina las distintas capas en una imagen de pantalla final


