
printjson(db.libros.find({ "titulo": "1984" }).toArray());
printjson(db.libros.find({ "titulo": "El mundo de ben y hooly" }).toArray());

printjson(db.usuarios.find({ "nombre": "Carlos López" }).toArray());
printjson(db.usuarios.find({ "nombre": "María Gómez" }).toArray());

printjson(db.prestamos.find({ "id_prestamo": 1 }).toArray());
printjson(db.prestamos.find({ "id_prestamo": 2 }).toArray());

printjson(db.autores.find({ "nombre": "George Orwell" }).toArray());
printjson(db.autores.find({ "nombre": "J.K. Rowling" }).toArray());

printjson(db.categoria.find({ "id_categoria": 1 }).toArray());
printjson(db.categoria.find({ "id_categoria": 2 }).toArray());
