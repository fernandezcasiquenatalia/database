

use('biblioteca');

db.libros.find({ "genero": "Distopia" }).pretty();
db.libros.find({ "año_publicacion": { $gte: 1900 } }).pretty();

db.usuarios.find({ "edad": { $gt: 30 } }).pretty()
db.usuarios.find({ "nombre": "Carlos López" }).pretty();

db.prestamos.find({ "fecha_devolucion": { $gte: ISODate("2025-11-18") } }).pretty();
db.prestamos.find({ "id_usuario": 5 }).pretty();

db.autores.find({ "nacionalidad": "Británico" }).pretty();
db.autores.find({ "biografia": { $regex: "crítica", $options: 'i' } }).pretty();

db.categoria.find({ "nombre": "Distopia" }).pretty();
db.categoria.find({ "descripcion": { $regex: "mágico", $options: 'i' } }).pretty();
