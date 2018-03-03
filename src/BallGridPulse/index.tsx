import { css } from 'glamor';
import * as React from 'react';
import { IGeneralPropTypes } from '../mixins';
import style from './style';

export class BallGridPulse extends React.PureComponent<IGeneralPropTypes, {}> {

  public render() {
    const { color, loading } = this.props;

    if (loading) {
      return (
        <div {...css(style(color))}>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      );
    }

    return null;
  }
}
