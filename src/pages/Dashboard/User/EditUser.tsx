import { yupResolver } from "@hookform/resolvers/yup";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import userApi from "api/userApi";
import InputField from "component/FormField/validateField/InputField";
import { EditUserAdmin } from "models/user";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { makeStyles } from "tss-react/mui";
import * as yup from "yup";
import { getToken } from "ultis/getToken";
import { AddUserData } from "./AddUser";

type Props = {};

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
    boxLoading: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

//yup validate
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
    email: yup
      .string()
      .required("Please don't leave it blank")
      .email("Incorrect email format"),
  })
  .required();

const EditUser = (props: Props) => {
  const { classes } = useStyles();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<EditUserAdmin>();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const token = getToken();
        const res = await userApi.getUserById(id, token);
        setUser(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (user) {
      reset({
        age: user.age,
        email: user.email,
        name: user.name,
        password: "",
      });
    }
  }, [user]);

  //react hook form
  const { handleSubmit, reset, control } = useForm<AddUserData>({
    resolver: yupResolver(schema),
    defaultValues: {
      age: 0,
      email: "",
      name: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<AddUserData> = async (data) => {
    setLoading(true);
    try {
      const token = getToken()
      const response = await userApi.updateAdmin(data, id,token);
      setLoading(false);
      Swal.fire({
        title: "Success!",
        text: "Successful update account",
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
      console.error(error.response);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {!user ? (
        <Box className={classes.boxLoading}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={classes.root}>
          <div className={classes.formContent}>
            <Typography
              fontWeight="bold"
              variant="h4"
              className={classes.title}
            >
              Update user
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField label="Username" control={control} name="name" />
              <InputField label="Email" control={control} name="email" />
              <InputField label="Age" control={control} name="age" />
              <InputField
                label="New password"
                control={control}
                name="password"
              />

              {!loading ? (
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={classes.btn}
                >
                  Update user
                </Button>
              ) : (
                <Button variant="contained" fullWidth className={classes.btn}>
                  <CircularProgress size={20} />
                </Button>
              )}
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default EditUser;
