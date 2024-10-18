A scaffolding created to "play" with cucumber and Playwright
project node-vitest must be running
npm run server on node-vitest

1. npm install
2. npm test

Output should be something like
> cucumber-playwright-jc@1.0.0 test
> cucumber-js

...

1 scenario (1 passed)
3 steps (3 passed)
0m13.461s (executing steps: 0m06.119s)

...
to run only taged features
tag the feature (Example in code)
run 
npx cucumber-js --tags <tag>