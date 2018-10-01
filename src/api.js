import axios from "axios";

export default {
    user: {
        login: (credentials) => axios.post("/auth/login",credentials).then(res => res.data.user),
        resetPasswordRequest: email => axios.post("/auth/reset_password_request",email).then(res => res.data),
        validateToken: token => axios.post("/auth/validate_token",{token}).then(res => res.data),
        changePassword: data => axios.post("/auth/change_password",data).then(res => res.data)
    },
    beneficiary:{
        add: (beneficiary) => axios.post("/bd/beneficiary/create",beneficiary).then(res=>res.data),
        update: (beneficiary) => axios.post("/bd/beneficiary/update",beneficiary).then(res=>res.data),
        search: (query) => axios.post(`/bd/beneficiary/searchByName?q=${query}`).then(res=>res.data)
    },
    benefitref: {
        add: (benefitref) => axios.post("/bd/benefitref/create",benefitref).then(res => res.data),
        update: (benefitref) => axios.post("/bd/benefitref/update",benefitref).then(res => res.data),
        getAll: () => axios.get("/bd/benefitref/findAll").then(res => res.data),
        search: (query) => axios.get(`/bd/benefitref/findByBenefitGroup/search?q=${query}`).then(res => res.data)
    },
    client_type: {
        add: (clienttype) => axios.post("/bd/clienttype/create",clienttype).then(res => res.data),
        update: (clienttype) => axios.post("/bd/clienttype/update",clienttype).then(res => res.data),
        getAll: () => axios.get("/bd/clienttype/findall").then(res => res.data),
        search: (query) => axios.get(`/bd/client/search?q=${query}`).then(res => res.data)
    },
    client: {
        add: (client) => axios.post("/bd/client/create",client).then(res => res.data),
        update: (client) => axios.post("/bd/client/update",client).then(res => res.data),
        getAll: () => axios.get("/bd/client/getAll").then(res => res.data),
        search: (query) => axios.get(`/bd/client/search?q=${query}`).then(res => res.data)
    },
    policy:{
        add: (policy) => axios.post("/bd/policy/create",policy).then(res => res.data),
        update: (policy) => axios.post("/bd/policy/update",policy).then(res => res.data),
        getAll: (page,size) => axios.get(`/bd/policy/findAll?page=${page}&size=${size}`).then(res => res.data),
        search: (policyId) => axios.post("/bd/policy/findByPolicy",policyId).then(res => res.data)
    },
    product: {
        add: (product) => axios.post("/bd/product/create",product).then(res => res.data),
        update: (product) => axios.post("/bd/product/update",product).then(res => res.data),
        getAll: () => axios.get("/bd/product/findAll").then(res => res.data),
        search: (query) => axios.get(`/bd/product/search?q=${query}`).then(res => res.data)
    },
    setting: {
        add: (setting) => axios.post("/bd/attribute/create",setting).then(res => res.data),
        update: (setting) => axios.post("/bd/attribute/update",setting).then(res => res.data),
        getAll: () => axios.get("/bd/attribute/findAll").then(res => res.data),
        search: (productId) => axios.get("/bd/attribute/findByProduct",productId).then(res => res.data)
    }
}