
module("About Equality (topics/3_about_equality.js)");

test("numeric equality", function() {
    equal(__,  7, "");
});

test("string equality", function() {
    equal(__, "37", "concatenate the strings");
});

test("equality without type coercion", function() {
    ok(__ === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
    ok(__ == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
    equal(__, "frankenstein", "quote types are interchangable, but must match.");
    equal(__, 'frankenstein', "quote types can use both single and double quotes.");
});
