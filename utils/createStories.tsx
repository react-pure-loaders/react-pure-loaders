import React, { cloneElement } from 'react';
import { color, boolean } from '@storybook/addon-knobs';

const defaultColor = '#000000';
const defaultState = true;

const style = {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column' as 'column',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '25%',
    maxWidth: '25%',
    height: '150px',
    alignItems: 'center',
    justifyContent: 'center',
};

const createStories = (animationsForStories: any[], stories: any) => {
    animationsForStories.forEach((animation: any) => {
        const { name, component } = animation;
        stories.add(name, () => (<div style={style}>{ cloneElement(component, { color: color('Color', defaultColor), loading: boolean('Loading', defaultState) })}</div>));
        return;
    });
};

export default createStories;
