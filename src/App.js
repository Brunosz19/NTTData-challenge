import useColumns from "./components/columns";
import useRows from "./components/rows";
import { useTable } from "react-table";
import "./style/style.css";
import { useEffect, useState } from "react";

function App() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data });
  const [csvData, setCsvData] = useState("");

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  useEffect(() => {
    const header = columns?.map(col => col.Header).join(",");
    const body = rows?.map(row => row.cells.map(cell => cell.value).join(",")).join("\n");
    setCsvData(`${header}\n${body}`);
  }, [columns, data, rows]);

  return (
    <div className="tablecontainer">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
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
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <td {...cell.getCellProps()}>
                    {index === row.cells.length - 1 ? (
                      <img
                        style={{ borderRadius: "50%" }}
                        src={cell.value}
                        alt="Profile of the person"
                      />
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {csvData && (
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvData)}`}
          download="data.csv"
          className="download-button"
        >
          Download CSV
        </a>
      )}
    </div>
  );
}

export default App;
