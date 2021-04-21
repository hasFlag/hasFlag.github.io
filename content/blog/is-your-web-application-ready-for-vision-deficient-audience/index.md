---
title: Is your Web Application ready for Vision Deficient audience?
date: "2020-10-02T22:40:32.169Z"
tags: ["accessibility", "tutorials"]
featured: ./vision-deficiency.jpeg
---
![vision-deficiency](./vision-deficiency.jpeg)

While reading about [web accessibility guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/), I got to know about some interesting (not really) thing about human vision deficiencies.

We generally say, every person has a different lens to look at things of-course that's true but every person has a different vision to look at objects as well. There are some people who look normal in terms of their eyesight and their ability to find objects around but that is not all true.

Well, people having vision deficiency can see objects but not like others, they may see them in different colors. You often heard of terms like color blindness, vision deficiency, etc. These deficiencies are categorized in the following terms:

- Protanopia: It is a term to define people who can see everything but can’t see `Red` color. In practice, this means that they often retain limited discrimination along the red–green axis of color space, although their ability to separate colors in this dimension is reduced.
- Deuteranopia: This type of deficiency people can’t see `Green` color and also struggle in Red color.
- Tritanopia: People having this deficiency can’t perceive `Blue` color.
- Achromatopsia: They can’t really see any color except `Black` and other colors as different shades of gray.

As a web developer, I would like you to familiar with the Chrome Vision deficiency emulator which can be used to mimic vision behaviors.

There is a [NPM package](https://www.npmjs.com/package/puppeteer-core) which can make your life easier, by automating vision deficiency tests in CI/CD pipelines.

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```
### Summary
I would suggest before going live with your application, you should check your application from vision POV as well.