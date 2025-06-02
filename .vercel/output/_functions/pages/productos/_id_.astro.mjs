/* empty css                                    */
import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderTransition } from '../../chunks/astro/server_nPJ_pn-U.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getProduct, $ as $$Layout, a as $$LoadingSpinner } from '../../chunks/LoadingSpinner_BU6kdlnZ.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const product = await getProduct(id);
  function formatPrice(price) {
    if (price && parseFloat(price) > 0) {
      return parseFloat(price).toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
      });
    }
    return "Consultar precio";
  }
  const images = [
    product?.image1,
    product?.image2,
    product?.image3,
    product?.image4,
    product?.image5
  ].filter(Boolean);
  const baseImageUrl = "https://backend-sanplast.mateando.com/images/productos/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${product?.nombre || "Producto"} - Sanplast` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> ${!product ? renderTemplate`<div class="flex justify-center items-center h-64"> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, {})} </div>` : renderTemplate`<div class="grid md:grid-cols-2 gap-8"> <div class="space-y-4"> <div class="bg-gray-50 rounded-lg overflow-hidden aspect-w-4 aspect-h-3"> <img id="mainImage"${addAttribute(`${baseImageUrl}${product.image1}`, "src")}${addAttribute(product.nombre, "alt")} class="w-full h-full object-contain"${addAttribute(renderTransition($$result2, "4re2f4kp", "", `product-image-${product.id}`), "data-astro-transition-scope")}> </div> ${images.length > 1 && renderTemplate`<div class="grid grid-cols-5 gap-2" id="thumbnails"> ${images.map((image, index) => renderTemplate`<button${addAttribute([
    "bg-gray-50 rounded-lg overflow-hidden aspect-square hover:ring-2 hover:ring-primary transition-all",
    { "ring-2 ring-primary": index === 0 }
  ], "class:list")}${addAttribute(`${baseImageUrl}${image}`, "data-image")}> <img${addAttribute(`${baseImageUrl}${image}`, "src")}${addAttribute(`${product.nombre} - Vista ${index + 1}`, "alt")} class="w-full h-full object-contain"> </button>`)} </div>`} </div> <div> <h1 class="text-3xl font-bold text-primary mb-4"${addAttribute(renderTransition($$result2, "kar3azgh", "", `product-title-${product.id}`), "data-astro-transition-scope")}> ${product.nombre} </h1> <p class="text-gray-600 mb-6"${addAttribute(renderTransition($$result2, "hu3r44su", "", `product-description-${product.id}`), "data-astro-transition-scope")}> ${product.descripcion} </p> <div class="bg-white rounded-lg shadow-lg p-6 mb-6"> <h2 class="text-xl font-semibold text-primary mb-4">Especificaciones</h2> <div class="grid grid-cols-2 gap-4"> <div> <p class="text-gray-600">Capacidad</p> <p class="font-semibold">${product.capacidad_litros} litros</p> </div> ${product.material && renderTemplate`<div> <p class="text-gray-600">Material</p> <p class="font-semibold">${product.material}</p> </div>`} ${parseFloat(product.altura_cm) > 0 && renderTemplate`<div> <p class="text-gray-600">Alto</p> <p class="font-semibold">${product.altura_cm} cm</p> </div>`} ${parseFloat(product.diametro_cm) > 0 && renderTemplate`<div> <p class="text-gray-600">Diámetro</p> <p class="font-semibold">${product.diametro_cm} cm</p> </div>`} ${product.uso_recomendado && renderTemplate`<div> <p class="text-gray-600">Uso recomendado</p> <p class="font-semibold">${product.uso_recomendado}</p> </div>`} </div> </div> <div class="flex items-center justify-between"> <p class="text-2xl font-bold text-primary"${addAttribute(renderTransition($$result2, "6jciicem", "", `product-price-${product.id}`), "data-astro-transition-scope")}> ${formatPrice(product.precio_venta)} </p> <a href="/productos" class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
Volver a productos
</a> </div> </div> </div>`} </main> ` })} `;
}, "/Users/ricardo.voegeli/Web/Astro/sanplast/src/pages/productos/[id].astro", "self");

const $$file = "/Users/ricardo.voegeli/Web/Astro/sanplast/src/pages/productos/[id].astro";
const $$url = "/productos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
