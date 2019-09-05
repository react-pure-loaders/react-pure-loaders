# react-pure-loaders

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![dependencies Status][david-dm-badge]][david-dm]
[![devDependencies Status][david-dm-dev-badge]][david-dm-dev]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npm-stat]

[![MIT License][license-badge]][LICENSE]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![FOSSA Status][fossa-badge]][fossa]
[![Known Vulnerabilities][snyk-badge]][snyk]
[![PRs Welcome][prs-badge]][prs]
[![All Contributors][contributors-badge]][contributors]

[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Roadmap][roadmap-badge]][roadmap]
[![Examples][examples-badge]][examples]
[![semantic-release][semantic-release-badge]][semantic-release]
[![Commitizen friendly][commitizen-badge]][commitizen]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]


React PureComponent loading animations

## Demo

[Demo Page](https://reactpureloaders.io/)

## Installation

Install with `yarn`:
```bash
yarn add react-pure-loaders
```

Install with `npm`:
```bash
npm install react-pure-loaders --save
```

## Usage
Each loader has their own default properties. You can overwrite the defaults by passing props into the loaders.
Each loader accepts a `loading` prop as a boolean. The loader will not render anything if `loading` is `false`.

### Example

```js
import React from 'react';
import { BallBeat } from 'react-pure-loaders';

class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div>
        <BallBeat
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
```

## Available Loaders, PropTypes, and Default Values

Common default props for all loaders:

```js
loading: true
color: '#000000'
```

Loader                  | size:int | height:int | width:int | radius:int | margin:str
-----------------------:|:--------:|:----------:|:---------:|:----------:|:---------:
BallBeat                |          |            |           |            |
BallClipRotate          |          |            |           |            |
BallClipRotateMultiple  |          |            |           |            |
BallClipRotatePulse     |          |            |           |            |
BallGridBeat            |          |            |           |            |
BallGridPulse           |          |            |           |            |
BallPulse               |          |            |           |            |
BallPulseRise           |          |            |           |            |
BallPulseRound          |          |            |           |            |
BallPulseSync           |          |            |           |            |
BallRotate              |          |            |           |            |
BallScale               |          |            |           |            |
BallScaleMultiple       |          |            |           |            |
BallScaleRandom         |          |            |           |            |
BallScaleRipple         |          |            |           |            |
BallScaleRippleMultiple |          |            |           |            |
BallSpinFadeLoader      |          |            |           |            |
BallSpinLoader          |          |            |           |            |
BallTrianglePath        |          |            |           |            |
BallZigZag              |          |            |           |            |
BallZigZagDeflect       |          |            |           |            |
LineScale               |          |            |           |            |
LineScaleParty          |          |            |           |            |
LineScalePulseOut       |          |            |           |            |
LineScalePulseOutRapid  |          |            |           |            |
LineScaleRandom         |          |            |           |            |
LineSpinFadeLoader      |          |            |           |            |
CubeTransition          |          |            |           |            |
Pacman                  |          |            |           |            |
SemiCircleSpin          |          |            |           |            |
SquareSpin              |          |            |           |            |
TriangleSkewSpin        |          |            |           |            |

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://fueledbydreams.com"><img src="https://avatars2.githubusercontent.com/u/794161?v=4" width="100px;" alt="James W. Lane III"/><br /><sub><b>James W. Lane III</b></sub></a><br /><a href="https://github.com/jameswlane/react-pure-loaders/commits?author=jameswlane" title="Code">💻</a> <a href="https://github.com/jameswlane/react-pure-loaders/commits?author=jameswlane" title="Documentation">📖</a> <a href="https://github.com/jameswlane/react-pure-loaders/commits?author=jameswlane" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/wps13"><img src="https://avatars1.githubusercontent.com/u/19312323?v=4" width="100px;" alt="Willane Paiva"/><br /><sub><b>Willane Paiva</b></sub></a><br /><a href="https://github.com/jameswlane/react-pure-loaders/commits?author=wps13" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Larissagilliane"><img src="https://avatars2.githubusercontent.com/u/27821672?v=4" width="100px;" alt="Larissa Moura"/><br /><sub><b>Larissa Moura</b></sub></a><br /><a href="https://github.com/jameswlane/react-pure-loaders/commits?author=Larissagilliane" title="Code">💻</a> <a href="https://github.com/jameswlane/react-pure-loaders/commits?author=Larissagilliane" title="Tests">⚠️</a><a href="#tool-Larissagilliane" title="Tools">🔧</a><a href="#plugin-Larissagilliane" title="Plugin/utility libraries">🔌</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification. Contributions of any kind welcome!

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswlane%2Freact-pure-loaders.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswlane%2Freact-pure-loaders?ref=badge_large)


[build-badge]: https://travis-ci.org/jameswlane/react-pure-loaders.svg?branch=master
[build]: https://travis-ci.org/jameswlane/react-pure-loaders
[coverage-badge]: https://coveralls.io/repos/github/jameswlane/react-pure-loaders/badge.svg?branch=master
[coverage]: https://coveralls.io/github/jameswlane/react-pure-loaders?branch=master
[david-dm-badge]: https://david-dm.org/jameswlane/react-pure-loaders/status.svg
[david-dm]: https://david-dm.org/jameswlane/react-pure-loaders
[david-dm-dev-badge]: https://david-dm.org/jameswlane/react-pure-loaders/dev-status.svg
[david-dm-dev]: https://david-dm.org/jameswlane/react-pure-loaders?type=dev
[version-badge]: https://img.shields.io/npm/v/react-pure-loaders.svg
[package]: http://npm.im/react-pure-loaders
[downloads-badge]: https://img.shields.io/npm/dm/react-pure-loaders.svg
[npm-stat]: http://npm-stat.com/charts.html?package=react-pure-loaders&from=2016-04-01
[license-badge]: https://img.shields.io/npm/l/react-pure-loaders.svg
[license]: https://github.com/jameswlane/react-pure-loaders/blob/master/other/LICENSE
[greenkeeper-badge]: https://badges.greenkeeper.io/jameswlane/react-pure-loaders.svg
[greenkeeper]: https://greenkeeper.io/
[fossa-badge]: https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswlane%2Freact-pure-loaders.svg?type=shield
[fossa]: https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswlane%2Freact-pure-loaders?ref=badge_shield
[snyk-badge]: https://snyk.io/test/github/jameswlane/react-pure-loaders/badge.svg
[snyk]: https://snyk.io/test/github/jameswlane/react-pure-loaders
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[contributors-badge]: https://img.shields.io/badge/all_contributors-3-orange.svg
[contributors]: #contributors
[donate-badge]: https://img.shields.io/badge/$-support-green.svg
[donate]: PayPal.Me/jameswlane/10
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg
[coc]: https://github.com/jameswlane/react-pure-loaders/blob/master/other/CODE_OF_CONDUCT.md
[roadmap-badge]: https://img.shields.io/badge/%F0%9F%93%94-roadmap-CD9523.svg
[roadmap]: https://github.com/jameswlane/react-pure-loaders/blob/master/other/ROADMAP.md
[examples-badge]: https://img.shields.io/badge/%F0%9F%92%A1-examples-8C8E93.svg
[examples]: https://github.com/jameswlane/react-pure-loaders/blob/master/other/EXAMPLES.md
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release]: https://github.com/semantic-release/semantic-release
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen]: http://commitizen.github.io/cz-cli/
[github-watch-badge]: https://img.shields.io/github/watchers/jameswlane/react-pure-loaders.svg?style=social
[github-watch]: https://github.com/jameswlane/react-pure-loaders/watchers
[github-star-badge]: https://img.shields.io/github/stars/jameswlane/react-pure-loaders.svg?style=social
[github-star]: https://github.com/jameswlane/react-pure-loaders/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-pure-loaders!%20https://github.com/jameswlane/react-pure-loaders%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/jameswlane/react-pure-loaders.svg?style=social
[all-contributors]: https://github.com/kentcdodds/all-contributors
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
