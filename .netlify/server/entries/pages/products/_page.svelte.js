import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headerContent = {
    pageTitle: "Products",
    pageDescription: "This is a page with a products carousel",
    bgColor: "bg-orange-400"
  };
  let { data } = $$props;
  let { newCollectionTodos } = data;
  console.log(newCollectionTodos);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, Object.assign({}, headerContent), {}, {})} <h1>${escape(newCollectionTodos[0].title)}</h1>`;
});
export {
  Page as default
};
