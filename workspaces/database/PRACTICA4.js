
use('biblioteca');


db.libros.updateOne({ "titulo": "Fahrenheit 451" }, { $set: { "año_publicacion": 1960 } });
db.libros.updateOne({ "titulo": "Moby Dick" }, { $set: { "año_publicacion": 1850 } });

db.usuarios.updateOne({ "nombre": "Juan Pérez" }, { $set: { "edad": 36 } });
db.usuarios.updateOne({ "nombre": "Luis Martínez" }, { $set: { "email": "luis.martinez_new@example.com" } });

db.prestamos.updateOne({ "id_usuario": 3 }, { $set: { "fecha_devolucion": ISODate("2025-11-21") } });
db.prestamos.updateOne({ "id_usuario": 4 }, { $set: { "fecha_prestamo": ISODate("2025-11-14") } });

db.autores.updateOne({ "nombre": "Ray Bradbury" }, { $set: { "nacionalidad": "Británico" } });
db.autores.updateOne({ "nombre": "F. Scott Fitzgerald" }, { $set: { "biografia": "Autor de 'The Great Gatsby' y más novelas clásicas" } });

db.categoria.updateOne({ "id_categoria": 3 }, { $set: { "descripcion": "Mundos mágicos y fantásticos" } });
db.categoria.updateOne({ "id_categoria": 5 }, { $set: { "descripcion": "Narrativa de temas diversos" } });

print("Documentos modificados");
