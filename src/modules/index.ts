import { table } from "./table";
import { delimiter } from "./delimeter";
import { header } from "./header";
import { drawing } from "./drawing";
import { nestedList } from "./nestedList";
import { paragraph } from "./paragraph";
import { alertText } from "./alert";
import { checklist } from "./checklist";
import { image } from "./image";
import { linkTool } from "./linkTool";
import { quote } from "./quote";
import { raw } from "./raw";
import { warning } from "./warning";
import { embed } from "./embed";

export const transformBlocks = {
  alertText,
  checklist,
  delimiter,
  header,
  drawing,
  image,
  linkTool,
  list: nestedList,
  paragraph,
  quote,
  raw,
  table,
  warning,
  embed,
};
