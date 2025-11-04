# The-Three-Faces-web  
## Flujo de trabajo con Git

### 1. Obtener el repositorio
**Si no tienes el repositorio en tu ordenador:**
```bash
git clone <enlace-del-repositorio-de-github>
```

**Si ya lo tienes:**
```bash
git pull
```

---

### 2. No trabajar directamente en la rama `master`
La rama `master` (o `main`) solo debe contener el código **estable y listo para producción**.  
Toda la programación se realiza en ramas derivadas de `DEV`.

---

### 3. Estructura de ramas
```
master
│
└── DEV
     ├── jesus-feature-login
     ├── maria-ui-ajustes
     ├── pablo-bugfix-menu
     └── ...
```

Cada desarrollador tiene su **propia rama** dentro de `DEV` para trabajar de forma aislada.

---

### 4. Crear y cambiar de rama

**Crear una nueva rama para una tarea:**
```bash
git branch <nombre-de-la-rama>
```

**Cambiarte a esa rama:**
```bash
git checkout <nombre-de-la-rama>
```

Nombra tus ramas de forma clara, por ejemplo:  
`feature/nueva-pantalla-inventario` o `bugfix/error-colisiones`.

---

### 5. Commits y mensajes

Cada vez que completes una parte significativa de una tarea, haz un commit con un mensaje **claro y descriptivo**:

Tarea completada:
```bash
git commit -m "Tarea 001 ACABADA"
```

Tarea aún en progreso:
```bash
git commit -m "Tarea 002 INACABADA"
```

---

### 6. Integración de cambios

1. Una vez terminada la tarea, se hace un **pull request o merge** hacia la rama `DEV`.  
2. Si existen conflictos, se resuelven antes de hacer el merge.  
3. Cuando `DEV` está verificada y estable, se integran los cambios a `master`.  
4. Finalmente, se realiza el **push** a GitHub.

---

###  7. Diagrama del flujo de trabajo

```
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
```

---

### 8. Buenas prácticas

- Actualiza tu rama frecuentemente con los últimos cambios de `DEV`:
  ```bash
  git pull origin DEV
  ```
- Antes de hacer un merge, verifica que el proyecto **compila y funciona**.
- Usa commits pequeños y descriptivos.
- Evita los commits innecesarios en `master`.
