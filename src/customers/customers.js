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
  FileInput,
  FileField,
  ShowButton,
  RadioButtonGroupInput,
  BooleanField,
  Filter,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";
import PersonIcon from "@material-ui/icons/Person";
import { app } from "../contants";

const CustomerFilter = (props) => (
  <Filter {...props}>
    <ReferenceInput
      source="user_id"
      reference="users"
      label="Created By"
      alwaysOn
      variant="outlined"
      perPage={10000000}
      filterToQuery={(searchText) => ({ name: searchText })}
    >
      <AutocompleteInput optionText="first_name" />
    </ReferenceInput>
  </Filter>
);

export const CustomerList = (props) => {
  return (
    <List filters={<CustomerFilter />} {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="country" />
        <TextField source="service" />
        <TextField source="company" emptyText="--" />
        <NumberField
          source="fee"
          label={`Monthly Fee(${app.currencySymbol})`}
        />
        <NumberField
          source="advance"
          label={`Advance Fee(${app.currencySymbol})`}
        />
        <NumberField source="sharing" label={`Sharing(%)`} />
        <NumberField
          source="contract_duration"
          label={`Contract Duration (Months)`}
        />
        <DateField source="date" />
        <TextField source="user.first_name" label={"Created by"} />
        <BooleanField source="payment_verified_b" label="Payment Verified" />
        <FileField source="document" title={"View"} target="_blank" download />
        <ShowButton />
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
        <TextInput
          source="company"
          fullWidth
          placeholder="Microsoft"
          variant="outlined"
          required
        />
        <NumberInput
          source="fee"
          fullWidth
          placeholder="350"
          variant="outlined"
          required
          label={`Monthly Fee(${app.currencySymbol})`}
        />
        <NumberInput
          source="advance"
          fullWidth
          placeholder="200"
          variant="outlined"
          required
          label={`Advance Fee(${app.currencySymbol})`}
        />
        <NumberInput
          source="sharing"
          fullWidth
          placeholder="12.5"
          variant="outlined"
          required
          label={`Sharing(%)`}
        />
        <NumberInput
          source="contract_duration"
          label={`Contract Duration (Months)`}
          fullWidth
          placeholder="1.5"
          variant="outlined"
        />
        <DateInput source="date" fullWidth variant="outlined" required />
        <FileInput
          source="document"
          label="Document"
          accept="application/pdf"
          maxSize={5000000}
        >
          <FileField source="document" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export const CustomerShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="country" />
      <TextField source="service" />
      <DateField source="date" />
      <NumberField source="fee" label={`Monthly Fee(${app.currencySymbol})`} />
      <NumberField
        source="advance"
        label={`Advance Fee(${app.currencySymbol})`}
      />
      <NumberField source="sharing" label={`Sharing(%)`} />
      <NumberField
        source="contract_duration"
        label={"Contract Duration (Months)"}
      />
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
        <TextInput
          source="company"
          fullWidth
          placeholder="Microsoft"
          variant="outlined"
          required
        />
        <NumberInput
          source="fee"
          fullWidth
          placeholder="350"
          variant="outlined"
          required
          label={`Monthly Fee(${app.currencySymbol})`}
        />
        <NumberInput
          source="advance"
          fullWidth
          placeholder="200"
          variant="outlined"
          required
          label={`Advance Fee(${app.currencySymbol})`}
        />
        <NumberInput
          source="sharing"
          fullWidth
          placeholder="12.5"
          variant="outlined"
          required
          label={`Sharing(%)`}
        />
        <NumberInput
          source="contract_duration"
          fullWidth
          placeholder="1.5"
          variant="outlined"
          required
        />
        <DateInput source="date" fullWidth variant="outlined" required />
        <RadioButtonGroupInput
          source="payment_verified"
          label="Payment Verified"
          choices={[
            { id: "Yes", name: "Yes" },
            { id: "No", name: "No" },
          ]}
        />
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
