export interface CapacitorEnvPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    get(options: {
        key: string;
    }): Promise<{
        value: string;
    }>;
}
