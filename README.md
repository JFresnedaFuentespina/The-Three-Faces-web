# The-Three-Faces-web
## Flujo de trabajo con GIT:
* Obtener el repositorio:
Si no lo tienes en el ordenador:
~~~
git clone <enlace del repositorio de github>
~~~
Si ya lo tienes en el ordenador: 
~~~
git pull
~~~
* IMPORTANTE: No se trabaja dentro de la rama master directamente.
* Cada uno tendrá su propia rama dentro de la rama "DEV" donde podrá realizar sus tareas.
* Nueva tarea = Nueva rama. Para crear una rama:
~~~
git branch <nombre de la rama>
~~~
Para cambiar a esa rama:
~~~
git checkout <nombre de la rama>
~~~
 * Cada vez que se complete una tarea, un commit con una mensaje descriptivo.
 * Si tienes que hacer un push, pero no has acabado la tarea, haz el commit pero añade INACABADO al final.
Ejemplo:
~~~
git commit -m "Tarea 001 ACABADA"
~~~
o
~~~
git commit -m "Tarea 002 INACABADA"
~~~
Se hará un pull request o un merge a la rama DEV.
Si hay conflictos se corrigen.
Se integran los cambios a la rama master.
Se hace el push.
Diagrama:
gitGraph
   commit id: "Inicio" tag: "master"
   branch DEV
   checkout DEV
   commit id: "Base de desarrollo"
   branch jesus-feature-login
   commit id: "Tarea 001 INACABADA"
   commit id: "Tarea 001 ACABADA"
   checkout DEV
   merge jesus-feature-login id: "Merge tarea 001"
   branch maria-ui-ajustes
   commit id: "Tarea 002 ACABADA"
   checkout DEV
   merge maria-ui-ajustes id: "Merge tarea 002"
   checkout master
   merge DEV id: "Integración estable"
   commit id: "Push final"
