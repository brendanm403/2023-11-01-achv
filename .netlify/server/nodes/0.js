

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.eff61531.js","_app/immutable/chunks/scheduler.d35e8dc7.js","_app/immutable/chunks/index.1dec3f72.js"];
export const stylesheets = ["_app/immutable/assets/0.326ecda6.css"];
export const fonts = [];
