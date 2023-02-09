import useColumns from "./components/columns";
import useRows from "./components/rows";
import { useTable } from "react-table";
import "./style/style.css";

function App() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ backgroundColor: "#688dd0", color: "white" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                if (index === row.cells.length - 1) {
                  return (
                    <td {...cell.getCellProps()}>
                      {
                        <img
                          style={{ borderRadius: "50%" }}
                          src={cell.value}
                          alt="Profile of the person"
                        />
                      }
                    </td>
                  );
                } else {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default App;
