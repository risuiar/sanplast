import { categoryTypes } from "../pages/productos/CategoryTypes.astro";

const API_URL = "https://backend-sanplast.mateando.com/api";
const API_KEY = "dgfS34D2xD335?$S-";

export interface Product {
  id: string;
  modelo: string;
  image1: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  descripcion?: string;
  tipo: string;
  capacidad_litros?: number;
  precio_venta?: number;
  material?: string;
  altura_cm?: number;
  diametro_cm?: number;
  uso_recomendado?: string;
}

export async function getRoutes(): Promise<Product[]> {
  try {
    const url = `${API_URL}/routes`;

    const response = await fetch(url, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const routes = await response.json();
    return routes;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProducts(category?: string): Promise<Product[]> {
  try {
    const url = category
      ? `${API_URL}/productos?tipo=${
          categoryTypes[category as keyof typeof categoryTypes]
        }`
      : `${API_URL}/productos`;

    const response = await fetch(url, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  if (!id) return null;
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      headers: {
        "X-API-KEY": API_KEY,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
