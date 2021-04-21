---
title: Do we really need class components anymore?
date: "2021-04-21T22:40:32.169Z"
tags: ["reactjs", "tutorials"]
featured: ./do-we-need-class-components-anymore.jpg
---

![Do we need class components anymore?](./do-we-need-class-components-anymore.jpg)

As we know ReactJS is now pretty mature and becoming the number one choice of front-end developers. Back in time when react js launched it came with a very strong concept of *class components*, the reason they were popular because of their life cycle methods which easily provide you several options to trigger your event at right time. It was clear when you need any state in the component goes for *class* else choose the *functional* way to declare your component.

Modern react, the reason I call it modern because over the period of time React framework has changed a lot. Now you really can't go with the assumption of stateful vs. functional component, perhaps functional components can also be stateful components.

Let's start with some examples and it will be clear to you why don't* need class components anymore.

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
If you see in the above example, we are trying to render only a single string which is not a challenge in `FunctionalComponent` but when it comes to `ClassComponent` becomes complex. Why we need Component a class to extend from react library? Basically, here `Component` class is doing nothing but rendering out components with the `render()` function.

## Handling state
When it comes to handling state in ReactJS, it is debatable which type of component to go with. If I am working on a legacy project with React 15.x.x then I would blindly choose the `class` component because it gives me react life cycle method and easy to handle my component state.

React 16.8 was launched with a major update to support `React Hooks`. These hooks were very easy to use and came with the freedom to handle states within functional components and a lot more.

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

We just need a single react hook and we can handle the entire state of the component within our function component. Not only this but we have some other useful hooks to work with.

## Lifecycle Methods
Let's talk about React lifecycle methods now. These methods are the backbone of the ReactJS framework, I still can recall when someone asked me about these methods in one of the interviews. These methods were only part of `React.Component` but now easily available with React Hooks.

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

You can see, how easy it was to call an API within a functional component which was never possible with the functional component.

### On Unmounting (componentWillUnmount)
There are some instances where you might need to clear your timers or de-allocate memory when the component is unmounted.
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
There are use case areas where you might need class components, but I always try to use the functional components as much as I can.

In the above examples, you have seen we can accomplish everything by using functional components, but again in case your current project is running on class base components don't worry there is no harm in that either. Perhaps, I would recommend using functional components in your further project development. There is no official announcement from the ReactJS team to deprecate class components yet.

## Useful links
- [Introduction to Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref)