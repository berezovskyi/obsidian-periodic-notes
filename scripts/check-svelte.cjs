// REVISIT: Remove this wrapper after upgrading svelte-check's source-map dependency
// to a version that recognizes Node's global fetch and reads local WASM files.
delete globalThis.fetch;
require("svelte-check/bin/svelte-check");
