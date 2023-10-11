'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorEnv = core.registerPlugin('CapacitorEnv', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorEnvWeb()),
});

class CapacitorEnvWeb extends core.WebPlugin {
    // async echo(options: { value: string }): Promise<{ value: string }> {
    //   console.log('ECHO', options);
    //   return options;
    // }
    async get() {
        return { value: '' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorEnvWeb: CapacitorEnvWeb
});

exports.CapacitorEnv = CapacitorEnv;
//# sourceMappingURL=plugin.cjs.js.map
