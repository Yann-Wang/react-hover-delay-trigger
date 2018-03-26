import React from 'react';
import PropTypes from 'prop-types';

export default class HoverDelayTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.ref = null;
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    const { delay } = this.props;
    const ref = setTimeout(() => {
      this.props.handleHoverTrigger();
    }, delay);
    this.ref = ref;
  }

  handleMouseOut() {
    clearTimeout(this.ref);
  }

  empty() {}

  render() {
    return (
      <div
        className={this.props.className}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onFocus={this.empty}
        onBlur={this.empty}
      >
        {this.props.children}
      </div>
    );
  }
}

HoverDelayTrigger.propTypes = {
  className: PropTypes.string,
  handleHoverTrigger: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
  children: PropTypes.element
};

HoverDelayTrigger.defaultProps = {
  className: '',
  children: <span></span>
};
