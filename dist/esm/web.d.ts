import { WebPlugin } from '@capacitor/core';
import type { CapacitorEnvPlugin } from './definitions';
export declare class CapacitorEnvWeb extends WebPlugin implements CapacitorEnvPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
