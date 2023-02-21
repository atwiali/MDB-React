import React, { useState } from "react";
import MaterialTable from "material-table";
import { motion } from "framer-motion/dist/framer-motion";
import { useTranslation } from "react-i18next";
const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    city: "Bangalore",
    status: 0,
  },
  {
    id: 2,
    name: "Raj",
    email: "raj@gmail.com",
    phone: 9812345678,
    city: "Chennai",
  },
  {
    id: 3,
    name: "David",
    email: "david342@gmail.com",
    phone: 7896536289,
    city: "Jaipur",
  },
  {
    id: 4,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9087654321,
    city: "Hyderabad",
  },
  {
    id: 5,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    city: "Bangalore",
    status: 0,
  },
  {
    id: 6,
    name: "Raj",
    email: "raj@gmail.com",
    phone: 9812345678,
    city: "Chennai",
  },
  {
    id: 7,
    name: "David",
    email: "david342@gmail.com",
    phone: 7896536289,
    city: "Jaipur",
  },
  {
    id: 8,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9087654321,
    city: "Hyderabad",
  },
  {
    id: 9,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    city: "Bangalore",
    status: 0,
  },
  {
    id: 10,
    name: "Raj",
    email: "raj@gmail.com",
    phone: 9812345678,
    city: "Chennai",
  },
  {
    id: 11,
    name: "David",
    email: "david342@gmail.com",
    phone: 7896536289,
    city: "Jaipur",
  },
  {
    id: 12,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9087654321,
    city: "Hyderabad",
  },
  {
    id: 13,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    city: "Bangalore",
    status: 0,
  },
  {
    id: 14,
    name: "Raj",
    email: "raj@gmail.com",
    phone: 9812345678,
    city: "Chennai",
  },
  {
    id: 15,
    name: "David",
    email: "david342@gmail.com",
    phone: 7896536289,
    city: "Jaipur",
  },
  {
    id: 16,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9087654321,
    city: "Hyderabad",
  },
  {
    id: 18,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    city: "Bangalore",
    status: 0,
  },
  {
    id: 19,
    name: "Raj",
    email: "raj@gmail.com",
    phone: 9812345678,
    city: "Chennai",
  },
  {
    id: 20,
    name: "David",
    email: "david342@gmail.com",
    phone: 7896536289,
    city: "Jaipur",
  },
];
function Table() {
  const [data, setData] = useState(empList);
  const columns = [
    { title: "ID", field: "id", editable: false },
    {
      title: "Name",
      field: "name",
      validate: (rowData) => {
        if (rowData.name === undefined || rowData.name === "") {
          return "Required";
        } else if (rowData.name.length < 3) {
          return "Name should contains atleast 3 chars";
        }
        return true;
      },
    },
    {
      title: "Email",
      field: "email",
      validate: (rowData) => {
        if (rowData.email === undefined || rowData.email === "") {
          return "Required";
        } else if (!rowData.email.includes("@" && ".")) {
          return "Enter valid email address";
        }
        return true;
      },
    },
    {
      title: "Phone Number",
      field: "phone",
      validate: (rowData) => {
        if (rowData.phone === undefined || rowData.phone === "") {
          return "Required";
        } else if (rowData.phone.length < 10 || rowData.phone.length > 10) {
          return "Phone number should contains 10 digits";
        }
        return true;
      },
    },
    {
      title: "City",
      field: "city",
      validate: (rowData) => ({ isValid: true, helperText: "Optional" }),
    },
    {
      title: "Status",
      field: "status",
      lookup: { 0: "Inactive", 1: "Active" },
      validate: (rowData) => {
        if (rowData.status === undefined || rowData.status === "") {
          return "Required";
        }
        return true;
      },
    },
  ];
  const { t, i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = i18n.dir();
  };

  function handleLang(e) {
    changeLanguage(e.target.value);
  }
  return (
    <motion.div
      initial={{ y: -800, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="table-wrapper"
    >
      <div className="table">
        <div>
          <h1 className="table-h1" style={{ fontWeight: "bold" }}>
            {t("Table")}
          </h1>{" "}
        </div>
        <MaterialTable
          title="Employee Data"
          data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) =>
              new Promise((resolve, reject) => {
                const updatedRows = [
                  ...data,
                  { id: Math.floor(Math.random() * 100), ...newRow },
                ];
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowDelete: (selectedRow) =>
              new Promise((resolve, reject) => {
                const index = selectedRow.tableData.id;
                const updatedRows = [...data];
                updatedRows.splice(index, 1);
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id;
                const updatedRows = [...data];
                updatedRows[index] = updatedRow;
                setTimeout(() => {
                  setData(updatedRows);
                  resolve();
                }, 2000);
              }),
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
        />
      </div>
    </motion.div>
  );
}
export default Table;
