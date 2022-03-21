import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  useNotify,
  useRefresh,
  useRedirect,
  Create,
  SimpleForm,
  TextInput,
  Show,
  SimpleShowLayout,
  PasswordInput,
  SelectInput,
  Edit,
} from "react-admin";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { app } from "../contants";
export const UserList = (props) => {
  return (
    <List {...props} bulkActionButtons={false} pagination={false}>
      <Datagrid rowClick="show">
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="username" />
        <TextField
          source="role"
          style={{
            textTransform: "capitalize",
          }}
        />
        <TextField
          source="region"
          style={{
            textTransform: "capitalize",
          }}
        />
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
};
export const UserCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify(`User addedd successfully.`);
    redirect("/users");
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
          source="first_name"
          fullWidth
          placeholder="Affan"
          autoFocus
          variant="outlined"
          required
        />
        <TextInput
          source="last_name"
          fullWidth
          placeholder="Waheed"
          variant="outlined"
          required
        />
        <TextInput
          source="username"
          fullWidth
          placeholder="affan.waheed"
          variant="outlined"
          required
        />
        <PasswordInput
          source="password"
          fullWidth
          variant="outlined"
          required
        />
        <SelectInput
          source="role"
          choices={app.roles}
          fullWidth
          variant="outlined"
          required
        />
        <SelectInput
          source="region"
          choices={app.region}
          fullWidth
          variant="outlined"
          required
        />
      </SimpleForm>
    </Create>
  );
};
export const UserEdit = (props) => {
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
          source="first_name"
          fullWidth
          placeholder="Affan"
          autoFocus
          variant="outlined"
          required
        />
        <TextInput
          source="last_name"
          fullWidth
          placeholder="Waheed"
          variant="outlined"
          required
        />
        <TextInput
          source="username"
          fullWidth
          placeholder="affan.waheed"
          variant="outlined"
          required
        />
        <PasswordInput
          source="password"
          fullWidth
          variant="outlined"
          required
        />
        <SelectInput
          source="role"
          choices={app.roles}
          fullWidth
          variant="outlined"
          required
        />
        <SelectInput
          source="region"
          choices={app.region}
          fullWidth
          variant="outlined"
          required
        />
      </SimpleForm>
    </Edit>
  );
};
export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <TextField source="username" />
      <TextField source="role" />
      <TextField source="region" />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
export default {
  list: UserList,
  create: UserCreate,
  name: "users",
  icon: AccountCircleIcon,
  show: UserShow,
  edit: UserEdit,
};
