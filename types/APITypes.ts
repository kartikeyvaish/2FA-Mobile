// interface for sending login otp body
export interface EmailLoginOTPProps {
    email: string;
    password: string
}

// interface for verify login otp body
export interface VerifyLoginOTPProps {
    otp_id: string,
    otp: string
}

// interface for sending register otp body
export interface RegisterOTPProps {
    name: string,
    email: string,
    password: string,
    confirm_password?: string
}