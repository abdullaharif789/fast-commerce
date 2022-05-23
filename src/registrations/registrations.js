import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  EmailField,
  Show,
  SimpleShowLayout,
  DeleteButton,
  Filter,
  SelectInput,
} from "react-admin";
import { useReactToPrint } from "react-to-print";
import Button from "@mui/material/Button";
import Print from "@material-ui/icons/Print";
import { app } from "../contants";

import HowToRegIcon from "@material-ui/icons/HowToReg";
const RegistrationFilter = (props) => (
  <Filter {...props}>
    <SelectInput
      choices={app.region.map((item) => ({ id: item.id, name: item.name }))}
      source="region"
      label="Region"
      variant="outlined"
      alwaysOn
    />
  </Filter>
);
const RegistrationList = (props) => (
  <List filters={<RegistrationFilter />} {...props} bulkActionButtons={false}>
    <Datagrid rowClick="show">
      <DeleteButton label="" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <EmailField source="email" />
      <TextField source="contact" />
      <TextField source="national_identity" />
      <TextField source="region" />
      <TextField source="batch" emptyText="--" />
      <TextField source="course" />
      <NumberField source="fee" />
      <NumberField source="transaction_id" label={"Transaction#"} />
      <DateField source="registered_at" label={"Registered at"} />
    </Datagrid>
  </List>
);
const RegistrationShow = (props) => {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "10px 0px",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<Print fontSize="inherit" />}
          onClick={handlePrint}
        >
          Print
        </Button>
      </div>
      <div ref={componentRef}>
        <Show {...props}>
          <SimpleShowLayout>
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="contact" />
            <TextField source="region" />
            <TextField source="course" />
            <NumberField source="fee" />
            <NumberField source="batch" label={"Batch#"} />
            <NumberField source="transaction_id" label={"Transaction#"} />
            <NumberField
              source="national_identity"
              label={"National Identity"}
            />
          </SimpleShowLayout>
        </Show>
      </div>
    </>
  );
};
export default {
  list: RegistrationList,
  name: "registrations",
  icon: HowToRegIcon,
  show: RegistrationShow,
};
