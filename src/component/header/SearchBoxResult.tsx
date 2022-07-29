import { CircularProgress, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useAppSelector } from "app/hooks";
import {
  selectDataProductReducer,
  selectLoadingDataProductReducer,
} from "pages/Dashboard/Product/module/ProductSlice";

import { Product } from "models/products";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
interface Props {
  active: boolean;
  search: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#fff",
    minHeight: "300px",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    zIndex: 4,
    transform: "scaleY(0)",
    padding: "46px 48px",
    transformOrigin: "top",
    transition: "transform .2s ease-in-out",
    overflowY: "auto",
    [theme.breakpoints.down("md")]: {
      height: "calc(100vh - 60px)",
    },
    "&.active": {
      transform: "scaleY(1)",
    },
  },
  titlePopular: {
    color: "#757575",
    paddingBottom: "16px",
    fontSize: "16px",
  },
  popularTerms: {
    margin: "0 auto",
    maxWidth: "656px",
  },
  listTerms: {
    listStyle: "none",
    "& li": {
      marginBottom: "12px",
      fontSize: "20px",
      cursor: "pointer",
      "&:hover": {
        color: "#757575",
      },
    },
  },
  boxTerms: {
    paddingRight: "20px",
  },
  suggestionsTags: {
    fontSize: "15px",
    color: "#757575",
    paddingBottom: "20px",
  },
  productList: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  productCard: {
    textDecoration: "none",
    cursor: "pointer",
    width: "calc( (100% - (8px * 3)) / 4)",
    [theme.breakpoints.down("md")]: {
      width: "calc((100% - 8px) /2)",
    },
    "& img": {
      aspectRatio: "1/1",
      width: "100%",
    },
  },
  productName: {
    fontSize: "14px",
    color: "#111",
    fontWeight: "normal",
  },
  productPrice: {
    fontSize: "14px",
    color: "#111",
    paddingTop: "12px",
  },
  productType: {
    fontSize: "14px",
    color: "#757575",
    textTransform: "capitalize",
  },
  alertMessage: {
    color: "#757575",
    fontSize: "20px",
    textAlign: "center",
    marginTop: "6px",
    fontWeight: "normal",
  },
}));

const SearchBoxResult = (props: Props) => {
  const { active, search } = props;
  const classes = useStyles();
  const loading = useAppSelector(selectLoadingDataProductReducer);
  const products = useAppSelector(selectDataProductReducer);
  const data = products
    .filter((product: Product) => product?.name.toLowerCase().includes(search))
    .slice(0, 4);
  const searchProductsData = [...data];
  const renderListNames = () => {
    return searchProductsData.map((product: Product, index: number) => {
      return (
        <div className={classes.suggestionsTags} key={index}>
          <Highlighter
            key={product._id}
            highlightClassName="uppercase"
            searchWords={search.split(" ")}
            autoEscape={true}
            textToHighlight={product.name}
          />
        </div>
      );
    });
  };
  return (
    <div className={`${classes.root}${active ? " active" : ""}`}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {searchProductsData.length > 0 && searchProductsData ? (
            !search ? (
              <div className={classes.popularTerms}>
                <p className={classes.titlePopular}>Popular Search Terms</p>
                <ul className={classes.listTerms}>
                  <li>Air Force 1</li>
                  <li>Jordan</li>
                  <li>Air Max</li>
                  <li>Blazer</li>
                </ul>
              </div>
            ) : (
              <Grid container>
                <Grid item xs={12} md={2}>
                  <div className={classes.boxTerms}>
                    <p className={classes.titlePopular}>Top Suggestions</p>
                    {renderListNames()}
                  </div>
                </Grid>
                <Grid item xs={12} md={10} className={classes.productList}>
                  {searchProductsData.map((product: Product, index: number) => {
                    return (
                      <Link
                        to={`/detail/${product._id}`}
                        key={index}
                        className={classes.productCard}
                      >
                        <img src={product.img} alt={product.name} />
                        <h4 className={classes.productName}>{product.name}</h4>
                        <p className={classes.productType}>
                          {product.gender} {product.typeProduct}
                        </p>
                        <p className={classes.productPrice}>
                          ₫{product.price.toLocaleString()}
                        </p>
                      </Link>
                    );
                  })}
                </Grid>
              </Grid>
            )
          ) : (
            <h4 className={classes.alertMessage}>
              There were no results for your search
            </h4>
          )}
        </>
      )}
    </div>
  );
};

export default SearchBoxResult;
