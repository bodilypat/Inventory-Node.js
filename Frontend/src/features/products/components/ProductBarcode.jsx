//File: src/features/products/ProductBarcode.jsx

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import JsBarcode from "jsbarcode";
import "./Product.css";

const ProductBarcode = ({
    value,
    format = "CODE128",
    width = 2,
    height = 80,
    displayValue = true,
    fontSize = 16,
    background = "#ffffff",
    margin = 10,
    className = "",
}) => {
    const barcodeRef = useRef(null);

    useEffect(() => {
        if (!barcodeRef.current || !value) return;

        try {
            JsBarcode(barcodeRef.current, value, {
                format,
                width,
                height,
                displayValue,
                fontSize,
                lineColor,
                background,
                margin,
            });
        } catch (error) {
            console.error("Failed to generate barcode", error);
        }
    }, [
        value,
        format,
        width,
        height,
        displayValue,
        fontSize,
        lineColor,
        background,
        margin,
    ]);

    if (!value) {
        return (
            <div className={`product-barcode product-barcode--empty ${className}`}>
                <span>No barcode available</span>
            </div>
        );
    }

    return (
        <div className={`product-barcode ${className}`}>
            <svg ref={barcodeRef} aria-label={`Barcode for ${value}`} />
        </div>
    );
};

ProductBarcode.propTypes = {
    /* Barcode value. */
    value: PropTypes.string.isRequired,
    format: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    displayValue: PropTypes.bool,
    fontSize: PropTypes.number,
    lineColor: PropTypes.string,
    background: PropTypes.string,
    margin: PropTypes.number,
    className: PropTypes.string,
};

export default ProductBarcode;

