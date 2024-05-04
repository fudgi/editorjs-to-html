/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EmbedBlock, Props } from "../interfaces"
import { baseBlock } from "../utils"
import services from "./services";

export function embed ({ data }: Props<EmbedBlock>) {
  const { html } = services[data.service];

  let strResult = html(data);
  if (data.caption) {
    strResult += `<div class="embed-tool__caption">${data.caption}</div>`;
  }

  return baseBlock(`<div class="cdx-block embed-tool embed-tool--loading">${strResult}</div>`);

}
