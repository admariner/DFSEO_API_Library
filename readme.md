# Data For SEO API (for javascript)

### Purpose

The purpose of this library is to expose the wonderful Data For SEO rest API to javascript applications easily. Without having to write your own API calls and whatnot. It should work out of the box with only needing to provide your account's credentials for authorization purposes. 

### Ideal Usage (vanilla JS)

```javascript
require('dotenv').config();
var dfseoAPI = require('DFSEO');

var username = process.env.DATAFORSEO_USERNAME;
var password = process.env.DATAFORSEO_PASSWORD;

var dfseoAPI = new DFSEO(username, password);

dfseoAPI.serpAPI.google.organic.taskPost([{
    keyword: 'test',
    priority: 1,
    location_code: 2840,
    language_code: 'en'
}]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

```

### Ideal Usage (TypeScript)
```typescript
import { DFSEO } from './';
import * as dotenv from 'dotenv';
dotenv.config();

const username = process.env.DATAFORSEO_USERNAME;
const password = process.env.DATAFORSEO_PASSWORD;

const dfseoAPI = new DFSEO(username, password);

async function main(){
    try{
        const response = await dfseoAPI.serpAPI.google.organic.taskPost([
            keyword: 'test',
            priority: 1,
            location_code: 2840,
            language_code: 'en'
        ]);

        console.log(response);
    }catch(e){
        console.log(e);
    }
}

```

## Other Goals

This library _should_ work in both Node environment and the browser environment since it's using Axios to make requests. However, it should be noted that you should use it with Node for security purposes but do what you want. 

