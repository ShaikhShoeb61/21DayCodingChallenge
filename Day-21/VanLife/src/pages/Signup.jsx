import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { signUp } from "../Redux/Slices/Thunks/authThunk";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const Signup = () => {
  const [signupButtonText, setSignupButtonText] = useState("Sign up");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = (message, type) => {
    toast(message, {
      position: "top-center",
      autoClose: type === "success" ? 2000 : 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: type === "success" ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="h-main-height px-7 flex flex-col w-full justify-center items-center gap-12">
        <h1 className="font-bold text-[2rem]">Create your account</h1>
        <div className="w-full flex flex-col gap-5">
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              try {
                const { email, password } = values;
                await dispatch(signUp({ email, password }));
                notify("Account created succefully", "succes");
                navigate("/login");
              } catch (error) {
                const errorMessage =
                  "Error creating account. Please try again.";
                notify(errorMessage, "error");
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="  w-full flex flex-col rounded-sm gap-[1.38rem]">
                <div className="flex flex-col border-gray-200 border-[1px]">
                  <Field
                    className="border-gray-200 border-b-[1px] drop-shadow-sm outline-none  px-2 py-3 placeholder:font-normal placeholder:text-base "
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                  <Field
                    className="border-gray-200 border-b-[1px] drop-shadow-sm outline-none  px-2 py-3 placeholder:font-normal placeholder:text-base "
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                  <Field
                    className="border-gray-200 border-b-[1px] drop-shadow-sm outline-none  px-2 py-3 placeholder:font-normal placeholder:text-base "
                    name="confirmpassword"
                    placeholder="Confirm password"
                  />
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <div>{errors.confirmpassword}</div>
                  ) : null}
                </div>
                <ButtonComponent text={signupButtonText} type="submit" />
              </Form>
            )}
          </Formik>
        </div>
        <div className="flex gap-1">
          <span className="text-darkgrey font-medium">
            Already have account?
          </span>
          <Link to="/login">
            <span className="text-primarybutton font-semibold">Login</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
