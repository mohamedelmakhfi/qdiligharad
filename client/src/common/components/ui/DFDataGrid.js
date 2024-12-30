import {
  GridActionsCellItem,
  useGridApiContext,
  useGridApiEventHandler,
} from "@mui/x-data-grid";
import * as React from "react";
import TableCustomized from "./TableCustomized";
import DFIcon from "./DFIcon";

export default function DFDataGrid({
  columns = [],
  actions,
  onRowEnter,
  onRowLeave,
  onRowsSelectionHandler,
  ...props
}) {
  const functionActions = actions?.map((action) => action.onClick);

  const tableCols = React.useMemo(
    () => [
      ...columns,
      {
        field: "actions",
        headerName: "",
        sortable: false,
        minWidth: 20,
        renderCell: (params) => (
          <CustomButtonElement actions={actions} params={params} />
        ),
      },
    ],
    [columns, functionActions]
  );

  return (
    <TableCustomized
      onRowsSelectionHandler={onRowsSelectionHandler}
      columns={tableCols}
      {...props}
    />
  );
}

const CustomButtonElement = ({ actions, params }) => {
  const [rowHovered, setRowHovered] = React.useState(false);
  const [cellHeight, setCellHeight] = React.useState(0);
  const rowId = params.id;
  const apiRef = useGridApiContext();

  const calculateCellHeight = () => {
    const rowElement = apiRef.current.getRowElement(rowId);
    setCellHeight(rowElement.style.maxHeight);
  };

  React.useEffect(() => {
    if (apiRef.current.getRowElement(rowId).matches(":hover"))
      setRowHovered(true);
    calculateCellHeight();
  }, []);

  const handleRowEnter = ({ id }) => id === rowId && setRowHovered(true);
  const handleRowLeave = ({ id }) => id === rowId && setRowHovered(false);

  useGridApiEventHandler(apiRef, "rowMouseEnter", handleRowEnter);
  useGridApiEventHandler(apiRef, "rowMouseLeave", handleRowLeave);

  return (
    <div
      style={{
        display: rowHovered ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "25px",
        height: cellHeight,
        backgroundColor: "#e8e8e8",
      }}
    >
      {actions
        ?.filter((action) => !action.isHidden?.(params?.row))
        .map((action, index) => (
          <GridActionsCellItem
            {...action}
            icon={<DFIcon icon={action.icon} />}
            key={index}
            label={action.label}
            onClick={(event) => {
              event.stopPropagation();
              action.onClick?.(params?.row);
            }}
            sx={{
              "&:hover": {
                backgroundColor: "#CCC8C3",
              },
              ...action.sx,
            }}
          />
        ))}
    </div>
  );
};
