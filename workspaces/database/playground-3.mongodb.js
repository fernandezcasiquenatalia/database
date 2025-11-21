
use('biblioteca');


db.libros.find({ "titulo": "1984" }); 
db.libros.deleteOne({ "titulo": "1984" });

db.usuarios.find({ "nombre": "Carlos López" }); 
db.usuarios.deleteOne({ "nombre": "Carlos López" }); 

db.prestamos.find({ "biblioteca": "Zaragoza" }); 
db.prestamos.deleteOne({ "biblioteca": "Zaragoza" }); 

db.autores.find({ "nombre": "George Orwell" }); 
db.autores.deleteOne({ "nombre": "George Orwell" }); 

db.categoria.find({ "id_categoria": 1 }); 
db.categoria.deleteOne({ "id_categoria": 1 }); 

