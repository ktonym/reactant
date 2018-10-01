import { schema } from "normalizr";

export const productSchema = new schema.Entity(
    "products",{},{idAttribute: "productId"}
);

export const clientTypeSchema = new schema.Entity(
    "clientTypes",{},{idAttribute:"clientTypeId"}
);

export const clientSchema = new schema.Entity(
    "clients",{},{idAttribute:"clientId"}
);

export const policySchema = new schema.Entity(
    "policies",{},{idAttribute:"policyId"}
);

export const settingSchema = new schema.Entity(
    "settings",{},{idAttribute:"attributeId"}
);