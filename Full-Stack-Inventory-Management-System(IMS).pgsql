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
│   │   │   │   ├── product.repository.js 
│   │   │   │   ├── product.service.js
│   │   │   │   ├── product.controller.js
│   │   │   │   ├── product.routes.js
│   │   │   │   ├── product.validation.js  
│   │   │   │   └── product.dto.js        
│   │   │   ├── categories/
│   │   │   │   ├── category.model.js
│   │   │   │   ├── category.repository.js
│   │   │   │   ├── category.service.js
│   │   │   │   ├── category.controller.js
│   │   │   │   ├── category.validation.js
│   │   │   │   ├── category.routes.js
│   │   │   │   └── category.dto.js
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
├── frontend/(React 18+ • Vite • Redux Toolkit • React Query • TypeScript ready)
│   │   
│   ├── public/                                          # Static assets
│   │   ├── index.html                                   # HTML entry point
│   │   ├── favicon.ico                                  # Browser tab icon
│   │   ├── manifest.json                                # PWA manifest
│   │   ├── robots.txt                                   # SEO optimization
│   │   └── assets/                                      # Images, fonts, etc.
│   │
│   ├── src/
│   │   ├── app/                                         # Application Core Layer
│   │   │   ├── main.jsx                                 # Vite entry point
│   │   │   ├── App.jsx                                  # Root app component
│   │   │   │
│   │   │   ├── providers/                               # Global state providers
│   │   │   │   ├── AppProviders.jsx                     # Composite provider wrapper
│   │   │   │   ├── AuthProvider.jsx                     # Auth context provider
│   │   │   │   ├── QueryProvider.jsx                    # React Query setup (TanStack Query)
│   │   │   │   ├── ThemeProvider.jsx                    # Theme context & Tailwind
│   │   │   │   ├── NotificationProvider.jsx             # Toast/notification system
│   │   │   │   └── RealtimeProvider.jsx                 # WebSocket/real-time data
│   │   │   │
│   │   │   ├── routes/                                  # Routing configuration
│   │   │   │   ├── AppRoutes.jsx                        # Main router component
│   │   │   │   ├── routeConfig.js                       # Route definitions array
│   │   │   │   ├── guards/                              # Route protection guards
│   │   │   │   │   ├── ProtectedRoute.jsx               # Auth guard wrapper
│   │   │   │   │   ├── GuestRoute.jsx                   # Redirect authenticated users
│   │   │   │   │   ├── RoleGuard.jsx                    # Role-based access control
│   │   │   │   │   └── permissionGuard.jsx              # Permission-based access
│   │   │   │   └── lazyRoutes.js                        # Code splitting config
│   │   │   │ 
│   │   │   ├── store/                                   # Redux state management
│   │   │   │   ├── store.js                             # Redux store configuration
│   │   │   │   ├── rootReducer.js                       # Combined slices
│   │   │   │   ├── rootSaga.js                          # Redux-Saga orchestration
│   │   │   │   └── middleware/
│   │   │   │       ├── analyticsMiddleware.js           # Analytics tracking
│   │   │   │       ├── errorMiddleware.js               # Global error handling
│   │   │   │       └── loggingMiddleware.js             # Redux action logging
│   │   │   │ 
│   │   │   ├── config/                                  # Application configuration
│   │   │   │   ├── env.js                               # Environment variables
│   │   │   │   ├── apiConfig.js                         # API endpoints & settings
│   │   │   │   ├── appConfig.js                         # App-wide constants
│   │   │   │   └── featureFlags.js                      # Feature toggles & A/B tests
│   │   │   ├── contexts/                                # React Context API
│   │   │   │   ├── AuthContext.jsx                      # Authentication state
│   │   │   │   ├── ThemeContext.jsx                     # Theme management (light/dark)
│   │   │   │   └── NotificationContext.jsx              # Notification system
│   │   │   └── bootstrap/                               # App initialization
│   │   │       ├── initializeApp.js                     # App setup & checks
│   │   │       ├── setupInterceptors.js                 # API interceptors
│   │   │       └── registerServiceWorker.js             # PWA service worker
│   │   │
│   │   ├── shared/
│   │   │   │
│   │   │   ├── components/
│   │   │   │   ├── ui/
│   │   │   │   │   ├── Button.jsx
│   │   │   │   │   ├── Input.jsx
│   │   │   │   │   ├── Select.jsx
│   │   │   │   │   ├── Modal.jsx
│   │   │   │   │   ├── Drawer.jsx
│   │   │   │   │   ├── Table.jsx
│   │   │   │   │   ├── DataTable.jsx
│   │   │   │   │   ├── Pagination.jsx
│   │   │   │   │   ├── Tooltip.jsx
│   │   │   │   │   ├── Tabs.jsx
│   │   │   │   │   ├── Loader.jsx
│   │   │   │   │   ├── Spinner.jsx
│   │   │   │   │   ├── Skeleton.jsx
│   │   │   │   │   ├── Badge.jsx
│   │   │   │   │   └── EmptyState.jsx
│   │   │   │   │
│   │   │   │   ├── forms/
│   │   │   │   │   ├── FormField.jsx
│   │   │   │   │   ├── FormError.jsx
│   │   │   │   │   ├── FileUpload.jsx
│   │   │   │   │   └── SearchInput.jsx
│   │   │   │   │ 
│   │   │   │   ├── feedback/
│   │   │   │   │   ├── Toast.jsx
│   │   │   │   │   ├── ErrorMessage.jsx
│   │   │   │   │   ├── ConfirmDialog.jsx
│   │   │   │   │   ├── ErrorBoundary.jsx
│   │   │   │   │   └── OfflineBanner.jsx
│   │   │   │   │
│   │   │   │   ├── navigation/
│   │   │   │   │   ├── Navbar.jsx
│   │   │   │   │   ├── Sidebar.jsx
│   │   │   │   │   ├── Footer.jsx
│   │   │   │   │   ├── Breadcrumb.jsx
│   │   │   │   │   └── Topbar.jsx
│   │   │   │   ├── charts/
│   │   │   │   ├── tables/
│   │   │   │   └── cards/
│   │   │   │
│   │   │   ├── hooks/
│   │   │   │   ├── useApiRequest.js
│   │   │   │   ├── useDebounce.js
│   │   │   │   ├── useModal.js
│   │   │   │   ├── usePagination.js
│   │   │   │   ├── useRealtime.js
│   │   │   │   ├── usePermissions.js
│   │   │   │   ├── useLocalStorage.js
│   │   │   │   └── useMediaQuery.js
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── api/
│   │   │   │   │   ├── axiosInstance.js
│   │   │   │   │   ├── apiClient.js
│   │   │   │   │   ├── interceptors.js
│   │   │   │   │   └── errorHandler.js
│   │   │   │   ├── auth/
│   │   │   │   ├── storage/
│   │   │   │   ├── realtime/
│   │   │   │   ├── telemetry/
│   │   │   │   ├── analytics/
│   │   │   │   └── notifications/
│   │   │   │
│   │   │   ├── security/
│   │   │   │   ├── accessControl.js
│   │   │   │   ├── roleGuards.js
│   │   │   │   ├── sanitizeInput.js
│   │   │   │   ├── csrf.js
│   │   │   │   └── tokenEncryption.js 
│   │   │   ├── utils/
│   │   │   │   ├── constants.js
│   │   │   │   ├── helpers.js
│   │   │   │   ├── validators.js
│   │   │   │   ├── Logger.js
│   │   │   │   ├── formatCurrency.js
│   │   │   │   ├── formatDate.js
│   │   │   │   ├── formatNumber.js
│   │   │   │   └── downloadFile.js
│   │   │   │
│   │   │   ├── styles/
│   │   │   │   ├── global.css
│   │   │   │   ├── variables.css
│   │   │   │   ├── animations.css
│   │   │   │   ├── typegraphy.css
│   │   │   │   └── themes/
│   │   │   ├── types/
│   │   │   │   └── common.types.js
│   │   │   └── constants/
│   │   │       ├── appConstants.js
│   │   │       ├── routes.js
│   │   │       └── permissions.js
│   │   ├── layouts/
│   │   │   ├── MainLayout/
│   │   │   ├── DashboardLayout/
│   │   │   ├── AuthLayout/
│   │   │   ├── ErrorLayout/
│   │   │   └── MinimalLayout/
│   │   │
│   │   └── features/
│   │       │ 
│   │       ├── auth/
│   │       │   ├── api/
│   │       │   │   ├── endpoint.js
│   │       │   │   ├── authApi.js
│   │       │   │   ├── authMapper.js
│   │       │   │   ├── authQueryKeys.js
│   │       │   │   └── interceptors.js
│   │       │   ├── app/
│   │       │   │   ├── AuthProvider.jsx
│   │       │   │   ├── AuthInitializer.jsx
│   │       │   │   └── AuthListener.jsx
│   │       │   ├── pages/
│   │       │   │   ├── Login/
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
│   │       │   │   │   ├── ResetPasswordForm.jsx
│   │       │   │   │   └── OTPForm.jsx
│   │       │   │   ├── guards/
│   │       │   │   │   ├── ProtectedRoute.jsx
│   │       │   │   │   ├── RoleGuard.jsx
│   │       │   │   │   ├── PermissionGuard.jsx
│   │       │   │   │   └── GuestGuard.jsx
│   │       │   │   ├── session/
│   │       │   │   │   ├── ActiveSession.jsx
│   │       │   │   │   ├── DeviceHistory.jsx
│   │       │   │   │   └── SessionTimeoutModal.jsx
│   │       │   │   └── ui/
│   │       │   │       ├── AuthLayout.jsx
│   │       │   │       ├── AuthCard.jsx
│   │       │   │       ├── AuthBanner.jsx 
│   │       │   │       ├── AuthDivider.jsx
│   │       │   │       ├── SocialLoginButton.jsx
│   │       │   │       └── LoadingOverlay.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useAuth.js
│   │       │   │   ├── useLogin.js
│   │       │   │   ├── useLogout.js
│   │       │   │   ├── usePermission.js
│   │       │   │   ├── useSession.js
│   │       │   │   ├── useRefreshToken.js 
│   │       │   │   ├── useCurrentUser.js
│   │       │   │   └── useIdleTimeout.js
│   │       │   ├── store/
│   │       │   │   ├── authSlice.js
│   │       │   │   ├── authSelectors.js
│   │       │   │   ├── authActions.js
│   │       │   │   └── authThunks.js
│   │       │   ├── services/
│   │       │   │   ├── authService.js
│   │       │   │   ├── tokenService.js
│   │       │   │   ├── sessionServices.js
│   │       │   │   ├── permissionService.js
│   │       │   │   └── storageService.js
│   │       │   ├── security/
│   │       │   │   ├── csrf.js 
│   │       │   │   ├── fingerprint.js
│   │       │   │   ├── securityStorage.js
│   │       │   │   ├── tokenEncryption.js 
│   │       │   │   ├── rateLimiter.js 
│   │       │   │   ├── deviceTrust.js
│   │       │   │   └── anomalyDetection.js
│   │       │   ├── permissions/
│   │       │   │   ├── roles.js 
│   │       │   │   ├── permission.js
│   │       │   │   ├── polices.js
│   │       │   │   ├── accessMatrix.js
│   │       │   │   └── permissionResolver.js
│   │       │   ├── validations/
│   │       │   │   ├── loginSchema.js 
│   │       │   │   ├── registerSchema.js
│   │       │   │   ├── passwordSchema.js
│   │       │   │   ├── otpSchema.js
│   │       │   │   └── commonRules.js
│   │       │   ├── constants/
│   │       │   │   ├── authRoutes.js
│   │       │   │   ├── authMessages.js
│   │       │   │   ├── authEvents.js
│   │       │   │   ├── authStorageKeys.js 
│   │       │   │   └── authConstants.js
│   │       │   ├── utils/
│   │       │   │   ├── jwtHelpers.js
│   │       │   │   ├── authHelpers.js 
│   │       │   │   ├── redirectHelpers.js
│   │       │   │   ├── sessionHelpers.js
│   │       │   │   ├── cookieHelpers.js
│   │       │   │   └── authErrorHelpers.js
│   │       │   ├── middleware/ 
│   │       │   │   ├── authMiddleware.js
│   │       │   │   ├── permissionMiddleware.js
│   │       │   │   └── sessionMiddleware.js
│   │       │   ├── types/ 
│   │       │   │   ├── auth.types.js
│   │       │   │   ├── session.types.js
│   │       │   │   └── permission.types.js
│   │       │   ├── config/ 
│   │       │   │   ├── authConfig.js
│   │       │   │   └── oauthConfig.js
│   │       │   └── index.js
│   │       │
│   │       ├── dashboard/
│   │       │   ├── api/
│   │       │   │   ├── dashboardApi.js
│   │       │   │   ├── dashboardEndpoints.js
│   │       │   │   ├── dashboardTransformer.js
│   │       │   │   ├── dashboardAdapter.js
│   │       │   │   └── dashboardQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── DashboardPage.jsx 
│   │       │   │   ├── AnalyticsDashboardPage.jsx
│   │       │   │   ├── ExecutiveDashboardPage.jsx
│   │       │   │   ├── WarehouseDashboardPage.jsx
│   │       │   │   ├── SaleDashboardPage.jsx
│   │       │   │   └── FinancialDashboardPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── widget/
│   │       │   │   │   ├── StatsWidget.jsx 
│   │       │   │   │   ├── RevenueWidget.jsx
│   │       │   │   │   ├── InventoryWidget.jsx
│   │       │   │   │   ├── SupplierWidget.jsx 
│   │       │   │   │   ├── ProfitWidget.jsx 
│   │       │   │   │   ├── LowStockWidget.jsx 
│   │       │   │   │   └── ActivityWidget.jsx
│   │       │   │   ├── charts/
│   │       │   │   │   ├── SalesChart.jsx 
│   │       │   │   │   ├── InventoryChart.jsx 
│   │       │   │   │   ├── RevenueChart.jsx 
│   │       │   │   │   ├── OrdersChart.jsx 
│   │       │   │   │   ├── SupplierPerformanceChart.jsx 
│   │       │   │   │   ├── DemandForecastChart.jsx 
│   │       │   │   │   └── ProfitTrendChart.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── RevenueAnalytics.jsx 
│   │       │   │   │   ├── SalesAnalytics.jsx 
│   │       │   │   │   ├── InventoryAnalytics.jsx 
│   │       │   │   │   ├── ProcurementaAnalytics.jsx
│   │       │   │   │   ├── CustomerAnalytics.jsx 
│   │       │   │   │   └── FinancialAnalytics.jsx
│   │       │   │   ├── tables/
│   │       │   │   │   ├── RecentOrdersTable.jsx 
│   │       │   │   │   ├── TopProductsTable.jsx 
│   │       │   │   │   ├── LowStockTable.jsx 
│   │       │   │   │   ├── SupplierPerformanceTable.jsx 
│   │       │   │   │   └── RevenueBreakdownTable.jsx
│   │       │   │   ├── cards/
│   │       │   │   │   ├── StatsCard.jsx 
│   │       │   │   │   ├── RevenueCard.jsx 
│   │       │   │   │   ├── InventoryCard.jsx 
│   │       │   │   │   ├── SalesCard.jsx 
│   │       │   │   │   ├── ProfitCard.jsx 
│   │       │   │   │   └── ActivityCard.jsx
│   │       │   │   ├── feeds/
│   │       │   │   │   ├── ActivityFeed.jsx 
│   │       │   │   │   ├── RecentOrdersFeed.jsx 
│   │       │   │   │   ├── NotificationsFeed.jsx 
│   │       │   │   │   └── AuditFeed.jsx
│   │       │   │   ├── alerts/
│   │       │   │   │   ├── LowStockAlert.jsx
│   │       │   │   │   ├── DelayedShipmentAlert.jsx
│   │       │   │   │   ├── PaymentAlert.jsx 
│   │       │   │   │   └── SystemAlert.jsx
│   │       │   │   ├── filters/
│   │       │   │   │   ├── DashboardFilters.jsx
│   │       │   │   │   ├── DateRangeFilter.jsx
│   │       │   │   │   ├── warehouseFilter.jsx
│   │       │   │   │   └── supplierfilter.jsx
│   │       │   │   ├── realtime/
│   │       │   │   │   ├── LiveInventoryTracker.jsx 
│   │       │   │   │   ├── RealtimeOrders.jsx 
│   │       │   │   │   └── ActiveUserWidget.jsx
│   │       │   │   └── ai/
│   │       │   │       ├── DemandForecast.jsx 
│   │       │   │       ├── RevenuePrediction.jsx
│   │       │   │       ├── SmartInsights.jsx
│   │       │   │       └── InventoryRecommendations.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useDashboard.js
│   │       │   │   ├── useDashboardMetrics.js 
│   │       │   │   ├── useDashboardFilter.js 
│   │       │   │   ├── useSalesAnalytics.js 
│   │       │   │   ├── useInventoryAnalytics.js
│   │       │   │   ├── useRealtimeDashboard.js 
│   │       │   │   └── useExecutiveMetrics.js
│   │       │   ├── services/
│   │       │   │   ├── dashboardService.js
│   │       │   │   ├── analyticsService.js
│   │       │   │   ├── reportingService.js
│   │       │   │   ├── forecastingService.js
│   │       │   │   └── realtimeDashboardService.js
│   │       │   ├── validations/
│   │       │   │   ├── dashboardFilterSchema.js
│   │       │   │   └── analyticsFilterSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── dashboardWidgets.js
│   │       │   │   ├── dashboardRoutes.js
│   │       │   │   ├── chartTypes.js
│   │       │   │   ├── analyticsPeriods.js
│   │       │   │   └── dashboardPermissions.js
│   │       │   ├── utils/
│   │       │   │   ├── dashboardHelpers.js
│   │       │   │   ├── analyticsCalculations.js
│   │       │   │   ├── chartFormatter.js
│   │       │   │   ├── metricCalculations.js
│   │       │   │   ├── kpiFormatter.js 
│   │       │   │   └── forecastHelpers.js
│   │       │   ├── store/
│   │       │   │   ├── dashboardSlice.js
│   │       │   │   ├── analyticsSlice.js
│   │       │   │   └── realtimeDashboardSlice.js
│   │       │   └── services/
│   │       │       ├── inventoryApi.js
│   │       │       ├── inventoryEndpoints.js
│   │       │       ├── inventoryTransformers.js
│   │       │       └── inventoryAdapters.js
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
│   │       │   ├── hooks/
│   │       │   │   ├── useProduct.js
│   │       │   │   ├── useInventory.js
│   │       │   │   └── useInventoryStats.js
│   │       │   ├── services/
│   │       │   │   └── inventoryService.js
│   │       │   ├── validations/
│   │       │   │   └── InventorySchema.js
│   │       │   └── utils/
│   │       │       ├── inventoryHelpers.js
│   │       │       └── stockCalculator.js
│   │       │
│   │       ├── products/
│   │       ├── suppliers/
│   │       │   ├── api/
│   │       │   │   ├── supplierApi.js
│   │       │   │   ├── supplierEndpoints.js
│   │       │   │   ├── supplierTransformers.js
│   │       │   │   ├── supplierAdapter.js
│   │       │   │   └── supplierQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── SuppliersPage.jsx 
│   │       │   │   ├── CreateSupplierPage.jsx
│   │       │   │   ├── SupplierDetailsPage.jsx
│   │       │   │   ├── EditSupplierPage.jsx 
│   │       │   │   ├── SupplierOrderPage.jsx 
│   │       │   │   ├── SupplierPaymentPage.jsx
│   │       │   │   ├── SupplierContactsPage.jsx
│   │       │   │   └── SupplierAnalyticsPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── forms/
│   │       │   │   │   ├── SupplierForm.jsx
│   │       │   │   │   ├── SupplierContactForm.jsx
│   │       │   │   │   ├── SupplierAddressForm.jsx
│   │       │   │   │   ├── SupplierPaymentForm.jsx
│   │       │   │   │   └── SupplierContractForm.jsx
│   │       │   │   ├── tables/
│   │       │   │   │   ├── SuppliersTable.jsx
│   │       │   │   │   ├── SupplierOrderTable.jsx
│   │       │   │   │   ├── SupplierPaymentsTable.jsx
│   │       │   │   │   └── SupplierProductsTable.jsx
│   │       │   │   ├── cards/
│   │       │   │   │   ├── SupplierCard.jsx
│   │       │   │   │   ├── SupplierStatsCard.jsx
│   │       │   │   │   ├── SupplierPerformanceCard.jsx
│   │       │   │   │   └── SupplierContactCard.jsx
│   │       │   │   ├── lists/
│   │       │   │   │   ├── SupplierList.jsx
│   │       │   │   │   ├── SupplierContactsList.jsx
│   │       │   │   │   └── SupplierDocumentsList.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── SupplierAnalytics.jsx
│   │       │   │   │   ├── SupplierPerformanceChart.jsx
│   │       │   │   │   ├── SupplierRevenueChart.jsx
│   │       │   │   │   └── SupplierReliabilityMetrics.jsx
│   │       │   │   ├── status/
│   │       │   │   │   ├── SupplierStatusBadge.jsx
│   │       │   │   │   ├── ContactStatusBadge.jsx
│   │       │   │   │   └── PaymentStatusBadge.jsx
│   │       │   │   ├── procurement/
│   │       │   │   │   ├── PurchaseOrderSummary.jsx
│   │       │   │   │   ├── ProcurementTimeline.jsx
│   │       │   │   │   └── SupplierLeadTime.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── DeleteSupplierModal.jsx
│   │       │   │       ├── SuspendSupplierModal.jsx
│   │       │   │       ├── AddSupplierContactModal.jsx
│   │       │   │       └── SupplierContactModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useSuppliers.js
│   │       │   │   ├── useSupplierDetails.js
│   │       │   │   ├── useCreateSupplier.js
│   │       │   │   ├── useUpdateSupplier.js
│   │       │   │   ├── useSupplierOrders.js
│   │       │   │   ├── useSupplierPayment.js
│   │       │   │   └── useSupplierAnalytics.js
│   │       │   │  
│   │       │   ├── services/
│   │       │   │   ├── supplierService.js
│   │       │   │   ├── supplierPaymentService.js
│   │       │   │   ├── supplierContractService.js
│   │       │   │   ├── procurementService.js
│   │       │   │   └── supplierAnalyticsService.js
│   │       │   │   
│   │       │   ├── validations/
│   │       │   │   ├── supplierSchema.js
│   │       │   │   ├── supplierContactSchema.js
│   │       │   │   ├── supplierAddressSchema.js
│   │       │   │   ├── supplierPaymentSchema.js
│   │       │   │   └── supplierContractSchema.js
│   │       │   │   
│   │       │   ├── constants/
│   │       │   │   ├── supplierStatus.js
│   │       │   │   ├── supplierTypes.js
│   │       │   │   ├── paymentTerms.js
│   │       │   │   ├── procurementStatus.js
│   │       │   │   └── supplierRoutes.js
│   │       │   ├── utils/
│   │       │   │   ├── supplierHelpers.js
│   │       │   │   ├── supplierFormatter.js
│   │       │   │   ├── supplierCaculations.js 
│   │       │   │   ├── supplierRanking.js
│   │       │   │   ├── procurementHelpers.js
│   │       │   │   └── contractHelpers.jsx
│   │       │   ├── store/
│   │       │   │   ├── supplierSlice.js
│   │       │   │   ├── procurementSlice.js
│   │       │   │   └── supplierAnalyticsSlice.js
│   │       │   │  
│   │       │   ├── tests/ 
│   │       │   │   
│   │       │   ├── types/ 
│   │       │   │   └── supplier.types.js
│   │       │   └── index.js
│   │       ├── orders/
│   │       │   ├── api/
│   │       │   │   ├── orderApi.js
│   │       │   │   ├── orderEndpoints.js
│   │       │   │   ├── orderTransformer.js
│   │       │   │   ├── orderAdapter.js
│   │       │   │   └── orderQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── OrdersPage.jsx 
│   │       │   │   ├── CreateOrderPage.jsx
│   │       │   │   ├── OrderDetailsPage.jsx
│   │       │   │   ├── EditOrderPage.jsx 
│   │       │   │   ├── OrderInvoicePage.jsx 
│   │       │   │   ├── OrderPaymentPage.jsx
│   │       │   │   └── OrderReturnsPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── forms/
│   │       │   │   │   ├── OrderForm.jsx
│   │       │   │   │   ├── OrderItemForm.jsx
│   │       │   │   │   ├── ShippingForm.jsx
│   │       │   │   │   ├── BillingForm.jsx
│   │       │   │   │   └── PaymentForm.jsx
│   │       │   │   ├── tables/
│   │       │   │   │   ├── OrdersTable.jsx
│   │       │   │   │   ├── OrderItemsTable.jsx
│   │       │   │   │   └── PaymentsTable.jsx
│   │       │   │   ├── cards/
│   │       │   │   │   ├── OrderCard.jsx
│   │       │   │   │   ├── InvoiceCard.jsx
│   │       │   │   │   ├── PaymentCard.jsx
│   │       │   │   │   └── CustomerOrderCard.jsx
│   │       │   │   ├── status/
│   │       │   │   │   ├── OrderStatusBadge.jsx
│   │       │   │   │   ├── PaymentStatusBadge.jsx
│   │       │   │   │   └── ShippingStatusBadge.jsx
│   │       │   │   ├── invoice/
│   │       │   │   │   ├── InvoicePreview.jsx
│   │       │   │   │   ├── InvoiceDownload.jsx
│   │       │   │   │   ├── InvoiceHeader.jsx
│   │       │   │   │   └── InvoiceItems.jsx
│   │       │   │   ├── payments/
│   │       │   │   │   ├── PaymentSummary.jsx
│   │       │   │   │   ├── PaymentMethod.jsx
│   │       │   │   │   ├── TransactionHistory.jsx
│   │       │   │   │   └── RefundSummary.jsx
│   │       │   │   ├── shipping/
│   │       │   │   │   ├── ShippingTracker.jsx
│   │       │   │   │   ├── DeliveryTimeline.jsx
│   │       │   │   │   └── ShippingAddress.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── OrderAnalytics.jsx
│   │       │   │   │   ├── RevenueChart.jsx
│   │       │   │   │   ├── SalesSummary.jsx
│   │       │   │   │   └── TopCustomers.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── CancelOrderModal.jsx
│   │       │   │       ├── RefundModal.jsx
│   │       │   │       ├── UpdateStatusModal.jsx
│   │       │   │       └── PaymentConfirmationModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useOrders.js
│   │       │   │   ├── useOrderDetails.js
│   │       │   │   ├── useCreateOrder.js
│   │       │   │   ├── useUpdateOrder.js 
│   │       │   │   ├── useOrderPayments.js
│   │       │   │   ├── useInvoices.js
│   │       │   │   └── useOrderAnalytics.js
│   │       │   │   
│   │       │   ├── services/
│   │       │   │   ├── orderService.js
│   │       │   │   ├── invoiceService.js 
│   │       │   │   ├── paymentService.js
│   │       │   │   ├── shippingService.js
│   │       │   │   └── refundService.js
│   │       │   │   
│   │       │   ├── validations/
│   │       │   │   ├── orderSchema.js 
│   │       │   │   ├── paymentSchema.js
│   │       │   │   ├── shippingSchema.js
│   │       │   │   └── refundSchema.js
│   │       │   │   
│   │       │   ├── constants/
│   │       │   │   ├── orderStatus.js 
│   │       │   │   ├── paymentStatus.js 
│   │       │   │   ├── shippingStatus.js
│   │       │   │   ├── paymentMethod.js
│   │       │   │   └── orderRoutes.js
│   │       │   │   
│   │       │   ├── utils/
│   │       │   │   ├── orderHelpers.js 
│   │       │   │   ├── orderCalculations.js 
│   │       │   │   ├── invoiceGenerator.js 
│   │       │   │   ├── paymentHelpers.js
│   │       │   │   ├── taxCalculator.js
│   │       │   │   └── shippingCalculator.js
│   │       │   │   
│   │       │   ├── store/
│   │       │   │   ├── orderSlice.js
│   │       │   │   ├── paymentSlice.js
│   │       │   │   └── invoiceSlice.js
│   │       │   │   
│   │       │   └── index.js
│   │       │
│   │       ├── procurement/
│   │       │   ├── api/
│   │       │   │   ├── procurementApi.js
│   │       │   │   ├── procurementEndpoints.js
│   │       │   │   ├── procurementTransformer.js
│   │       │   │   ├── procurementAdapter.js
│   │       │   │   └── procurementQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── ProcurementDashboardPage.jsx
│   │       │   │   ├── PurchaseOrderPage.jsx
│   │       │   │   ├── PurchaseOrderDetailsPage.jsx 
│   │       │   │   ├── CreatePurchaseOrderPage.jsx 
│   │       │   │   ├── PurchaseRequisitionsPage.jsx
│   │       │   │   ├── CreateREquisitionPage.jsx
│   │       │   │   ├── SuppliersPage.jsx
│   │       │   │   ├── SupplierContactsPage.jsx
│   │       │   │   ├── RequestForQuotationPage.jsx 
│   │       │   │   ├── ProcurementApprovalsPage.jsx
│   │       │   │   ├── ProcurementAnalyticsPage.jsx
│   │       │   │   ├── GoodsReceivingPage.jsx 
│   │       │   │   └── InvoiceReconciliationPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── purcjase-orders/
│   │       │   │   │   ├── PurchaseOrderForm.jsx
│   │       │   │   │   ├── PurchaseOrdersTable.jsx
│   │       │   │   │   ├── PurchaseOrderCard.jsx
│   │       │   │   │   ├── PurchaseOrderStatusBadge.jsx 
│   │       │   │   │   ├── PurchaseOrderTimeLine.jsx
│   │       │   │   │   ├── PurchaseOrderTimeTable.jsx
│   │       │   │   │   └── PurchaseOrderSummary.jsx
│   │       │   │   ├── reguisitions/
│   │       │   │   │   ├── RequisitionForm.jsx
│   │       │   │   │   ├── RequisitionTable.jsx
│   │       │   │   │   ├── RequisitionApprovalPanel.jsx 
│   │       │   │   │   ├── RequisitionStatusBadge.jsx 
│   │       │   │   │   └── RequisitionDetailsCard.jsx
│   │       │   │   ├── rfg/
│   │       │   │   │   ├── RfgForm.jsx 
│   │       │   │   │   ├── RfgTable.jsx 
│   │       │   │   │   ├── SupplierQuotationCard.jsx
│   │       │   │   │   ├── QuotationComparisionTable.jsx
│   │       │   │   │   ├── BidEvaluationaPanel.jsx 
│   │       │   │   │   └── RfgStatusBadge.jsx
│   │       │   │   ├── suppliers/
│   │       │   │   │   ├── ExportButtons.jsx 
│   │       │   │   │   ├── ExportPDFButton.jsx 
│   │       │   │   │   ├── ExportExcelButton.jsx 
│   │       │   │   │   ├── ExportCSVButton.jsx
│   │       │   │   │   └── PrintReportButton.jsx
│   │       │   │   ├── approvals/
│   │       │   │   │   ├── RevenueAnalytics.jsx 
│   │       │   │   │   ├── ProfitAnalytics.jsx
│   │       │   │   │   ├── InventoryAnalytics.jsx 
│   │       │   │   │   ├── ProcurementAnalytics.jsx
│   │       │   │   │   └── ForecastAnalytics.jsx
│   │       │   │   ├── receiving/
│   │       │   │   │   ├── GoodReceivingFor,.jsx 
│   │       │   │   │   ├── ReceivedItemsTable.jsx 
│   │       │   │   │   ├── DeliveryInspectionPanel.jsx
│   │       │   │   │   ├── ReceivingStatusBadge.jsx
│   │       │   │   │   └── DeliveryTrackingCard.jsx
│   │       │   │   ├── invoices/
│   │       │   │   │   ├── AuditLogs.jsx 
│   │       │   │   │   ├── UseActivityReport.jsx 
│   │       │   │   │   ├── InventoryAuditReport.jsx
│   │       │   │   │   └── SecurityAuditReport.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── DemandForecast.jsx
│   │       │   │   │   ├── RevenueForecast.jsx
│   │       │   │   │   └── RestockAuditReport.jsx
│   │       │   │   ├── contacts/
│   │       │   │   │   ├── DemandForecast.jsx
│   │       │   │   │   ├── RevenueForecast.jsx
│   │       │   │   │   └── RestockAuditReport.jsx
│   │       │   │   ├── realtime/
│   │       │   │   │   ├── DemandForecast.jsx
│   │       │   │   │   ├── RevenueForecast.jsx
│   │       │   │   │   └── RestockAuditReport.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── CreatePurchaseOrderModal.jsx
│   │       │   │       ├── ApprovalDecisionModal.jsx
│   │       │   │       ├── SupplierSelectionModal.jsx
│   │       │   │       ├── ContractRenewalModal.jsx
│   │       │   │       └── ExportOptionalModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useReports.js
│   │       │   │   ├── useSalesReports.js
│   │       │   │   ├── useInventoryReports.js
│   │       │   │   ├── useFinancialReports.js
│   │       │   │   ├── useForecastReports.js
│   │       │   │   ├── useReportExport.js
│   │       │   │   └── useScheduledReports.js
│   │       │   ├── services/
│   │       │   │   ├── reportsService.js
│   │       │   │   ├── exportSevice.js
│   │       │   │   ├── analyticsService.js 
│   │       │   │   ├── forecastService.js 
│   │       │   │   ├── pdfGeneratorService.js 
│   │       │   │   └── scheduledReportsService.js 
│   │       │   ├── validations/
│   │       │   │   ├── reportFilterSchema.js
│   │       │   │   ├── exportOptionsSchema.js
│   │       │   │   └── scheduledReportSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── reportTypes.js
│   │       │   │   ├── exportFormats.js
│   │       │   │   ├── analyticsPeriods.js
│   │       │   │   ├── reportRoutes.js
│   │       │   │   └── reportPermission.js
│   │       │   ├── utils/
│   │       │   │   ├── reportHelpers.js
│   │       │   │   ├── reportFormatter.js
│   │       │   │   ├── reportCaculations.js
│   │       │   │   ├── exportHelpers.js
│   │       │   │   ├── chartHelpers.js
│   │       │   │   └── reportTemplates.js
│   │       │   ├── store/
│   │       │   │   ├── reportsSlice.js
│   │       │   │   ├── analyticsSlice.js
│   │       │   │   └── exportSlice.js
│   │       │   ├── types/
│   │       │   └── index.js
│   │       │
│   │       ├── analytics/
│   │       │   ├── api/
│   │       │   │   ├── analyticsApi.js
│   │       │   │   ├── analyticsEndpoints.js
│   │       │   │   ├── analyticsTransformer.js
│   │       │   │   ├── analyticsAdapter.js
│   │       │   │   └── analyticsQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── AnalyticsPage.jsx
│   │       │   │   ├── SalesAnalyticsPage.jsx
│   │       │   │   ├── InventoryAnalyticsPage.jsx 
│   │       │   │   ├── FinancialAnalyticsPage.jsx 
│   │       │   │   ├── ProcurementAnalyticsPage.jsx
│   │       │   │   ├── CustomerAnalyticsPage.jsx
│   │       │   │   ├── WarehouseAnalyticsPage.jsx
│   │       │   │   ├── ForecastAnalyticsPage.jsx
│   │       │   │   └── ExecutiveAnalyticsPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── charts/
│   │       │   │   │   ├── RevenueTrendChart.jsx
│   │       │   │   │   ├── SalesPerformanceChart.jsx
│   │       │   │   │   ├── InventoryTurnoverChart.jsx
│   │       │   │   │   ├── ProfitMarginChart.jsx 
│   │       │   │   │   ├── DemandForecastChart.jsx
│   │       │   │   │   ├── WarehouseEfficiencyChart.jsx
│   │       │   │   │   ├── SupplierPerformanceChart.jsx
│   │       │   │   │   ├── CustomerGrowthChart.jsx 
│   │       │   │   │   ├── PrecurementTrendChart.jsx
│   │       │   │   │   └── OrderFulfillmentChart.jsx
│   │       │   │   ├── kpi/
│   │       │   │   │   ├── RevenueKPI.jsx
│   │       │   │   │   ├── ProfitKPI.jsx 
│   │       │   │   │   ├── InventoryKPI.jsx 
│   │       │   │   │   ├── OrdersKPI.jsx 
│   │       │   │   │   ├── WarehourseKPI.jsx
│   │       │   │   │   ├── SupplierKPI.jsx
│   │       │   │   │   └── CustomerKPI.jsx
│   │       │   │   ├── dashboards/
│   │       │   │   │   ├── ExecutiveAnalyticsDashboard.jsx 
│   │       │   │   │   ├── InventoryAnalyticsDashboard.jsx 
│   │       │   │   │   ├── SalesAnalyticsDashboard.jsx
│   │       │   │   │   ├── ProcurementAnalyticsDashboard.jsx
│   │       │   │   │   └── FinancialAnalyticsDashboard.jsx
│   │       │   │   ├── insights/
│   │       │   │   │   ├── SmartInsights.jsx 
│   │       │   │   │   ├── RevenueInsights.jsx 
│   │       │   │   │   ├── InventoryInsights.jsx 
│   │       │   │   │   ├── ProcurementInsights.jsx
│   │       │   │   │   ├── CustomerInsights.jsx
│   │       │   │   │   └── ForecastInsights.jsx
│   │       │   │   ├── forecasts/
│   │       │   │   │   ├── DemandForecast.jsx 
│   │       │   │   │   ├── RevenueForcast.jsx
│   │       │   │   │   ├── ProfitForecast.jsx 
│   │       │   │   │   ├── RestockPrediction.jsx
│   │       │   │   │   ├── SeasonalTrendPrediction.jsx
│   │       │   │   │   └── SupplierRiskPrediction.jsx
│   │       │   │   ├── filters/
│   │       │   │   │   ├── AnalyticsFilters.jsx 
│   │       │   │   │   ├── DateRangeFilter.jsx 
│   │       │   │   │   ├── WarehouseFilter.jsx
│   │       │   │   │   ├── SupplierFilter.jsx
│   │       │   │   │   ├── ProductFilter.jsx
│   │       │   │   │   ├── RegionFilter.jsx
│   │       │   │   │   └── ComparisonFilter.jsx
│   │       │   │   ├── comparisons/
│   │       │   │   │   ├── SalesComparision.jsx 
│   │       │   │   │   ├── RevenueComparision.jsx 
│   │       │   │   │   ├── WarehouseComparison.jsx
│   │       │   │   │   ├── SupplierComparison.jsx
│   │       │   │   │   └── ProductComparison.jsx
│   │       │   │   ├── realtime/
│   │       │   │   │   ├── LiveSaleMetricts.jsx
│   │       │   │   │   ├── LiveInventoryMetrics.jsx
│   │       │   │   │   ├── ActiveOrdersTracker.jsx
│   │       │   │   │   └── RealtimeAnalyticsFeed.jsx
│   │       │   │   ├── tables/
│   │       │   │   │   ├── AnalyticsTable.jsx
│   │       │   │   │   ├── RevenueBreakdownTable.jsx
│   │       │   │   │   ├── ProductPerformanceTable.jsx 
│   │       │   │   │   ├── SupplierPerformanceTable.jsx
│   │       │   │   │   ├── WarehouseEfficiencyTable.jsx
│   │       │   │   │   └── ForecastResultsTable.jsx
│   │       │   │   ├── widgets/
│   │       │   │   │   ├── RevenueWidget.jsx
│   │       │   │   │   ├── ProfitWidget.jsx
│   │       │   │   │   ├── OrdersWidget.jsx
│   │       │   │   │   ├── InventoryWidget.jsx
│   │       │   │   │   ├── ForecastWidget.jsx
│   │       │   │   │   └── CustomerGrowWidget.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── AnalyticsExportModal.jsx
│   │       │   │       ├── SaveAnalyticsViewModal.jsx
│   │       │   │       ├── ComparisionSettingsModal.jsx
│   │       │   │       └── ForecastConfigurationModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useAnalytics.js
│   │       │   │   ├── useSalesAnalytics.js
│   │       │   │   ├── useInventoryAnalytics.js
│   │       │   │   ├── useFinancialAnalytics.js
│   │       │   │   ├── useForecaseAnalytics.js
│   │       │   │   ├── useRealtimeAnalytics.js
│   │       │   │   ├── useAnalyticsFilters.js
│   │       │   │   ├── useKpiMetrics.js
│   │       │   │   └── useAnalyticsComparisons.js
│   │       │   ├── services/
│   │       │   │   ├── analyticsService.js
│   │       │   │   ├── forecastingService.js
│   │       │   │   ├── revenueAnalyticsService.js 
│   │       │   │   ├── inventoryAnalyticsService.js 
│   │       │   │   ├── procurementAnalyticsService.js 
│   │       │   │   ├── realtimeAnalyticsService.js
│   │       │   │   └── predictiveAnalyticsService.js
│   │       │   ├── validations/
│   │       │   │   ├── analyticsFilterSchema.js 
│   │       │   │   ├── forecastSchema.js
│   │       │   │   ├── comparisionSchema.js
│   │       │   │   └── analyticsExportSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── analyticsTypes.js
│   │       │   │   ├── analyticsPeriods.js
│   │       │   │   ├── chartTypes.js
│   │       │   │   ├── kpiMetrics.js
│   │       │   │   ├── analyticsRoutes.js
│   │       │   │   └── forecastModels.js
│   │       │   ├── utils/
│   │       │   │   ├── analyticsHelpers.js
│   │       │   │   ├── analyticsCalculations.js
│   │       │   │   ├── chartFormatter.js
│   │       │   │   ├── kpiCalculations.js
│   │       │   │   ├── trendAnalysis.js
│   │       │   │   ├── forecastHelpers.js
│   │       │   │   ├── comparisonHelpers.js
│   │       │   │   └── anomalyDetection.js
│   │       │   ├── store/
│   │       │   │   ├── analyticsSlice.js
│   │       │   │   ├── forecastSlice.js
│   │       │   │   ├── realtimeAnalyticsSlice.js
│   │       │   │   └── kpiSlice.js
│   │       │   ├── worker/
│   │       │   │   ├── analyticsWorker.js
│   │       │   │   └── forecastWorker.js
│   │       │   ├── types/
│   │       │   │   └── analytics.types.js
│   │       │   ├── types/
│   │       │   └── index.js
│   │       │
│   │       ├── notifications/
│   │       │   ├── api/
│   │       │   │   ├── notificationApi.js
│   │       │   │   ├── notificationEndpoints.js
│   │       │   │   ├── notificationTransformer.js
│   │       │   │   ├── notificationAdapter.js
│   │       │   │   └── notificationQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── NotificationsPage.jsx
│   │       │   │   ├── NotificationCenterPage.jsx
│   │       │   │   ├── NotificationPreferencesPage.jsx 
│   │       │   │   ├── NotificationHistoryPage.jsx 
│   │       │   │   └── SystemAlertPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── lists/
│   │       │   │   │   ├── NotificationsList.jsx
│   │       │   │   │   ├── UnreadNotificationsList.jsx
│   │       │   │   │   ├── SystemAlertList.jsx
│   │       │   │   │   └── ActivityNotificationsList.jsx
│   │       │   │   ├── items/
│   │       │   │   │   ├── NotificationItem.jsx
│   │       │   │   │   ├── AlertItem.jsx 
│   │       │   │   │   ├── OrderNotificationItem.jsx 
│   │       │   │   │   ├── InventoryNotificationItem.jsx 
│   │       │   │   │   ├── PaymentNotificationItem.jsx
│   │       │   │   │   └── SecurityNotificationItem.jsx
│   │       │   │   ├── badges/
│   │       │   │   │   ├── NotificationBadge.jsx 
│   │       │   │   │   ├── PriorityBadge.jsx 
│   │       │   │   │   ├── StatusBadge.jsx
│   │       │   │   │   └── ChannelBadge.jsx
│   │       │   │   ├── dropdowns/
│   │       │   │   │   ├── NotificationDropdowns.jsx 
│   │       │   │   │   ├── NotificationPreview.jsx 
│   │       │   │   │   └── NotificationPopover.jsx
│   │       │   │   ├── alerts/
│   │       │   │   │   ├── LowStockAlert.jsx 
│   │       │   │   │   ├── DelayedShipmentAlert.jsx
│   │       │   │   │   ├── PaymentFailedAlert.jsx 
│   │       │   │   │   ├── SecurityAlert.jsx
│   │       │   │   │   ├── SystemMaintenanceAlert.jsx
│   │       │   │   │   └── AuditAlert.jsx
│   │       │   │   ├── preferences/
│   │       │   │   │   ├── NotificationPreferencesForm.jsx 
│   │       │   │   │   ├── EmailPreferences.jsx 
│   │       │   │   │   ├── PushPreferences.jsx
│   │       │   │   │   ├── SmsPreferences.jsx
│   │       │   │   │   └── ChannelPreferences.jsx
│   │       │   │   ├── realtime/
│   │       │   │   │   ├── LiveNotifications.jsx 
│   │       │   │   │   ├── NotificationListener.jsx 
│   │       │   │   │   ├── NotificationSound.jsx
│   │       │   │   │   └── RealtimeIndicator.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── NotificationAnalytics.jsx
│   │       │   │   │   ├── DeliveryMetrics.jsx
│   │       │   │   │   ├── EngagementMetrics.jsx
│   │       │   │   │   └── NotificationTrends.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── NotificationDetailsModal.jsx
│   │       │   │       ├── MarkAllReadModal.jsx
│   │       │   │       ├── DeleteNotificationModal.jsx
│   │       │   │       └── AlertsettingsModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useNotifications.js
│   │       │   │   ├── useUnreadNotifications.js
│   │       │   │   ├── useNotificationPreferences.js
│   │       │   │   ├── useRealtimeNotifications.js
│   │       │   │   ├── useNotificationAnalytics.js
│   │       │   │   ├── useNotificationFilters.js
│   │       │   │   └── useNotificationActions.js
│   │       │   ├── services/
│   │       │   │   ├── notificationService.js
│   │       │   │   ├── realtimeNotificationService.js
│   │       │   │   ├── emailNotificationService.js
│   │       │   │   ├── pushNotificationService.js 
│   │       │   │   ├── smsNotificationService.js 
│   │       │   │   ├── notificationPreferenceService.js 
│   │       │   │   └── notificationAnalyticsService.js 
│   │       │   ├── validations/
│   │       │   │   ├── notificationSchema.js
│   │       │   │   ├── notificationPreferenceSchema.js
│   │       │   │   ├── alertRuleSchema.js
│   │       │   │   └── notificationFilterSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── notificationTypes.js
│   │       │   │   ├── notificationChannels.js
│   │       │   │   ├── notificationPriority.js
│   │       │   │   ├── notificationStatus.js
│   │       │   │   ├── notificationRoutes.js
│   │       │   │   └── alertTypes.js
│   │       │   ├── utils/
│   │       │   │   ├── notificationHelpers.js
│   │       │   │   ├── notificationFormatter.js
│   │       │   │   ├── notificationGroping.js
│   │       │   │   ├── notificationSound.js
│   │       │   │   ├── notificationPermissions.js
│   │       │   │   └── alertGenerator.js
│   │       │   ├── store/
│   │       │   │   ├── notificationSlice.js
│   │       │   │   ├── realtimeNotificationSlice.js
│   │       │   │   └── notificationPreferencesSlice.js
│   │       │   ├── types/
│   │       │   │   └── notification.types.js
│   │       │   └── index.js
│   │       │
│   │       ├── reporting/
│   │       │   ├── api/
│   │       │   │   ├── reportsApi.js
│   │       │   │   ├── reportsEndpoints.js
│   │       │   │   ├── reportsTransformer.js
│   │       │   │   ├── reportsAdapter.js
│   │       │   │   └── reportsQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── ReportsPage.jsx
│   │       │   │   ├── SalesReportsPage.jsx
│   │       │   │   ├── InventoryReportsPage.jsx 
│   │       │   │   ├── FinancialReportsPage.jsx 
│   │       │   │   ├── ProcurementReportsPage.jsx
│   │       │   │   ├── AuditReportsPage.jsx
│   │       │   │   ├── ForecastReportsPage.jsx
│   │       │   │   └── CustomReportsPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── filters/
│   │       │   │   │   ├── ReportFilters.jsx
│   │       │   │   │   ├── DateRangeFilter.jsx
│   │       │   │   │   ├── WarehouseFilter.jsx
│   │       │   │   │   ├── SupplierFilter.jsx 
│   │       │   │   │   ├── ProductFilter.jsx
│   │       │   │   │   └── ReportTypeFilter.jsx
│   │       │   │   ├── charts/
│   │       │   │   │   ├── SalesReportChart.jsx
│   │       │   │   │   ├── InventoryReportChart.jsx 
│   │       │   │   │   ├── RevenueTrendChart.jsx 
│   │       │   │   │   ├── ProfitAnalysisChart.jsx 
│   │       │   │   │   ├── SupplierPerformanceChart.jsx
│   │       │   │   │   └── ForecastChart.jsx
│   │       │   │   ├── tables/
│   │       │   │   │   ├── ReportsTable.jsx 
│   │       │   │   │   ├── SalesReportTable.jsx 
│   │       │   │   │   ├── InventoryReportTable.jsx
│   │       │   │   │   ├── FinancialReportTable.jsx
│   │       │   │   │   ├── AuditReportTable.jsx 
│   │       │   │   │   └── ForecastReportTable.jsx
│   │       │   │   ├── exports/
│   │       │   │   │   ├── ExportButtons.jsx 
│   │       │   │   │   ├── ExportPDFButton.jsx 
│   │       │   │   │   ├── ExportExcelButton.jsx 
│   │       │   │   │   ├── ExportCSVButton.jsx
│   │       │   │   │   └── PrintReportButton.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── RevenueAnalytics.jsx 
│   │       │   │   │   ├── ProfitAnalytics.jsx
│   │       │   │   │   ├── InventoryAnalytics.jsx 
│   │       │   │   │   ├── ProcurementAnalytics.jsx
│   │       │   │   │   └── ForecastAnalytics.jsx
│   │       │   │   ├── summaries/
│   │       │   │   │   ├── ReportSummary.jsx 
│   │       │   │   │   ├── FinancialSummary.jsx 
│   │       │   │   │   ├── SalesSummary.jsx
│   │       │   │   │   ├── InventorySummary.jsx
│   │       │   │   │   └── ForecastSummary.jsx
│   │       │   │   ├── audit/
│   │       │   │   │   ├── AuditLogs.jsx 
│   │       │   │   │   ├── UseActivityReport.jsx 
│   │       │   │   │   ├── InventoryAuditReport.jsx
│   │       │   │   │   └── SecurityAuditReport.jsx
│   │       │   │   ├── forecast/
│   │       │   │   │   ├── DemandForecast.jsx
│   │       │   │   │   ├── RevenueForecast.jsx
│   │       │   │   │   └── RestockAuditReport.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── ScheduleReportModal.jsx
│   │       │   │       ├── SaveReportTemplateModal.jsx
│   │       │   │       └── ExportOptionalModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useReports.js
│   │       │   │   ├── useSalesReports.js
│   │       │   │   ├── useInventoryReports.js
│   │       │   │   ├── useFinancialReports.js
│   │       │   │   ├── useForecastReports.js
│   │       │   │   ├── useReportExport.js
│   │       │   │   └── useScheduledReports.js
│   │       │   ├── services/
│   │       │   │   ├── reportsService.js
│   │       │   │   ├── exportSevice.js
│   │       │   │   ├── analyticsService.js 
│   │       │   │   ├── forecastService.js 
│   │       │   │   ├── pdfGeneratorService.js 
│   │       │   │   └── scheduledReportsService.js 
│   │       │   ├── validations/
│   │       │   │   ├── reportFilterSchema.js
│   │       │   │   ├── exportOptionsSchema.js
│   │       │   │   └── scheduledReportSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── reportTypes.js
│   │       │   │   ├── exportFormats.js
│   │       │   │   ├── analyticsPeriods.js
│   │       │   │   ├── reportRoutes.js
│   │       │   │   └── reportPermission.js
│   │       │   ├── utils/
│   │       │   │   ├── reportHelpers.js
│   │       │   │   ├── reportFormatter.js
│   │       │   │   ├── reportCaculations.js
│   │       │   │   ├── exportHelpers.js
│   │       │   │   ├── chartHelpers.js
│   │       │   │   └── reportTemplates.js
│   │       │   ├── store/
│   │       │   │   ├── reportsSlice.js
│   │       │   │   ├── analyticsSlice.js
│   │       │   │   └── exportSlice.js
│   │       │   ├── types/
│   │       │   └── index.js
│   │       │
│   │       ├── warehouse/
│   │       │   ├── api/
│   │       │   │   ├── warehouseApi.js
│   │       │   │   ├── warehouseEndpoints.js
│   │       │   │   ├── warehouseTransformer.js
│   │       │   │   ├── warehouseAdapter.js
│   │       │   │   └── warehouseQueryKeys.js
│   │       │   ├── pages/
│   │       │   │   ├── WarehousePage.jsx
│   │       │   │   ├── WarehouseDetailsPage.jsx
│   │       │   │   ├── WarehouseDashboardPage.jsx 
│   │       │   │   ├── InventoryLocationPage.jsx 
│   │       │   │   ├── StockTransferPage.jsx
│   │       │   │   ├── ReceivingPage.jsx
│   │       │   │   ├── DispatchPage.jsx
│   │       │   │   ├── PickingPackingPage.jsx
│   │       │   │   ├── BinManagementPage.jsx
│   │       │   │   ├── WarehouseAnalyticsPage.jsx
│   │       │   │   └── WarehouseAuditPage.jsx
│   │       │   ├── components/
│   │       │   │   ├── warehouse/
│   │       │   │   │   ├── WarehouseCard.jsx
│   │       │   │   │   ├── WarehouseTable.jsx
│   │       │   │   │   ├── WarehouseOverview.jsx
│   │       │   │   │   ├── WarehouseCapacity.jsx 
│   │       │   │   │   ├── WarehouseMap.jsx
│   │       │   │   │   └── WarehouseStatusBadge.jsx
│   │       │   │   ├── inventory/
│   │       │   │   │   ├── InventoryLocationTable.jsx
│   │       │   │   │   ├── BinLocationCard.jsx 
│   │       │   │   │   ├── ShelfInventoryTable.jsx 
│   │       │   │   │   ├── StockLevelIndicator.jsx 
│   │       │   │   │   ├── ExpiringInventoryList.jsx
│   │       │   │   │   └── DamagedInventoryTable.jsx
│   │       │   │   ├── transfers/
│   │       │   │   │   ├── StockTransferForm.jsx 
│   │       │   │   │   ├── TransferRequestTable.jsx 
│   │       │   │   │   ├── TransferStatusBadge.jsx
│   │       │   │   │   ├── TransferTimeline.jsx
│   │       │   │   │   ├── InterWarehouseTransfer.jsx 
│   │       │   │   │   └── TransferApprovalPanel.jsx
│   │       │   │   ├── receiving/
│   │       │   │   │   ├── ReceivingForm.jsx 
│   │       │   │   │   ├── GoodsReceiptTable.jsx 
│   │       │   │   │   ├── ReceivedItemList.jsx 
│   │       │   │   │   ├── SupplierDeliveryCard.jsx
│   │       │   │   │   └── ReceivingInspectionPanel.jsx
│   │       │   │   ├── dispatch/
│   │       │   │   │   ├── DispatchOrderTable.jsx 
│   │       │   │   │   ├── DispatchCheckList.jsx
│   │       │   │   │   ├── ShipmentSelection.jsx 
│   │       │   │   │   ├── CarrierSelection.jsx
│   │       │   │   │   └── DispatchStatusBadge.jsx
│   │       │   │   ├── picking/
│   │       │   │   │   ├── PickingList.jsx 
│   │       │   │   │   ├── PackingCheckList.jsx 
│   │       │   │   │   ├── PickerAssignment.jsx
│   │       │   │   │   ├── PickRouteOptimizer.jsx
│   │       │   │   │   └── PackingSlipPreview.jsx
│   │       │   │   ├── scanners/
│   │       │   │   │   ├── BarcodeScanner.jsx 
│   │       │   │   │   ├── QrScanner.jsx 
│   │       │   │   │   ├── ScanResultPreview.jsx
│   │       │   │   │   └── ScannerStatus.jsx
│   │       │   │   ├── analytics/
│   │       │   │   │   ├── WarehousePerformanceChart.jsx
│   │       │   │   │   ├── CapacityUtilizationChart.jsx 
│   │       │   │   │   ├── InventoryMovementChart.jsx
│   │       │   │   │   ├── FulfillmentEfficientLog.jsx
│   │       │   │   │   └── WarehouseHeatmap.jsx
│   │       │   │   ├── audit/
│   │       │   │   │   ├── WarehouseAuditLogs.jsx 
│   │       │   │   │   ├── InventoryMovementLogs.jsx 
│   │       │   │   │   ├── StockAdjustmentLogs.jsx
│   │       │   │   │   └── UserActivityLogs.jsx
│   │       │   │   ├── realtime/
│   │       │   │   │   ├── LiveWarehouseActivity.jsx 
│   │       │   │   │   ├── ActiveTransfersFeed.jsx 
│   │       │   │   │   ├── LiveInventoryUpdates.jsx
│   │       │   │   │   └── WarehouseRealtimeStatus.jsx
│   │       │   │   └── modals/
│   │       │   │       ├── CreateWarehouseModal.jsx
│   │       │   │       ├── TransferApprovalModal.jsx
│   │       │   │       ├── BinAssignmentModal.jsx 
│   │       │   │       ├── InventoryAdjustmentModal.jsx
│   │       │   │       └── DispatchConfirmationModal.jsx
│   │       │   ├── hooks/
│   │       │   │   ├── useWarehouses.js
│   │       │   │   ├── useWarehouseDetials.js
│   │       │   │   ├── useStockTransfers.js
│   │       │   │   ├── useReceiving.js
│   │       │   │   ├── useDispatch.js
│   │       │   │   ├── usePickingPacking.js
│   │       │   │   ├── useInventoryLocations.js
│   │       │   │   ├── useWarehouseAnalytics.js
│   │       │   │   ├── useRealtimeWarehouse.js
│   │       │   │   └── useBarcodeScanner.js
│   │       │   ├── services/
│   │       │   │   ├── warehouseService.js
│   │       │   │   ├── transferService.js
│   │       │   │   ├── receivingService.js 
│   │       │   │   ├── dispatchService.js 
│   │       │   │   ├── pickingPackingservice.js 
│   │       │   │   ├── warehouseAnalyticsService.js
│   │       │   │   ├── barcodeScannerService.js
│   │       │   │   └── realtimeWarehouseService.js
│   │       │   ├── validations/
│   │       │   │   ├── warehouseSchema.js
│   │       │   │   ├── stockTransferSchema.js
│   │       │   │   ├── receivingSchema.js
│   │       │   │   ├── dispatchSchema.js
│   │       │   │   └── InventoryAdjustmentSchema.js
│   │       │   ├── constants/
│   │       │   │   ├── warehouseHelpers.js
│   │       │   │   ├── InventoryLocation.js
│   │       │   │   ├── stockTransferHelper.js
│   │       │   │   ├── warehouseCalculations.js
│   │       │   │   ├── barcodeGenerator.js 
│   │       │   │   ├── routeOptimization.js
│   │       │   │   ├── fulfilmentHelpers.js
│   │       │   │   └── warehouseFormatter.js
│   │       │   ├── store/
│   │       │   │   ├── warehouseSlice.js
│   │       │   │   ├── transferSlice.js
│   │       │   │   ├── dispatchSlice.js
│   │       │   │   ├── receivingSlice.js
│   │       │   │   └── warehouseAnalyticsSlice.js
│   │       │   ├── test/
│   │       │   │   ├── unit/
│   │       │   │   ├── integration/
│   │       │   │   └── e2e/
│   │       │   ├── types/
│   │       │   │   └── warehouse.types.js
│   │       │   └── index.js
│   │       │
│   │       ├── settings
│   │       │
│   │       ├── users/
│   │       │
│   │       ├── roles/
│   │       │
│   │       ├── audit/
│   │       │
│   │       ├── realtime/
│   │       └── ai/
│   │   
│   │    
│   ├── services/                              # GLOBAL DOMAIN LAYER SERVICE
│   │   ├── websockerService.js
│   │   ├── notificationService.js
│   │   └── analyticsService.js
│   │
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   ├── e2e/
│   │   ├── mocks/
│   │   └── setup/
│   │
│   ├── workers/
│   │   ├── syncWorker.js
│   │   └── exportWoker.js
│   │
│   ├── i18n/
│   │   ├── index.js
│   │   ├── locales/
│   │   └── translations/
│   │
│   └── index.css
│
├── .env.development
├── .env.production
├── .env.staging
├── vite.config.js
├── jsconfig.json
├── eslint.config.js
├── prettier.config.js
├── package.json
└── README.md
