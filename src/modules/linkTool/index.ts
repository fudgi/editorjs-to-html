import {LinkToolBlock, LinkToolBlockMeta, Props} from '../interfaces';
import { baseBlock } from '../utils'
const psl = require('psl');

export function linkTool ({ data }: Props<LinkToolBlock>) {
    let strResult = '';

    if (Object.keys(data.meta).length) {
        const { image, title, description }:LinkToolBlockMeta = data.meta;
        if (image && image.url) {
            strResult += `<div class="link-tool__image" style="background-image: url(${image.url})"></div>`;
        }
        if (title) {
            strResult += `<p class="link-tool__title">${title}</p>`;
        }
        if (description) {
            strResult += `<p class="link-tool__description">${description}</p>`;
        }
        strResult += `<span class="link-tool__anchor">${extractHostname(data.link)}</span>`;

        strResult = `<a class="link-tool__content link-tool__content--rendered" target="_blank" href="${data.link}" ref="nofollow noindex noreferrer">${strResult}</a>`;
    }
    return baseBlock(`<div class="cdx-block"><div class="link-tool">${strResult}</div></div>`);

    function extractHostname(url:string):string {
        let hostname;

        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        } else {
            hostname = url.split('/')[0];
        }
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];

        return psl.get(hostname) || url;
    }
}
