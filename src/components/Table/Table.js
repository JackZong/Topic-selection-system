import React from "react";
import {
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  TableFooter
} from "material-ui";

import PropTypes from "prop-types";

import Style from "./table.less";

function CustomTable({ ...props }) {
  const { tableHead, tableData, tableHeaderColor, page, handleChangePage, handleChangeRowsPerPage, actions } = props;
  console.log(actions)
  return (
    <div className={Style.tableResponsive}>
      <Table className={Style.table}>
        {tableHead !== undefined ? (
          <TableHead className={Style[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={Style.tableCell + " " + Style.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={Style.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
               colSpan={3}
               count={page.count}
               rowsPerPage={page.page_limit}
               page={page.page}
               rowsPerPageOptions={[10,20,30,40]}
               onChangePage={handleChangePage}
               onChangeRowsPerPage={handleChangeRowsPerPage}
             />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default CustomTable;
