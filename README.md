<p align="center">
  <a href="https://butelayout.github.io/">
   <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 500 500" width="72" height="72"><defs><linearGradient id="a" x1="250" x2="250" y1="490" y2="10" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd8b19"/><stop offset=".25" stop-color="#f06f2e"/><stop offset=".52" stop-color="#e6583e"/><stop offset=".776" stop-color="#df4b49"/><stop offset="1" stop-color="#dd464c"/></linearGradient></defs><rect width="500" height="480" y="10" fill="#fff" rx="90" ry="90"/><path fill="url(#a)" d="M410 20a80.091 80.091 0 0 1 80 80v300a80.091 80.091 0 0 1-80 80H90a80.091 80.091 0 0 1-80-80V100a80.091 80.091 0 0 1 80-80h320m0-10H90a90 90 0 0 0-90 90v300a90 90 0 0 0 90 90h320a90 90 0 0 0 90-90V100a90 90 0 0 0-90-90z"/><path fill="#dd464c" d="M88.931 258.416c0-22.051 1.049-44.8 3.149-67.552 1.75-19.6 3.5-47.25 29.4-53.2 17.151-3.851 34.3-4.2 55.3-4.2 79.452 0 112 24.15 112 69.651 0 21.35-15.4 40.251-34.65 49 23.45 8.75 45.5 25.9 45.5 58.451 0 56-45.851 72.1-106.052 72.1-23.1 0-42.7-.7-58.451-2.45-35-3.85-39.551-19.6-42.351-46.9a723.774 723.774 0 0 1-3.845-74.9zm77-12.95c9.1-1.05 21.35-1.75 33.6-2.1 11.9-7.35 19.6-18.2 19.6-31.851 0-17.5-7.7-29.4-32.9-29.4-4.549 0-11.9.351-20.3 1.05zm18.2 87.851c27.3 0 44.1-8.4 44.1-28.35 0-19.6-20.3-24.151-40.95-24.151a176.4 176.4 0 0 0-21.35 1.05v51.451zM381.284 309.867c0 18.2 4.2 21.351 10.15 21.351 3.85 0 8.05-1.051 11.55-1.051 12.951 0 16.1 13.65 16.1 23.1 0 22.05-14 30.45-47.25 30.45-37.1 0-53.9-17.85-58.1-42.7-3.5-22.051-4.9-46.9-4.9-72.1 0-35.351 2.1-72.451 4.55-105.352a30.83 30.83 0 0 1-5.95.7c-14 0-18.9-8.751-18.9-26.952 0-10.849 5.25-21.35 18.2-23.45a130.577 130.577 0 0 1 24.151-1.75c31.15 0 50.051 11.55 50.4 44.451z"/></svg>
  </a>

  <h3 align="center">Bute Layout</h3>

  <p align="center">
    Small flexbox layout system that keeps structure away from styles.
  </p>
</p>

## Introduction
Instead of populating class attribute the following data-attributes are used:  
`data-container`, `data-grid`, `data-cell`, `data-offset`, `data-order`, `data-align`, `data-visibility`

Like this:
~~~~
<div data-container>
  <div data-grid>
    <div data-cell="xs-4 lg-3" data-align="bottom"></div>
    <div data-cell="xs-4 lg-3" data-offset="lg-3"></div>
    <div data-cell="xs-4 lg-3" data-order="md-first" data-visibility="xs-hide"></div>
  </div>
</div>
~~~~
This way you can keep your code more readable and use class attribute just for styling things.

## Documentation

For full documentation, visit [butelayout.github.io](https://butelayout.github.io/).

## Install

```sh
npm install butelayout
```

Or download/clone the repo.
