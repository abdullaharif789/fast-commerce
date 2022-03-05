import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  useNotify,
  useRefresh,
  useRedirect,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  Show,
  SimpleShowLayout,
  Edit,
} from "react-admin";
import PersonIcon from "@material-ui/icons/Person";
import { app } from "../contants";
export const CustomerList = (props) => {
  return (
    <List {...props} bulkActionButtons={false} pagination={false}>
      <Datagrid rowClick="show">
        <TextField source="name" />
        <TextField source="country" />
        <TextField source="service" />
        <NumberField source="fee" label={`Fee(${app.currencySymbol})`} />
        <NumberField
          source="contract_duration"
          label={`Contract Duration (Months)`}
        />
        <DateField source="date" />
        <TextField source="user.first_name" label={"Created by"} />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
};
export const CustomerCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify(`Customer addedd successfully.`);
    redirect("/customers");
    refresh();
  };
  return (
    <Create
      {...props}
      onSuccess={onSuccess}
      onFailure={(data) => {
        notify(data.body, "error");
      }}
    >
      <SimpleForm>
        <TextInput
          source="name"
          fullWidth
          placeholder="Affan Waheed"
          autoFocus
          variant="outlined"
          required
        />
        <TextInput
          source="country"
          fullWidth
          placeholder="Pakistan"
          variant="outlined"
          required
        />
        <TextInput
          source="service"
          fullWidth
          placeholder="Plumber"
          variant="outlined"
          required
        />
        <NumberInput
          source="fee"
          fullWidth
          placeholder="1200"
          variant="outlined"
          required
          label={`Fee(${app.currencySymbol})`}
        />
        <NumberInput
          source="contract_duration"
          label={`Contract Duration (Months)`}
          fullWidth
          placeholder="1.5"
          variant="outlined"
          required
        />
        <DateInput source="date" fullWidth variant="outlined" required />
      </SimpleForm>
    </Create>
  );
};

export const CustomerShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="country" />
      <TextField source="service" />
      <DateField source="date" />
      <NumberField source="fee" />
      <NumberField source="contract_duration" />
      <TextField source="user.first_name" label={"Created by"} />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
export const CustomerEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  return (
    <Edit
      {...props}
      undoable={false}
      onFailure={(data) => {
        notify(data.body, "error");
        refresh();
      }}
    >
      <SimpleForm>
        <TextInput
          source="name"
          fullWidth
          placeholder="Affan Waheed"
          autoFocus
          variant="outlined"
          required
        />
        <TextInput
          source="country"
          fullWidth
          placeholder="Pakistan"
          variant="outlined"
          required
        />
        <TextInput
          source="service"
          fullWidth
          placeholder="Plumber"
          variant="outlined"
          required
        />
        <NumberInput
          source="fee"
          fullWidth
          placeholder="1200"
          variant="outlined"
          required
        />
        <NumberInput
          source="contract_duration"
          fullWidth
          placeholder="1.5"
          variant="outlined"
          required
        />
        <DateInput source="date" fullWidth variant="outlined" required />
      </SimpleForm>
    </Edit>
  );
};
export default {
  list: CustomerList,
  name: "customers",
  icon: PersonIcon,
  create: CustomerCreate,
  show: CustomerShow,
  edit: CustomerEdit,
};
