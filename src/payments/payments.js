import React from "react";
import {
  Datagrid,
  List,
  TextField,
  DateField,
  NumberField,
  BooleanField,
} from "react-admin";
import PaymentIcon from "@material-ui/icons/Payment";
import { app } from "../contants";

export const PaymentList = (props) => (
  <List {...props} bulkActionButtons={false}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="country" />
      <TextField source="company" />
      <NumberField source="fee" label={`Monthly Fee(${app.currencySymbol})`} />
      <NumberField
        source="advance"
        label={`Advance Fee(${app.currencySymbol})`}
      />
      <NumberField source="sharing" label={`Sharing(%)`} />
      <BooleanField source="payment_verified_b" label="Payment Verified" />
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
