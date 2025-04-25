import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const ProductForm = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    category: "",
    price: "",
    oldPrice: "",
    stock: "",
    description: "",
    isNew: false,
    isFeatured: false,
    isOnSale: false,
  });

  // Simulate image upload
  const handleImageUpload = () => {
    // In a real app, this would handle file upload
    const newImage = "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80";
    setImages([...images, newImage]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the product data
    console.log({ ...formData, images });
    alert("Товар успешно сохранен!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/dashboard")}
            className="mr-2"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Назад
          </Button>
          <h1 className="text-2xl font-bold">Добавление нового товара</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Product Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Основная информация</CardTitle>
                  <CardDescription>
                    Введите основные данные о товаре
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="name">Название товара *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Введите название товара"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="sku">Артикул (SKU)</Label>
                        <Input
                          id="sku"
                          name="sku"
                          value={formData.sku}
                          onChange={handleInputChange}
                          placeholder="Например: VB-29-RED"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Категория *</Label>
                        <Select 
                          onValueChange={(value) => handleSelectChange("category", value)}
                          value={formData.category}
                        >
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Выберите категорию" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bikes">Велосипеды</SelectItem>
                            <SelectItem value="moto">Мотоциклы</SelectItem>
                            <SelectItem value="parts">Запчасти</SelectItem>
                            <SelectItem value="accessories">Аксессуары</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price">Цена (₽) *</Label>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="oldPrice">Старая цена (₽)</Label>
                        <Input
                          id="oldPrice"
                          name="oldPrice"
                          type="number"
                          value={formData.oldPrice}
                          onChange={handleInputChange}
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <Label htmlFor="stock">Остаток *</Label>
                        <Input
                          id="stock"
                          name="stock"
                          type="number"
                          value={formData.stock}
                          onChange={handleInputChange}
                          placeholder="0"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Описание товара</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Введите подробное описание товара"
                        rows={5}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Изображения товара</CardTitle>
                  <CardDescription>
                    Добавьте одно или несколько изображений
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border border-dashed rounded-lg p-6 text-center">
                      <div className="flex flex-col items-center">
                        <Upload className="h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-600 mb-2">
                          Перетащите изображения сюда или нажмите для загрузки
                        </p>
                        <p className="text-xs text-gray-500 mb-4">
                          PNG, JPG, WEBP до 5MB
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleImageUpload}
                        >
                          Выбрать файлы
                        </Button>
                      </div>
                    </div>

                    {images.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                        {images.map((image, index) => (
                          <div
                            key={index}
                            className="relative group rounded-md overflow-hidden"
                          >
                            <img
                              src={image}
                              alt={`Product ${index + 1}`}
                              className="w-full h-24 object-cover"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => removeImage(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Settings and Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки товара</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="isNew">Новинка</Label>
                      <p className="text-sm text-muted-foreground">
                        Отметить товар как новинку
                      </p>
                    </div>
                    <Switch
                      id="isNew"
                      checked={formData.isNew}
                      onCheckedChange={(checked) =>
                        handleSwitchChange("isNew", checked)
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="isFeatured">Рекомендуемый</Label>
                      <p className="text-sm text-muted-foreground">
                        Показывать в списке рекомендуемых
                      </p>
                    </div>
                    <Switch
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onCheckedChange={(checked) =>
                        handleSwitchChange("isFeatured", checked)
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="isOnSale">Распродажа</Label>
                      <p className="text-sm text-muted-foreground">
                        Товар участвует в распродаже
                      </p>
                    </div>
                    <Switch
                      id="isOnSale"
                      checked={formData.isOnSale}
                      onCheckedChange={(checked) =>
                        handleSwitchChange("isOnSale", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Действия</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" type="submit">
                    Сохранить товар
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    type="button"
                    onClick={() => navigate("/dashboard")}
                  >
                    Отмена
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;