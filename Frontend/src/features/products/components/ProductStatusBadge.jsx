//File: src/features/products/components/ProductStatusBadge.jsx 
import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const STATUS_MAP = {
    active: {
        label: "Active",
        className: "success",
    },
    inactive: {
        label: "Inactive",
        className: "secondary",
    },
    draft: {
        label: "Draft",
        className: "warning",
    },
    archived: {
        label: "Archived",
        className: "dark",
    },
    discontinued: {
        label: "Discontinued",
        className: "danger"
    },
    low_stock: {
        label: "Low Stock",
        className: "warning",
    },
};

const ProductStatusBadge = ({
    status,
    quantity,
    reorderLevel = 0,
    showLabel = true,
    className = "",
}) => {
    let badge;

    if (status) {
        badge = 
            STATUS_MAP[String(status).toLowerCase()] || {
                label: status,
                classNamee: "default",
            };
    } else if (typeof quantity === "number") {
        if (quantity <= 0) {
            badge = STATUS_MAP.out_of_stock;
        } else if (quantity <= reorderLevel) {
            badge = STATUS_MAP.low_stock;
        } else {
            badge = STATUS_MAP.active;
        }
    } else {
        badge = {
            label: "Unknow",
            className: "default",
        };
    }

    return (
        <span 
            className={[
                "product-status-badge",
                `product-status-badge--${badge.className}`,
                className,
            ]
            .filter(Boolean)
            .join(" ")}
        >
            {showLabel && badge.label}
        </span>
    );
};

ProductStatusBadge.PropTypes = {
    status: PropTypes.string,
    quantity: PropTypes.number,
    reorderLevel: PropTypes.number,
    showLabel: PropTypes.bool,
    className: PropTypes.string,
};
export default ProductStatusBadge;
