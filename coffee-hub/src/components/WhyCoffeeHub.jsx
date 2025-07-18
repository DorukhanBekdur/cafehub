import React from "react";

const WhyCoffeeHub = () => {
  return (
    <section id="features" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
          Neden <span className="text-[#73b1a6]">Coffee-Hub</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Dijital dönüşüme ayak uydurmak isteyen tüm kahveciler için tasarlandı.
          Sadece birkaç adımda işletmeni dijitalleştir!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Kart 1 */}
          <div className="bg-[#f7f7f7] rounded-xl shadow p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#73b1a6]">
              Dijital Menü Sistemi
            </h3>
            <p className="text-gray-700">
              Kağıt menülere veda edin! Müşterileriniz QR kodla dijital menüye
              anında ulaşsın.
            </p>
          </div>

          {/* Kart 2 */}
          <div className="bg-[#f7f7f7] rounded-xl shadow p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#73b1a6]">
              Kolay Yönetim Paneli
            </h3>
            <p className="text-gray-700">
              Ürünleri ekleyin, düzenleyin, kategorilere ayırın. Her şey sizden
              sorulur.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="bg-[#f7f7f7] rounded-xl shadow p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#73b1a6]">
              Markanızı Büyütün
            </h3>
            <p className="text-gray-700">
              Coffee-Hub ile çevrenizdeki müşterilere daha hızlı ulaşın ve
              markanızı öne çıkarın.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCoffeeHub;
