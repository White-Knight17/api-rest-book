# Bienvenido

Esta es mi primera api que creo, es un sencillo api rest de libros


# Requisitos

-   Node.js (versión 22)
-   MongoDB
-   Docker

## Instalación

1. Clona el repositorio:

    git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio

2. Instala las dependencias:

    npm install


3. Configura un archivo .env, en el proyecto ya tiene un template.

4. Inicia el proyecto:

	*Inicio con node 22*
	 node --run dev
    
	*Inicio con node 18*
    npm run dev


## Endpoints

### Obtener todos los libros

-   **URL:** `/books`
-   **Método:** `GET`
-   **Descripción:** Obtiene una lista de todos los libros.
- **Respuesta:**
 

    [
    {
        "_id": "id del libro",
        "title": "Titulo del libro",
        "author": "Autor",
        "genre": "Genero del libro",
        "publication_date": "Año publicado del libro"
    }
]

### Obtener un libro por ID

-   **URL:** `/books/:id`
-   **Método:** `GET`
-   **Descripción:** Obtiene un libro por su ID.
-   **Parámetros URL:**
    -   `id` (string) - El ID del libro.
-   **Respuesta exitosa:**

    {
    "_id": "Id del libro",
    "title": "Nombre del libro",
    "author": "Autor del libro",
     "genre": "Genero del libro",
   "publication_date":: 2020
}
### Crear un nuevo libro

-   **URL:** `/api/books`
-   **Método:** `POST`
-   **Descripción:** Crea un nuevo libro.
-   **Cuerpo de la solicitud:**

     {
    "title":  "Titulo",
    "author":  "Autor",
    "genre":  "genero",
    "publication_date":  "año"
    }

### Eliminar un libro

-   **URL:** `/books/:id`
-   **Método:** `DELETE`
-   **Descripción:** Elimina un libro por su ID.
-   **Parámetros URL:**
    -   `id` (string) - El ID del libro.
-   **Respuesta exitosa:**

    se elimino con exito


### Actualizar un libro

-   **URL:** `/api/books/:id`
-   **Método:** `PUT`
-   **Descripción:** Actualiza un libro existente.
-   **Parámetros URL:**
    -   `id` (string) - El ID del libro.
-   **Devuelve el libro actualizado:**

        {
        "_id": "Id del libro",
        "title": "Nombre del libro",
        "author": "Autor del libro",
         "genre": "Genero del libro",
       "publication_date":: 2020
    }
