import { Lib } from "./lib";

describe('Lib', () => {
    test('should create an instance', () => {
        const lib = new Lib();

        expect(lib).toBeTruthy();
    })
})