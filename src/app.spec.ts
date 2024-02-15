import parser from './app';
import {promises as fs} from 'fs';

describe('Parser', () => {
  test('should parse json to html', async () => {
    const json = await fs.readFile('tests/data.json', 'utf8');
    const result = await fs.readFile('tests/result.txt', 'utf8');
    const html = await parser(JSON.parse(json));
    expect(html).toBe(result.replace(/\n$/, ''));
  });
});
