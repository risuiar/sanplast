import { categoryTypes } from "../pages/productos/CategoryTypes.astro";
import type { Product } from "./types";
import { productTypes } from "./types";

const API_URL = "https://cms.mateando.com/api";
const BEARER_TOKEN = import.meta.env.PUBLIC_API_BEARER_TOKEN;

// Helper function to transform Strapi response to our Product interface
function transformStrapiProduct(
  strapiProduct: any,
  imageSize: "thumbnail" | "medium" | "large" = "thumbnail"
): Product {
  // Helper function to extract image URL from array or object
  const getImageUrl = (imageField: any): string => {
    if (!imageField) return "";

    let imageUrl = "";

    // If it's an array, take the first image
    if (Array.isArray(imageField) && imageField.length > 0) {
      const image = imageField[0];
      imageUrl =
        image.formats?.[imageSize]?.url ||
        image.formats?.medium?.url ||
        image.url ||
        "";
    }
    // If it's a single object
    else if (typeof imageField === "object") {
      imageUrl =
        imageField.formats?.[imageSize]?.url ||
        imageField.formats?.thumbnail?.url ||
        imageField.url ||
        "";
    }
    // If it's a string
    else if (typeof imageField === "string") {
      imageUrl = imageField;
    }

    // If we have a relative URL, make it absolute
    if (imageUrl && imageUrl.startsWith("/")) {
      return `https://cms.mateando.com${imageUrl}`;
    }

    return imageUrl;
  };

  return {
    id: strapiProduct.documentId || strapiProduct.id.toString(),
    documentId: strapiProduct.documentId || strapiProduct.id.toString(),
    nombre: strapiProduct.nombre || "",
    modelo: strapiProduct.modelo || strapiProduct.nombre || "",
    image1: getImageUrl(strapiProduct.image1),
    image2: getImageUrl(strapiProduct.image2),
    image3: getImageUrl(strapiProduct.image3),
    image4: getImageUrl(strapiProduct.image4),
    image5: getImageUrl(strapiProduct.image5),
    descripcion: strapiProduct.descripcion
      ? Array.isArray(strapiProduct.descripcion)
        ? strapiProduct.descripcion[0]?.children?.[0]?.text || ""
        : strapiProduct.descripcion
      : "",
    tipo: strapiProduct.tipo || "",
    capacidad_litros: strapiProduct.capacidad_litros,
    precio_venta: strapiProduct.precio_venta,
    material: strapiProduct.material,
    altura_cm: strapiProduct.altura_cm,
    diametro_cm: strapiProduct.diametro_cm,
    uso_recomendado: strapiProduct.uso_recomendado,
    san_plast_tipo: strapiProduct.san_plast_tipo,
  };
}

export async function getRoutes(): Promise<{ category: string; id: string }[]> {
  try {
    const url = `${API_URL}/prods?&status=published`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
    });

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);
      return [];
    }

    const result = await response.json();
    const products = result.data || [];

    return products.map((product: any) => {
      let category =
        productTypes[
          (product?.attributes?.tipo?.toLowerCase?.() ||
            product?.tipo?.toLowerCase?.()) as keyof typeof productTypes
        ];
      return {
        category,
        id:
          product?.attributes?.documentId ||
          product?.documentId ||
          product?.id?.toString(),
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProducts(
  category?: string,
  destacado: boolean = false
): Promise<Product[]> {
  try {
    let url = `${API_URL}/prods?populate[0]=image1&pagination[pageSize]=100&status=published`;
    if (destacado) {
      url += `&filters[destacado][$eq]=true&populate[1]=san_plast_tipo`;
    }
    // Usar filtros dinámicos de API para todas las categorías
    if (category) {
      const categoryType =
        categoryTypes[category as keyof typeof categoryTypes];
      if (categoryType) {
        url += `&filters[san_plast_tipo][tipo][$eq]=${categoryType}`;
      }
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const products = (result.data || []).map(transformStrapiProduct);

    // Si no hay categoría, devolver todos
    if (!category) return products;

    // Si el filtro de API no devolvió resultados, usar inferencia local como fallback
    if (products.length === 0) {
      console.warn(
        `No products found for category ${category} using API filter, trying local inference...`
      );
      return await getProducts(); // Get all products without filter
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProduct(documentId: string): Promise<Product | null> {
  if (!documentId) return null;
  try {
    const response = await fetch(
      `${API_URL}/prods/${documentId}/?populate[0]=image1&populate[1]=image2&populate[2]=image3&populate[3]=image4&populate[4]=image5&status=published`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Product ${documentId} not found in API`);
        return null;
      }
      console.error(
        `API Error for product ${documentId}: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const result = await response.json();
    const product = result.data;
    return product ? transformStrapiProduct(product, "medium") : null;
  } catch (error) {
    console.error(`Error fetching product ${documentId}:`, error);
    return null;
  }
}
