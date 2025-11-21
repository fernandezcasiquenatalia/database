use('biblioteca');

db.libros.insertMany([
    { "titulo": "1984", "autor": "George Orwell", "ISBN": "978-0451524935", "genero": "Distopia", "año_publicacion": 1949 },
    { "titulo": "Brave New World", "autor": "Aldous Huxley", "ISBN": "978-0060850524", "genero": "Ciencia ficción", "año_publicacion": 1932 },
    { "titulo": "Fahrenheit 451", "autor": "Ray Bradbury", "ISBN": "978-1451673319", "genero": "Distopia", "año_publicacion": 1953 },
    { "titulo": "The Great Gatsby", "autor": "F. Scott Fitzgerald", "ISBN": "978-0743273565", "genero": "Ficción", "año_publicacion": 1925 },
    { "titulo": "To Kill a Mockingbird", "autor": "Harper Lee", "ISBN": "978-0061120084", "genero": "Ficción", "año_publicacion": 1960 },
    { "titulo": "Moby Dick", "autor": "Herman Melville", "ISBN": "978-1503280786", "genero": "Aventura", "año_publicacion": 1851 },
    { "titulo": "The Catcher in the Rye", "autor": "J.D. Salinger", "ISBN": "978-0316769488", "genero": "Ficción", "año_publicacion": 1951 },
    { "titulo": "Animal Farm", "autor": "George Orwell", "ISBN": "978-0451526342", "genero": "Allegoría", "año_publicacion": 1945 },
    { "titulo": "The Hobbit", "autor": "J.R.R. Tolkien", "ISBN": "978-0547928227", "genero": "Fantasía", "año_publicacion": 1937 },
    { "titulo": "Harry Potter and the Sorcerer's Stone", "autor": "J.K. Rowling", "ISBN": "978-0590353427", "genero": "Fantasía", "año_publicacion": 1997 }
]);

db.usuarios.insertMany([
    { "nombre": "Carlos López", "edad": 30, "email": "carlos.lopez@example.com" },
    { "nombre": "María Gómez", "edad": 25, "email": "maria.gomez@example.com" },
    { "nombre": "Juan Pérez", "edad": 35, "email": "juan.perez@example.com" },
    { "nombre": "Ana Torres", "edad": 40, "email": "ana.torres@example.com" },
    { "nombre": "Luis Martínez", "edad": 28, "email": "luis.martinez@example.com" },
    { "nombre": "Laura Rodríguez", "edad": 22, "email": "laura.rodriguez@example.com" },
    { "nombre": "Pedro Sánchez", "edad": 33, "email": "pedro.sanchez@example.com" },
    { "nombre": "Julia Fernández", "edad": 27, "email": "julia.fernandez@example.com" },
    { "nombre": "Antonio Ruiz", "edad": 38, "email": "antonio.ruiz@example.com" },
    { "nombre": "Elena López", "edad": 31, "email": "elena.lopez@example.com" }
]);

db.prestamos.insertMany([
    { "id_usuario": 1, "id_libro": 3, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 2, "id_libro": 2, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 3, "id_libro": 5, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 4, "id_libro": 8, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 5, "id_libro": 9, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 6, "id_libro": 7, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 7, "id_libro": 4, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 8, "id_libro": 1, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 9, "id_libro": 10, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") },
    { "id_usuario": 10, "id_libro": 6, "fecha_prestamo": ISODate("2025-11-12"), "fecha_devolucion": ISODate("2025-11-19") }
]);

db.autores.insertMany([
    { "nombre": "George Orwell", "nacionalidad": "Británico", "biografia": "Autor conocido por su crítica política" },
    { "nombre": "Aldous Huxley", "nacionalidad": "Británico", "biografia": "Autor de 'Brave New World'" },
    { "nombre": "Ray Bradbury", "nacionalidad": "Estadounidense", "biografia": "Escribió 'Fahrenheit 451'" },
    { "nombre": "F. Scott Fitzgerald", "nacionalidad": "Estadounidense", "biografia": "Autor de 'The Great Gatsby'" },
    { "nombre": "Harper Lee", "nacionalidad": "Estadounidense", "biografia": "Escribió 'To Kill a Mockingbird'" },
    { "nombre": "J.D. Salinger", "nacionalidad": "Estadounidense", "biografia": "Autor de 'The Catcher in the Rye'" },
    { "nombre": "J.R.R. Tolkien", "nacionalidad": "Británico", "biografia": "Escribió 'The Hobbit' y 'The Lord of the Rings'" },
    { "nombre": "J.K. Rowling", "nacionalidad": "Británica", "biografia": "Creadora de Harry Potter" },
    { "nombre": "Herman Melville", "nacionalidad": "Estadounidense", "biografia": "Autor de 'Moby Dick'" },
    { "nombre": "Ben Fild", "nacionalidad": "Desconocida", "biografia": "Autor de 'ZEN'" }
]);

db.categoria.insertMany([
    { "id_categoria": 1, "nombre": "Distopia", "descripcion": "Futuro totalitario y opresivo" },
    { "id_categoria": 2, "nombre": "Ciencia ficción", "descripcion": "Explora lo desconocido" },
    { "id_categoria": 3, "nombre": "Fantasía", "descripcion": "Mundos imaginarios y mágicos" },
    { "id_categoria": 4, "nombre": "Aventura", "descripcion": "Viajes y exploración" },
    { "id_categoria": 5, "nombre": "Ficción", "descripcion": "Narrativa imaginativa" },
    { "id_categoria": 6, "nombre": "Allegoría", "descripcion": "Historias con lecciones morales" },
    { "id_categoria": 7, "nombre": "Novela histórica", "descripcion": "Eventos históricos en la narrativa" },
    { "id_categoria": 8, "nombre": "Suspenso", "descripcion": "Tensión y misterio" },
    { "id_categoria": 9, "nombre": "Romántica", "descripcion": "Relaciones amorosas" },
    { "id_categoria": 10, "nombre": "Policíaca", "descripcion": "Investigación criminal" }
]);



