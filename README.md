# Custom Logger
___

#### How to install:
``` npm i @tsw38/custom-logger```

#### How to use:

```node
const {log} = require('@tsw38/custom-logger');

log('Hello World');
```

#### Log options:
The second argument is an options object:

| Name      | Type                                       | Default value |
| --------- | ------------------------------------------ | ------------- |
| header    | string                                     | ""            |
| delimitor | string                                     | "="           |
| type      | `'error' | 'info' | 'warning' | 'success'` | "info"        |

<br />

<img src="https://github.com/tsw38/custom-logger/raw/main/assets/sample.png">
