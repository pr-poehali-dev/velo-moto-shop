import { Button } from "@/components/ui/button";

const SubscribeSection = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Подпишитесь на наши новости</h2>
            <p className="text-primary-foreground/90">Получайте уведомления о скидках и новых поступлениях</p>
          </div>
          
          <div className="md:w-1/2 max-w-md w-full">
            <form className="flex w-full gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow px-4 py-3 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                required
              />
              <Button className="bg-white text-primary hover:bg-white/90">
                Подписаться
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
