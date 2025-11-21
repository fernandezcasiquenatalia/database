


use('biblioteca');

db.libros.deleteOne({ "titulo": "1984" });
db.libros.deleteOne({ "titulo": "El mundo de Ben y Hooly" });


db.usuarios.deleteOne({ "nombre": "Carlos López" });
db.usuarios.deleteOne({ "nombre": "María Gómez" });  

db.prestamos.find().pretty();  
db.prestamos.deleteOne({ "_id": ObjectId("el_ID_obtenido") });  


db.autores.deleteOne({ "nombre": "George Orwell" });
db.autores.deleteOne({ "nombre": "J.K. Rowling" }); 


db.categoria.deleteOne({ "id_categoria": 1 });
db.categoria.deleteOne({ "id_categoria": 2 }); 
