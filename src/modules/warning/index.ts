import { Props, WarningBlock } from "../interfaces";
import { baseBlock } from "../utils";

export function warning({ data }: Props<WarningBlock>) {
  if (!data.title && !data.message) {
    return "";
  }

  const type = data.type || "warning";
  let str = `
      <div class="cdx-warning__content">`;
  if (data.title) {
    str += `<div class="cdx-warning__title">${data.title}</div>`;
  }
  if (data.message) {
    str += `<div class="cdx-warning__message">${data.message}</div>`;
  }
  str += "</div>";
  return baseBlock(`<div class="cdx-block cdx-warning ${type}">${str}</div>`);
}
