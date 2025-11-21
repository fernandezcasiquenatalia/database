
use('biblioteca');


db.libros.deleteOne({ "titulo": "1984" });
db.libros.deleteOne({ "titulo": "El mundo de ben y hooly" });


db.usuarios.deleteOne({ "nombre": "Carlos López" });
db.usuarios.deleteOne({ "nombre": "María Gómez" });


db.prestamos.deleteOne({ "id_prestamo": 1 });
db.prestamos.deleteOne({ "id_prestamo": 2 });


db.autores.deleteOne({ "nombre": "George Orwell" });
db.autores.deleteOne({ "nombre": "J.K. Rowling" });


db.categoria.deleteOne({ "id_categoria": 1 });
db.categoria.deleteOne({ "id_categoria": 2 });
