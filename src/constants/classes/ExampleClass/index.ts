// /src/constants/classes/ExampleClass/index.ts
import { ExampleInterface } from "root/constants/interfaces";

class ExampleClass implements ExampleInterface {
    exampleMethod(): string {
        return "This is an example of class creation with proper testing.";
    }
}

export { ExampleClass }