import { ImageBlock, Props, SimpleImageBlock } from "../interfaces";
import { baseBlock } from "../utils";

export function image({ data }: Props<ImageBlock | SimpleImageBlock>) {
  const stretched = data.stretched ? "cdx-simple-image--stretched" : "";
  const border = data.withBorder ? "cdx-simple-image--withBorder" : "";
  const background = data.withBackground
    ? "cdx-simple-image--withBackground"
    : "";
  const isImageBlock = Boolean((data as ImageBlock).file);
  const url = isImageBlock
    ? (data as ImageBlock).file.url
    : (data as SimpleImageBlock).url;
  const alt = (data as ImageBlock)?.file?.alt || "";

  let item = `<div class="cdx-simple-image__picture"><img  src="${url}" alt="${alt}"></div>`;
  if (data.caption) {
    item += `<div class="cdx-simple-image__caption">${data.caption}</div>`;
  }
  return baseBlock(
    `<div class="cdx-block cdx-simple-image ${stretched} ${border} ${background}">${item}</div>`
  );
}
