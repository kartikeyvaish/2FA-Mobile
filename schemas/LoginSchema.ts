// Packages Imports
import * as Yup from "yup";

// validate schema for login form
const ValidationSchema = () => {
    return Yup.object().shape({
        email: Yup.string().email().required("Email is required").label("Email"),
        password: Yup.string().required("Password is required"),
    });
};

// initial values for login form
const InitialValues = {
    email: "",
    password: "",
};

// exports
export default {
    ValidationSchema,
    InitialValues,
};