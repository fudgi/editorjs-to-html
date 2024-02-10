import { baseBlock } from "../utils"
import {Props, QuoteBlock} from "../interfaces";

export function quote({ data }: Props<QuoteBlock>) {
    let html = `<div class="cdx-input cdx-quote__text">${data.text}</div>`;

    if (data.caption) {
        html += `<div class="cdx-input cdx-quote__caption">${data.caption}</div>`;
    }
    return baseBlock(`<blockquote class="cdx-block cdx-quote">${html}</blockquote>`);
}
