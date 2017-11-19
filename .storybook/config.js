import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Dots.tsx');
  require('../stories/Lines.tsx');
  require('../stories/Misc.tsx');
}

configure(loadStories, module);