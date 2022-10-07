// Packages Imports
import * as Yup from "yup";

// validate schema for register form
const ValidationSchema = () => {
    return Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").label("Email"),
        password: Yup.string().required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be less than 20 characters"),
        confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
    });
};

// initial values for register form
const InitialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

// exports
export default {
    ValidationSchema,
    InitialValues,
};