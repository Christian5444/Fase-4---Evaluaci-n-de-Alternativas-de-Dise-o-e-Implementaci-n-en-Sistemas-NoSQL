// Operaciones de persistencia en la colección 'productos'

// 1. SELECT: Buscar productos de la categoría Laptops
db.productos.find({ categoria: "Laptops" }).limit(5);

// 2. UPDATE: Actualizar el stock de un producto específico de forma atómica
db.productos.updateOne(
    { nombre: "Producto 1" }, 
    { $set: { stock: 500 } }
);

// 3. DELETE: Eliminar un registro obsoleto (Producto 100)
db.productos.deleteOne({ nombre: "Producto 100" });
