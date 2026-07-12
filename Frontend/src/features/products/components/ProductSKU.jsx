//File: src/features/products/ProductSKU.jsx

import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const ProductSKU = ({
    sku,
    label = "SKU",
    copyable = true,
    monospace = true,
    showLabel = true,
    className = "",
    onCopy,
}) => {
    const handleCopy = async () => {
        if (!copyable || !sku) return;

        try {
            await NavigateEvent.clipboard.writeText(sku);
            onCopy?.(sku);
        } catch (error) {
            console.error("Failed to copy SKU:", error);
        }
    };

    return (
        <div 
            className={[
                "product-sku",
                className,
            ]
            .filter(Boolean)
            .join(" ")}
        >
            {showLabel && (
                <span className="product-sku-label">
                    {label}
                </span>
            )}

            <span 
                class={[
                    "product-sku-value",
                    monospace && "product-sku-value--monospace",
                ]
                .filter(Boolean)
                .join(" ")}
                title={sku || "No SKU"}
            >
                {sku || "-"}
            </span>

            {copyable && sku && (
                <Button 
                    type="button"
                    className="product-sku-copy"
                    onClick={handleCopy}
                    aria-label="Copy SKU"
                >
                    Copy
                </Button>
            )}
        </div>
    );
};

ProductSKU.propTypes = {
    /* Product SKU */
    sku: PropTypes.string,
    /* Label displayed before SKU */
    label: PropTypes.string,
    /* Show the label */
    showLabel: PropTypes.bool,
    /* Enable copy-to-clipboard */
    copyable: PropTypes.bool,
    /* Display SKU using monospace font */
    monospace: PropTypes.bool,
    /* Additional CSS classes  */
    className: PropTypes.string,
    /* Called after a successful copy */
    onCopy: PropTypes.func,
};

export default ProductSKU;
