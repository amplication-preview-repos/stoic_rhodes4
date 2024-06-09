import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LinkWhereInput = {
  id?: StringFilter;
  permission?: "Option1";
  url?: StringNullableFilter;
};
