import {ListBlock, ListItem, Props} from '../interfaces';
import { baseBlock } from '../utils';

export function nestedList ({ data }: Props<ListBlock>) {
  const listStyle = data.style === 'unordered' ? 'ul' : 'ol';

  const recursor = (items: ListItem[], listStyle: 'ul' | 'ol') => {
    const list = items.map((item) => {
      if (!item.content && !item.items) {
        return `<li>HELLO${item}</li>`;
      }
      let list = '';
      if (item.items && item.items.length) {
        list = recursor(item.items, listStyle);
      }
      return `<li class="cdx-nested-list__item">
                <div class="cdx-nested-list__item-body">
                  <div class="cdx-nested-list__item-content">${
                    item.content || ''
                  }</div>
                  ${list}
                </div>
              </li>`;
    });

    return `<${listStyle} class="cdx-nested-list cdx-block cdx-nested-list--ordered">${list.join(
      ''
    )}</${listStyle}>`;
  };

  const listStart = recursor(data.items, listStyle);

  return baseBlock(listStart);
}
