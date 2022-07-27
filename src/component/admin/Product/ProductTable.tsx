import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import {
  Button,
  CircularProgress,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import productApi from "api/productApi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Product } from "models/products";

import {
  ProductActions,
  selectDataProductReducer,
} from "pages/Dashboard/Product/module/ProductSlice";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { getToken } from "ultis/getToken";
import ProductRow from "./ProductRow";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
interface UserProps {}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: "black",
    "& th": {
      color: theme.palette.common.white,
    },
  },
  box: {
    width: "100% !important",
  },
  linkBtn: {
    textDecoration: "none !important",
    marginLeft: "10px !important",
  },
  addBtn: {
    backgroundColor: `${theme.palette.action.active} !important`,
    color: `${theme.palette.common.white} !important`,
    padding: "16px 30px !important",
  },
  toolBox: {
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "bold !important",
    textDecoration: "none !important",
    paddingBottom: "10px",
  },
  boxLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function ProductTable(props: UserProps) {
  const dispatch = useAppDispatch();
  const { classes } = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, changeSearch] = useState<string>("");
  const data = useAppSelector(selectDataProductReducer);
  const loading = useAppSelector((state) => state.ProductReducer.loading);

  useEffect(() => {
    dispatch(ProductActions.fetchProducts());
  }, []);

  const handleChangeSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearch(e.currentTarget.value);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      {loading ? (
        <Box className={classes.boxLoading}>
          <CircularProgress />
        </Box>
      ) : (
        <Box className={classes.box}>
          <div className={classes.toolBox}>
            <TextField
              id="outlined-basic"
              label="Search product"
              variant="outlined"
              onChange={handleChangeSearchUser}
              sx={{'& input':{height:'56px'}}}
            />
            <Link to="/dashboard/products/add" className={classes.linkBtn}>
              <Button className={classes.addBtn} variant="contained">
                <Typography variant="body1">Add</Typography>
              </Button>
            </Link>
          </div>

          <TableContainer component={Paper} elevation={3}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell> Name </TableCell>
                  <TableCell> Image</TableCell>
                  <TableCell> Type</TableCell>
                  <TableCell> gender </TableCell>
                  <TableCell> Price </TableCell>
                  <TableCell> Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {(rowsPerPage > 0
                  ? data
                      //?   make search name user with filter
                      ?.filter((item: Product) =>
                        item.name.toLowerCase().match(search)
                      )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                  : data
                ).map((row: Product) => (
                  <ProductRow key={row._id} row={row} />
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        "aria-label": "rows per page",
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Box>
      )}
    </React.Fragment>
  );
}
