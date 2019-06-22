# ECMAScript Toast

## About
This was a test project to create a lightweight toast system using no external dependencies with only ECMAScript and CSS

## How to use
Create a new Toast object like so
```
const newToast = new Toast({
  position: 'top' | 'bottom'
  colour: valid CSS value
  message: string
  id: string
  duration: milliseconds
  speed: milliseconds
})
```

Once you create the new toast object, a method automatically fires that attaches the Toast to the ` <body></body> ` of your HTML document.

The object contains a ` newToast.fireToast() ` function that activates the toast, which you can add to an EventListener attached to a button, for example