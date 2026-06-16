export const userDb =[
    
    {id:1, username:"superadmin", password:123456},
    {id:2, username:"Nova", password:"keytomyphone"},
    {id:3, username:"kabira", password:"finekitchen"},
    {id:4, username:"tochukwu", password:"user2password"}

];

export const initialClients = [
    {id:1, name:"Acme Corporation", email:"acme@example.com", company:"Acme Corporation", phone:"123-456-7890"},
    {id:2, name:"Globex Inc.", email:"globex@example.com", company:"Globex Inc.", phone:"098-765-4321"}
];

export const initialInvoices = [
    {id:'101', clientId:1, description:"Website Redesign", amount:5000, dueDate:"2024-07-15", isPaid:true},
    {id:'102', clientId:2, description:"Consulting Fee", amount:3000, dueDate:"2024-08-01", isPaid:false},
    {id:'103', clientId:3, description:"Product Sale", amount:4500, dueDate:"2024-07-20", isPaid:true},
    {id:'104', clientId:4, description:"Maintenance Work", amount:2000, dueDate:"2024-08-10", isPaid:false}
]

 export const formatMoney = (amt) => { 
    return new Intl.NumberFormat("en-uk", { 
        style: "currency", 
        currency: "USD" }).format(amt);
    }