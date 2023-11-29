import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { P as PageHeader } from "../../../chunks/PageHeader.js";
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgColor } = $$props;
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  return `<li${add_attribute("class", `${bgColor} max-w-fit my-1`, 0)}>${slots.default ? slots.default({}) : ``}</li>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "placeholder heading" } = $$props;
  let { description = "placeholder description" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<article class="max-w-fit bg-orange-200 rounded-xl p-1"><div class="w-32 h-32 bg-black mx-auto rounded-xl my-2"></div> <h2>${escape(heading)}</h2> <p>${escape(description)}</p></article>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listItems = ["crow", "gopher", "cat", "dog"];
  let secondList = [
    { name: "jake", species: "bird" },
    { name: "ella", species: "cow" },
    { name: "jill", species: "fish" },
    { name: "john", species: "turtle" }
  ];
  let headerContent = {
    pageTitle: "About",
    pageDescription: "This is a page to learn about the site",
    bgColor: "bg-green-400"
  };
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, Object.assign({}, headerContent), {}, {})} <section><h2 data-svelte-h="svelte-13mecri">Our Example List</h2> <ul class="list-disc ml-5">${each(listItems, (item) => {
    return `${validate_component(ListItem, "ListItem").$$render($$result, { bgColor: "bg-red-200" }, {}, {
      default: () => {
        return `${escape(item)}`;
      }
    })}`;
  })}</ul></section> <section><h2 data-svelte-h="svelte-141b4u2">Our Second Example List</h2> <ul class="list-disc ml-5">${each(secondList, ({ name, species }) => {
    return `${validate_component(ListItem, "ListItem").$$render($$result, { bgColor: "bg-green-200" }, {}, {
      default: () => {
        return `${escape(name)} is a ${escape(species)}`;
      }
    })}`;
  })}</ul></section> ${validate_component(Card, "Card").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
