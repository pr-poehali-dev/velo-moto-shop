import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Tags, 
  Users, 
  Settings, 
  PlusCircle,
  Search,
  BellRing,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("products");
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">ВелоМото</span>
          </Link>
          <p className="text-xs text-gray-500 mt-1">Панель управления</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link to="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Обзор
          </Link>
          <Link to="/dashboard/products" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
            <ShoppingBag className="mr-2 h-4 w-4" />
            Товары
          </Link>
          <Link to="/dashboard/categories" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
            <Tags className="mr-2 h-4 w-4" />
            Категории
          </Link>
          <Link to="/dashboard/customers" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
            <Users className="mr-2 h-4 w-4" />
            Клиенты
          </Link>
          <Link to="/dashboard/settings" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
            <Settings className="mr-2 h-4 w-4" />
            Настройки
          </Link>
        </nav>
        
        <div className="p-4 border-t">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" />
              <AvatarFallback>АД</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Администратор</p>
              <p className="text-xs text-gray-500">admin@velomoto.ru</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="mt-4 w-full justify-start text-gray-700">
            <LogOut className="mr-2 h-4 w-4" />
            Выйти
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2">
              <LayoutDashboard className="h-5 w-5" />
            </Button>
            <div className="relative w-64">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Поиск..." className="pl-8" />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" aria-label="Уведомления">
              <BellRing className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8 md:hidden">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" />
              <AvatarFallback>АД</AvatarFallback>
            </Avatar>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Административная панель</h1>
              <Button className="flex items-center">
                <PlusCircle className="mr-2 h-4 w-4" />
                Добавить товар
              </Button>
            </div>
            
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Товары</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">235</div>
                  <p className="text-xs text-muted-foreground mt-1">+12% с прошлого месяца</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Продажи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₽125,430</div>
                  <p className="text-xs text-muted-foreground mt-1">+5% с прошлого месяца</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Клиенты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">864</div>
                  <p className="text-xs text-muted-foreground mt-1">+18% с прошлого месяца</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Заказы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92</div>
                  <p className="text-xs text-muted-foreground mt-1">+7% с прошлого месяца</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content Tabs */}
            <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="products">Товары</TabsTrigger>
                <TabsTrigger value="categories">Категории</TabsTrigger>
                <TabsTrigger value="customers">Клиенты</TabsTrigger>
                <TabsTrigger value="stats">Статистика</TabsTrigger>
              </TabsList>
              
              {/* Products Tab */}
              <TabsContent value="products" className="space-y-4">
                <ProductsTable />
              </TabsContent>
              
              {/* Categories Tab */}
              <TabsContent value="categories" className="space-y-4">
                <CategoriesTable />
              </TabsContent>
              
              {/* Customers Tab */}
              <TabsContent value="customers" className="space-y-4">
                <CustomersTable />
              </TabsContent>
              
              {/* Stats Tab */}
              <TabsContent value="stats" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Статистика продаж</CardTitle>
                    <CardDescription>Обзор продаж за последние 30 дней</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gray-100 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">График статистики продаж</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

// Product Table Component
const ProductsTable = () => {
  const products = [
    {
      id: "1",
      name: "Горный велосипед GT Avalanche 29",
      category: "Велосипеды",
      price: 79990,
      stock: 12,
      status: "В наличии"
    },
    {
      id: "2",
      name: "Велошлем Smith Signal MIPS",
      category: "Аксессуары",
      price: 12990,
      stock: 24,
      status: "В наличии"
    },
    {
      id: "3",
      name: "Мотоцикл Honda CB500F",
      category: "Мотоциклы",
      price: 649990,
      stock: 3,
      status: "Под заказ"
    },
    {
      id: "4",
      name: "Покрышка Continental Grand Prix 5000",
      category: "Запчасти",
      price: 4990,
      stock: 45,
      status: "В наличии"
    }
  ];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Управление товарами</CardTitle>
          <CardDescription>Всего товаров: 235</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Поиск товаров..." className="w-60" />
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Добавить
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ID</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Название</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Категория</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Цена</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Остаток</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Статус</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Действия</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-3 px-4 text-sm">{product.id}</td>
                  <td className="py-3 px-4 text-sm font-medium">{product.name}</td>
                  <td className="py-3 px-4 text-sm">{product.category}</td>
                  <td className="py-3 px-4 text-sm">₽{product.price.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm">{product.stock}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      product.status === "В наличии" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Изменить</Button>
                      <Button variant="ghost" size="sm" className="text-red-500">Удалить</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

// Categories Table Component
const CategoriesTable = () => {
  const categories = [
    { id: "1", name: "Велосипеды", products: 48, status: "Активна" },
    { id: "2", name: "Мотоциклы", products: 32, status: "Активна" },
    { id: "3", name: "Запчасти", products: 87, status: "Активна" },
    { id: "4", name: "Аксессуары", products: 68, status: "Активна" }
  ];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Управление категориями</CardTitle>
          <CardDescription>Всего категорий: 12</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Добавить
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ID</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Название</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Товары</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Статус</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Действия</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b">
                  <td className="py-3 px-4 text-sm">{category.id}</td>
                  <td className="py-3 px-4 text-sm font-medium">{category.name}</td>
                  <td className="py-3 px-4 text-sm">{category.products}</td>
                  <td className="py-3 px-4 text-sm">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {category.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Изменить</Button>
                      <Button variant="ghost" size="sm" className="text-red-500">Удалить</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

// Customers Table Component
const CustomersTable = () => {
  const customers = [
    { id: "1", name: "Иван Петров", email: "ivan@example.com", orders: 5, spent: 47500 },
    { id: "2", name: "Мария Сидорова", email: "maria@example.com", orders: 3, spent: 32800 },
    { id: "3", name: "Алексей Иванов", email: "alexey@example.com", orders: 7, spent: 86200 },
    { id: "4", name: "Елена Смирнова", email: "elena@example.com", orders: 2, spent: 15400 }
  ];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Клиенты</CardTitle>
          <CardDescription>Всего клиентов: 864</CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Поиск клиентов..." className="w-60" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">ID</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Имя</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Заказы</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Потрачено</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Действия</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b">
                  <td className="py-3 px-4 text-sm">{customer.id}</td>
                  <td className="py-3 px-4 text-sm font-medium">{customer.name}</td>
                  <td className="py-3 px-4 text-sm">{customer.email}</td>
                  <td className="py-3 px-4 text-sm">{customer.orders}</td>
                  <td className="py-3 px-4 text-sm">₽{customer.spent.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Детали</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;