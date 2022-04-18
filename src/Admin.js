// /* eslint-disable */
import * as React from "react";
import { Admin, Resource } from "react-admin";

import closeSidebarSaga from "./layout/SideBar";

import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";

import layout from "./layout";
import { app } from "./contants";

import customers from "./customers/customers";
import registrations from "./registrations/registrations";
import payments from "./payments/payments";
import users from "./users/users";

export default function App() {
  return (
    <Admin
      customSagas={[closeSidebarSaga]}
      layout={layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      {(permissions) => [
        permissions === app.adminRole ? (
          <Resource name="users" {...users} />
        ) : null,
        <Resource name="customers" {...customers} />,
        <Resource name="registrations" {...registrations} />,
        <Resource name="payments" {...payments} />,
      ]}
    </Admin>
  );
}
