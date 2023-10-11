import { WebPlugin } from '@capacitor/core';
import type { CapacitorEnvPlugin } from './definitions';
export declare class CapacitorEnvWeb extends WebPlugin implements CapacitorEnvPlugin {
    get(): Promise<{
        value: string;
    }>;
}
