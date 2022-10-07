// Packages imports 
import { create } from "apisauce";

// Local imports
import configs from "../config/configs";

// Creating the Auth API Client
const apiClient = create({
    baseURL: configs.baseUrl + configs.apiVersion,
    timeout: 15000,
});

export default apiClient;