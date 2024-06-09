import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
