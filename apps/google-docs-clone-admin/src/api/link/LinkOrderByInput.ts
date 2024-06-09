import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  permission?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
