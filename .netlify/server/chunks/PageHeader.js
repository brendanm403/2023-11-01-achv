import { c as create_ssr_component, e as escape } from "./ssr.js";
const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageTitle = "placeholder title" } = $$props;
  let { pageDescription = "placeholder description" } = $$props;
  let { bgColor = "bg-blue-400" } = $$props;
  let { flexContent = false } = $$props;
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  if ($$props.pageDescription === void 0 && $$bindings.pageDescription && pageDescription !== void 0)
    $$bindings.pageDescription(pageDescription);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.flexContent === void 0 && $$bindings.flexContent && flexContent !== void 0)
    $$bindings.flexContent(flexContent);
  return `<header class="${escape(bgColor, true) + " flex flex-col bg-blue-600 py-12 text-white"}"><h1 class="text-3xl lg:text-5xl mx-auto my-2">${escape(pageTitle)}</h1> <p class="text-lg lg:text-xl mx-auto my-2">${escape(pageDescription)}</p> ${flexContent === true ? `<div class="mx-auto my-2">${slots.default ? slots.default({}) : ``}</div>` : ``}</header>`;
});
export {
  PageHeader as P
};
