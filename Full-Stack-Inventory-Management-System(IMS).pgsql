Full-Stack-Inventory-Management-System(IMS)  
├── backend(Node.js)   Client(Post/api)->Routes -> Controllers -> Services -> Model -> MongoDB
│   ├── src/
│   │   ├── app/                                        # Application setup
│   │   │   ├── app.js
│   │   │   ├── server.js
│   │   │   └── routes.js
│   │   ├── config/                                     # Environment & database configs
│   │   │   ├── db.js
│   │   │   ├── env.js
│   │   │   └── index.js
│   │   │
│   │   ├── modules/                                     # Featue modules (Domain-based)
│   │   │   ├── auth/      
│   │   │   │   ├── auth.controller.js                              
│   │   │   │   ├── auth.service.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   └── auth.validation.js
│   │   │   ├── users/
│   │   │   │   ├── user.model.js
│   │   │   │   ├── user.controller.js
│   │   │   │   ├── user.service.js
│   │   │   │   ├── user.routes.js
│   │   │   │   └── user.validation.js
│   │   │   ├── products/        
│   │   │   │   ├── product.model.js
│   │   │   │   ├── product.controller.js
│   │   │   │   ├── product.service.js
│   │   │   │   ├── product.routes.js
│   │   │   │   └── product.validation.js          
│   │   │   ├── categories/
│   │   │   │   ├── category.model.js
│   │   │   │   ├── category.controller.js
│   │   │   │   ├── category.service.js
│   │   │   │   └── category.routes.js
│   │   │   ├── suppliers/        
│   │   │   │   ├── supplier.model.js
│   │   │   │   ├── supplier.controller.js
│   │   │   │   ├── supplier.service.js
│   │   │   │   └── supplier.routes.js
│   │   │   ├── Sales/
│   │   │   │   ├── sale.model.js
│   │   │   │   ├── saleItem.model.js
│   │   │   │   ├── sales.controller.js
│   │   │   │   ├── sales.service.js
│   │   │   │   ├── sales.routes.js
│   │   │   │   └── sales.validation.js
│   │   │   ├── purchases/
│   │   │   │   ├── purchase.model.js
│   │   │   │   ├── purchaseItem.model.js
│   │   │   │   ├── purchase.controller.js
│   │   │   │   ├── purchase.service.js
│   │   │   │   └── purchase.routes.js
│   │   │   ├── inventory/
│   │   │   │   ├── stockMovement.model.js
│   │   │   │   ├── inventory.service.js
│   │   │   │   └── inventory.controller.js
│   │   │   ├── logs/
│   │   │   │   ├── log.model.js
│   │   │   │   ├── log.controller.js
│   │   │   │   └── log.service.js
│   │   │   └── settings/
│   │   │       ├── settings.model.js
│   │   │       ├── settings.controller.js
│   │   │       └── settings.service.js 
│   │   │
│   │   ├── middlewares/                                 # Global middlewares
│   │   │   ├── auth.middleware.js              
│   │   │   ├── role.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── requestLogger.middlewares.js
│   │   │
│   │   ├── utils/                                       # Shared utilities
│   │   │   ├── generateToken.js
│   │   │   ├── hashPassword.js
│   │   │   ├── responseHandler.js
│   │   │   └── logger.js            
│   │   │
│   │   ├── contants/                                    # Global constants
│   │   │   ├── roles.js
│   │   │   └── httpStatus.js      
│   │   │      
│   │   └── database/                                    # Request validation
│   │       └── seed.js  
│   │                         
│   ├── tests/                                           # Unit & integration tests
│   ├── .env
│   ├── package.json
│   └── README.md
│   
├── frontend/ (React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── src/
│   │   ├── app/                                         # App initialization
│   │   │   ├── store.js  
│   │   │   ├── Provider.jsx
│   │   │   └── App.jsx.
│   │   ├── routes/                                      # Routing system
│   │   │   ├── AppRoutes.jsx    
│   │   │   └── PrivateRoute.jsx
│   │   ├── api/                                         # API configuration
│   │   │   ├── axiosClient.js    
│   │   │   └── endpoint.js
│   │   │
│   │   ├── features/                                    # Feature-based modules
│   │   │   ├── auth/                                                              
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── authApi.js
│   │   │   │   ├── hooks/                                    
│   │   │   │   │   └── useAuth.js
│   │   │   │   ├── pages/        
│   │   │   │   │   ├── Login.jsx  
│   │   │   │   │   └── Register.jsx                        
│   │   │   │   ├── authSlice.js
│   │   │   │   └── authService.js
│   │   │   ├── products/                                                              
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── productApi.js
│   │   │   │   ├── components/                                    
│   │   │   │   │   ├── ProductTable.jsx 
│   │   │   │   │   └── ProductForm.jsx
│   │   │   │   ├── pages/        
│   │   │   │   │   ├── ProductList.jsx
│   │   │   │   │   └── ProductDetials.jsx
│   │   │   │   ├── hooks/                                    
│   │   │   │   │   └── useProduct.js
│   │   │   │   ├── productSlice.js
│   │   │   │   └── productService.js
│   │   │   ├── sales/                                                              
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── saleApi.js
│   │   │   │   ├── components/                                    
│   │   │   │   │   └── SalesTable.jsx
│   │   │   │   ├── pages/        
│   │   │   │   │   ├── SalesPage.jsx
│   │   │   │   │   └── SaleDetails.jsx
│   │   │   │   ├── hooks/                                    
│   │   │   │   │   └── useSales.js
│   │   │   │   ├── saleSlice.js
│   │   │   │   └── salesService.js
│   │   │   ├── purchases/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── purchaseApi.js
│   │   │   │   └── pages/
│   │   │   │       └── PurchasePage.jsx
│   │   │   ├── suppliers/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── supplierApi.js
│   │   │   │   └── pages/
│   │   │   │       └── SupplierPage.jsx
│   │   │   ├── categories/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── categoryApi.js
│   │   │   │   └── pages/
│   │   │   │       └── CategoryPage.jsx
│   │   │   ├── inventory/
│   │   │   │   ├── api/                                    
│   │   │   │   │   └── stockApi.js
│   │   │   │   ├── pages/                                    
│   │   │   │   │   └── InventoryPage.jsx
│   │   │   │   └── inventorySlice.js  
│   │   │   └── settings/
│   │   │       ├── api/
│   │   │       │   └── settingsApi.js
│   │   │       └── pages/
│   │   │           └── SettingsPage.jsx
│   │   ├── components/                                  # Global reuable components    
│   │   │   ├── ui/                                                              
│   │   │   │   ├── Button/ 
│   │   │   │   │   ├── Button.jsx      
│   │   │   │   │   ├── Button.css
│   │   │   │   │   └── index.js                     
│   │   │   │   ├── Input/
│   │   │   │   │   ├── Input.jsx      
│   │   │   │   │   ├── Input.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Select/
│   │   │   │   │   ├── Select.jsx      
│   │   │   │   │   ├── Select.css
│   │   │   │   │   └── index.js                                  
│   │   │   │   ├── Checkbox/
│   │   │   │   │   ├── Checkbox.jsx      
│   │   │   │   │   ├── Checkbox.css
│   │   │   │   │   └── index.js                              
│   │   │   │   ├── Table/
│   │   │   │   │   ├── Table.jsx      
│   │   │   │   │   ├── TableHeader.jsx
│   │   │   │   │   ├── TableRow.jsx
│   │   │   │   │   ├── TableCell.jsx
│   │   │   │   │   ├── Table.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Modal/
│   │   │   │   │   ├── Modal.jsx
│   │   │   │   │   ├── ModalHeader.jsx      
│   │   │   │   │   ├── ModalBody.jsx
│   │   │   │   │   ├── ModalFooter.jsx
│   │   │   │   │   ├── Modal.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Card/
│   │   │   │   │   ├── Card.jsx      
│   │   │   │   │   ├── CardHeader.jsx
│   │   │   │   │   ├── CardBody.jsx
│   │   │   │   │   ├── CardFoodter.jsx
│   │   │   │   │   ├── Card.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Badge/
│   │   │   │   │   ├── Badge.jsx      
│   │   │   │   │   ├── Badge.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Spinner/
│   │   │   │   │   ├── Spinner.jsx      
│   │   │   │   │   ├── Spinner.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Loader/
│   │   │   │   │   ├── Loader.jsx      
│   │   │   │   │   ├── Loader.css
│   │   │   │   │   └── index.js
│   │   │   │   ├── Pagination/
│   │   │   │   │   ├── Pagination.jsx 
│   │   │   │   │   ├── Pagination.css     
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js                           
│   │   │   ├── layout/ 
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── DashboardLayout.jsx
│   │   │   └── charts/
│   │   │       ├── SaleChart.jsx
│   │   │       └── InventoryChart.jsx
│   │   │      
│   │   ├── hooks/                                       # Global shared hooks
│   │   │   ├── useDebounce.js
│   │   │   └── usePagination.js
│   │   ├── utils/                                       # Utility function
│   │   │   ├── formatCurrency.js
│   │   │   ├── formatDate.js
│   │   │   ├── validation.js
│   │   │   └── constants.js                       
│   │   └── main.jsx
│   └── public/                  
├── .env                                      
├── package.json
├── docker-compose.yml
└── README.md                                  