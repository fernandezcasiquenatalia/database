use('biblioteca');

db.libros.insertMany([
  {
    "_id": 1,
    "titulo": "1984",
    "autor": "George Orwell",
    "ISBN": "978-0-452-28423-4",
    "genero": "Distopía",
    "año_publicacion": 1949,
    "disponibilidad": true,
    "fechaRegistro": ISODate("2025-11-12T14:00:00Z"),
    "sinopsis": "Una novela distópica que muestra un futuro totalitario controlado por el Gran Hermano.",
    "editorial": "Secker & Warburg",
    "precio": 15.99
  }
]);

db.usuarios.insertMany([
  {
    "_id": 1,
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
  }
]);

db.prestamos.insertMany([
  {
    "_id": 1,
    "id_usuario": 1,
    "id_libro": 1,
    "fecha_prestamo": ISODate("2025-11-12"),
    "fecha_devolucion": ISODate("2025-11-19"),
    "estado": "activo",
    "fechaRegistro": ISODate("2025-11-12T14:00:00Z"),
    "titulo": "El mundo de Ben y Hooly",
    "biblioteca": "Zaragoza",
    "dias_para_entregarlo": 7
  }
]);

db.autores.insertMany([
  {
    "_id": 1,
    "nombre": "George Orwell",
    "apellidos": "Blair",
    "fecha_nacimiento": ISODate("1903-06-25T00:00:00Z"),
    "nacionalidad": "Británica",
    "biografia": "Autor conocido por su crítica social y política. Escribió novelas como '1984' y 'Rebelión en la granja'.",
    "fechaRegistro": ISODate("2025-11-12"),
    "profesion": "escritor",
    "edad": 78,
    "libros_publicados": 4,
    "sexo": "masculino"
  }
]);

db.categoria.insertMany([
  {
    "_id": 1,
    "id_categoria": 1,
    "nombre": "Distopía",
    "descripcion": "Categoría que abarca novelas que presentan un futuro totalitario o un orden social opresivo.",
    "fechaRegistro": ISODate("2025-11-12T14:00:00Z"),
    "biblioteca": "Colonial",
    "titulo": "ZEN",
    "autor": "Ben Fild"
  }
]);
