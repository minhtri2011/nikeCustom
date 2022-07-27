import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import productApi from "api/productApi";
import { useAppSelector } from "app/hooks";
import TabsColor from "component/admin/Product/TabsColor";
import MultipleSelectCheckmarks from "component/FormField/MultipleSelectCheckmarks";
import { SelectOption } from "component/FormField/validateField/SelectField";
import { ProductData } from "models/products";
import { selectIDUser } from "pages/Login/module/LoginSlice";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { makeStyles } from "tss-react/mui";
import { getToken } from "ultis/getToken";

interface Props {}

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        overflowY: "auto",
      },
    },
    form: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    },
    formContent: {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    btn: {
      backgroundColor: "black !important",
      color: "white !important",
      marginTop: "10px !important",
      padding: "10px !important",
      height: "45px",
      ":disabled": {
        backgroundColor: "grey !important",
      },
    },
    title: {
      color: theme.palette.text.primary,
      padding: "20px 0",
    },
    input: {
      marginBottom: "10px !important",
    },
    img: {
      maxHeight: "250px",
      maxWidth: "100%",
    },
  };
});

const AddProduct = (props: Props) => {
  const { classes } = useStyles();
  const ID = useAppSelector(selectIDUser);
  const [loading, setLoading] = useState(false);
  const [selectValuesMultipleSelectSizes, setSelectValuesMultipleSelectSizes] =
    React.useState<string[]>([]);
  const [selectValuesMultipleSelectColor, setSelectValuesMultipleSelectColor] =
    React.useState<any[]>([]);
  const [data, setData] = useState<ProductData>({
    name: "",
    gender: "",
    typeProduct: "",
    description: "",
    message: "",
    color: 0,
    price: 0,
    img: "",
    sizes: [],
    imgDetails: [
      // {
      //   color: "blue",
      //   imgs: [
      //     {
      //       img: "https://images.viblo.asia/ec82aa6c-db5a-45fa-8d29-85d3c59195e6.png",
      //     },
      //     {
      //       img: "https://images.viblo.asia/ec82aa6c-db5a-45fa-8d29-85d3c59195e6.png",
      //     },
      //     {
      //       img: "https://images.viblo.asia/ec82aa6c-db5a-45fa-8d29-85d3c59195e6.png",
      //     },
      //   ],
      // },
    ],
    userCreated: ID,
    status: 1,
  });
  const listGender: SelectOption[] = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const listTypeProduct: SelectOption[] = [
    { label: "Shoes", value: "shoes" },
    { label: "Clothing", value: "clothing" },
  ];
  const listColor: string[] = [
    "white",
    "blue",
    "green",
    "yellow",
    "orange",
    "pink",
    "gray",
    "red",
    "black",
  ];
  const listSize: string[] = [
    "34",
    "34.5",
    "35",
    "35.5",
    "36",
    "36.5",
    "37",
    "37.5",
    "38",
    "38.5",
    "39",
    "39.5",
    "40",
    "40.5",
    "41",
    "41.5",
    "42",
    "42.5",
    "43",
    "43.5",
    "44",
    "44.5",
    '45'
  ];

  //todo submit form input
  const onSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = getToken();
      const response = await productApi.create(data, token);
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Successful create account",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      setLoading(false);
    }
  };
  const handleChangeState = (key: string | number, e: string | number) => {
    setData({ ...data, [key]: e });
  };
  const handleChangeStateSelect = (
    key: number | string,
    e: number | string
  ) => {
    setData({ ...data, [key]: e });
  };
  const onChangeMultipleSelectSizes = (
    event: SelectChangeEvent<typeof selectValuesMultipleSelectSizes>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectValuesMultipleSelectSizes(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    const copySelectValue = value as string[];
    const newData = copySelectValue.map((item) => {
      return {
        size: item,
      };
    });
    setData({ ...data, sizes: newData });
  };
  const onChangeMultipleSelectColor = (
    event: SelectChangeEvent<typeof selectValuesMultipleSelectSizes>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectValuesMultipleSelectColor(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    const copySelectValue = value as string[];
    const newData = copySelectValue.map((item) => {
      return {
        color: item,
        imgs: [],
      };
    });
    setData({ ...data, imgDetails: newData });
  };

  //render func Login
  return (
    <div className={classes.root}>
      <div className={classes.formContent}>
        <Typography fontWeight="bold" variant="h4" className={classes.title}>
          Create new product
        </Typography>
        <form onSubmit={onSubmitForm}>
          <TextField
            value={data.name}
            className={classes.input}
            label="name"
            variant="outlined"
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeState("name", e.target.value)
            }            
            sx={{'& input':{height:'56px'}}}
          />
          <Grid container spacing={2}>
            <Grid item xs={5}>
              {data.img === "" ? (
                <img
                  className={classes.img}
                  src="https://www.chanchao.com.tw/ctg/images/default.jpg"
                  alt=""
                />
              ) : (
                <img src={data.img} alt="nike" className={classes.img} />
              )}
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth className={classes.input}>
                <InputLabel id="demo-simple-select-label-gender">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.gender}
                  label="Gender"
                  onChange={(e: SelectChangeEvent<string>) =>
                    handleChangeStateSelect("gender", e.target.value)
                  }
                >
                  {listGender.map((item, index) => {
                    return (
                      <MenuItem
                        key={`${item.value}_${index}`}
                        value={item.value}
                      >
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth className={classes.input}>
                <InputLabel id="demo-simple-select-label-type-product">
                  Type product
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label-Type"
                  id="demo-simple-select-Type"
                  value={data.typeProduct}
                  label="Type product"
                  onChange={(e: SelectChangeEvent<string>) =>
                    handleChangeStateSelect("typeProduct", e.target.value)
                  }
                >
                  {listTypeProduct.map((item, index) => {
                    return (
                      <MenuItem
                        key={`${item.value}_${index}`}
                        value={item.value}
                      >
                        {item.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <div className={classes.input}>
                <MultipleSelectCheckmarks
                  handleChange={onChangeMultipleSelectSizes}
                  state={selectValuesMultipleSelectSizes}
                  values={listSize}
                  label="Sizes"
                />
              </div>
              <div className={classes.input}>
                <MultipleSelectCheckmarks
                  handleChange={onChangeMultipleSelectColor}
                  state={selectValuesMultipleSelectColor}
                  values={listColor}
                  label="Color"
                />
              </div>
            </Grid>
          </Grid>
          <TextField
            className={classes.input}
            label="Price"
            value={data.price === 0 || isNaN(data.price) ? "" : data.price}
            type="text"
            variant="outlined"
            fullWidth
            sx={{'& input':{height:'56px'}}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeState(
                "price",
                parseFloat(
                  e.currentTarget.value === "" ? "0" : e.currentTarget.value
                )
              )
            }
          />
          <TextField
            className={classes.input}
            label="Link image"
            variant="outlined"
            fullWidth
            sx={{'& input':{height:'56px'}}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeState("img", e.target.value)
            }
          />
          <TextField
            className={classes.input}
            label="Description"
            value={data.description}
            variant="outlined"
            sx={{'& input':{height:'56px'}}}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeState("description", e.target.value)
            }
          />
          <TextField
            className={classes.input}
            label="Message"
            variant="outlined"
            sx={{'& input':{height:'56px'}}}
            value={data.message}
            fullWidth
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeState("message", e.target.value)
            }
          />
          {data.imgDetails.length > 0 && (
            <TabsColor
              setState={setData}
              state={data}
              values={data.imgDetails}
            />
          )}

          {!loading ? (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.btn}
            >
              Create product 
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.btn}
            >
              <CircularProgress size={20} />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
