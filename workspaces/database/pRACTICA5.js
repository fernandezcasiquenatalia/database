
use('biblioteca');


db.libros.find({}).limit(10); 
db.libros.find({ "genero": "Distopía" });  
db.libros.find({ "ano_publicacion": { $gte: 1900 } }); 
db.libros.find({ "disponibilidad": true });  
db.libros.find({ "titulo": { $regex: "1984", $options: 'i' } }); 
db.libros.find({ "precio": { $lt: 20 } }); 
db.libros.find({ "ISBN": "978-0-452-28423-4" }); 
db.libros.find({ "editorial": "Secker & Warburg" }); 
db.libros.find({ "sinopsis": { $regex: "futuro", $options: 'i' } });  
db.libros.find({ "ano_publicacion": 1949 }); 


db.usuarios.find({}).limit(10);
db.usuarios.find({ "edad": { $gte: 18 } }); 
db.usuarios.find({ "activo": true }); 
db.usuarios.find({ "nombre": { $regex: "Carlos", $options: 'i' } });  
db.usuarios.find({ "direccion.ciudad": "Ciudad de México" }); 
db.usuarios.find({ "saldo": { $gt: 1000 } });  
db.usuarios.find({ "intereses": { $in: ["fútbol"] } });  
db.usuarios.find({ "email": "carlos.lopez@example.com" });  
db.usuarios.find({ "direccion.cp": "04360" }); 
db.usuarios.find({ "edad": { $lt: 30 } }); 


db.prestamos.find({}).limit(10);
db.prestamos.find({ "estado": "activo" }); 
db.prestamos.find({ "biblioteca": "Zaragosa" });  
db.prestamos.find({ "dias_para_entregarlo": { $gte: 7 } });  
db.prestamos.find({ "fecha_prestamo": { $lt: ISODate("2025-11-12") } });  
db.prestamos.find({ "fecha_devolucion": { $gte: ISODate("2025-11-19") } });  
db.prestamos.find({ "id_usuario": 1 });  
db.prestamos.find({ "id_libro": 1 });  
db.prestamos.find({ "titulo": { $regex: "ben", $options: 'i' } }); 
db.prestamos.find({ "dias_para_entregarlo": { $lt: 5 } });  
db.prestamos.find({ "estado": "devuelto" });  


db.autores.find({}).limit(10);
db.autores.find({ "edad": { $gt: 70 } });  
db.autores.find({ "profesion": "escritor" });  
db.autores.find({ "nacionalidad": "Británica" });  
db.autores.find({ "sexo": "masculino" });  
db.autores.find({ "libros_publicados": { $gte: 4 } });  
db.autores.find({ "nombre": { $regex: "George Orwell", $options: 'i' } });  
db.autores.find({ "biografia": { $regex: "crítica social", $options: 'i' } }); 
db.autores.find({ "fecha_nacimiento": { $lt: ISODate("1900-01-01") } }); 
db.autores.find({ "edad": { $lt: 80 } });  
db.autores.find({ "nombre": "J.K. Rowling" });  


db.categoria.find({}).limit(10);
db.categoria.find({ "nombre_categoria": "Novela" });  
db.categoria.find({ "librero": { $gt: 50 } });  
db.categoria.find({ "libros": { $gt: 200 } }); 
db.categoria.find({ "autor": "pablo" });  
db.categoria.find({ "categoria": "rerror" }); 
db.categoria.find({ "descripcion": { $regex: "ficticia", $options: 'i' } });  

