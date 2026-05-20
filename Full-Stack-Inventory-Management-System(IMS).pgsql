Full-Stack-Inventory-Management-System(IMS)  
├── backend(Node.js + Express)   Client(Post/api)->Routes -> Controllers -> Services -> Model -> MongoDB
│   ├── src/
│   │   ├── app/                                        # Application setup
│   │   │   ├── app.js                                  # Express app config
│   │   │   ├── server.js                               # Server bootstrap
│   │   │   └── routes.js                               # Central route aggregator
│   │   │
│   │   ├── config/                                     
│   │   │   ├── db.js                                   # MongoDB connection
│   │   │   ├── env.js                                  # Environment loader
│   │   │   └── index.js                                # Config exports
│   │   │
│   │   ├── modules/                                    # DOMAIN-DRIVER FEATURES (matches frontend/features)
│   │   │   │
│   │   │   ├── auth/      
│   │   │   │   ├── auth.model.js
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
│   │   │   ├── sales/
│   │   │   │   ├── sale.model.js
│   │   │   │   ├── saleItem.model.js
│   │   │   │   ├── sale.controller.js
│   │   │   │   ├── sale.service.js
│   │   │   │   ├── sale.routes.js
│   │   │   │   └── sale.validation.js
│   │   │   ├── purchases/
│   │   │   │   ├── purchase.model.js
│   │   │   │   ├── purchaseItem.model.js
│   │   │   │   ├── purchase.controller.js
│   │   │   │   ├── purchase.service.js
│   │   │   │   ├── purchase.routes.js
│   │   │   │   └── purchase.validation.js
│   │   │   ├── inventory/
│   │   │   │   ├── stockMovement.model.js
│   │   │   │   ├── inventory.controller.js
│   │   │   │   ├── inventory.service.js
│   │   │   │   ├── inventory.routes.js
│   │   │   │   └── inventory.validation.js
│   │   │   ├── logs/
│   │   │   │   ├── log.model.js
│   │   │   │   ├── log.controller.js
│   │   │   │   ├── log.service.js
│   │   │   │   └── log.routes.js
│   │   │   └── settings/
│   │   │       ├── settings.model.js
│   │   │       ├── settings.controller.js
│   │   │       ├── settings.service.js 
│   │   │       ├── settings.routes.js
│   │   │       └── settings.validation.js
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
│   │   │   ├── logger.js
│   │   │   └── asyncHandler.js            
│   │   │
│   │   ├── contants/                                    # Global constants
│   │   │   ├── roles.js
│   │   │   ├── httpStatus.js
│   │   │   └── inventoryEvents.js      
│   │   │      
│   │   └── database/  
│   │       ├── seed.js                                
│   │       └── index.js
│   │                         
│   ├── tests/   
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/    
│   │                             
│   └── package.json
│   
├── frontend/(React • JavaScript • HTML • CSS) components -> pages -> hooks -> services -> routes -> utils -> App.jsx
│   │
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── app/                                        
│   │   │   ├── main.jsx
│   │   │   ├── App.jsx
│   │   │   │
│   │   │   ├── providers/
│   │   │   │   ├── AuthProvider.jsx
│   │   │   │   ├── ThemeProvider.jsx
│   │   │   │   ├── QueryProvider.jsx
│   │   │   │   └── NotificationProvider.jsx
│   │   │   │
│   │   │   ├── routes/
│   │   │   │   ├── AppRoutes.jsx
│   │   │   │   ├── ProtectedRoute.jsx
│   │   │   │   ├── AuthRoute.jsx
│   │   │   │   └── routeConfig.js 
│   │   │   │ 
│   │   │   ├── store/
│   │   │   │   ├── store.js
│   │   │   │   ├── rootReducer.js
│   │   │   │   └── slices/
│   │   │   │       ├── authSlice.js
│   │   │   │       ├── inventorySlice.js
│   │   │   │       ├── orderSlice.js
│   │   │   │       ├── supplierSlice.js
│   │   │   │       ├── dashboardSlice.js
│   │   │   │       └── reportSlice.js
│   │   │   │ 
│   │   │   └── config/
│   │   │       ├── env.js
│   │   │       ├── apiConfig.js
│   │   │       └── appConfig.js
│   │   │
│   │   ├── layouts/
│   │   │   ├── MainLayout.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── AuthLayout.jsx
│   │   │   └── ErrorLayout.jsx
│   │   │
│   │   └── features
│   │       │ 
│   │       ├── auth/
│   │       │   ├── api/
│   │       │   │   ├── authApi.js
│   │       │   │   ├── authEndpoint.js
│   │       │   │   └── authTransformer.jsx
│   │       │   ├── pages/
│   │       │   │   ├── Login.jsx
│   │       │   │   ├── Register.jsx
│   │       │   │   ├── ForgotPassword.jsx
│   │       │   │   ├── ResetPassword.jsx
│   │       │   │   ├── VerifyEmail.jsx
│   │       │   │   ├── SessionExpired.jsx 
│   │       │   │   ├── Unauthorized.jsx
│   │       │   │   └── TwoFactorAuth.jsx
│   │       │   │ 
│   │       │   ├── components/
│   │       │   │   ├── Forms/
│   │       │   │   │   ├── LoginForm.jsx
│   │       │   │   │   ├── RegisterForm.jsx
│   │       │   │   │   ├── ForgotPasswordForm.jsx
│   │       │   │   │   └── ResetPasswordForm.jsx
│   │       │   │   ├── ui/
│   │       │   │   │   ├── AuthBanner.jsx
│   │       │   │   │   ├── SocialLogin.jsx
│   │       │   │   │   ├── AuthCard.jsx
│   │       │   │   │   ├── AuthDivider.jsx
│   │       │   │   │   └── PasswordStrength.jsx
│   │       │   │   │
│   │       │   │   ├── guards/
│   │       │   │   │   ├── ProtectedRoute.jsx
│   │       │   │   │   ├── AdminRoute.jsx
│   │       │   │   │   ├── GuestRoute.jsx
│   │       │   │   │   └── PermissionGuard.jsx
│   │       │   │   └── session/
│   │       │   │       ├── ProtectedRoute.jsx
│   │       │   │       ├── DeviceHistory.jsx
│   │       │   │       └── ActiveSessions.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useAuth.js
│   │       │   │   ├── usePermissions.js
│   │       │   │   ├── useSession.js
│   │       │   │   ├── useRefreshToken.js
│   │       │   │   └── useCurrentUser.js
│   │       │   ├── services/
│   │       │   │   ├── authService.js
│   │       │   │   ├── tokenService.js
│   │       │   │   ├── sessionServices.js
│   │       │   │   ├── permissionService.js
│   │       │   │   └── storageService.js
│   │       │   ├── validations/
│   │       │   │   ├── loginSchema.js 
│   │       │   │   ├── registerSchema.js
│   │       │   │   ├── passwordSchema.js
│   │       │   │   └── otpSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── authConstants 
│   │       │   │   ├── authMessages.js
│   │       │   │   └── authRoutes.js
│   │       │   ├── permissions/
│   │       │   │   ├── roles.js 
│   │       │   │   ├── permission.js
│   │       │   │   ├── accessMatrix.js
│   │       │   │   └── polices.js
│   │       │   ├── security/
│   │       │   │   ├── csrf.js 
│   │       │   │   ├── securityStorage.js
│   │       │   │   ├── fingerprint.js
│   │       │   │   └── tokenEncryption.js
│   │       │   ├── utils/
│   │       │   │   ├── authHelpers.js 
│   │       │   │   ├── jwtHelpers.js
│   │       │   │   ├── redirectHelpers.js
│   │       │   │   └── sessionHelpers.js
│   │       │   ├── tests/ 
│   │       │   │   ├── unit/
│   │       │   │   ├── integration/
│   │       │   │   └── e2e/
│   │       │   └── index.js
│   │       │
│   │       ├── inventory/
│   │       │   ├── api/
│   │       │   │   ├── inventoryApi.js
│   │       │   │   ├── inventoryEndpoints.js
│   │       │   │   ├── inventoryTransformers.js
│   │       │   │   └── inventoryAdapters.js
│   │       │   ├── pages/
│   │       │   │   ├── Products.jsx
│   │       │   │   ├── AddProducts.jsx
│   │       │   │   ├── EditProduct.jsx
│   │       │   │   ├── ProductDetails.jsx
│   │       │   │   ├── InventoryDashboard.jsx
│   │       │   │   ├── StockMovements.jsx 
│   │       │   │   ├── LowStockMovements.jsx
│   │       │   │   ├── InventoryAudit.jsx
│   │       │   │   ├── WarehourseInventory.jsx
│   │       │   │   ├── DamagedInventory.jsx 
│   │       │   │   └── InventoryForecast.jsx
│   │       │   │
│   │       │   ├── components/
│   │       │   │   ├── product/
│   │       │   │   ├── inventory/
│   │       │   │   ├── warehouse/
│   │       │   │   ├── analytics/
│   │       │   │   └── audit/
│   │       │   ├── hooks/
│   │       │   │   ├── useProduct.js
│   │       │   │   ├── useInventory.js
│   │       │   │   └── useInventoryStats.js
│   │       │   ├── services/
│   │       │   │   └── inventoryService.js
│   │       │   ├── validations/
│   │       │   │   └── InventoryValidators.jsx
│   │       │   ├── utils/
│   │       │   │   ├── inventoryHelpers.js
│   │       │   │   └── stockCalculator.js
│   │       │   └── types/
│   │       │       └── inventory.types.js
│   │       │
│   │       ├── orders/
│   │       │   ├── pages/
│   │       │   │   ├── Orders.jsx
│   │       │   │   ├── CreateOrder.jsx
│   │       │   │   └── OrderDetails.jsx
│   │       │   ├── components/
│   │       │   │   ├── OrderForm.jsx
│   │       │   │   ├── OrderTable.jsx
│   │       │   │   ├── OrderStatusBadge.jsx
│   │       │   │   ├── InvoicePreview.jsx 
│   │       │   │   └── PaymentSummary.jsx
│   │       │   ├── hooks/
│   │       │   │   └── useOrders.js
│   │       │   ├── services/
│   │       │   │   └── orderService.js
│   │       │   ├── validations/
│   │       │   │   └── orderValidator.js
│   │       │   └── utils/
│   │       │       └── orderHelpers.js
│   │       │
│   │       ├── suppliers/
│   │       │   ├── pages/
│   │       │   │   ├── Suppliers.jsx
│   │       │   │   ├── AddSupplier.jsx
│   │       │   │   └── SupplierDetails.jsx
│   │       │   ├── components/
│   │       │   │   ├── SupplierForm.jsx
│   │       │   │   ├── SupplierList.jsx 
│   │       │   │   ├── SupplierCard.jsx
│   │       │   │   └── SupplierTable.jsx
│   │       │   ├── hooks/
│   │       │   │   └── useSuppliers.js
│   │       │   ├── services/
│   │       │   │   └── supplierService.js
│   │       │   ├── validations/
│   │       │   │   └── supplierValidations.js
│   │       │   └── utils/
│   │       │       └── supplierHelpers.js
│   │       │
│   │       ├── dashboard/
│   │       │   ├── pages/
│   │       │   │   └── Dashboard.jsx
│   │       │   ├── components/
│   │       │   │   ├── StatsCard.jsx
│   │       │   │   ├── SalesChart.jsx 
│   │       │   │   ├── InventoryChart.jsx
│   │       │   │   ├── RecentOrders.jsx
│   │       │   │   ├── TopProducts.jsx
│   │       │   │   └── RevenueAnalytics.jsx
│   │       │   └── services/
│   │       │       └── dashboardService.js
│   │       │
│   │       └── reports/
│   │           ├── pages/
│   │           │   └── Reports.jsx
│   │           ├── components/
│   │           │   ├── ReportFilters.jsx
│   │           │   ├── ExportButtons.jsx 
│   │           │   ├── ReportCharts.jsx 
│   │           │   └── ReportTable.jsx
│   │           ├── pages/
│   │           │   └── Reports.jsx
│   │           └── utils/
│   │               └── reportHelpers.js
│   │   
│   ├── shared/
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Select.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   ├── Badge.jsx
│   │   │   │   └── Tooltip.jsx
│   │   │   │
│   │   │   ├── navigation/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Breadcrumb.jsx
│   │   │   │ 
│   │   │   ├── feedback/
│   │   │   │   ├── EmptyState.jsx
│   │   │   │   ├── ErrorMessage.jsx
│   │   │   │   ├── Toast.jsx
│   │   │   │   └── ConfirmDialog.jsx
│   │   │   │
│   │   │   └── charts
│   │   │
│   │   ├── hooks/
│   │   │   ├── useFetch.js
│   │   │   ├── useDebounce.js
│   │   │   ├── useModal.js
│   │   │   ├── usePagination.js
│   │   │   ├── useRealtime.js
│   │   │   └── usePermissions.js 
│   │   │
│   │   ├── services/
│   │   │   ├── api/
│   │   │   │   ├── apiClient.js
│   │   │   │   ├── axiosInstance.js
│   │   │   │   ├── interceptors.js
│   │   │   │   └── errorHandler.js
│   │   │   ├── storage/
│   │   │   ├── auth/
│   │   │   ├── realtime/
│   │   │   └── telemetry/
│   │   │
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   ├── validators.js
│   │   │   ├── formatCurrency.js
│   │   │   ├── formatDate.js
│   │   │   ├── Logger.js
│   │   │   └── security.js
│   │   │
│   │   ├── security/
│   │   │   ├── roleGuards.js
│   │   │   ├── sanitizeInput.js
│   │   │   └── accessControl.js 
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── varibles.css
│   │   │   └── themes/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── logos/
│   │   └── types/
│   │       └── common.types.js
│   │    
│   ├── services/                              # GLOBAL DOMAIN LAYER
│   │   ├── orderService.js
│   │   ├── inventoryService.js
│   │   ├── supplierService.js
│   │   ├── dashboardService.js
│   │   ├── reportService.js
│   │   └── analyticsService.js
│   │
│   ├── styles/
│   │   └── global.css
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── e2e/
│   └── package.json
│
├── .env
├── .gitignore
├── vit.config.js
├── eslint.config.js
├── prettier.config.js
└── package.json
