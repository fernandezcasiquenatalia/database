

db.libros.find({ "titulo": "1984" });

db.libros.find({ "autor": "George Orwell" });

db.libros.find({ "precio": { $gt: 15 } });

db.libros.find({ "año_publicacion": { $gt: 1950 } });

db.libros.find({ "titulo": { $regex: "mundo", $options: "i" } });

db.libros.find({ "ISBN": "978-0-452-28423-4" });

db.libros.find({ "disponibilidad": true });

db.libros.find({ "editorial": "Secker & Warburg" });

db.libros.find({ "precio": { $lte: 15 } });

db.libros.find({ "año_publicacion": { $lt: 1980 } });

db.usuarios.find({ "nombre": "Carlos López" });

db.usuarios.find({ "saldo": { $gt: 1500 } });

db.usuarios.find({ "activo": true });

db.usuarios.find({ "intereses": "música" });

db.usuarios.find({ "edad": { $gt: 30 } });

db.usuarios.find({ "direccion.ciudad": "Ciudad de México" });

db.usuarios.find({ "intereses": "fútbol" });

db.usuarios.find({ "saldo": { $gte: 1000, $lte: 2000 } });

db.usuarios.find({ "intereses": { $size: { $gt: 1 } } });

db.usuarios.find({ "nombre": { $regex: "^Carlos", $options: "i" } });
