const features = [
    { name: 'Projelerinizi Keşfediyoruz', description: 'Bir telefon uzağınızdayız. Ücretsiz keşif çalışmamız için bizimle iletişime geçmeniz yeterlidir. Projenize en uygun çözümlerle alternatif motor ve marka seçenekleriyle yerinde hizmet sağlıyoruz.' },
    { name: 'Servis Hizmetlerimiz', description: 'Mevcut jeneratörünüzde ki sorunların çözümü için bizimle iletişime geçmeniz yeterli. Periyodik ve rodaj bakım hizmeti alan müşterilerimize 2 saat içerisinde, sorunlarına müdahale taahhüt ile hizmeti veriyoruz. 7/24 Hizmetinizdeyiz.' },
    { name: 'İkinci El Jeneratör Alım-Satım', description: 'Projeniz de görevini tamamlayan ve kullanmadığınız jeneratör gruplarını değerinde alıyoruz. Mevcut jeneratörünüzün ekspertizi ve fiyatlaması için size bir telefon kadar yakınız.' },
    { name: 'Kurumsal Jeneratör Kiralama', description: 'Günlük, haftalık, aylık ve yıllık olmak üzere projenizin ihtiyacı olan güçteki, en uygun yakıt sarfiyatlı ve sorunsuz, uzun süreli çalışacak makine parkurumuzla siz değerli müşterilerimizin hizmetindeyiz.' },
    { name: 'Yurt Dışı Satış & Pazarlama', description: 'Orta Doğu, Afrika ve Avrupa ülkelerine jeneratör satışı ve pazarlaması konusunda uzman kadromuzla hizmetinizdeyiz. İhtiyacınız olan jeneratörü en uygun fiyatlarla temin edebilirsiniz.' },
    { name: 'Yedek Parça ve Aksesuarlar', description: 'Jeneratörünüzün yedek parça ve aksesuar ihtiyaçlarını en uygun fiyatlarla temin edebilirsiniz. Mevcut jeneratörünüzün yedek parça ve aksesuar ihtiyaçlarınız için bizimle iletişime geçmeniz yeterlidir.' },
  ]
  
  export default function ProductFeatures() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Planlama Süreçleriniz</h2>
            <p className="mt-4 text-gray-500">
                Bir telefonla projelerinizi keşfedip sizlere, projenize alternatif; motor alternatör marka seçenekleriyle bütçenize uygun çözümlerle jeneratörünüzü satıyoruz, kiralıyoruz, mevcutu tamir ediyoruz, atıl durumdakileri satın alıyoruz.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="/1.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="/2.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="/3.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="/4.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }