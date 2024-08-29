import { AlertBlock, Props } from "../interfaces";
import { baseBlock } from "../utils";

export function alertText({ data }: Props<AlertBlock>) {
  const item = `<div class="cdx-alert cdx-alert-${data.type}"><div class="cdx-alert__message">${data.message}</div></div>`;
  return baseBlock(item);
}
