import React from "react";
import { Datagrid, List, TextField, DateField, NumberField } from "react-admin";
import PaymentIcon from "@material-ui/icons/Payment";
import { app } from "../contants";

export const PaymentList = (props) => (
  <List {...props} bulkActionButtons={false} pagination={false}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="country" />
      <NumberField source="fee" label={`Monthly Fee(${app.currencySymbol})`} />
      <NumberField
        source="advance"
        label={`Advance Fee(${app.currencySymbol})`}
      />
      <NumberField source="sharing" label={`Sharing(%)`} />
      <DateField
        source="date"
        label="Month Date"
        options={{
          year: "numeric",
          month: "long",
          day: "numeric",
        }}
      />
      <NumberField source="remaining_days" />
    </Datagrid>
  </List>
);
export default {
  list: PaymentList,
  name: "payments",
  icon: PaymentIcon,
};
