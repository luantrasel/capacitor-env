import { WebPlugin } from '@capacitor/core';
export class CapacitorEnvWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async get( /* options: { key: string } */) {
        return { value: '' };
    }
}
//# sourceMappingURL=web.js.map