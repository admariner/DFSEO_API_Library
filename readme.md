# Data For SEO API (for javascript)

![code coverage](/coverage/badge.svg)

## Official Documentation

https://docs.dataforseo.com/v3/

### Purpose

The purpose of this library is to expose the wonderful Data For SEO rest API to javascript applications easily. Without having to write your own API calls and whatnot. It should work out of the box with only needing to provide your account's credentials for authorization purposes.

### Ideal Usage (vanilla JS)

```javascript
require("dotenv").config();
var dfseoAPI = require("DFSEO");

var username = process.env.DATAFORSEO_USERNAME;
var password = process.env.DATAFORSEO_PASSWORD;

var dfseoAPI = new DFSEO(username, password);

dfseoAPI.serp.google.organic
  .taskPost([
    {
      keyword: "test",
      priority: 1,
      location_code: 2840,
      language_code: "en"
    }
  ])
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
```

### Ideal Usage (TypeScript/ES6)

```typescript
import { DFSEO } from './';
import * as dotenv from 'dotenv';
dotenv.config();

const username = process.env.DATAFORSEO_USERNAME;
const password = process.env.DATAFORSEO_PASSWORD;

const dfseoAPI = new DFSEO(username, password);

async function main(){
    try{
        const response = await dfseoAPI.serp.google.organic.taskPost([
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

### Support

Currently this library only supports version 3 of the DataForSEO API. _sorry!_

# Documentation Map

Figured it would just be easiest to line up what api calls go to where.

| API | DFSEO Documentation Link |
| --- | ------------------------ |


| `dfseo.serp.
