# Bute Layout

Small flexbox layout system that keeps structure away from styles.  
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
