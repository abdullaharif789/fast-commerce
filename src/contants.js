export const app = {
  api: "https://server.fcportal.org/",
  // api: "http://127.0.0.1:8000/",
  currencySymbol: "$",
  currencyCode: "GBP",
  colorOne: "#ef2425",
  colorTwo: "#e88b1c",
  adminRole: "admin",
  roles: [
    { id: "admin", name: "Admin" },
    { id: "employee", name: "Employee" },
  ],
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  sort: (array, key = "name") => {
    return array.sort((a, b) => {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
      return 0;
    });
  },
};
