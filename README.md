# VRLink Frontend React Native Developer Test Task

This project was bootstrapped with yarn's [create-expo-app](https://reactnative.dev/docs/typescript) using the TypeScript & navigation template.

## Your task

VRLink has an [Apollo](https://www.apollographql.com/) server that you can make GraphQL calls to. This project is initialized with GraphQL and it is your responsibility to use GraphQL to get the data for VRLink Customers and Products.

You will create two tabs, one for Customers and one for Products.

The Customers tab will display a list of VRLink customers, When tapping on a customer, it should go to a new page that displays info about the customer.

The Products tab will display VRLink products. Each product should show the photo, the style code, and color code. When tapping on the product, the product should become "selected" with a visible indication that it has been selected. At the top, you should be able to see how many products have been selected.

Both tabs should have their icons changed to represent what the screen is showing.

## GraphQL

### Endpoint

The GraphQL endpoint is found at https://vrlink-test-tasks.uc.r.appspot.com

### Schema

You can get the schema by using [introspection](https://graphql.org/learn/introspection)

You may also want to use [graphqurl](https://github.com/hasura/graphqurl) CLI tool

`gq https://vrlink-test-tasks.uc.r.appspot.com --introspect > schema.graphql`

Or if you want it in JSON

`gq https://vrlink-test-tasks.uc.r.appspot.com --introspect --format json > schema.json`

### Test some queries

You can use a tool like [hoppscotch](https://hoppscotch.io/graphql) to make queries to the live API endpoint

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the expo app in the development mode.\
You will see options to open the Android / iOS simulators, or the web app.\

The page will reload when you make changes.\

### `yarn android`

Runs the expo app in the development mode on the Android simulator.\

### `yarn ios`

Runs the expo app in the development mode on the iOD simulator.\

### `yarn web`

Runs the expo app in the development mode in your web browser.\
