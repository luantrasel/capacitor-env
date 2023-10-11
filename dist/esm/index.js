import { registerPlugin } from '@capacitor/core';
const CapacitorEnv = registerPlugin('CapacitorEnv', {
    web: () => import('./web').then(m => new m.CapacitorEnvWeb()),
});
export * from './definitions';
export { CapacitorEnv };
//# sourceMappingURL=index.js.map