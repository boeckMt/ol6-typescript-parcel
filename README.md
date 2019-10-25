# ol6 TypeScript Parcel

```
tsconfig.json
{
    "compilerOptions": {
      "module": "commonjs",
      "jsx": "preserve",
      "esModuleInterop": true,
      "sourceMap": true,
      "declaration": true,
      "allowJs": true,
      "checkJs": true,
      "lib": [
        "es6",
        "dom"
      ],
      "rootDir": "src",
      "moduleResolution": "node",
      "baseUrl": "./",
      "paths": {
        "ol": ["node_modules/ol/src"],
        "ol/*": ["node_modules/ol/src/*"]
        }
    },
    "include": [
        "**/*.js",
        "src/*",
        "node_modules/ol/**/*.js"
      ]
  }
  ```