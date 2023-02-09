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

  let csv = "";

  useEffect(() => {
    let header = columns?.map((col) => col.Header).join(",");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    csv += header + "\n";

    rows?.forEach((row) => {
      let dataRow = "";
      row.cells.forEach((cell) => {
        dataRow += cell.value + ",";
      });
      csv += dataRow + "\n";
    });

    setCsvData(csv);
  }, [columns, data]);

  return (
    <div className="tablecontainer">
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
      {csvData && (
        <button
          className="download-button"
          onClick={() => {
            const link = document.createElement("a");
            link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(
              csvData
            )}`;
            link.download = "data.csv";
            document.body.appendChild(link);
            link.click();
            link.remove();
          }}
        >
          Download CSV
        </button>
      )}
    </div>
  );
}

export default App;
