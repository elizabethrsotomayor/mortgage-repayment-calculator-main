# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](<./Screenshot%20(143).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This project was a great refresher on working with React.js. I learned about passing state down from the parent component (`<Card/>` to `<Calculator/>` and `<Results/>`) and handling/validating input. In addition, I learned more about the use of the css `:before` selector to style the labels for the input fields.

### Continued development

I would like to add animations for the totals when they are rendered to the Results component. I would also like to learn how to add custom input validation error handling.

### Useful resources

- [Suraj Sharma Handling Radio Buttons in React](https://surajsharma.net/blog/react-handle-radio-buttons) - This helped me figure out how to reset the radio buttons using the `checked` attribute to dynamically update the buttons based on props.
- [How to Format a Number with Commas as Thousands Separators](https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators) - I used this regex helper function in the `<Results/>` component to format the output based on the result.

## Author

- Website - [Elizabeth Sotomayor](https://elizabethsotomayor.vercel.app/)
- Frontend Mentor - [@elizabethrsotomayor](https://www.frontendmentor.io/profile/elizabethrsotomayor)
- LinkedIn - [Elizabeth Rose Sotomayor](https://www.linkedin.com/in/elizabeth-rose-sotomayor/)
