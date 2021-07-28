// /src/constants/classes/ExampleClass/ExampleClass.test.ts
import { expect } from 'chai';
import { describe, it } from 'mocha';

import { ExampleClass } from './index';

describe(__dirname + "\n\tExampleClass testing", () => {
    it('should create ExampleClass instance', function () {
        let exampleClass = new ExampleClass();
        expect(exampleClass.exampleMethod()).to.equal("This is an example of class creation with proper testing.");
    });
});