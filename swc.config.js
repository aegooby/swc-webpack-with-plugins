const __dirname = new URL(".", import.meta.url).pathname;

export const swcrc = {
    "sync": true,
    "jsc": {
        "parser": {
            "syntax": "typescript",
            "tsx": true,
            "decorators": true,
            "dynamicImport": true
        },
        "target": "es5",
        "transform": {
            "decoratorMetadata": true,
            "react": {
                "runtime": "automatic",
                "pragma": "React.createElement",
                "pragmaFrag": "React.Fragment",
                "throwIfNamespace": true,
                "useBuiltins": false,
                "refresh": true
            }
        },
        "experimental": {
            "plugins": [
                // @todo:ziad see how to fix
                [
                    "@swc/plugin-relay", {
                        "language": "typescript",
                        "rootDir": __dirname,
                    }
                ],
                ["@swc/plugin-jest", {}]
            ]
        }
    }
}