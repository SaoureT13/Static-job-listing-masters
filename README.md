# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories


### Links

- Solution URL: (https://github.com/SaoureT13/Static-job-listing-masters)
- Live Site URL: (https://saouret13.github.io/Static-job-listing-masters/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

The filter function

To see how you can add code snippets, see below:

```js
datas.filter((data) => {
  for (let key of filterList) {
    if (
      data.role !== key &&
      data.level !== key &&
      !data.languages.includes(key) &&
      !data.tools.includes(key)
    ) {
      return false;
    }
  }
  return true;
});
```

### Useful resources

(https://www.delftstack.com/fr/howto/javascript/javascript-filter-multiple-conditions/) - This helped me for filter functions with multiple params.


## Author

- Website - [SAOURE Kouamé Teddy Yann Christelor](https://github.com/SaoureT13/)
- Frontend Mentor - [@SaoureT13](https://www.frontendmentor.io/profile/SaoureT13)
