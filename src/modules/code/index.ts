import {CodeBlock, Props} from "../interfaces";
import { baseBlock } from "../utils"
import { codeToHtml } from 'shiki'

export async function code ({ data }: Props<CodeBlock>) {
    if (!data.code) {
        return '';
    }
    const html = await codeToHtml(data.code, {
        lang: data.language,
        themes: {
            light: 'min-light',
            dark: 'dark-plus',
        }
    });
    const item = `<div class="cdx-block ce-code"><div>${html}</div></div>`;
    return baseBlock(item);

}
