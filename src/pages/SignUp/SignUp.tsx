import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  Typography,
} from "@mui/material";
import { blueGrey, grey, red } from "@mui/material/colors";
import userApi from "api/userApi";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { makeStyles } from "tss-react/mui";
import * as yup from "yup";
import nikeshoes from "../../assest/nikeimg.png";
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
  name: string;
  age: number;
  password: string;
  checkInfo: boolean;
}
export interface SignUpData {
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
  };
});

const SignUpPage = (props: Props) => {
  const { classes } = useStyles();

  //todo: show password input
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
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

  //set loading animation for button when signup
  const [loading, setLoading] = useState(false);

  //check agree checkbox
  const [agree, setAgree] = useState(false);

  //react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  //todo submit form input
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const dataDispatch = {
      age: data.age,
      email: data.email,
      name: data.name,
      password: data.password,
      userType: "user",
    };
    try {
      const response = await userApi.signUp(dataDispatch);
      console.log(response);
      setLoading(false);
      setValues({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false,
      });
      Swal.fire({
        title: "Success!",
        text: "Successful account registration",
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

  //framer motion
  const imgVariants = {
    visible: {
      x: "0%",
      transition: {
        duration: 1,
        type: "tween",
        ease: "anticipate",
        times: [0, 0.1, 0.1, 1],
      },
    },
    hidden: { x: "-100%" },
    exit: {
      y: "100%",
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
      y: "-100%",
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

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
          <Typography variant="caption" component="p" mt={2}>
            Start for free
          </Typography>
          <Typography fontWeight="bold" variant="h4">
            Sign up to Nike
          </Typography>
          <Typography variant="inherit" mb={4} color={grey[500]}>
            Welcome back! Please enter your details.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel shrink>Name</InputLabel>
            <FormControl fullWidth className={classes.formInput}>
              <InputBase
                sx={{'& input':{height:'40px'}}}
                className={classes.input}
                autoFocus
                fullWidth
                {...register("name")}
              />
              {errors.name && (
                <p className={classes.errorMessage}>{errors.name?.message}</p>
              )}
            </FormControl>
            <InputLabel shrink>Age</InputLabel>
            <FormControl fullWidth className={classes.formInput}>
              <InputBase
                sx={{'& input':{height:'40px'}}}
                className={classes.input}
                fullWidth
                type="number"
                {...register("age")}
              />
              {errors.age && (
                <p className={classes.errorMessage}>{errors.age?.message}</p>
              )}
            </FormControl>
            <InputLabel shrink>Email</InputLabel>
            <FormControl fullWidth className={classes.formInput}>
              <InputBase
                sx={{'& input':{height:'40px'}}}
                className={classes.input}
                fullWidth
                {...register("email")}
                inputProps={{
                  autoComplete: "new-password",
                  form: {
                    autoComplete: "off",
                  },
                }}
              />
              {errors.email && (
                <p className={classes.errorMessage}>{errors.email?.message}</p>
              )}
            </FormControl>
            <InputLabel shrink>Password</InputLabel>
            <FormControl fullWidth className={classes.formInput}>
              <InputBase
                sx={{'& input':{height:'40px'}}}
                className={classes.input}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
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
                onChange={handleChange("password")}
                autoComplete="new-password"
              />
              {errors.password && (
                <p className={classes.errorMessage}>
                  {errors.password?.message}
                </p>
              )}
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              className={classes.checkBox}
              value={agree}
              label="I agree with Terms and Privacy"
              onChange={() => setAgree((v) => !v)}
            />
            {!loading ? (
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={classes.btn}
                disabled={!agree}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                variant="contained"
                fullWidth
                className={classes.btn}
                disabled={!agree}
              >
                <CircularProgress size={20} />
              </Button>
            )}
            <Typography
              variant="inherit"
              color={grey[500]}
              mt={2}
              mb={3}
              align="center"
            >
              Already have account?{" "}
              <Link to="/login" className={classes.linkStyle}>
                Log in
              </Link>
            </Typography>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
