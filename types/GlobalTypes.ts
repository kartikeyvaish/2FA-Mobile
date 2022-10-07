// Children interface
export interface ChildrenProps { children?: React.ReactNode; }

// seperate margin props
export interface SeperateMarginProps {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
    margin?: number;
}

// User Types
export interface UserProps {
    name: string;
    email: string;
}