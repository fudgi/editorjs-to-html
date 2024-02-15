import {CodeBlock, Props} from "../interfaces";
import { baseBlock } from "../utils";

export function code ({ data }: Props<CodeBlock>) {
    if (!data.code) {
        return '';
    }
    return import('shiki').then(({ codeToHtml }) => codeToHtml(data.code, {
        lang: data.language,
        themes: {
            light: 'min-light',
            dark: 'dark-plus',
        }
    }).then((html: string) => baseBlock(`<div class="cdx-block ce-code"><div class="border p-3">${html}</div></div>`)));
}
