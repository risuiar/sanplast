export interface Product {
  id: string;
  documentId: string;
  nombre: string;
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
  san_plast_tipo: {
    tipo: string;
  };
}

export const productTypes = {
  tanque: "tanques",
  cano: "canos",
  accesorio: "accesorios",
};
