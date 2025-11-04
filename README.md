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
<img width="1896" height="580" alt="image" src="https://github.com/user-attachments/assets/de8a7ef4-b59e-4049-85f9-ed293ff04f55" />
