//File: src/features/products/components/ProductForm.jsx
import React from "react";
import PropTypes from "prop-types";
import {
    Button, 
    Input,
    Textarea,
    FormGroup,
    FormLabel,
    FormError,
} from "../../../components/forms";
import CategorySelect from "./CategorySelect";
import BrandSelect from "./BrandSelecgt";
import UnitSelect from "./UnitSelect";
import ProductImageUpload from "./ProductImageUpload";
import "./Product.css";

const ProductForm = ({
    formData,
    errors = {},
    categorires = [],
    brands = [],
    units = [],
    loading = false,
    submitText = "Save Product",
    onChange,
    onImageChange,
    onSubmit,
}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        onChange({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>

            {/* Product Information */}
            <section className="product-form-section">
                <h3>Basic Information</h3>

                <FormGroup>
                    <FormLabel requried>Product Name</FormLabel>

                    <Input 
                        name="name"
                        placeholder="Enter product name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <formError>{errors.name}</formError>
                </FormGroup>

                <FormGroup>
                    <FormLabel requried>SKU</FormLabel>

                    <Input 
                        name="sku"
                        placeholder="SKU"
                        value={formData.sku}
                        onChange={handleChange}
                    />

                    <FormError>{errors.sku}</FormError>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Barcode</FormLabel>

                    <Input 
                        name="barcode"
                        placeholder="Barcode"
                        value={formData.barcode}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Description</FormLabel>

                    <Textarea
                        name="description"
                        rows={4}
                        placeholder="Product descriptions..."
                        onChange={handleChange}
                    />
                </FormGroup>
            </section>

            {/* Category */}
            <section className="product-form-section">
                <h3>Classification</h3>

                <CategorySelect 
                    value={formData.categoryId}
                    options={categories}
                    onChange={(value) => 
                        onChange({
                            ...formData,
                            categoryId: value,
                        })
                    }
                />

                <BrandSelect 
                    value={formData.brandId}
                    options={brands}
                    onChange={(value) =>
                        onChange({
                            ...formData,
                            brandId: value,
                        })
                    }
                />

                <UnitSelect 
                    value={formData.unitId}
                    options={units}
                    onChange={(value) => 
                        onChange({
                            ...formData,
                            unitId: value,
                        })
                    }
                />
            </section>

            {/* Pricing */}
            <section className="product-form-section">
                <h3>Pricing</h3>

                <FormGroup>
                    <FormLabel>Purchase Price</FormLabel>

                    <Input 
                        type="number"
                        name="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={handleChange}
                    />
                </FormGroup>
                
                <FormGroup>
                    <FormLabel>Selling Price</FormLabel>

                    <Input 
                        type="number"
                        name="sellingPrice"
                        value={formData.sellingPrice}
                        onChange={handleChange}
                    />

                    <FormError>{errors.sellingPrice}</FormError>
                </FormGroup>
            </section>

            {/* Inventory */}
            <section className="product-form-section">
                <h3>Inventory</h3>

                <FormGroup>
                    <FormLabel>Quantity</FormLabel>

                    <Input 
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Minimum</FormLabel>

                    <Input 
                        type="number"
                        name="mininumber"
                        value={formData.minimumStock}
                        onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabell>Reorder Level</FormLabell>

                    <Input 
                        type="number"
                        name="reorderLevel"
                        value={formdData.reorderLevel}
                        onChange={handleChange}
                    />
                </FormGroup>
            </section>

            {/* Product Image */}
            <section className="product-form-section">
                <h3>Image</h3>

                <ProductImageUpload
                    value={formData.image}
                    onChange={onImageChange}
                />
            </section>

            {/* Actions */}
            <div className="product-form-actions">
                <Button 
                    type="submit"
                    disable={loading}
                >
                    {loading ? "Saving.." : submitText}
                </Button>
            </div>
        </form>
    );
};

ProductForm.propTypes = {
    formData: PropTypes.Object.isRequired,
    errors: PropTypes.object,
    categories: PropTypes.array,
    brands: PropTypes.array,
    units: PropTypes.array,
    loading: PropTypes.bool,
    submitText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onImageChange: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
};

export default ProductForm;
