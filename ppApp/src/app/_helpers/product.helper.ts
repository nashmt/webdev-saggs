// converts json objects into useable arrays

import { Product } from '../_models/index';

import product_json from "../products.json";

import pending_json from "../products.json";

export const PRODUCTS: Product[] = product_json.products;

export const PENDING: Product[] = pending_json.products;