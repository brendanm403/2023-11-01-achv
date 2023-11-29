

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.1acd7caf.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.1dec3f72.js","_app/immutable/chunks/PageHeader.bf8ebd52.js"];
export const stylesheets = [];
export const fonts = [];
