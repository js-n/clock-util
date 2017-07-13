# clock-util

An extended [Clock](https://www.npmjs.com/package/clock) with additional functionality

## installation
```
> npm install clock-util
```

## usage
default to system clock:
```js
const ClockUtil = require('clock-util')
const clock = new ClockUtil()
```

or wrap any [Clock](https://www.npmjs.com/package/clock):
```js
const fixedClock = {now: () => 123456}
const clock = new ClockUtil(fixedClock)
```

now we have some extra utility methods available:

```js
// Returns the timestamp in milliseconds since the Unix epoch from the current clock time
// this is the same as Clock interface
clock.now()
// => 123456

clock.date() // Returns a Date object from the current clock time
// => new Date(123456)

clock.nowSeconds() // Returns the number of seconds since the Unix epoch
// => 123
```

## license
ISC
