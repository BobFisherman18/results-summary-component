# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Mobile Results](./screenshots%20and%20videos/mobile_results_summary.png)
![Desktop Results](./screenshots%20and%20videos/desktop_results_summary.png)
![Mobile Hover States Results](./screenshots%20and%20videos/mobile_hover_state.gif)
![Desktop Hover Results](./screenshots%20and%20videos/desktop_hover.gif)
![Mobile Results Bonus](./screenshots%20and%20videos/mobile_results_bonus.gif)
![Desktop Results Bonus](./screenshots%20and%20videos/desktop_results_bonus.gif)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Results Summary URL](https://bobfisherman18.github.io/results-summary-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/) - Bootstrap

### What I learned

I had completed the HTML and CSS code a month ago, but I could not do the bonus challenge which was to populate the content and display it until recently. Javascript is my next challenge as I needed to understand the basics such as DOM manipulation, and async.

```js
let x = 0;
for (let i of scoresField) {
  for (; x < arrayScores.length; ) {
    i.textContent = arrayScores[x];
    break;
  }
  x++;
}
```

### Continued development

I will continue to learn more and more about Javascript throught my front end journey.

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This what helped me learn HTML and CSS.
- [Youtube](https://www.youtube.com/@BroCodez) - This Youtuber also helped me learn HTML and CSS. In addition, I watched a lot of Youtube videos about HTML and CSS. Youtube is your best friend in learning web development!
- [Bootstrap](https://getbootstrap.com/) Always read the documentation!
- [Session Storage](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_sessionstorage2) - I learned what session storage is.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Author

- Website - [Jonah Rivera](https://github.com/BobFisherman18)
- Frontend Mentor - [@BobFisherman18](https://www.frontendmentor.io/profile/BobFisherman18)

## Acknowledgments

I would like to thank Frontend Mentor for giving me the opportunity to practice my front-end development!
