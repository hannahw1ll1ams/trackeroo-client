//import React, { Component } from 'react';
import RunInfo from './RunInfo';

class RunInfoNumeric extends RunInfo {
  formatValue() {
    return [this.state.value.toFixed(1), this.props.unit].join('');
  }
}

export default RunInfoNumeric;
