use('escuela');
db.createCollection('alumnos');
db.alumnos.insertOne({
    Nombre: "Natalia Fernandez",
    Edad: 17,
    Direccion: {Calle:"S/N",
        "Numero":34,
        "Ciudad":"Queretaro"},
        Telefono: "4423567879"
    });
