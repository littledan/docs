import {
  codeTabs,
  mark,
  mermaid,
  normalDemo,
  tabs,
} from "vuepress-plugin-md-enhance/lib/node/index.js";
import { containers } from "../plugins/containers.js";
import { fences } from "../plugins/fences.js";
import { flowchart } from "../plugins/flowchart.js";
import { snippetPlugin } from "../plugins/snippets.js";
import type { Config } from "./types.js";

export const MARKDOWN: Config["markdown"] = {
  config: (md) => {
    md.use(snippetPlugin);
    md.use(containers);
    md.use(mermaid);
    md.use(flowchart);
    md.use(fences);
    md.use(mark);
    md.use(normalDemo);
    md.use(tabs);
    md.use(codeTabs);
  },
  toc: {
    level: [2, 4],
  },
};