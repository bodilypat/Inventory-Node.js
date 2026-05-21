//src/modules/categories/category.model.js 
import mongoose from "mongoose";
import slugigy from "slugify";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Category name is required"],
            unique: true,
            trim: true,
            minlength: 2,
            maxlength: 100,
        },

        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },

        description: {
            type: String,
            trim: true,
            maxlength: 500,
            default: "",
        },

        parentCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            index: true,
        },

        isDeleted: {
            type: Boolean,
            default: false,
            select: false,
        },
    },
    {
        timestamps: true,
        versionKey: false;
    }
);

/* INDEX */
categorySchema.index({ name: 1});

categorySchema.index({ slug: 1});

categorySchema.index({
    parentCategory: 1,
    isActive: 1,
});

/* PRE SAVE MIDDLEWARE  */
categorySchema.pre("save", function (next) {
    if (this.isModified("name")) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true,
            trim: true,
        });
    }

    next();
});

/* PRE UPDATE MIDDLEWARE */
categorySchema.pre("findOneAndUpdate", function (next) {
    const update = this.getUpdate();

    if (update.name) {
        update.slug = slugify(update.name, {
            lower: true,
            strict: true,
            trim: true,
        });
    }

    next();
});

/* INSTANCE METHOD */
categorySchema.methods.seftDelete = function () {
    this.isDeleted = true;
    return this.save();
};

/* STATIC METHOD */
categorySchema.statics.findActive = function () {
    return this.find({
        isActive: true,
        isDeleted: false,
    });
};

/* QUERY MIDDLEWARE */
categorySchema.pre(/^find/, function (next) {
    this.where({ isDeleted: false });

    next();
});

const Category = mongoose.model(
    "Categry",
    categorySchema
);

export default Category;

