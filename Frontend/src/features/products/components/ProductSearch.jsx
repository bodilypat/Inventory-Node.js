//File: src/features/products/components/ProductSearch.jsx

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SearchInput } from "../../../components/forms";
import "./Product.css";

const ProductSearch = ({
    value = "",
    placeholder = "Search products by name, SKU, or barcode...",
    debounce = 400,
    autoFocus = false,
    disabled = false,
    onChange,
    onSearch,
    onClear,
}) => {
    const [searchTerm, setSearchTerm] = useState(value);

    useEffect(() => {
        setSearchTerm(value);
    }, [value]);

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch?.(searchTerm.trim());
        }, debounce);

        return () => clearTimeout(timer);
    }, [searchTerm, debounce, onSearch]);

    const handleChange = (even) => {
        const newValue = event.target.value;

        setSearchTerm(newValue);
        onChange?.(newValue);
    };

    const handleClear = () => {
        setSearchTerm("");
        onChange?.("");
        onSearch?.("");
        onClear?.();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            onSearch?.(searchTerm.trim());
        }

        if (event.key === "Ecape") {
            handleClear();
        }
    };

    return (
        <div className="product-search">
            <SearchInput 
                value={searchTerm}
                placeholder={placeholder}
                autoFocus={autoFocus}
                disabled={disabled}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />

            {searchTerm && (
                <Button 
                    type="button"
                    className="product-search-clear"
                    onClick={handleClear}
                    aria-label="Clear search"
                >
                    X
                </Button>
            )}
        </div>
    );
};

ProductSearch.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    debounce: PropTypes.number,
    disabled: PropTypes.bool,

    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
};

export default ProductSearch;

