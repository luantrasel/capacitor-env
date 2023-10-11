package com.capacitor.plugin.env;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CapacitorEnv")
public class CapacitorEnvPlugin extends Plugin {

    private CapacitorEnv implementation = new CapacitorEnv();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void get(PluginCall call) {
        String key = call.getString("key");

        try {
            // Get the BuildConfig class dynamically
            Class<?> buildConfigClass = Class.forName(this.bridge.getContext().getPackageName() + ".BuildConfig");

            // Use reflection to get the field value
            String value = (String) buildConfigClass.getField(key).get(null);

            JSObject result = new JSObject();
            result.put(key, value);

            call.success(result);
        } catch (Exception e) {
            call.error("Error reading BuildConfig field: " + e.getMessage());
        }
    }
}
