//File: src/features/products/components/ProductFilters.jsx

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
    Button, 
    Input,
    SearchInput,
} from "../../../components/form";
import "./Product.css";

const DEFAULT_STATUS_OPTIONS = [
    { label: "All Status", value: "" },
    { label: "Active", value: "active" },
    { label: "inactive", value: "inactive" },
    { label: "Out of Stock", value: "out_of_stock" },
    { label: "Low Stock", value: "low_stock" },
];

const ProductFilters = ({
    filters,
    categories = [],
    brands = [],
    statusOptions = DEFAULT_STATUS_OPTIONS,
    onChange,
    onReset,
}) => {
    const categoryOptions = useMemo(
        () => [{ id: "", name: "All Categories" }, ...categories],
        [categories]
    );

    const brandOptions = useMemo(
        () => [{ id: "", name: "All Brands" }, ...brands],
        [brands]
    );

    const handleChange = (field) => (event) => {
        onChange?.({
            ...filters,
            [field]: event.target.value,
        });
    };

    return (
        <div className="product-filters">
            <div className="product-filters-row">
                <SearchInput
                    placeholder="Search by name, SKU, or barcode..."
                    value={filters.search || ""}
                    onChange={handleChange("search")}
                />

                <select 
                    className="product-filters-select"
                    value={filters.category || ""}
                    onChange={handleChange("category")}
                >

                    {categoryOptions.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <select 
                    className="product-filters-select"
                    value={filters.brand || ""}
                    onChange={handleChange("brand")}
                >
                    {brandOptions.map((brand) => (
                        <options key={brand.id} value={brand.id}>
                            {brand.name}
                        </options>
                    ))}
                </select>

                <select 
                    className="product-filters-select"
                    value={filters.status || ""}
                    onChange={handleChange("status")}
                >
                    {statusOptions.map((status) => (
                        <option key={status.value} value={status.value}>
                            {status.label}
                        </option>
                    ))}
                </select>

                <Input 
                    type="numberr"
                    min="0"
                    placeholder="Min Price"
                    value={filters.minPrice || ""}
                    onChange={handleChange("minPrice")}
                />

                <Input 
                    type="number"
                    min="0"
                    placeholder="Max Price"
                    value={filters.maxPrice || ""}
                    onChange={handleChange("maxPrice")}
                />

                <Button 
                    type="button"
                    variant="secondary"
                    onClick={onReset}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};

ProductFilters.PropTypes = {
    filters: PropTypes.shape({
        search: PropTypes.string,
        category: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        brand: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        status: PropTypes.string,
        minPrice: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }).isRequired,

    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
            name: PropTypes.string.isRequired,
        })
    ),

    brands: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]).isRequired,
            name: PropTypes.string.isRequired,
        })
    ),

    statusOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),

    onChange: PropTypes.func,
    onReset: PropTypes.func,
};

export default ProductFilters;

