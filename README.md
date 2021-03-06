# FM - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshots

![](./images/ss/375.JPG)\
![](./images/ss/1440.JPG)

- [Live View](https://bague-rodnel.github.io/intro-component-signup/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Bootstrap CSS / PurgeCSS
- Mobile-first workflow

I didn't bother too much about getting the dimensions to the pixel like I used to. My goal here was to simply use bootstrap as a design system and customize it for this and future challenges.

### Useful resources

- [PurgeCSS](https://purgecss.com/CLI.html#usage) - Bootstrap 5.1.3's bootstrap.scss file is a little over 11K lines. It got purged to just under 800 lines (then minified)
