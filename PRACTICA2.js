db.createCollection('libros');
db.libros.insertOne({
  "titulo": "1984",
  "autor": "George Orwell",
  "ISBN": "978-0-452-28423-4",
  "genero": "Distopía",
  "ano_publicacion": 1949,
  "disponibilidad": true,
  "fechaRegistro": ISODate("2025-11-12T14:00:00Z"),
  "sinopsis": "Una novela distópica que muestra un futuro totalitario controlado por el Gran Hermano.",
  "editorial": "Secker & Warburg",
  "precio": 15.99
    });

db.createCollection('usuarios');
db.usuarios.insertOne({
  "nombre": "Carlos López",
  "edad": 25,
  "email": "carlos.lopez@example.com",
  "activo": true,
  "saldo": 1530.75,
  "fechaRegistro": ISODate("2025-11-12T14:00:00Z"),
  "intereses": ["música", "fútbol", "programación"],
  "direccion": {
    "calle": "Av. Universidad 120",
    "ciudad": "Ciudad de México",
    "cp": "04360"
  }
    });

db.createCollection('prestamos');
db.prestamos.insertOne({
  "id_prestamo": 1,
  "id_usuario": 1,
  "id_libro": 1,
  "fecha_prestamo": ISODate("2025-11-12"),
  "fecha_devolucion": ISODate("2025-11-19"),
  "estado": "activo",
  "fechaRegistro": ISODate("2025-11-12T14:00:00Z"),
  "titulo": "El mundo de ben y hooly",
  "biblioteca": "Zaragosa",
  " dias para entregarlo": 7 
    });

db.createCollection('autores');
db.autores.insertOne({
  "nombre": "George Orwell",
  "apellidos" : "bornim voli",
  "fecha_nacimiento": ISODate("1903-06-25T00:00:00Z"),
  "nacionalidad": "Británica",
  "biografia": "Autor conocido por su crítica social y política. Escribió novelas como '1984' y 'Rebelión en la granja'.",
  "fechaRegistro": ISODate("2025-11-12"),
  "profesion": "escritor",
  "edad": 78,
  "libros publicados": 4,
  "sexo": "masculino"
    });

db.createCollection('categoria');
db.categoria.insertOne({
    "id_categoria": 1,
    "nombre_categoria": "Novela",
    "descripcion": "Narrativa extensa que aborda una historia ficticia",
    "biblioteca": "Consti",
    "autor": "pablo",
    "categoria": "rerror",
    "librero": 65,
    "libros" :"300"
    });