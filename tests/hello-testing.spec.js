import Hello from "../src/hello";

describe("Hello module", function() {
    it("Should return a message", function() {
        expect(Hello.testing()).toEqual('Hello, testing!');
    });
});