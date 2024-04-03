1. express typescript ts-node

2. --save-dev   devDependence -> needed when develop but not needed when build and deploy

3. tyconfig
```json
    {
    "compilerOptions": {
      "target": "es6",  // version of js language 
      "module": "commonjs", // 
      "rootDir": "src",
      "outDir": "dist",
      "strict": true,       // type check
      "esModuleInterrop": true
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
  }
```

4. ts-node src/index/ts   compile
5.  package.json    scripts: build and  serve for deployment
6. fluent-ffmpeg    process video; wrapper; CLI, command line tool 

7. docker : Containers allow us to package our app and all its dependencies into a single image. 
