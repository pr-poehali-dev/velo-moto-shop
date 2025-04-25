import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Страница не найдена</h2>
          <p className="text-gray-600 mb-8">
            Извините, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Button asChild size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;