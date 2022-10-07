// Packages imports
import { StyleProp, TextStyle } from "react-native";

// Local imports
import { ChildrenProps, SeperateMarginProps } from "./GlobalTypes";
import { ReactNativePaperButtonProps, ReactNativePaperTextInputProps } from "./PaperTypes";

// interface for AppTextInput
export type AppTextInputProps = Omit<ReactNativePaperTextInputProps, "error"> & {
    error?: string;
} & SeperateMarginProps;

// type for AppButton
export type AppButtonProps = {
    title?: string;
    children?: any;
    height?: number;
    roundness?: number;
    backgroundColor?: string;
    color?: string;
    elevation?: number;
} & Omit<ReactNativePaperButtonProps, "children"> &
    ChildrenProps &
    SeperateMarginProps;

// interface for AppText
export interface AppTextProps extends SeperateMarginProps {
    text: string;
    style?: StyleProp<TextStyle>;
}

// interface for AppForm
export interface AppFormProps {
    initialValues: {};
    onSubmit: (values: {}) => void;
    validationSchema: any;
    children?: any;
}

// interface for AppFormField
export interface AppFormFieldProps extends AppTextInputProps {
    title: string;
    customError?: string;
}