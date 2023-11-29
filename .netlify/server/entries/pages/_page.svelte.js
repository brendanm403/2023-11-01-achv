import { c as create_ssr_component, e as escape, v as validate_component, d as each } from "../../chunks/ssr.js";
import { P as PageHeader } from "../../chunks/PageHeader.js";
const MessageBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "placeholder title" } = $$props;
  let { description = "placeholder description" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="bg-blue-200 p-4 max-w-sm my-2"><h3 class="text-2xl">${escape(title)}</h3> <p class="text-gray-500">${escape(description)}</p></div>`;
});
let dailyContent = "demos 2023-11-02";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let obj = {
    title: "the message title",
    description: "the description"
  };
  let messageForTheBox = [
    {
      title: "bob",
      description: "33 years old"
    },
    {
      title: "doug",
      description: "30 years old"
    },
    {
      title: "jane",
      description: "25 years old"
    }
  ];
  let headerContent = {
    pageTitle: "Home",
    pageDescription: "this is the home page",
    bgColor: "bg-red-400"
  };
  let { data } = $$props;
  let { countries } = data;
  console.log(countries);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, Object.assign({}, headerContent), {}, {})} <h1 class="text-5xl">Svelte ${escape(dailyContent)}</h1> ${validate_component(MessageBox, "MessageBox").$$render(
    $$result,
    {
      title: "Hello",
      description: "dsfsdf sdfsdf sdfsdf sdfsdf sdfsdf"
    },
    {},
    {}
  )} ${validate_component(MessageBox, "MessageBox").$$render(
    $$result,
    {
      title: obj.title,
      description: obj.description
    },
    {},
    {}
  )}  ${validate_component(MessageBox, "MessageBox").$$render($$result, Object.assign({}, obj), {}, {})} <h2 data-svelte-h="svelte-1twg49i">loop example</h2> ${each(messageForTheBox, (box) => {
    return `${validate_component(MessageBox, "MessageBox").$$render($$result, Object.assign({}, box), {}, {})}`;
  })} <ul>${each(countries, (country) => {
    return `<li>${escape(country.name)}</li>`;
  })}</ul> `;
});
export {
  Page as default
};
