Full-Stack-Inventory-Management-System(IMS)  
├── backend(Node.js)   Client(Post/api)->Routes -> Controllers -> Services -> Model -> MongoDB
│   ├── src/
│   │   ├── config/                                     # Database connection, Environment config 
│   │   │   ├── db.js
│   │   │   └── index.js
│   │   │
│   │   ├── models/                                     # Mongoose schemas 
│   │   │   ├── User.js                              
│   │   │   ├── Category.js
│   │   │   ├── Supplier.js                      
│   │   │   ├── Product.js
│   │   │   ├── sale.js        
│   │   │   ├── SaleItem.js                          
│   │   │   ├── Purchase.js
│   │   │   ├── PurchaseItem.js
│   │   │   ├── StockMovement.js
│   │   │   ├── Log.js
│   │   │   ├── Settings.js
│   │   │   └── index.js
│   │   ├── services/                                    # Business logic layer , Keeps controller clean     
│   │   │   ├── userService.js              
│   │   │   ├── productService.js    
│   │   │   ├── inventoryService.js
│   │   │   ├── salesService.js 
│   │   │   ├── purchaseService.js
│   │   │   ├── stockService.js
│   │   │   └── logService.js 
│   │   ├── controllers/                                 # Handle HTTP Request & Reponse
│   │   │   ├── usersController.js      
│   │   │   ├── categoryController.js        
│   │   │   ├── supplierController.js
│   │   │   ├── productController.js
│   │   │   ├── saleController.js
│   │   │   ├── purchaseController.js
│   │   │   ├── stockController.js
│   │   │   ├── logController.js
│   │   │   └── settingscontroller.js 
│   │   ├── routes/                                      # API Endpoint
│   │   │   ├── index.js              
│   │   │   ├── userRoutes.js         
│   │   │   ├── categoryRoutes.js         
│   │   │   ├── supplierRoutes.js         
│   │   │   ├── productRoutes.js         
│   │   │   ├── salesRoutes.js         
│   │   │   ├── purchaseRoute.js
│   │   │   ├── stockRoutes.js
│   │   │   ├── logRoutes.js         
│   │   │   └── settingRoutes.js 
│   │   ├── middlewares/                                 # Authentication(JWT) , Role-based access , Error handling / Authorization
│   │   │   ├── authMiddleware.js              
│   │   │   ├── roleMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   ├── utils/                                       # Helper Utilities
│   │   │   ├── generateToken.js
│   │   │   ├── hashPassword.js
│   │   │   └── logger.js            
│   │   └── validations/                                 # Request validation
│   │       ├── productValidation.js
│   │       ├── userValidation.js
│   │       └── orderValidation.js  
│   │                         
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── README.md
│   
├── frontend/ (React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── src/
│   │   ├── api/                                               # API communication layer (Axios)
│   │   │   ├── axiosClient.js  
│   │   │   ├── userApi.js           
│   │   │   ├── productApi.js
│   │   │   ├── categoryApi.js
│   │   │   ├── supplierApi.js
│   │   │   ├── salesApi.js
│   │   │   ├── purchaseApi.js
│   │   │   ├── stockApi.js
│   │   │   ├── logApi.js
│   │   │   └── settingsApi.js
│   │   ├── services/                                          # All backend API calls
│   │   │   ├── authService.js    
│   │   │   ├── productService.js               
│   │   │   ├── salesService.js
│   │   │   └── purchaseService.js
│   │   │
│   │   ├── pages/                                             # Route-level pages (feature grouped)
│   │   │   ├── Dashboard/
│   │   │   │   └── Layout.jsx  
│   │   │   ├── Products/
│   │   │   │   ├── ProductList.jsx                              
│   │   │   │   ├── ProductForm.jsx                             
│   │   │   │   └── ProductDetails.jsx  
│   │   │   ├── Categories/
│   │   │   │   └── CategoryPage.jsx     
│   │   │   ├── Suppliers/
│   │   │   │   └── SupplierPage.jsx 
│   │   │   ├── Sales/
│   │   │   │   ├── SalesPage.jsx                             
│   │   │   │   └── SaleDetails.jsx
│   │   │   ├── Purchases/
│   │   │   │   └── PurchasePage.jsx
│   │   │   ├── Inventory/
│   │   │   │   └── InventoryPage.jsx 
│   │   │   ├── Logs/
│   │   │   │   └── LogsPage.jsx
│   │   │   ├── Setting/
│   │   │   │   └── SettingsPage.jsx
│   │   │   └── Auth/
│   │   │       ├── Login.jsx
│   │   │       └── Register.jsx
│   │   ├── components/                                         # Reusable UI & composed components      
│   │   │   ├── layout/                                                              
│   │   │   │   ├── Navber.jsx                                    
│   │   │   │   ├── Sidebar.jsx                                
│   │   │   │   └── Layout.jsx                           
│   │   │   ├── commons/ 
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Loader.jsx
│   │   │   ├── charts/ 
│   │   │   │   ├── SaleChart.jsx                             # Generic Bar Chart
│   │   │   │   └── InventoryChart.jsx
│   │   │   └── styles/
│   │   │       └── globals.css
│   │   │      
│   │   ├── store/                                           # Global state management (auth, user data)
│   │   │   ├── index.js
│   │   │   ├── authSlice.js
│   │   │   ├── productSlice.js
│   │   │   ├── saleSlice.js
│   │   │   └── inventorySlice.js
│   │   ├── hooks/                                             # Custom reusable logic
│   │   │   ├── useAuth.js
│   │   │   ├── useProduct.js
│   │   │   └── useSales.js
│   │   ├── routes/                                            # React Router cofiguration
│   │   │   ├── AppRoutes.jsx
│   │   │   └── PrivateRoute.js
│   │   ├── utils/                                             # Helper function (formatting validation)
│   │   │   ├── formatCurrency.js
│   │   │   ├── formatDate.js
│   │   │   └── constants.js
│   │   ├── App.jsx                       
│   │   └── main.jsx
│   └──                   
├── .env                                        
├── requirements.txt                            
├── docker-compose.json                         
└── README.md                                  