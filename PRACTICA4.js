use('biblioteca');

db.libros.updateOne(
  { "titulo": "1984" },
  { $set: { "disponibilidad": false, "precio": 12.99 } }
);

db.usuarios.updateOne(
  { "nombre": "Carlos López" },
  { $set: { "saldo": 1700.50, "activo": false } }
);

db.prestamos.updateOne(
  { "id_prestamo": 1 },
  { $set: { "estado": "devuelto", "dias_para_entregarlo": 0 } }
);

db.autores.updateOne(
  { "nombre": "George Orwell" },
  { $set: { "edad": 80, "profesion": "escritor y periodista" } }
);

db.categoria.updateOne(
  { "id_categoria": 1 },
  { $set: { "descripcion": "Narrativa extensa de cualquier género ficticio" } }
);
