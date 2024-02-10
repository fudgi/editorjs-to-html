import parser from './app';
import {promises as fs} from 'fs';

describe('Parser', () => {
  test('should parse json to html', async () => {
    const json = await fs.readFile('tests/data.json', 'utf8');
    const result = await fs.readFile('tests/result.html', 'utf8');
    const html = parser(JSON.parse(json));
    expect(html).toBe(result);
  });
});
