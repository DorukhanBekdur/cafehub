import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">
          Sık Sorulan Sorular
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Coffee-Hub hakkında merak ettiğiniz bazı konuları burada yanıtladık.
        </p>

        <div className="space-y-6 text-left">
          {/* Soru 1 */}
          <div className="border-l-4 border-[#73b1a6] pl-4">
            <h3 className="font-semibold text-lg text-[#333] mb-1">
              Coffee-Hub ücretsiz mi?
            </h3>
            <p className="text-gray-700">
              Evet! Platformu başta tamamen ücretsiz kullanabilirsiniz.
              Gelecekte sunulacak gelişmiş özellikler için uygun fiyatlı planlar
              sunacağız.
            </p>
          </div>

          {/* Soru 2 */}
          <div className="border-l-4 border-[#73b1a6] pl-4">
            <h3 className="font-semibold text-lg text-[#333] mb-1">
              QR kodu nasıl oluşturacağım?
            </h3>
            <p className="text-gray-700">
              Dashboard üzerinden işletme bilgilerinizi kaydettikten sonra size
              özel bir QR kod otomatik olarak oluşturulacak.
            </p>
          </div>

          {/* Soru 3 */}
          <div className="border-l-4 border-[#73b1a6] pl-4">
            <h3 className="font-semibold text-lg text-[#333] mb-1">
              Menüme istediğim kadar ürün ekleyebilir miyim?
            </h3>
            <p className="text-gray-700">
              Evet, ürün sayısında herhangi bir sınır yok. Menülerinizi
              kategorilere ayırarak detaylıca oluşturabilirsiniz.
            </p>
          </div>

          {/* Soru 4 */}
          <div className="border-l-4 border-[#73b1a6] pl-4">
            <h3 className="font-semibold text-lg text-[#333] mb-1">
              Coffee-Hub mobil uyumlu mu?
            </h3>
            <p className="text-gray-700">
              Evet. Coffee-Hub tamamen responsive tasarlandı. İster masaüstü
              ister telefon, her cihazda sorunsuz çalışır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
