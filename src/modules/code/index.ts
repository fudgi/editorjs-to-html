import {CodeBlock, Props} from "../interfaces";
import { baseBlock } from "../utils";

export function code ({ data }: Props<CodeBlock>) {
    if (!data.code) {
        return '';
    }
    return import('shiki').then(({ codeToHtml }) => codeToHtml(data.code, {
        lang: data.language,
        themes: {
            light: 'light-plus',
            dark: 'dark-plus',
        }
    }).then((html: string) => baseBlock(`<div class="cdx-block ce-code"><div class="border">${html}</div></div>`)));
}
