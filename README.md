# account

> A simple decentralized application with VueJS using Solidity

## Change log

1. mar oct 17 15:14:44 COT 2017. Adding the `Account` contract with its test.
2. mar oct 17 15:22:31 COT 2017. Setting the JS framework (VueJS) up.
3. mar oct 17 15:38:57 COT 2017. Adding dependencies for VueJS to read a blockchain and contracts.
4. mié oct 18 00:09:57 COT 2017. Setting contract handler behaviors and revamping front end.

## Build Setup

``` bash
# install dependencies
npm i -g truffle
npm i -g ethereumjs-testrpc
npm install

# start a testrpc instance (do this in a separate terminal)
testrpc

# run contracts' tests
truffle test

# compile contracts
truffle compile

# migrate the contracts to the testrpc instance
truffle migrate

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
