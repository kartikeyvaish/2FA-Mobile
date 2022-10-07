// Packages imports
import { ApiResponse } from "apisauce";

// Local imports
import apiClient from "./APIClient";
import { EmailLoginOTPProps, RegisterOTPProps, VerifyLoginOTPProps } from "../types/APITypes";

// Function to perform API call to send Email Login OTP
export async function SendLoginEmailOTP(body: EmailLoginOTPProps) {
    try {
        return await apiClient.post<ApiResponse<any>>("/auth/send-login-verify-otp", body)
    } catch (error) {
        return { ok: false }
    }
}

// function to perform API call to verify login otp that has been sent
export async function VerifyLoginOTP(body: VerifyLoginOTPProps) {
    try {
        return await apiClient.post<ApiResponse<any>>("/auth/login", body)
    } catch (error) {
        return { ok: false }
    }
}

// function to perform API call to send register otp
export async function SendRegisterOTP(body: RegisterOTPProps) {
    try {
        return await apiClient.post<ApiResponse<any>>("/auth/send-email-verify-otp", body)
    } catch (error) {
        return { ok: false }
    }
}

// function to perform API call to verify register otp
export async function VerifyRegisterOTP(body: VerifyLoginOTPProps) {
    try {
        return await apiClient.post<ApiResponse<any>>("/auth/register", body)
    } catch (error) {
        return { ok: false }
    }
}