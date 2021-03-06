import { createUnionType } from "../../src";

import { Recipe } from "./recipe.type";
import { Cook } from "./cook.type";

export const SearchResult = createUnionType({
  name: "SearchResult",
  types: () => [Recipe, Cook],
});
