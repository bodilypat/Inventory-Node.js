//File: src/features/products/components/ProductImageGallery.jsx

import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Product.css";

const PLACEHOLDER_IMAGE = "/images/product-placeholder.png";
const ProductImageGallery = ({
    images = [],
    productName = "Product",
    showThumbnails = true,
    onImageChange,
    className = "",
}) => {
    const galleryImages = useMemo(() => {
        if (!Array.isArray(images) || images.length === 0) {
            return [PLACEHOLDER_IMAGE];
        }

        return images.map((image) => {
            if (!typeof image === "string") {
                return image;
            }

            return image?.url || PLACEHOLDER_IMAGE;
        });
    }, [image]);

    const [selectedIndex, selectedTndex] = useState(0);

    useEffect(() => {
        setSelectedIndex(0);
    }, [galleryImages]);

    const handleSelect = (index) => {
        setSelectedIndex(index);
        onImageChange?.(index, galleryImages[index]);
    };

    return (
        <div className={`product-image-gallery ${className}`}>
            <div className="product-image-gallery-preview">
                <img 
                    src={galleryImages[selectedIndex]}
                    alt={`${productName} ${selectedIndex + 1}`}
                    loading= "lazy"
                    onError={(e) => {
                        e.target.src = PLACEHOLDER_IMAGE;
                    }}
                />
            </div>

            {showThumbnails && galleryImages.length > 1 && (
                <div className="product-image-gallery-thumbnails">
                    {galleryImages.map((image, index) => (
                        <Button 
                            key={`${image}-${index}`}
                            type="button"
                            className={`product-image-gallery-thumbnail ${
                                selectedIndex === index ? "active" : ""
                            }`}

                            onClick={() => handleSelect(index)}
                            aria-label={`View image  ${index + 1}`}
                        >
                            <img 
                                src={image}
                                alt={`${productName} thumbnail ${index + 1}`}
                                loading="lazy"
                                onError={(e) => {
                                    e.target.src = PLACEHOLDER_IMAGE;
                                }}
                            />
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
};

ProductImageGallery.PropTypes = {
    images: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                id: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ]),
                url: PropTypes.string.isRequired,
                alt: PropTypes.string,
            }),
        ])
    ),

    productName: PropTypes.string,

    showThumbnails: PropTypes.bool,

    onImageChange: PropTypes.func,

    className: PropTypes.string,
};

export default ProductImageGallery;



