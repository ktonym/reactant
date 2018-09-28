import { schema } from "normalizr";

export const productSchema = new schema.Entity(
    "products",{},{idAttribute: "productId"}
);

export const clientSchema = new schema.Entity(
    "clients",{},{idAttribute:"clientId"}
);

export const policySchema = new schema.Entity(
    "policies",{},{idAttribute:"policyId"}
);