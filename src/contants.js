export const app = {
  api: "https://server.fcportal.org/public/",
  // api: "http://127.0.0.1:8000/",
  website: "https://fastcommerceinternational.com/",
  currencySymbol: "$",
  currencyCode: "GBP",
  colorOne: "#ef2425",
  colorTwo: "#e88b1c",
  adminRole: "admin",
  roles: [
    { id: "admin", name: "Admin" },
    { id: "employee", name: "Employee" },
    { id: "trainer", name: "Trainer" },
  ],
  region: [
    { id: "lahore", name: "Lahore" },
    { id: "hunza", name: "Hunza" },
    { id: "dubai", name: "Dubai" },
    { id: "manchester", name: "Manchester" },
    { id: "gilgit", name: "Gilgit" },
  ],
  cources: [
    { id: "amazon_fba_private_label", name: "Amazon FBA Private Label" },
    { id: "amazon_fba_wholesale", name: "Amazon FBA Wholesale" },
    { id: "amazon_virtual_assistant", name: "Amazon Virtual Assistant" },
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
