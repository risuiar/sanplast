/* empty css                                 */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_nPJ_pn-U.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as getProducts, $ as $$Layout, a as $$LoadingSpinner } from '../chunks/LoadingSpinner_BU6kdlnZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuredProducts = await getProducts();
  function formatPrice(price) {
    if (typeof price === "number") {
      return price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
      });
    }
    return "Consultar precio";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sanplast - Tanques de Agua" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="relative bg-primary text-white"> <div class="container mx-auto px-4 py-24"> <div class="grid md:grid-cols-2 gap-8 items-center"> <div> <h1 class="text-4xl md:text-5xl font-bold mb-6">
Soluciones de almacenamiento de agua de alta calidad
</h1> <p class="text-xl mb-8 text-white/90">
Fabricamos tanques de agua duraderos y confiables para todas sus necesidades
</p> <a href="/productos" class="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 hover:text-white transition-colors">
Ver Productos
</a> </div> <div class="relative"> <img src="/images/hero-tank.svg" alt="Tanque de agua Sanplast" class="w-full max-w-lg mx-auto"> </div> </div> </div> </section> <!-- Featured Products --> <section class="py-16"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">Productos Destacados</h2> ${!featuredProducts.length ? renderTemplate`<div class="flex flex-col items-center justify-center py-12"> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, { "size": "w-12 h-12" })} <p class="mt-4 text-gray-600">Cargando productos...</p> </div>` : renderTemplate`<div class="grid md:grid-cols-3 gap-8"> ${featuredProducts.slice(0, 3).map((product) => {
    const imageUrl = `https://backend-sanplast.mateando.com/images/productos/${product.image1 || "default.jpg"}`;
    return renderTemplate`<a${addAttribute(`/productos/${product.id}`, "href")} class="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"> <div class="aspect-w-16 aspect-h-9"> <img${addAttribute(imageUrl, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-contain bg-gray-50"> </div> <div class="p-6"> <h3 class="text-xl font-semibold mb-2 group-hover:text-primary"> ${product.name} </h3> <p class="text-gray-600 mb-4"> ${product.capacidad_litros} litros
</p> <span class="text-primary font-semibold"> ${formatPrice(product.price)} </span> </div> </a>`;
  })} </div>`} <div class="text-center mt-12"> <a href="/productos" class="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
Ver todos los productos
</a> </div> </div> </section> <!-- Features --> <section class="bg-gray-50 py-16"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">Calidad Garantizada</h3> <p class="text-gray-600">
Nuestros productos cumplen con los más altos estándares de calidad
</p> </div> <div class="text-center"> <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">Entrega Rápida</h3> <p class="text-gray-600">
Envíos a todo el país en tiempo récord
</p> </div> <div class="text-center"> <div class="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-2">Soporte Técnico</h3> <p class="text-gray-600">
Asesoramiento personalizado antes y después de la compra
</p> </div> </div> </div> </section> </main> ` })}`;
}, "/Users/ricardo.voegeli/Web/Astro/sanplast/src/pages/index.astro", void 0);

const $$file = "/Users/ricardo.voegeli/Web/Astro/sanplast/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
