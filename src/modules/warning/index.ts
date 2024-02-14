import {Props, WarningBlock} from "../interfaces";
import { baseBlock } from "../utils"

export function warning({ data }: Props<WarningBlock>) {
  const icons = {
    success: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" class="icon_abDxV" style="vertical-align: middle;"><g fill="currentColor" clip-path="url(#CheckCircle_svg__a)"><path d="M11.966 5.778a.6.6 0 1 0-.932-.756l-4.101 5.047-1.981-2.264a.6.6 0 0 0-.904.79l2.294 2.622a.8.8 0 0 0 1.223-.023l4.4-5.416Z"></path><path fill-rule="evenodd" d="M8 .4a7.6 7.6 0 1 0 0 15.2A7.6 7.6 0 0 0 8 .4ZM1.6 8a6.4 6.4 0 1 1 12.8 0A6.4 6.4 0 0 1 1.6 8Z" clip-rule="evenodd"></path></g><defs><clipPath id="CheckCircle_svg__a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" class="icon_abDxV" style="vertical-align: middle;"><g fill="currentColor" clip-path="url(#InfoCircle_svg__a)"><path fill-rule="evenodd" d="M8 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6ZM.4 8a7.6 7.6 0 1 1 15.2 0A7.6 7.6 0 0 1 .4 8Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M5.4 7a.6.6 0 0 1 .6-.6h2a.6.6 0 0 1 .6.6v3.9H10a.6.6 0 0 1 0 1.2H6a.6.6 0 1 1 0-1.2h1.4V7.6H6a.6.6 0 0 1-.6-.6Z" clip-rule="evenodd"></path><path d="M8 3.6a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"></path></g><defs><clipPath id="InfoCircle_svg__a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>',
    danger: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" class="icon_abDxV" style="vertical-align: middle;"><g fill="currentColor" clip-path="url(#Warning_svg__a)"><path fill-rule="evenodd" d="M8 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6ZM.4 8a7.6 7.6 0 1 1 15.2 0A7.6 7.6 0 0 1 .4 8Z" clip-rule="evenodd"></path><path d="M8 12.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8ZM7.25 4.24c0-.27.187-.49.417-.49h.666c.23 0 .417.22.417.49v2.247c0 .462.049 1.05-.043 1.499L8.5 9c-.103.681-.898.68-1 0l-.207-1.014c-.091-.45-.043-1.037-.043-1.5V4.24Z"></path></g><defs><clipPath id="Warning_svg__a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>',
    warning: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" class="icon_abDxV" style="vertical-align: middle;"><g fill="currentColor" clip-path="url(#Alert_svg__a)"><path fill-rule="evenodd" d="M5.47 2.387a2.895 2.895 0 0 1 5.06 0l4.679 8.272c1.107 1.958-.267 4.441-2.53 4.441H3.32c-2.263 0-3.637-2.483-2.53-4.44l4.68-8.273Zm4.015.591a1.695 1.695 0 0 0-2.97 0l-4.68 8.272c-.674 1.194.182 2.65 1.486 2.65h9.358c1.304 0 2.16-1.456 1.485-2.65L9.485 2.978Z" clip-rule="evenodd"></path><path d="M8 12.95a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8ZM7.25 4.79c0-.27.187-.49.417-.49h.666c.23 0 .417.22.417.49v2.247c0 .462.049 1.05-.043 1.499L8.5 9.55c-.103.681-.898.68-1 0l-.207-1.014c-.091-.45-.043-1.037-.043-1.5V4.79Z"></path></g><defs><clipPath id="Alert_svg__a"><path fill="#fff" d="M0 0h16v16H0z"></path></clipPath></defs></svg>',
  };
  if (!data.title && !data.message) {
    return '';
  }

  const type = data.type || 'warning';
  let str = `
      <div class="cdx-warning__icon">${icons[type]}</div>
      <div class="cdx-warning__content">`;
  if (data.title) {
    str += `<div class="cdx-warning__title">${data.title}</div>`;
  }
  if (data.message) {
    str += `<div class="cdx-warning__message">${data.message}</div>`;
  }
  str += '</div>';
  return baseBlock(`<div class="cdx-block cdx-warning ${type}">${str}</div>`);
}
