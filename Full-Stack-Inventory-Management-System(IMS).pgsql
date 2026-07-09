Full-Stack-Inventory-Management-System(IMS)  
├── frontend/ (React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                                         
│   │   │   ├── icons/                                 
│   │   │   ├── images/                             
│   │   │   ├── fonts/
│   │   │   └── styles/  
│   │   │       ├── global.css
│   │   │       ├── variable.css
│   │   │       ├── reset.css
│   │   │       └── typography.css                        
│   │   ├── components/                                     
│   │   │   ├── common/  
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Modal.jsx 
│   │   │   │   ├── Avator.jsx 
│   │   │   │   ├── EmptyState.jsx 
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Spinner.jsx
│   │   │   │   ├── Alert.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   ├── Skeleton.jsx
│   │   │   │   ├── Tooltip.jsx 
│   │   │   │   ├── Divider.jsx 
│   │   │   │   ├── ConfirmDialog.jsx
│   │   │   │   ├── index.js
│   │   │   │   └── common.js     
│   │   │   ├── forms/  
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── ButtonGroup.jsx 
│   │   │   │   ├── Input.jsx 
│   │   │   │   ├── PasswordInput.jsx 
│   │   │   │   ├── Textarea.jsx
│   │   │   │   ├── MultiSelect.jsx
│   │   │   │   ├── Checkbox.jsx 
│   │   │   │   ├── Radio.jsx
│   │   │   │   ├── Switch.jsx 
│   │   │   │   ├── DatePicker.jsx 
│   │   │   │   ├── TimePicker.jsx 
│   │   │   │   ├── FileUpload.jsx
│   │   │   │   ├── ImageUpload.jsx
│   │   │   │   ├── SearchInput.jsx
│   │   │   │   ├── FormField.jsx
│   │   │   │   ├── FormLabel.jsx
│   │   │   │   ├── FormError.jsx 
│   │   │   │   ├── FormHelperText.jsx 
│   │   │   │   ├── FormGroup.jsx
│   │   │   │   ├── FormGroup.jsx 
│   │   │   │   ├── index.jsx
│   │   │   │   └── forms.css 
│   │   │   ├── data-display/  
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── DataTable.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── SortButton.jsx
│   │   │   │   ├── FilterMenu.jsx
│   │   │   │   ├── EmptyTable.jsx
│   │   │   │   ├── index.js
│   │   │   │   └── table.css
│   │   │   ├── navigation/  
│   │   │   │   ├── Breadcrumb.jsx
│   │   │   │   ├── Tabs.jsx
│   │   │   │   ├── Dropdown.jsx
│   │   │   │   ├── Menu.jsx
│   │   │   │   └── index.js
│   │   │   ├── overlay/  
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Drawer.jsx
│   │   │   │   ├── Popover.jsx
│   │   │   │   ├── ContextMenu.jsx
│   │   │   │   └── index.js
│   │   │   ├── charts/  
│   │   │   │   ├── BarChart.jsx
│   │   │   │   ├── LineChart.jsx
│   │   │   │   ├── PieChart.jsx
│   │   │   │   ├── AreaChart.jsx
│   │   │   │   ├── DoughnutChart.jsx
│   │   │   │   ├── RadarChart.jsx
│   │   │   │   └── index.js
│   │   │   ├── layout/  
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx 
│   │   │   │   ├── Header.jsx 
│   │   │   │   ├── PageHeader.jsx 
│   │   │   │   ├── Content.jsx 
│   │   │   │   ├── Layout.jsx 
│   │   │   │   ├── ProtectedLayout.jsx 
│   │   │   │   ├── AuthLayout.jsx 
│   │   │   │   ├── DashboardLayout.jsx 
│   │   │   │   ├── Layout.css
│   │   │   │   └── index.css   
│   │   │   ├── icons/  
│   │   │   │   ├── Icon.jsx
│   │   │   │   └── Index.jsx
│   │   │   ├── inventory/  
│   │   │   │   ├── StockBadge.jsx
│   │   │   │   ├── StockStatus.jsx
│   │   │   │   ├── LowStockAlert.jsx
│   │   │   │   ├── QuantityInput.jsx
│   │   │   │   ├── Barcode.jsx
│   │   │   │   ├── QRCode.jsx
│   │   │   │   ├── PriceTag.jsx
│   │   │   │   ├── CurrencyDisplay.jsx
│   │   │   │   ├── InventoryFilters.jsx
│   │   │   │   ├── SummaryCard.jsx
│   │   │   │   ├── LowStockAlert.jsx
│   │   │   │   ├── DashboardCard.jsx 
│   │   │   │   ├── Inventory.css
│   │   │   │   └── index.js
│   │   │   ├── providers/  
│   │   │   │   ├── ThemeProvider.jsx
│   │   │   │   ├── ToastProvider.jsx
│   │   │   │   ├── ModalProvider.jsx
│   │   │   │   └── index.js
│   │   │   ├── styles/  
│   │   │   │   ├── common.css
│   │   │   │   ├── layout.css
│   │   │   │   └── index.css
│   │   │   └── index.js   
│   │   │  
│   │   ├── features/                                       
│   │   │   ├── auth/ 
│   │   │  	│	├── api/                                
│   │   │  	│	│   ├── auth.api.js
│   │   │  	│	│   ├── token.api.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── components/                          # Reusable authentication UI
│   │   │  	│	│   ├── AuthCard.jsx        
│   │   │  	│	│   ├── LoginForm.jsx
│   │   │  	│	│   ├── RegisterForm.jsx             
│   │   │  	│	│   ├── ForgotPasswordForm.jsx
│   │   │  	│	│   ├── ResetPasswordForm.jsx
│   │   │  	│	│   ├── ChangePasswordForm.jsx
│   │   │  	│	│   ├── VerifyEmailNotice.jsx
│   │   │  	│	│   ├── SocialLogin.jsx 
│   │   │  	│	│   ├── RemembarMe.jsx
│   │   │  	│	│   ├── PasswordStrength.jsx
│   │   │  	│	│   ├── PasswordRequirements.jsx
│   │   │  	│	│   ├── AuthLogo.jsx
│   │   │   │   │   └── index.js
│   │   │  	│	├── pages/                               # Route-level pages 
│   │   │  	│	│   ├── Login.jsx
│   │   │  	│	│   ├── Register.jsx
│   │   │  	│	│   ├── ForgotPassword.jsx
│   │   │  	│	│   ├── ResetPassword.jsx
│   │   │  	│	│   ├── VerifyEmail.jsx 
│   │   │  	│	│   ├── Profile.jsx
│   │   │  	│	│   ├── ChangePassword.jsx
│   │   │  	│	│   ├── Unauthorized.jsx
│   │   │   │   │   └── index.js
│   │   │  	│	├── hooks/                               # Authenticatio logic and custom hooks
│   │   │  	│	│   ├── useAuth.js
│   │   │  	│	│   ├── useLogin.js
│   │   │  	│	│   ├── useRegister.js
│   │   │  	│	│   ├── useLogout.js
│   │   │  	│	│   ├── useForgostPassword.js
│   │   │  	│	│   ├── useResetPassword.js
│   │   │  	│	│   ├── useChangePassword.js
│   │   │  	│	│   ├── useCurrentUser.js
│   │   │  	│	│   ├── useRefreshToken.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── context/                             # Global authentication state
│   │   │  	│	│   ├── AuthContext.jsx
│   │   │  	│	│   ├── AuthProvider.jsx
│   │   │   │   │   └── index.js
│   │   │  	│	├── services/                            # API calls (login, logout, refresh token, profile)
│   │   │  	│	│   ├── auth.service.js
│   │   │  	│	│   ├── token.service.js 
│   │   │  	│	│   ├── storage.service.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── utils/                               
│   │   │  	│	│   ├── authHelpers.js
│   │   │  	│	│   ├── authValidators.js
│   │   │  	│	│   ├── authMapper.js 
│   │   │  	│	│   ├── authStorage.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── constants/                          
│   │   │  	│	│   ├── permissions.js
│   │   │  	│	│   ├── roles.js 
│   │   │  	│	│   ├── authMessages.js
│   │   │  	│	│   ├── storageKeys.js
│   │   │  	│	│   ├── authRoutes.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── schemas/                          
│   │   │  	│	│   ├── login.schema.js
│   │   │  	│	│   ├── register.schema.js 
│   │   │  	│	│   ├── forgotPassword.schema.js
│   │   │  	│	│   ├── resetPassword.schema.js
│   │   │  	│	│   ├── changePassword.schema.js
│   │   │   │   │   └── index.js
│   │   │  	│	├── styles/                              # Authentication-specific styling 
│   │   │   │   │   └── auth.css
│   │   │   │   └── index.js
│   │   │   ├── dashboard/  
│   │   │   │   ├── Dashboard.jsx
│   │   │  	│	├── dashboard.css
│   │   │   │   └── index.js
│   │   │   ├── products/ 
│   │   │   │   ├── pages/
│   │   │  	│	│   ├── ProductList.jsx
│   │   │  	│	│   ├── ProductCreate.jsx
│   │   │  	│	│   ├── ProductEdit.jsx
│   │   │   │   │   └── ProductDetails.jsx
│   │   │  	│	├── components/
│   │   │  	│	│   ├── ProductForm.js
│   │   │   │   │   └── ProductTable.js
│   │   │  	│	├── hooks/
│   │   │  	│	├── services/
│   │   │   │   └── index.js
│   │   │   ├── categories/   
│   │   │   │   ├── CategoryList.jsx
│   │   │  	│	├── CategoryCreate.jsx
│   │   │  	│	├── CategoryEdit.jsx
│   │   │  	│	├── categories.css
│   │   │   │   └── index.css                                             
│   │   │   ├── suppliers/
│   │   │   │   ├── SupplierList.jsx
│   │   │  	│	├── SupplierCreate.jsx 
│   │   │  	│	├── SupplierEdit.jsx 
│   │   │  	│	├── supplier.css
│   │   │   │   └── index.js
│   │   │   ├── customers/
│   │   │   │   ├── CustomerList.jsx 
│   │   │  	│	├── CustomerCreate.jsx 
│   │   │  	│	├── CustomerEdit.jsx
│   │   │  	│	├── customers.css
│   │   │   │   └── index.js
│   │   │   ├── purchases/
│   │   │   │   ├── PurchaseList.jsx
│   │   │  	│	├── PurchaseCreate.jsx 
│   │   │  	│	├── PurchaseEdit.jsx 
│   │   │  	│	├── purchase.css
│   │   │   │   └── index.js
│   │   │   ├── sales/
│   │   │   │   ├── SaleList.jsx 
│   │   │  	│	├── SaleCreate.jsx 
│   │   │  	│	├── SaleDetails.jsx
│   │   │  	│	├── sales.css
│   │   │   │   └── index.js
│   │   │   ├── inventory/
│   │   │   │   ├── Inventory.jsx
│   │   │   │   ├── StockMovement.jsx
│   │   │   │   ├── LowStock.jsx 
│   │   │   │   ├── inventory.css
│   │   │   │   └── index.js
│   │   │   ├── reports/
│   │   │   │   ├── Reports.jsx
│   │   │   │   ├── SalesReport.jsx 
│   │   │   │   ├── InventoryReport.jsx
│   │   │   │   ├── reports.css
│   │   │   │   └── index.js
│   │   │   ├── settings/
│   │   │   │   ├── Settings.jsx
│   │   │   │   ├── Profile.jsx 
│   │   │   │   ├── settings.css
│   │   │   │   └── index.js
│   │   │   └── not-found/
│   │   │  		├── Not-found.jsx
│   │   │  		├── not-found.css
│   │   │       └── index.js
│   │   │
│   │   ├── hooks/                                       
│   │   │   ├── useFetch.js                              # Generic API request handing (loading, error, data)
│   │   │   ├── useDashboard.js                          # Dashboard statistics and summaries
│   │   │   ├── usePagination.js                         # Pagination Logic reusable across tables
│   │   │   ├── useDebounce.js                           # Debounce values for search inputs
│   │   │   ├── useLocalStorage.js                       # Persist datain local state
│   │   │   ├── useModal.js                              # Open/Close State for dialogs and Modal
│   │   │   ├── useTheme.js                              # Theme switching (light/dark)
│   │   │   └── index.js
│   │   │
│   │   ├── services/                                    
│   │   │   ├── api.js                                   # Configure Axios (base URL, interceptors, auth token, error banding)
│   │   │   └── ...
│   │   │
│   │   ├── routes/                                  
│   │   │   ├── AppRoutes.jsx                            # Defines all application route 
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── PublicRoute.jsx                          # Prevents authenticated users from accessing pages like login 
│   │   │   ├── RoleRoute.jsx                            # Restricts routes based on user roles (Admin, Manager, Staff)
│   │   │   ├── routePaths.js                            # Stores all paths as constants
│   │   │   └── index.js                                 # Re-exports route modules clearner imports
│   │   │
│   │   ├── utils/                                       
│   │   │   ├── helpers.js                               # General reusable utility functions
│   │   │   ├── constants.js                             # Application wide constants
│   │   │   ├── validator.js                             # Custom validation function 
│   │   │   ├── formatter.js                             # Formatting text, numbers, IDs 
│   │   │   ├── date.js                                  # Date and time formatting utilities
│   │   │   ├── currency.js                              # Currency calculations and formatting 
│   │   │   ├── storage.js                               # LocalStorage and SessionStorage helpers                           
│   │   │   └── index.js                                 # Re-export utitity function
│   │   │     
│   │   ├── constants/                                         
│   │   │   ├── api.js                                   # API endpoint timeout values
│   │   │   ├── app.js                                   # Application name, version, page size 
│   │   │   ├── auth.js                                  # Authentication-related constants 
│   │   │   ├── routes.js                                # Route paths 
│   │   │   ├── roles.js                                 # User roles and permissions 
│   │   │   ├── inventory.js                             # Stock limits, movement types 
│   │   │   ├── messages.js                              # Success and error messages 
│   │   │   ├── status.js                                # Order, inventory, and user status values 
│   │   │   ├── validation.js                            # Validation rules and limits 
│   │   │   └── index.js                   
│   │   │      
│   │   ├── App.jsx 
│   │   ├── main.jsx                                    
│   │   └── index.css    
│   │
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   ├── .gitignore                        
│   └── README.MD               
│                            
├── backend(Node.js + Express)   Client(Post/api)->Routes -> Controllers -> Services -> Model -> MongoDB
│   ├── src/
│   │   ├── app/                                        # Application setup
│   │   │   ├── app.js                                  # Express app config
│   │   │   ├── server.js                               # Server bootstrap
│   │   │   └── routes.js                               # Central route aggregator
│   │   │
│   │   ├── config/                                     
│   │   │   ├── database.js                                   
│   │   │   ├── env.js                                  
│   │   │   ├── jwt.js
│   │   │   ├── logger.js 
│   │   │   ├── multer.js 
│   │   │   ├── cloudinary.js 
│   │   │   ├── redis.js
│   │   │   ├── cors.js 
│   │   │   ├── swagger.js 
│   │   │   └── index.js                                
│   │   │
│   │   ├── routes/                                     
│   │   │   ├── index.js                                   
│   │   │   ├── auth.routes.js                                  
│   │   │   ├── dashboard.routes.js
│   │   │   ├── product.routes.js 
│   │   │   ├── category.routes.js 
│   │   │   ├── supplier.routes.js 
│   │   │   ├── purchase.routes.js
│   │   │   ├── sale.routes.js 
│   │   │   ├── inventory.routes.js 
│   │   │   ├── report.routes.js 
│   │   │   ├── upload.routes.js 
│   │   │   └── setting.routes.js                        
│   │   │
│   │   ├── controllers/                                 # DOMAIN-DRIVER FEATURES (matches frontend/features)
│   │   │   ├── auth/      
│   │   │   │   ├── login.Controller.js
│   │   │   │   ├── register.controller.js                              
│   │   │   │   ├── logout.controller.js
│   │   │   │   ├── forgotPassword.controller.js
│   │   │   │   ├── resetPassword.controller.js 
│   │   │   │   ├── verifyEmail.controller.js 
│   │   │   │   ├── changePassword.controller.js 
│   │   │   │   ├── profile.controller.js
│   │   │   │   └── auth.controller.js
│   │   │   ├── dashboard/
│   │   │   │   └── dashboard.controller.js
│   │   │   ├── products/        
│   │   │   │   ├── product.controller.js 
│   │   │   │   ├── category.controller.js
│   │   │   │   └── productImage.controller.js
│   │   │   ├── supplier/
│   │   │   │   └── supplier.controller.js
│   │   │   ├── customer/        
│   │   │   │   └── customer.controller.js 
│   │   │   ├── purchase/
│   │   │   │   ├── purchase.controller.js 
│   │   │   │   └── purchaseReturn.controller.js
│   │   │   ├── sale/
│   │   │   │   ├── sale.controller.js 
│   │   │   │   └── saleReturn.controller.js 
│   │   │   ├── inventory/
│   │   │   │   ├── inventory.controller.js
│   │   │   │   ├── stock.controller.js
│   │   │   │   └── stockMovement.controller.js
│   │   │   ├── report/
│   │   │   │   ├── salesReport.controller.js
│   │   │   │   ├── purchaseReport.controller.js
│   │   │   │   ├── inventoryReport.controller.js
│   │   │   │   └── profitReport.controller.js
│   │   │   └── settings/
│   │   │       └── settings.controller.js
│   │   │
│   │   ├── services/                                 # Global middlewares
│   │   │   ├── auth.service.js              
│   │   │   ├── dashboard.service.js 
│   │   │   ├── product.service.js 
│   │   │   ├── category.service.js 
│   │   │   ├── supplier.service.js 
│   │   │   ├── customer.service.js 
│   │   │   ├── purchase.service.js
│   │   │   ├── sale.service.js 
│   │   │   ├── inventory.service.js 
│   │   │   ├── report.service.js 
│   │   │   ├── upload.service.js 
│   │   │   ├── email.service.js 
│   │   │   ├── notification.service.js 
│   │   │   └── setting.service.js 
│   │   │
│   │   ├── repositories/                                       # Shared utilities
│   │   │   ├── base.repository.js
│   │   │   ├── user.repository.js 
│   │   │   ├── product.repository.js 
│   │   │   ├── category.repository.js 
│   │   │   ├── supplier.repository.js
│   │   │   ├── customer.repository.js
│   │   │   ├── purchase.repository.js
│   │   │   ├── sale.repository.js
│   │   │   ├── inventory.repository.js 
│   │   │   ├── report.repository.js
│   │   │   └── setting.repository.js
│   │   │
│   │   ├── models/                                    
│   │   │   ├── index.js
│   │   │   ├── User.js
│   │   │   ├── Role.js 
│   │   │   ├── Permission.js 
│   │   │   ├── Product.js 
│   │   │   ├── Category.js 
│   │   │   ├── Supplier.js 
│   │   │   ├── Customer.js 
│   │   │   ├── Purchase.js
│   │   │   ├── PurchaseItem.js 
│   │   │   ├── Sale.js 
│   │   │   ├── Inventory.js 
│   │   │   ├── StockMovement.js 
│   │   │   ├── Setting.js 
│   │   │   ├── ActivityLog.js
│   │   │   └── Notification.js      
│   │   │      
│   │   ├── validators/     
│   │   │   ├── auth.validator.js 
│   │   │   ├── product.validator.js 
│   │   │   ├── category.validator.js 
│   │   │   ├── supplier.validator.js
│   │   │   ├── customer.validator.js 
│   │   │   ├── purchase.validator.js 
│   │   │   ├── sale.validator.js 
│   │   │   ├── inventory.validator.js 
│   │   │   ├── report.validator.js 
│   │   │   └── setting.validator.js  
│   │   │    
│   │   ├── middleware/     
│   │   │   ├── auth.middleware.js 
│   │   │   ├── role.middleware.js 
│   │   │   ├── permission.middleware.js 
│   │   │   ├── validation.middleware.js
│   │   │   ├── upload.middleware.js 
│   │   │   ├── error.middleware.js 
│   │   │   ├── logger.middleware.js 
│   │   │   ├── rateLimiter.middleware.js 
│   │   │   ├── notFound.middleware.js 
│   │   │   └── index.js  
│   │   │    
│   │   ├── utils/     
│   │   │   ├── ApiError.js 
│   │   │   ├── ApiReponse.js 
│   │   │   ├── asycHandler.js 
│   │   │   ├── jwt.js
│   │   │   ├── bcrypt.js 
│   │   │   ├── pagination.js 
│   │   │   ├── formatter.js 
│   │   │   ├── currency.js 
│   │   │   ├── date.js 
│   │   │   ├── validator.js 
│   │   │   ├── email.js 
│   │   │   ├── upload.js 
│   │   │   ├── barcode.js 
│   │   │   ├── qrCode.js 
│   │   │   ├── pdf.js 
│   │   │   ├── excel.js 
│   │   │   ├── constants.js 
│   │   │   └── helpers.js  
│   │   │   
│   │   ├── policies/ 
│   │   │   ├── product.policy.js
│   │   │   ├── purchase.policy.js
│   │   │   ├── sale.policy.js 
│   │   │   └── inventory.policy.js
│   │   ├── events/ 
│   │   │   ├── purchase.event.js
│   │   │   ├── sale.event.js
│   │   │   ├── inventory.event.js 
│   │   │   └── notification.event.js
│   │   ├── jobs/ 
│   │   │   ├── lowStock.job.js
│   │   │   ├── dailyReport.job.js 
│   │   │   └── backup.job.js
│   │   ├── sockets/ 
│   │   │   ├── inventory.socket.js
│   │   │   ├── notification.socket.js 
│   │   │   └── index.js
│   │   ├── uploads/ 
│   │   │   ├── products/
│   │   │   ├── users/ 
│   │   │   └── temp/
│   │   ├── templates/ 
│   │   │   ├── emails/
│   │   │   ├── reports/ 
│   │   │   └── invoices/
│   │   ├── docs/ 
│   │   │   ├── Swagger
│   │   │   └── Postman
│   │   ├── scripts/
│   │   ├── logs/
│   │   ├── health/
│   │   ├── monitoring/
│   │   ├── constants/
│   │   └── tests/
│   │       ├── unit/
│   │       ├── integration/
│   │       └── api/
│   │                         
│   ├── .env   
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json 
│   ├── Dockerfile 
│   ├── docker-compose.yml 
│   ├── READ.md
│   └── LINCENSE 
