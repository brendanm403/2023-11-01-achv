import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
const name = "ash";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headerContent = {
    pageTitle: "Blog",
    pageDescription: "This is a page for cool blog posts",
    bgColor: "bg-blue-400",
    flexContent: true
  };
  let userLogin = true;
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, Object.assign({}, headerContent), {}, {
    default: () => {
      return `This is where the text from slot should appear`;
    }
  })} ${`<p>Hello ${escape(name)}</p>`} <button class="rounded-md bg-red-600 px-4 py-2 text-white transition duration-150 hover:bg-red-900" data-svelte-h="svelte-tcndzm">Send Alert</button> <button class="rounded-md bg-blue-600 px-4 py-2 text-white transition duration-150 hover:bg-blue-900" data-svelte-h="svelte-1ofq68h">Toggle User Login</button> <p>${escape(userLogin)}</p>`;
});
export {
  Page as default
};
