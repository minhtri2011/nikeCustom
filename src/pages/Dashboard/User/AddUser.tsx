import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress, Typography } from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import userApi from "api/userApi";
import InputField from "component/FormField/validateField/InputField";
import SelectField, { SelectOption } from "component/FormField/validateField/SelectField";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { makeStyles } from "tss-react/mui";
import { getToken } from "ultis/getToken";
import * as yup from "yup";
//interface
interface Props {}
export interface AddUserData {
  name: string;
  email: string;
  password: string;
  age: number;
  userType: string;
}

//yup
const schema = yup
  .object({
    name: yup.string().required("Please don't leave it blank"),
    age: yup
      .number()
      .typeError("Age must be number")
      .default(0)
      .required("Please don't leave it blank")
      .positive("Age must be positive number")
      .integer("Age must be integer number"),
    userType: yup.string().required("Please don't leave it blank"),
    email: yup
      .string()
      .required("Please don't leave it blank")
      .email("Incorrect email format"),
    password: yup
      .string()
      .required("Please don't leave it blank")
      .min(8, "Please enter more than 8 characters"),
  })
  .required();

//style
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
    input: {
      border: "none",
      backgroundColor: blueGrey[50],
      borderRadius: "5px",
      "& input": {
        padding: "10px 10px",
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
    icons: {
      marginRight: "0px !important",
    },
    errorMessage: {
      fontSize: "10px",
      color: red[600],
    },
    formInput: {
      marginBottom: "10px !important",
    },
    checkBox: {
      "span + span": {
        color: grey[500],
      },
    },
    linkStyle: {
      textDecoration: "none",
      color: grey[500],
      fontWeight: "bold",
    },
    formSelect: {
      margin: "0!important",
      width: "100%",
      "& div": {
        padding: "5px!important",
      },
    },
  };
});

const AddUser = (props: Props) => {
  const { classes } = useStyles();
  //set loading animation for button when signup
  const [loading, setLoading] = useState(false);

  const listTypeUser: Array<SelectOption> = [
    { label: "user", value: "user" },
    { label: "admin", value: "admin" },
  ];

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddUserData>({
    resolver: yupResolver(schema),
    defaultValues: {
      age: 0,
      email: "",
      name: "",
      password: "",
      userType: "",
    },
  });

  //todo submit form input
  const onSubmit: SubmitHandler<AddUserData> = async (data) => {
    setLoading(true);
    const dataDispatch = {
      age: data.age,
      email: data.email,
      name: data.name,
      password: data.password,
      userType: data.userType,
    };
    try {
      const token = getToken();
       await userApi.create(dataDispatch, token);
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Successful create account",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      reset();
    } catch (error: any) {
      Swal.fire({
        title: "Error!",
        text: error.response.data.error,
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      console.error(error.response.data.error);
      setLoading(false);
    }
  };

  //render func Login
  return (
    <div className={classes.root}>
      <div className={classes.formContent}>
        <Typography fontWeight="bold" variant="h4" className={classes.title}>
          Create new user
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField label="Name" control={control} name="name" />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <InputField
                label="Age"
                type="number"
                control={control}
                name="age"
              />
            </Grid>
            <Grid item xs={6}>
              <SelectField
                control={control}
                label="Type user"
                option={listTypeUser}
                name="userType"
              />
            </Grid>
          </Grid>
          <InputField label="Email" control={control} name="email" />
          <InputField label="Password" control={control} name="password" />
          {!loading ? (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={classes.btn}
            >
              Create user
            </Button>
          ) : (
            <Button variant="contained" fullWidth className={classes.btn}>
              <CircularProgress size={20} />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddUser;
