import {DrawingBlock, Props} from "../interfaces";

export function drawing({ data }: Props<DrawingBlock>): string {
  const { svg, caption } = data;
  let html = svg;
  if (caption) {
    html += `<div class="cdx-input image-tool__caption">${caption}</div>`;
  }
  return `<div>${html}</div>`;
}
