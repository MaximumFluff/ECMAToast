# ECMAScript Toast

## About
This was a test project to create a lightweight toast system using no external dependencies with only ECMAScript and CSS

## How to use
Create a new Toast object like so
```
const newToast = new Toast({
  position: top | bottom
  colour: valid CSS value
  message: string
  id: string
  duration: milliseconds
  speed: milliseconds
})
```

Then you can use ` newToast.returnNode ` to get the value of the HTML node for the toast, which you can then attach to the ` <body></body> `

The object contains a ` newToast.fireToast() ` function that activates the toast, which you can add to an EventListener attached to a button, for example