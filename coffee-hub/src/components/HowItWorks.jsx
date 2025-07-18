import React from "react";

const HowItWorks = () => {
  return (
    <section id="howitworks" className="bg-[#f7f7f7] py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
          Coffee-Hub Nasıl Çalışır?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Sadece 3 adımda dükkanını dijitale taşı!
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Adım 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-[#73b1a6] mb-2">1</div>
            <h3 className="text-xl font-semibold mb-3">Kayıt Ol</h3>
            <p className="text-gray-700">
              Hızlıca üyeliğini oluştur. Platforma giriş yaparak işletmeni
              kaydet.
            </p>
          </div>

          {/* Adım 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-[#73b1a6] mb-2">2</div>
            <h3 className="text-xl font-semibold mb-3">Menünü Oluştur</h3>
            <p className="text-gray-700">
              Kategorilere göre ürünlerini ekle, fiyatlarını belirle ve kaydet.
            </p>
          </div>

          {/* Adım 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
            <div className="text-4xl font-bold text-[#73b1a6] mb-2">3</div>
            <h3 className="text-xl font-semibold mb-3">Müşterilerin Erişsin</h3>
            <p className="text-gray-700">
              Artık menünüz Coffee-Hub’da! QR kodla göster ya da sayfanı paylaş.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
