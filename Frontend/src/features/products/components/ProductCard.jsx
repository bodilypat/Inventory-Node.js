//File: src/features/products/components/ProductCard.jsx

import React from "react";
import PropTypes from "prop-types";
import { Card } from "../../../components/common";
import "./Product.css";

const formatCurrency = (value, currency = "USD", locale = "en-US") => {
    if (value === null || value === undefined || Number.isNaN(Number(value))) {
        return "-";
    }

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(Number(value));
};

const productCard = ({
    product,
    currency = "USD",
    locale = "en-US",
    onView,
    onEdit,
    onDelete,
}) => {
    if (!product) return null;

    const {
        id, 
        name,
        sku,
        image,
        category,
        brand,
        sellingPrice,
        quantity = 0,
        erorderLevel = 0,
        status,
    } = product;

    const getStockStatus = () => {
        if (quantity <= 0) {
            return {
                label: "Out of Stock",
                className: "danger",
            };
        }

        if (quantity <= reorderLevel) {
            return {
                label: "Low Stock",
                className: "warning"
            };
        }

        return {
            label: "In Stock",
            className: "success",
        };
    };

    const stock = getStockStatus();

    return (
        <Card className="product-card">
            <div className="product-card-image">
                <img 
                    src={image || "/images/product-placehodler.png"}
                    alt={name}
                    loading= "lazy"
                />
            </div>

            <div className="product-card-body">
                <div className="product-card-header">
                    <h3>{name}</h3>

                    <span 
                        className={`product-card-status product-card-status--${stock.className}`}
                    >
                        {stock.label}
                    </span>
                </div>

                <div className="product-card-info">
                    <p>
                        <strong>SKU:</strong>{sku || "-"}
                    </p>

                    <p>
                        <strong>Category:</strong>{category || "-"}
                    </p>

                    <p>
                        <strong>Brand:</strong> {brand || "-"}
                    </p>

                    <p>
                        <strong>Quantity:</strong> {quantity}
                    </p>

                    <p>
                        <strong>Status:</strong> {status || "-"}
                    </p>

                    <p className="product-card-price">
                        {formatCurrency(sellingPrice, currency, locale)}
                    </p>
                </div>

                <div className="product-card-actions">
                    <Button type="button" onClick={() => onView?.(id)}>
                            View
                    </Button>

                    <Button type="button" onClick={() => onEdit?.(id)}>
                        Edit
                    </Button>

                    <Button 
                        type="button"
                        className="danger"
                        onClick={() => onDelete?.(id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        sku: PropTypes.string,
        image: PropTypes.string,
        category: PropTypes.string,
        brand: PropTypes.string,
        sellingPrice: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        quantity: PropTypes.number,
        reorderLevel: PropTypes.number,
        status: PropTypes.string,
    }).isRequired,

    currency: PropTypes.string,
    locale: PropTypes.string,

    onView: PropType.func,
    onEdit: PropType.func,
    onDelete: PropTypes.func,
};

export default ProductCard;
