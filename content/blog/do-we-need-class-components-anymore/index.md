---
title: Do we really need class components anymore?
date: "2021-04-21T22:40:32.169Z"
tags: ["reactjs", "tutorials"]
featured: ./do-we-need-class-components-anymore.jpg
---

![Do we need class components anymore?](./do-we-need-class-components-anymore.jpg)

ReactJS is a mature enough library that becomes the first choice for developers. When ReactJS got launched it had a strong concept of *class components*. The reason they were popular because of their life cycle methods. With the ease of these life cycle methods, you can trigger your custom event at the right time.
Back then, it was clear when you need any state in the component goes for *class* else *functional*.

Modern react, the reason I call it modern because over the period of time React library has changed a lot. You shouldn't go with the assumption of stateful vs. functional components. Yet, functional components can also be stateful components.

Let's start with some examples and it will be clear to you why you may not need class components anymore.

## Rendering JSX
```js
import React from "react";

const FunctionalComponent = () => {
  return <h1>Hello, world!</h1>;
}
```
```js
import React, { Component } from "react";
class ClassComponent extends Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
```
You can see in the above example, we are trying to render a single string which is not a challenge in `FunctionalComponent`. But when it comes to `ClassComponent` becomes complex. Why we need Component a class to extend from the ReactJS library? Basically, the `Component` is doing nothing but rendering components with the `render()` function.

## Handling state
When it comes to handling state in ReactJS, it is debatable which type of component to go with. For example, I am working on a legacy project with React 15.x.x then I would definitely go with the `class` component. Because it gives me ReactJS life cycle methods which help to handle component state.

Since React 16.8 added support for **React Hooks**, now we can handle state within the functional components and a lot more.

```js
/* State handling with class component */

import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p>count: {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}
```

```js
/* State handling with the functional component, using react hooks */

import React, { useState } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```
**That was easy, right?**

We can handle the entire component state with a single ReactJS hook. Not only this but we have some other useful hooks to work with.

## Lifecycle Methods
Let's talk about React lifecycle methods now. These methods are the backbone of the ReactJS. I still can recall when someone asked me about these methods in one of the interviews. These methods were only part of `React.Component` before but now area available with Hooks.

### On Mount (componentDidMount)

```js
/* Class component */

import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  componentDidMount() {
    fetch('some-api.com/user')
      .then(response => response.json())
      .then(data => this.setState({name: data}));
  }
  
   render() {
    return <h1>{`Hello, my name is ${this.state.name}`}</h1>
  }
}
```
```js
/* Functional component, using react hooks */

import React, { useState, useEffect } from "react";

const FunctionalComponent = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch('some-api.com/user')
    .then(response => response.json())
    .then(data => setName(data));
  }, []);

  return <h1>{`Hello, my name is ${name}`}</h1>
}
```

See, how easy it is to call an API within a functional component. Which was never possible with the functional component.

### On Unmounting (componentWillUnmount)
In some instances, where you need to clear your timers and de-allocate memory on the unmount.
```js
/* Class component */

import React, { Component } from "react";

class ClassComponent extends Component {
  componentDidMount() {
    const element = document.getElementById("someId")
    element.removeEventListener("click", this.onLinkClick);
    element.addEventListener("click", this.onLinkClick);
  }

  componentWillUnmount() {
    const element = document.getElementById("someId")
    element.removeEventListener("click", this.onLinkClick);
  }

  onLinkClick = () => {
    /* Something in this function */
  }
  
  render() {
    return <button id="someId">I am button</button>
  }
}
```
```js
/* Functional component, using react hooks */

import React, { useEffect } from "react";

const FunctionalComponent = () => {

  function onLinkClick() {
    /* Something in this function */
  }

  useEffect(() => {
    element.removeEventListener("click", onLinkClick);
    element.addEventListener("click", onLinkClick);
    return () => {
      element.removeEventListener("click", onLinkClick);
    }
  }, []);

  return <button id="someId">I am button</button>
}
```

## Conclusion
There are some areas where you still need class components. But I always try to use the functional components as much as I can.

In the example above you have seen, we can gain everything by using the functional components. But in case your current project is running on class components, don't worry there is no harm to that. Perhaps, I would recommend using functional components in your further project development. There is no official announcement from the ReactJS team to deprecate class components.

## Useful links
- [Introduction to Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref)