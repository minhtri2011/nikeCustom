import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  OderActions,
  selectorOderData,
  selectorOderLoading,
} from "./module/OderSlice";
import { oder, productsOder } from "models/oder";
import { CircularProgress } from "@mui/material";
import { Theme } from "@mui/system";
import { makeStyles } from "@mui/styles";

interface RowProps {
  row: oder;
}

const useStyles = makeStyles((theme: Theme) => ({
  boxLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Row(props: RowProps): JSX.Element {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{row.userOrder}</TableCell>
        <TableCell align="right">{row.createdAt}</TableCell>
        <TableCell align="right">{row.updatedAt}</TableCell>
        <TableCell align="right">
          {row.isPayed ? (
            <Typography color="green">Paypal</Typography>
          ) : (
            <Typography color="red">No</Typography>
          )}
        </TableCell>
        {/* <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell align="right">Color</TableCell>
                    <TableCell align="right">Size</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product: productsOder) => (
                    <TableRow key={product._id}>
                      <TableCell component="th" scope="row">
                        <Typography>{product.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <img
                          src={product.img}
                          width="50px"
                          height="50px"
                          alt="nike"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{product.color}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{product.size}</Typography>
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{product.quantity}</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography>{product.price}</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Oder() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(OderActions.fetchOder());
  }, [dispatch]);

  const data: Array<oder> = useAppSelector(selectorOderData);
  const loading: boolean = useAppSelector(selectorOderLoading);

  return (
    <React.Fragment>
      {loading ? (
        <Box className={classes.boxLoading}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>User oder</TableCell>
                <TableCell align="right">Created at</TableCell>
                <TableCell align="right">Updated at</TableCell>
                <TableCell align="right">Payment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: oder) => {
                return <Row key={row._id} row={row} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
}
