import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const useLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/\d/, "Must contain at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one symbol")
      .required("Password is required"),
  });

  const fakeApiCall = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@gmail.com" && password === "Test@123") {
          resolve({ success: true, message: "Login successfully" });
        } else {
          reject({ success: false, message: "Invalid email or password" });
        }
      }, 1500);
    });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
        console.log('enters')
      try {
        const res = await fakeApiCall(values.email, values.password);
        console.log(res)
        if (res.success) {
          navigate("/home");
        } else {
          setError(res.message);
        }
      } catch (error) {
        console.log({ error });
         setError(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleUserEmail = (e) => {
    formik.setFieldValue("email", e.target.value);
  };
  const handlePassword = (e) => {
    formik.setFieldValue("password", e.target.value);
  };
  console.log("formik valies===", formik.errors,error);  
  return { formik, error, handleUserEmail, handlePassword };
};
export default useLogin;
