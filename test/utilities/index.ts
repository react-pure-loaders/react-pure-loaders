import { parse, Rule } from 'css';

function filterCssArray(itemsList, filterText) {
  return itemsList.filter((item) => {
    return item.property === filterText;
  });
}

export function resetHeadStyle() {
  document.getElementsByTagName('style')[0].innerHTML = '';
}

export function getCssValueByProperty(cssProperty) {
  const rawCss = document.getElementsByTagName('style')[0].innerHTML;
  const cssObject = parse(rawCss);
  const filterCssObject: any = cssObject.stylesheet.rules.filter((rule: Rule) => {
    return filterCssArray(rule.declarations, cssProperty).length > 0;
  })[0];
  const filteredCssItem = filterCssArray(filterCssObject.declarations, cssProperty);

  return filteredCssItem[0].value;
}
