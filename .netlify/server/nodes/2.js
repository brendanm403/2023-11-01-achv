import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.d0dabab0.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.1dec3f72.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/PageHeader.bf8ebd52.js"];
export const stylesheets = [];
export const fonts = [];
