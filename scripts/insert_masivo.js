// Conectar a la base de datos
use('TiendaTecnologia');

// Bucle para la inserción masiva de 100 documentos
for (var i = 1; i <= 100; i++) {
    db.productos.insertOne({
        nombre: "Producto " + i,
        precio: Math.floor(Math.random() * (3000000 - 50000 + 1)) + 50000,
        stock: Math.floor(Math.random() * 100),
        categoria: i % 2 == 0 ? "Laptops" : "Accesorios",
        especificaciones: { 
            marca: "MarcaGenérica", 
            garantia_meses: 12 
        }
    });
}
