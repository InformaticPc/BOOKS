import {} from "module";
console.log("hi world ✋");
console.log(`↓ ** GlobalThis Object ** ↓`);
console.log(globalThis);

//AMD
import { sum, div, mult, subtraction } from "./sum.mjs";
console.log(sum(2, 2));
console.log(div(8, 2));
console.log(mult(2, 6));
console.log(subtraction(5, 4));

globalThis.console.log(module);
