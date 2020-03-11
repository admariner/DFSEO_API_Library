import { DFSEO } from './';
import * as dotenv from 'dotenv';
dotenv.config();
const username = process.env.DATAFORSEO_USERNAME;
const password = process.env.DATAFORSEO_PASSWORD;

// write unit tests here!
const dfseoAPI = new DFSEO(username, password, true);


dfseoAPI.serpAPI.google.organic.taskPost([{
    keyword: 'test',
    // priority: 1,
    // location_code: 2840,
    // language_code: 'en'
}]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// dfseo_API.serpAPI.google.organic.taskGet.regular("03102208-3683-0066-0000-a4855c850f64").then(res => {
//     console.log("RESPONSE")
//     console.log(res);
// }).catch(err => {
//     console.log('ERROR');
//     console.log(err)
// })