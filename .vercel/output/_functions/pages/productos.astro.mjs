/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderTransition } from '../chunks/astro/server_nPJ_pn-U.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as getProducts, $ as $$Layout, a as $$LoadingSpinner } from '../chunks/LoadingSpinner_BU6kdlnZ.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getProducts();
  function formatPrice(price) {
    if (typeof price === "number") {
      return price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
      });
    }
    return "Consultar precio";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos - Sanplast" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold text-primary mb-8">Nuestros Productos</h1> ${!products ? renderTemplate`<div class="flex justify-center items-center h-64"> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, {})} </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${products.map((product) => renderTemplate`<a${addAttribute(`/productos/${product.id}`, "href")} class="group"> <article class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"> <div class="aspect-w-4 aspect-h-3 bg-gray-50"> <img${addAttribute(`https://backend-sanplast.mateando.com/images/productos/${product.image1}`, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-contain"${addAttribute(renderTransition($$result2, "md3kx3sb", "", `product-image-${product.id}`), "data-astro-transition-scope")}> </div> <div class="p-4"> <h2 class="text-xl font-semibold text-primary mb-2"${addAttribute(renderTransition($$result2, "zx3uachz", "", `product-title-${product.id}`), "data-astro-transition-scope")}> ${product.name} </h2> <p class="text-gray-600 mb-4"${addAttribute(renderTransition($$result2, "p22dohst", "", `product-description-${product.id}`), "data-astro-transition-scope")}> ${product.description} </p> <div class="flex items-center justify-between mb-4"> <div> <span class="text-gray-600">${product.capacidad_litros} litros</span> </div> <p class="text-lg font-bold text-primary"${addAttribute(renderTransition($$result2, "wwtlgfz3", "", `product-price-${product.id}`), "data-astro-transition-scope")}> ${formatPrice(product.price)} </p> </div> </div> </article> </a>`)} </div>`} </main> ` })}`;
}, "/Users/ricardo.voegeli/Web/Astro/sanplast/src/pages/productos.astro", "self");

const $$file = "/Users/ricardo.voegeli/Web/Astro/sanplast/src/pages/productos.astro";
const $$url = "/productos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Productos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
