import bookModel from "../model/book.model.js";


//MIDDLEWARE 
export const getBook = async (req, res, next) => {
    let book;
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.status(404).json({
            msg: 'el ID no es valido, no corresponde a ningun libro'
        })
    }

    try {
        book = await bookModel.findById(id);

        if (!book) {
            return res.status(404).json({
                msg: 'Libro no encontrado'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: error.message
        })
    }

    res.book = book;
    next();
}


export const mostrarLibros = async (req, res) => {
    try {
        const books = await bookModel.find();
        console.log('GET ALL THE BOOK ', books);
        if (books.lenght === 0) {
            return res.status(204).json([]);
        }
        res.json(books);
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error}` })
    }
}

export const crearLibro = async (req, res) => {
    const { title, author, genre, publication_date } = req?.body;

    if (!title || !author || !genre || !publication_date) {
        return res.status(400).json({ msg: 'SON OBLIGATORIO' })
    }

    const book = new bookModel(
        {
            title, author, genre, publication_date
        }
    );

    try {
        const newBook = await book.save();
        console.log('Create new book');
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }

}


//Mostrar un SOLO libro
export const mostrarLibro = async (req, res) => {
    res.json(res.book)
}


//Actualizacion de los datos de los libros
export const actualizarLibro = async (req, res) => {
    try {
        const book = res.book;
        book.title = req.body.title || book.title
        book.author = req.body.author || book.author
        book.genre = req.body.genre || book.genre
        book.publication_date = req.body.publication_date || book.publication_date

        const updateBook = await book.save();
        res.json(updateBook);

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//ELiminar un libro

export const borrarLibro = async (req, res) => {

    try {

        const book = res.book;
        await book.deleteOne({ _id: book._id });
        /*  const deleteBook = await res.book.deleteById() */
        res.send('se elimino con exito')
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }


}