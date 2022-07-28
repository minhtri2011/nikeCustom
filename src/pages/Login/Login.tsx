import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Typography
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { blueGrey, grey, red } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from "tss-react/mui";
import * as yup from "yup";
import nikeshoes from "../../assest/nikeshoes1.png";
import {
  LoginActions,
  selectIsLoggedIn,
  selectIsLogging,
  selectTypeUserLogging
} from "./module/LoginSlice";

//interface
interface Props {}
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}
interface Inputs {
  email: string;
  password: string;
  checkInfo: boolean;
}

//yup
const schema = yup
  .object({
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
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      boxShadow: "0px 0px 30px -20px black",
      display: "flex",
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
      width: "70%",
    },
    img: {
      background: `url(${nikeshoes})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    input: {
      border: "none",
      backgroundColor: blueGrey[50],
      borderRadius: "5px",
      color: "black !important",
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
    icons: {
      marginRight: "0px !important",
    },
    backIcon: {
      position: "absolute",
      top: "20px",
      left: "20px",
      cursor: "pointer",
      fill: "black !important",
    },
    errorMessage: {
      fontSize: "10px",
      color: red[600],
    },
    formInput: {
      marginBottom: "10px !important",
    },
    linkStyle: {
      textDecoration: "none",
      color: grey[500],
      fontWeight: "bold",
    },
  };
});

const LoginPage = (props: Props) => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();

  //!show message when login failed
  const checkError = useAppSelector((state) => state.LoginReducer.errorMessage);
  useEffect(() => {
    checkError &&
      Swal.fire({
        title: "Error!",
        text: "Please double check your account and password again!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
  }, [checkError]);

  // get selector from slice
  const loading = useAppSelector(selectIsLogging);
  const loginSuccess = useAppSelector(selectIsLoggedIn);
  const userType = useAppSelector(selectTypeUserLogging);

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    dispatch(LoginActions.login(data));

  //framer motion
  const imgVariants = {
    visible: {
      y: "0%",
      transition: {
        duration: 1,
        type: "tween",
        ease: "anticipate",
        times: [0, 0.1, 0.1, 1],
      },
    },
    hidden: { y: "100%" },
    exit: {
      y: "-100%",
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };
  const formVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
    hidden: { y: "-100%" },
    exit: {
      y: "100%",
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

  //todo: show password input
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  //todo naviga
  const navigate = useNavigate();
  useEffect(() => {
    if (loginSuccess) {
      userType === "user" ? navigate("/") : navigate("/dashboard/users");
    }
  }, [loginSuccess, navigate, userType]);

  //render func Login
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid
        variants={imgVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        component={motion.div}
        item
        lg={8}
        md={7}
        sm={5}
        className={classes.img}
      ></Grid>
      <Grid
        variants={formVariants}
        initial="hidden"
        animate="visible"
        component={motion.div}
        exit="exit"
        item
        className={classes.form}
        lg={4}
        md={5}
        sm={7}
        xs={12}
      >
        <Link to="/">
          <ArrowBackIosIcon className={classes.backIcon} />
        </Link>
        <div className={classes.formContent}>
          <Typography fontWeight="bold" variant="h4">
            Welcome back
          </Typography>
          <Typography variant="inherit" mb={4} color={grey[500]}>
            Welcome back! Please enter your details.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel shrink>Email</InputLabel>
            <FormControl fullWidth className={classes.formInput}>
              <InputBase
                className={classes.input}
                autoFocus
                fullWidth
                sx={{'& input':{height:'40px'}}}
                inputProps={{
                  // autoComplete: "new-password",
                  autofill:'off',
                  form: {
                    autoComplete: "off",
                  },
                }}
                {...register("email")}
              />
              {errors.email && (
                <p className={classes.errorMessage}>{errors.email?.message}</p>
              )}
            </FormControl>
            <InputLabel shrink>Password</InputLabel>
            <FormControl fullWidth className={classes.formInput}>
              <InputBase
                className={classes.input}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                sx={{'& input':{height:'40px'}}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      className={classes.icons}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                {...register("password")}
              />
              {errors.password && (
                <p className={classes.errorMessage}>
                  {errors.password?.message}
                </p>
              )}
            </FormControl>
            {/* <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              {...register("checkInfo")}
            /> */}
            {!loading ? (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={classes.btn}
              >
                Login
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={classes.btn}
                disabled
              >
                <CircularProgress size={20} />
              </Button>
            )}
          </form>
          <Typography
            variant="inherit"
            color={grey[500]}
            mt={2}
            align="center"
            mb={3}
          >
            Don't have account?
            <Link to="/signUp" className={classes.linkStyle}>
              Sign up for free
            </Link>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
