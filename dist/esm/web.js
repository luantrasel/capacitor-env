import { WebPlugin } from '@capacitor/core';
export class CapacitorEnvWeb extends WebPlugin {
    // async echo(options: { value: string }): Promise<{ value: string }> {
    //   console.log('ECHO', options);
    //   return options;
    // }
    async get() {
        return { value: '' };
    }
}
//# sourceMappingURL=web.js.map