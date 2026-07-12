//File: src/features/products/components/ProductTable.jsx
import React from "react";
import PropTypes from "prop-types";

const DEFAULT_COLUMNS = [
    { key: "sku", label: "SKU"},
    { key: "name", label: "Product"},
    { key: "category", label: "Category"},
    { key: "price", label: "Price"},
    { key: "quantity", label: "Stock"},
    { key: "status", label: "Status"}
];

const formatValue = (value) => {
    if (value === null || value === undefined || value === "") return "-";
    return value;
};

const ProductTable = ({
    products = [],
    columns = DEFAULT_COLUMNS,
    loading = false,
    emptyMessage = "No products found",
    onView,
    onEdit,
    onDelete,
}) => {
    if (loading) {
        return (
            <div className="product-table-loading">
                <p>Loading products...</p>
            </div>
        );
    }

    if (!products.length) {
        return (
            <div className="product-table-empty">
                <p>{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="product-table-wrapper">
            <table className="product-table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>{column.label}</th>
                        ))}

                        {(onView || onEdit || onDelete) && (
                            <th style={{ width: "180px"}}>Actions</th>
                        )}
                    </tr>
                </thead>
                
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            {columns.map((column) => (
                                <td key={column.key}>
                                    {column.render
                                        ? column.render(product)
                                        : formatValue(product [column.key])}
                                </td>
                            ))}

                            {(onView || onEdit || onDelete) && (
                                <td>
                                    <div 
                                        style={{
                                            display: "flex",
                                            gap: "8px",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {onView && (
                                            <Button 
                                                type="button"
                                                onClick={() => onView(product)}
                                            >
                                                View
                                            </Button>
                                        )}

                                        {onEdit && (
                                            <Button 
                                                type="button"
                                                OnClick={() => onEdit(product)}
                                            >
                                                Edit 
                                            </Button>
                                        )}

                                        {onDelete && (
                                            <Button
                                                type="button"
                                                onClick={() => onDelete(product)}
                                                style={{
                                                    color: "#fff",
                                                    backgroundColor: "#d32f2f",
                                                    border: "none",
                                                    padding: "6px 12ppx",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        )}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

ProductTable.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            render: PropTypes.func,
        })
    ),
    loading: PropTypes.bool,
    emptyMessage: PropTypes.string,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

export default ProductTable;

