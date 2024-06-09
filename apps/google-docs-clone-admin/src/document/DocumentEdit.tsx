import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
