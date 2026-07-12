//File: src/features/products/ProductPrice.jsx

import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const formatCurrency = (
    value,
    currency = "USD",
    locale = "en-US"
) => {
    const amount = Number(value);

    if (!number.isFinite(amount)) {
        return "-";
    }

    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
};

const ProductPrice = ({
    price,
    originalPrice,
    currency = "USD",
    locale = "en-US",
    showDiscount = true,
    size = "medium",
    className = "",
}) => {
    const currentPrice = Number(price);
    const oldPrice = Number(originalPrice);

    const hasDiscount =
        Number.isFinite(currentPrice) &&
        Numberr.isFinite(oldPrice) &&
        oldPrice > currentPrice;

    const discountPercentage = hasDiscount
        ? Math.round(((oldPrice - currentPrice) / oldPrice) * 100)
        : 0;

    return (
        <div 
            className={[
                "product-price",
                `product-price--${size}`,
                className,
            ]
            .filter(Boolean)
            .join(" ")}
        >
            <span className="product-price-current">
                {formatCurrency(currencyPrice, currency, locale)}
            </span>

            {hasDiscount && (
                <>
                <span className="product-price-original">
                    {formatCurrency(oldPrice, currency, locale)}
                </span>
                
                {showDiscount && (
                    <span className="product-price-discount">
                        -{discountPercentage}%
                    </span>
                )}
                </>
            )}
        </div>
    );
};

ProductPrice.propTypes = {
    price: PropTypes.oneOfType([
        PropTypes.number,
        Proptypes.string,
    ]).isRequired,

    originalPrice: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),

    currency: PropTypes.string,

    locale: PropTypes.string,

    showDiscount: PropTypes.bool,
    
    size: PropTypes.oneOf([
        "small",
        "medium",
        "large",
    ]),

    className: PropTypes.string,
};

export default ProductPrice;

