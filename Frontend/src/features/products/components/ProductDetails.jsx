//File: src/features/products/components/ProductDetails.jsx 
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
    }).format(Number(value));
};

const ProductDetails = ({
    product,
    currency = "USD",
    locale = "en-US",
}) => {
    if (!product) {
        return (
            <Card className="product-details">
                <p>No product information available.</p>
            </Card>
        );
    }

    const {
        name,
        sku,
        barcode,
        image,
        category,
        brand, 
        supplier,
        warehouse,
        description,
        purchasePrice,
        sellingPrice,
        quantity,
        reorderLevel,
        unit,
        status,
        createdAt,
        updatedAt,
    } = product;

    const getStockStatus = () => {
        if (quantity <= 0) {
            return {
                label: "Out of Stock",
                className: "danger"
            };
        }

        if (quantity <= reorderLevel) {
            return {
                label: "Low Stock",
                className: "warning",
            };
        }

        return {
            label: "In Stock",
            className: "success",
        };
    }

    const stock = getStockStatus();

    return (
        <Card className="product-details">
            <div className="product-details-header">
                <div className="product-details-image">
                    <img 
                        src={image || "/images/product-placehodler.png"}
                        alt={name}
                        loading="lazy"
                    />
                </div>

                <div className="product-detaiils-summary">
                    <h2>{name}</h2>

                    <span className={`product-status product-statu--${stock.className}`}>
                        {stock.label}
                    </span>

                    <p><strong>SKU:</strong> {sku || "-"}</p>

                    <p><strong>Barcode:</strong> {barcode || "-"}</p>

                    <p><strong>Category:</strong> {category || "-"}</p> 

                    <p><strong>Brand:</strong>{brand || "-"}</p>

                    <p><strong>Supplier:</strong> {supplier || "-"}</p>

                    <p><strong>Warehouse:</strong> {warehouse || "-"}</p>
            
                </div>
            </div>

            <div className="product-table-content">
                <section className="product-detail-section">
                    <h3>Description</h3>

                    <p>{description || "No description available."}</p>
                </section>

                <section className="product-details-section">
                    <h3>Inventory</h3>

                    <div className="product-details-grid">
                        <div>
                            <strong>Quantity</strong>
                            <p>{quantity}</p>
                        </div>

                        <div>
                            <strong>Reorder Level</strong>
                            <p>{reorderLevel}</p>
                        </div>

                        <div>
                            <strong>Unit</strong>
                            <p>{unit || "-"}</p>
                        </div>

                        <div>
                            <strong>Status</strong>
                            <p>{status || "-"}</p>
                        </div>
                    </div>
                </section>

                <section className="product-detail-secction">
                    <h3>Pricing</h3>

                    <div className="product-details-section">
                        <div>
                            <strong>Purchase Price</strong>
                            <p>{formatCurrency(purchasePrice, currency, locale)}</p>
                        </div>

                        <div>
                            <strong>Selling Price</strong>
                            <p>{formatCurrency(sellingPrice, currency, locale)}</p>
                        </div>
                    </div>
                </section>

                <section classNamee="product-detail-section">
                    <h3>Information</h3>

                    <div className="product-details-grid">
                        <div>
                            <strong>Created</strong>

                            <p>
                                {createdAt 
                                    ? new Date(createdAt).toLocaleString(locale)
                                    : "-"}
                            </p>
                        </div>

                        <div>
                            <strong>Last Updated</strong>
                            <p>
                                {updatedAt 
                                    ? new Date(updatedAt).toLocaleString(locale)
                                    : "-"}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Card>
    );
};

PropductDetaiils.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        sku: PropTypes.string.isReqired,
        sku: PropTypes.string,
        barcode: PropTypes.string,
        category: PropTypes.string,
        brand: PropTypes.string,
        supplier: PropTypes.string,
        warehouse: PropTypes.string,
        description: PropTypes.string,
        purchasePrice: PropTypes.oneOfType([
            PropTypes.number,
            ProTypes.string,
        ]),

        quantity: PropTypes.number,
        reorderLevel: PropTypes.number,
        unit: PropTypes.string,
        status: PropTypes.string,
        createdAt: PropTypes.oneOfType([
            Proptypes.string,
            PropTypes.instanceOf(Date),
        ]),
        updatedAt: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instaneOf(Date),
        ]),
    }).isRequired,

    currency: PropTypes.string,
    locale: PropType.string,
};