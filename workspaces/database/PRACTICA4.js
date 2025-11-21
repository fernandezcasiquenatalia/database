
db.libros.updateOne(
  { "titulo": "1984" },
  { $set: { "precio": 20.99 } }
);

db.usuarios.updateOne(
  { "nombre": "Carlos López" },
  { $set: { "saldo": 1700.50 } }
);

db.prestamos.updateOne(
  { "id_prestamo": 1 },
  { $set: { "estado": "devuelto", "fecha_devolucion": ISODate("2025-11-19") } }
);

db.autores.updateOne(
  { "nombre": "George Orwell" },
  { $set: { "biografia": "George Orwell fue un escritor británico, famoso por sus novelas '1984' y 'Rebelión en la granja'." } }
);

db.categoria.updateOne(
  { "id_categoria": 1 },
  { $set: { "descripcion": "Categoría de novelas distópicas que exploran futuros totalitarios." } }
);


