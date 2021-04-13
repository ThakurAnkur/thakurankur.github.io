import { ghpages } from "gh-pages";

ghpages.publish('build', {
    repo: 'http://thakurankur.github.io',
    message: 'Auto-generated commit'
}, function (err) {});