import {ImageBlock, Props} from "../interfaces";
import { baseBlock } from "../utils"

export function image({ data }: Props<ImageBlock>) {
    const stretched = data.stretched ? 'image-tool--stretched' : '';
    const border = data.withBorder ? 'image-tool--withBorder' : '';
    const background = data.withBackground ? 'image-tool--withBackground' : '';

    let item = `<div class="image-tool__image"><img class="image-tool__image-picture" src="${data.file.url}" alt="${data.file.alt || ''}"></div>`;
    if (data.caption) {
        item += `<div class="cdx-input image-tool__caption">${data.caption}</div>`;
    }
    return baseBlock(`<div class="cdx-block image-tool image-tool--filled ${stretched} ${border} ${background}">${item}</div>`);
}
