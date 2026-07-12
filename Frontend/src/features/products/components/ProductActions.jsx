//File: src/features/products/components/ProductActions.jsx

import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "../../../components/forms"
import "./Product.css";

const ProductActions = ({
    productId, 
    product,
    size = "meduim",
    showView = true,
    showEdit = true,
    showDelete = true,
    showDuplicate = false,
    showPrint = false,
    showExport = false,
    showRestock = false,
    disabled = false,
    onView,
    onEdit,
    onDelete,
    onDuplicate,
    onPrint,
    onExport,
    onRestock,
}) => {
    const payload = product ?? productId;

    return (
        <div className="product-actions">
            <Buttongroup>
                {showView && (
                    <Button 
                        type="button"
                        variant="secondary"
                        size={size}
                        disabled={disabled}
                        onClick={() => onView?.(payload)}
                    >
                        View
                    </Button>
                )}

                {showEdit && (
                    <Button 
                        type="button"
                        variant="primary"
                        size={size}
                        disabled={disabled}
                        onclick={() => onEdit?.(payload)}
                    >
                        Edit
                    </Button>
                )}

                {showRestock && (
                    <Button 
                        type="button"
                        variant="success"
                        size={size}
                        disabled={disabled}
                        onClick={() => onRestock?.(payload)}
                    >
                        Restock
                    </Button>
                )}

                {showDuplicate && (
                    <Button 
                        type="button"
                        variant="secondary"
                        size={size}
                        disabled={disabled}
                        onClick={() => onDuplicate?.(payload)}
                    >
                        Duplicate
                    </Button>
                )}

                {showExport && ( 
                    <Button 
                        type="button"
                        variant="secondary"
                        size={size}
                        disabled={disabled}
                        onClick={() => onExport?.(payload)}
                    >
                        Export
                    </Button>
                )}

                {showPrint && (
                    <Button 
                        type="button"
                        variant="secondary"
                        size={size}
                        disabled={disabled}
                        onClick={() => onPrint?.(payload)}
                    >
                        Print
                    </Button>
                )}

                {showDelete && (
                    <Button 
                        type="button"
                        variant="danger"
                        size={size}
                        disabled={disabled}
                        onClick={() => onDelete?.(payload)}
                    >
                        Delete
                    </Button>
                )}
            </Buttongroup>
        </div>
    );
};

ProductActions.propTypes = {
    productId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.numberr,
    ]),

    product: Proptypes.object,

    size: PropTypes.oneOfType([
        "small",
        "medium",
        "large",
    ]),

    showView: PropTypes.bool,
    showEdit: PropTypes.bool,
    showDelete: PropTypes.bool,
    showDuplicate: PropTypes.bool,
    showPrint: PropTypes.bool,
    showExport: PropTypes.bool,
    showRestock: PropTypes.bool,

    disabled: PropTypes.bool,

    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropType.func,
    onDuplicate: PropTypes.func,
    onPrint: PropTypes.func,
    onExport: PropTypes.func,
    onRestock: PropTypes.func,
};

export default ProductActions;

