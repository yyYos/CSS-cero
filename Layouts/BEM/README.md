# BEM

Veras estilos con el método BEM (Block, Element, Modifier), nos permite organizar el CSS, para saber sobre los elementos, saber a quien le pertenece (elemento padre).
No es necesario instalar nada, esta es una forma de nombrar las clases tomando la idea anterior principalmente.

- Utilizar BEM no implica convertir todo en bloque.

Declarar elementos Block(BEM), los cuales son los elementos independientes y significativa por si misma.
Ejemplos: header, container, menu, checkbox, input.
- El nombre debe ser alucibo a elemento que se esta creando.
- Los nombres son en minusculas.

Declara un Element(BEM), los cuales son elementos HTML que se encuentran dentro de un elemento Block y estan semanticamente ligados a su bloque
Ejemplos: menu item, list item, header title.
- Aclarar que no es necesario agregar siempre guión tras guión, con el echo de tener uno nombre para cada Element ya no se recae en el error de tener nombres de clases interminables.
- Se agrega despues de un guión, el nombre anterior es nombre de el Block (BEM)

    <a class:"nav-menu"></a>

Declarar un elemento Modifier, se agrega la clase del elemento hablando de BEM seguido de dos guiones --, los cuales son elementos HTML que modifican su estado y  su apariencia (color, tamaño, animación, etc ).
Ejemplo: disabled, checked, fixed, size, color
     <a class:"nav-menu__item--active"></a>
