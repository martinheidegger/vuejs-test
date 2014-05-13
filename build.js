#!/usr/bin/env node
var browserify = require("browserify"),
    fs = require("fs"),
    b = browserify();

b.add("./lib/index");
b.bundle().pipe(fs.createWriteStream("./public/index.js"));