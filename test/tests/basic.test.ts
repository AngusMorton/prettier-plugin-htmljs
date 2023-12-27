import { test } from "../test-utils";

const files = import.meta.glob("/test/fixtures/basic/*/*", {
  eager: true,
  as: "raw",
});

test("Can format a basic marko file", files, "basic/basic-html");

test("Can format a scriptlet", files, "basic/scriptlet");

test("Can format a script tag", files, "basic/script-tag");

test("Can format a style tag", files, "basic/style-tag");

test("Can format a class", files, "basic/class");
