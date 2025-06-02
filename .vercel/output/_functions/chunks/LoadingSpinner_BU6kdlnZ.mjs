import { c as createComponent, a as createAstro, b as addAttribute, r as renderTemplate, d as renderComponent, f as renderHead, g as renderSlot, m as maybeRenderHead } from './astro/server_nPJ_pn-U.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/ricardo.voegeli/Web/Astro/sanplast/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Sanplast - Tanques de agua de alta calidad"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="min-h-screen bg-white"> <header class="bg-white shadow-sm"> <nav class="container mx-auto px-4 py-4"> <div class="flex items-center justify-between"> <a href="/" class="flex items-center space-x-2"> <img src="/logo.svg" alt="Sanplast Logo" class="h-10"> <span class="text-2xl font-bold text-primary">Sanplast</span> </a> <!-- Menú de escritorio --> <div class="hidden md:flex space-x-8"> <a href="/" class="text-gray-600 hover:text-primary">Inicio</a> <a href="/productos" class="text-gray-600 hover:text-primary">Productos</a> <a href="/nosotros" class="text-gray-600 hover:text-primary">Nosotros</a> <a href="/contacto" class="text-gray-600 hover:text-primary">Contacto</a> </div> <!-- Botón de menú móvil --> <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menú"> <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Menú móvil --> <div id="mobile-menu" class="hidden md:hidden mt-4 rounded-lg bg-white border border-gray-100 shadow-lg"> <div class="flex flex-col space-y-2 p-4"> <a href="/" class="text-gray-600 hover:text-primary py-2">Inicio</a> <a href="/productos" class="text-gray-600 hover:text-primary py-2">Productos</a> <a href="/nosotros" class="text-gray-600 hover:text-primary py-2">Nosotros</a> <a href="/contacto" class="text-gray-600 hover:text-primary py-2">Contacto</a> </div> </div> </nav> </header> ${renderSlot($$result, $$slots["default"])} <footer class="bg-primary text-white mt-16"> <div class="container mx-auto px-4 py-12"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-xl font-semibold mb-4">Información</h3> <ul class="space-y-2"> <li><a href="/productos" class="hover:text-primary/80">Productos</a></li> <li><a href="/nosotros" class="hover:text-primary/80">Nosotros</a></li> <li><a href="/testimonios" class="hover:text-primary/80">Testimonios</a></li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-4">Contacto</h3> <ul class="space-y-2"> <li> <a href="mailto:info@sanplast.com.ar" class="hover:text-primary/80">
info@sanplast.com.ar
</a> </li> <li> <a href="tel:+541112345678" class="hover:text-primary/80">
+54 11 1234-5678
</a> </li> </ul> </div> <div> <h3 class="text-xl font-semibold mb-4">Testimonios</h3> <p class="text-primary/80">
Lo que nuestros clientes dicen sobre nuestros productos.
</p> </div> </div> <div class="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-primary/60"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Sanplast. Todos los derechos reservados.</p> </div> </div> </footer>  </body> </html>`;
}, "/Users/ricardo.voegeli/Web/Astro/sanplast/src/layouts/Layout.astro", void 0);

const API_URL = "https://backend-sanplast.mateando.com/api";
const API_KEY = "dgfS34D2xD335?$S-";
async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/productos`, {
      headers: {
        "X-API-KEY": API_KEY
      }
    });
    if (!response.ok) {
      throw new Error("Error al obtener productos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
async function getProduct(id) {
  if (!id) return null;
  try {
    const response = await fetch(`${API_URL}/productos/${id}`, {
      headers: {
        "X-API-KEY": API_KEY
      }
    });
    if (!response.ok) {
      throw new Error("Producto no encontrado");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const $$Astro = createAstro();
const $$LoadingSpinner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoadingSpinner;
  const { size = "w-8 h-8" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center"> <div${addAttribute(`${size} animate-spin rounded-full border-4 border-primary/20 border-t-primary`, "class")}></div> </div>`;
}, "/Users/ricardo.voegeli/Web/Astro/sanplast/src/components/LoadingSpinner.astro", void 0);

export { $$Layout as $, $$LoadingSpinner as a, getProducts as b, getProduct as g };
