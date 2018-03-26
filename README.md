
[![NPM](http://nodei.co/npm/react-hover-delay-trigger.png?downloads=true)](http://nodei.co/npm/params-verifier/)

[![NPM version](https://img.shields.io/npm/v/react-hover-delay-trigger.svg)]()

- react-hover-delay-trigger is a component of which the children component will delay to trigger callback when the hover action happens.


### install

```shell
    npm install react-hover-delay-trigger --save
```


### import
- this package is developed by es6 syntax, so we recommend to load the package as follows:
```javascript
    import ReactHoverDelayTrigger from 'react-hover-delay-trigger';
```

### Demo
- [example](https://github.com/Yann-Wang/react-hover-delay-trigger-example)
```javascript
  <ReactHoverDelayTrigger
    delay={1100}
    handleHoverTrigger={this.handleHoverTrigger}
  >
    <span>677777</span>
  </ReactHoverDelayTrigger>
```

### Contributing
- compile
```shell
  npm run build
```

### License
- ISC
