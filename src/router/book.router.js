import express from "express";
import { actualizarLibro, borrarLibro, crearLibro, getBook, mostrarLibro, mostrarLibros } from "../controller/books.controller.js";

const router = express.Router();

//Obtener todos los libros

router.get('/', mostrarLibros);

//Crear un libro (rescursos)

router.post('/', crearLibro);

//Mostrar un solo libro

router.get('/:id', getBook, mostrarLibro)

//Actualizar libro

router.put('/:id', getBook, actualizarLibro)

//Borrar un libro 

router.delete('/:id', getBook, borrarLibro);

export default router;