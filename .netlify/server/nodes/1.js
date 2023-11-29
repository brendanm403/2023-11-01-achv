

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eca59921.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.1dec3f72.js","_app/immutable/chunks/singletons.dc84ac05.js"];
export const stylesheets = [];
export const fonts = [];
