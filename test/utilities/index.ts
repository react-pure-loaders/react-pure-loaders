import { Declaration, parse, Rule } from 'css';
import { shallow } from 'enzyme';
import { ReactElement } from 'react';

function isDataSelector(rule: Rule, className: string, cssSelector: string): boolean {
  return className.startsWith('data-css-') && rule.selectors.includes(`[${className}] ${cssSelector}`);
}

function isCssSelector(rule: Rule, className: string, cssSelector: string): boolean {
  return className.startsWith('.css-') && rule.selectors.includes(`${className} ${cssSelector}`);
}

function findRule(rules: Rule[], className: string, cssSelector: string): Rule {
  return rules.find((rule: Rule) => {
    if (rule.selectors) {
      return isDataSelector(rule, className, cssSelector) || isCssSelector(rule, className, cssSelector);
    }
    return false;
  });
}

function filterCssArray(declarations: Declaration[], cssProperty: string): Declaration {
  return declarations.find((declaration: Declaration) => {
    return declaration.property === cssProperty;
  });
}

export function getCssValueByProperty(className: string, cssSelector: string, cssProperty: string): string {
  const rawCss = document.getElementsByTagName('style')[0].innerHTML;
  const cssObject = parse(rawCss);
  const rule = findRule(cssObject.stylesheet.rules, className, cssSelector);

  return filterCssArray(rule.declarations, cssProperty).value;
}

export function getClassName(wrapper: ReactElement<{}>): string {
  return Object.keys(shallow(wrapper).props())[0];
}
