import { createVoidhash } from "voidhash";

const voidhash = createVoidhash("your_api_key");

try {
    const customers = await voidhash.customers.list();
    console.log(customers);
} catch (e) {
    console.log(e.message);
}

console.log("done");