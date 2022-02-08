# twittify


Twitter V2 API for NodeJS

## Installing

Using npm:

```bash
$ npm install twittify
```

Using bower:

```bash
$ bower install twittify
```

Using yarn:

```bash
$ yarn add twittify
```



## Example

```js
const tweet = require('twittify');

To add AccessToken which is mandatory to access the API.

var newTweet = new tweet('Add token here');

### Methods Available

##### tweet#getUserByName(name)
##### axios#getUserById(id)
##### axios#getUserTweetsByName(name)
##### axios#getUserFollowersByName(name)
##### axios#getUserBlockedByName(name)


