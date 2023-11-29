import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="flex bg-black text-white justify-between p-5" data-svelte-h="svelte-1ewj3sd"><div>logo</div> <nav><ul class="flex justify-around gap-4"><li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/blog">Blog</a></li> <li><a href="/products">Products</a></li></ul></nav></header> `;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
