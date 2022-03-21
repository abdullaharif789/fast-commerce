import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  EmailField,
} from "react-admin";
import HowToRegIcon from "@material-ui/icons/HowToReg";
const RegistrationList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid rowClick="show">
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="contact" />
      <TextField source="region" />
      <TextField source="course" />
      <NumberField source="fee" />
      <NumberField source="transaction_id" label={"Transaction#"} />
      <DateField source="registered_at" label={"Registered at"} />
    </Datagrid>
  </List>
);
export default {
  list: RegistrationList,
  name: "registrations",
  icon: HowToRegIcon,
};
