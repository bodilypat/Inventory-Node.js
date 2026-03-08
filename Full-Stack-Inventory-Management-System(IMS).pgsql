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
│   │   ├── components/                                         # Reusable UI & composed components
│   │   │   ├── ui/                            
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Select.jsx                          
│   │   │   │   ├── Badge.jsx                    
│   │   │   │   ├── Modal.jsx                              
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Alert.jsx                      
│   │   │   │   ├── Tooltip.jsx                    
│   │   │   │   ├── Tab.jsx  
│   │   │   │   ├── Accordion.jsx                  
│   │   │   │   ├── Breadcrumb.jsx               
│   │   │   │   ├── Pagination.jsx     
│   │   │   │   ├── Loader.jsx                      
│   │   │   │   └── index.js                     
│   │   │   ├── layout/                            
│   │   │   │   ├── MainLayout.jsx                                    # Wrapper layout (Header + Sidebar + content)
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── Header.jsx                                        
│   │   │   │   ├── Sidebar.jsx                                       
│   │   │   │   ├── Footer.jsx                                        
│   │   │   │   ├── PageContainer.jsx                                
│   │   │   │   └── ProtectedRoute.jsx                               
│   │   │   ├── forms/ 
│   │   │   │   ├── ProductForm.jsx                 
│   │   │   │   ├── CategoryForm.jsx
│   │   │   │   ├── SupplierForm.jsx
│   │   │   │   ├── CustomerForm.jsx
│   │   │   │   ├── WarehouseForm.jsx
│   │   │   │   ├── PurchaseOrderForm.jsx
│   │   │   │   ├── SalesOrderForm.jsx
│   │   │   │   ├── StockAdjustmentForm.jsx
│   │   │   │   └── UserForm.jsx
│   │   │   ├── charts/ 
│   │   │   │   ├── BarChart.jsx                              # Generic Bar Chart
│   │   │   │   ├── LineChart.jsx                             # Generic Line Chart
│   │   │   │   ├── PieChart.jsx                              # Generic Pie / Doughtnut Chart
│   │   │   │   ├── Inventory.jsx                             # Stock levels per product / Category
│   │   │   │   ├── SalesChart.jsx                            # Sales trends over time 
│   │   │   │   ├── PurchaseChart.jsx                         # Purchase trends over time 
│   │   │   │   └── ChartWrapper.jsx                          # Optional wrapper for consistent styling/layout
│   │   │   │       ├── 
│   │   │   │       ├── 
│   │   │   │       └── 
│   │   │   └── styles/
│   │   │       └── globals.css
│   │   │
│   │   ├── pages/                                           # Route-level pages (feature grouped)
│   │   │   ├── auth/    
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── products.jsx
│   │   │   ├── Inventory.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── Suppliers.jsx
│   │   │   ├── Customer.jsx
│   │   │   ├── PurchaseOrder.jsx
│   │   │   ├── SalesOrder.jsx
│   │   │   ├── Report.jsx
│   │   │   ├── setting.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── NotFound.jsx 
│   │   │      
│   │   ├── services/                                          # All backend API calls
│   │   │   ├── authService.js    
│   │   │   ├── productService.js     
│   │   │   ├── stockService.js            
│   │   │   ├── salesService.js
│   │   │   ├── purchaseService.js
│   │   │   └── reportService.js
│   │   ├── context/                                           # Global state management (auth, user data)
│   │   │   ├── AuthContext.jsx
│   │   │   ├── ProductContext.jsx
│   │   │   ├── SaleContext.jsx
│   │   │   ├── PurchaseContext.jsx
│   │   │   ├── StockContext.jsx 
│   │   │   └── ReportContext.jsx
│   │   ├── hooks/                                             # Custom reusable logic
│   │   │   ├── useAuth.js
│   │   │   ├── useProduct.js
│   │   │   ├── useSales.js
│   │   │   ├── usePurchase.js
│   │   │   ├── useStock.js 
│   │   │   └── useReports.js
│   │   ├── routes/                                            # React Router cofiguration
│   │   │   ├── productRoutes.js
│   │   │   ├── salesRoutes.js
│   │   │   ├── purchaseRoutes.js
│   │   │   ├── stockRoutes.js
│   │   │   └── reportRoutes.js
│   │   ├── utils/                                             # Helper function (formatting validation)
│   │   │   ├── tokenStorage.js
│   │   │   ├── validators.js
│   │   │   ├── permissions.js
│   │   │   └── constants.js
│   │   ├── App.jsx                       
│   │   └── main.jsx
│   └──                   
├── .env                                        
├── requirements.txt                            
├── docker-compose.json                         
└── README.md                                  