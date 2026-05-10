// Pipeline de agregación para obtener métricas estratégicas

db.productos.aggregate([
    {
        $group: {
            _id: "$categoria",
            total_unidades: { $count: {} },
            valor_total_stock: { $sum: "$precio" },
            precio_promedio: { $avg: "$precio" }
        }
    }
]);
