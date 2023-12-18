import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { logIn } from "../Redux/Slices/Thunks/authThunk";
import { useDispatch, useSelector } from "react-redux";

const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const [loginButtonText, setLoginButtonText] = useState("Login");
  const { user, error, loading } = useSelector((state) => state.auth);
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

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        notify("Login successfully!", "success");
      }

      if (user) {
        navigate("/vans");
      }

      if (error) {
        if (error === "auth/invalid-credential") {
          await notify(
            "User not found. Please check your credentials.",
            "error"
          );
        } else {
          await notify("Error during login. Please try again.", "error");
        }
      }
    };

    fetchData();
  }, [user, error, loading, dispatch, navigate]);

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
      <div className="min-h-[calc(100vh-148px)] flex justify-center items-center">
        <div className=" px-7 flex flex-col w-full justify-center items-center gap-12">
          <h1 className="font-bold text-[2rem]">Create your account</h1>
          <div className="w-full flex flex-col gap-5">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninSchema}
              onSubmit={async (values) => {
                const { email, password } = values;
                await dispatch(logIn({ email, password }));
              }}
            >
              {({ errors, touched }) => (
                <Form className=" w-full flex flex-col rounded-sm gap-[1.38rem]">
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
                  </div>

                  <ButtonComponent text={loginButtonText} type="submit" />
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex gap-1">
            <span className="text-darkgrey font-medium">
              Don’t have an account?
            </span>
            <Link to="/signup">
              <span className="text-primarybutton font-semibold">
                {" "}
                Create one now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
