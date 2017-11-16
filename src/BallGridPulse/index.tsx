import { css } from 'glamor';
import * as React from 'react';
import style from './style';

export interface IGeneralPropTypes {
  loading: boolean;
}

export class BallGridPulse extends React.PureComponent<IGeneralPropTypes, {}> {

  public render() {
    const { loading } = this.props;

    if (loading) {
      const className = css(style);
      return (
        <div className={`${className}`}>
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
