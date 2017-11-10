import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Example.tsx');
}

configure(loadStories, module);