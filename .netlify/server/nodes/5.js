import * as server from '../entries/pages/products/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/products/+page.server.js";
export const imports = ["_app/immutable/nodes/5.52343e7b.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.1dec3f72.js","_app/immutable/chunks/PageHeader.bf8ebd52.js"];
export const stylesheets = [];
export const fonts = [];
