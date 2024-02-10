import {transformBlocks} from './modules';
import { OutputData } from './modules/interfaces'

export default function parse(data: OutputData, plugins = {}) {
    const parsers = Object.assign({}, transformBlocks, plugins);

    if (!data || !data.blocks) {
        return '';
    }
    return data.blocks.map(block => {
        return parsers[block.type]
          ? parsers[block.type](block)
          : `Unknown block type: ${block.type}`;
    }).join('');
}
