
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { WhatsApp } from "./components/reusableComponents";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankara Jeneratör",
  description: "Ankara Jeneratör Satış ve Kiralama Hizmetleri, Bakım ve Servis İşlemleri, Yedek Parça ve Aksesuarlar, 3 KVA'dan 3000 KVA'ya kadar jeneratör satış ve kiralama hizmetleri, bakım ve servis işlemleri, yedek parça ve aksesuarlar konusunda uzman kadromuzla hizmetinizdeyiz. Elektrik kesintilerine karşı güvenilir enerji kaynağı ve yedek güç ihtiyaçlarınız için Ankara Jeneratör.",
  image: "1.jpg",
  type: "website",
  siteName: "Ankara Jeneratör",
  locale: "tr_TR",
  facebook: "ankarajenerator",
  instagram: "ankarajenerator",
  linkedin: "ankarajenerator",
  youtube: "ankarajenerator",
  phone: "+90 535 423 16 62",
  email: "info@ankaragenerator.com",
  address: "Ankara, Türkiye",
  openingHours: "Mon-Sun 09:00-18:00",
  priceRange: "$",
  currenciesAccepted: "TRY",
  paymentAccepted: "Cash, Credit Card",
  deliveryTime: "1-2 days",
  deliveryCharge: "Free",
  returnPolicy: "30 days",
  refundPolicy: "Full refund",
  exchangePolicy: "30 days",
  warranty: "3 year",
  warrantyType: "Manufacturer",
  warrantyIncludes: "Parts, Labor",
  warrantyCondition: "Limited",
  warrantyScope: "National",
  warrantyCoverage: "Defects",
  warrantyExclusions: "Misuse, Abuse",
  warrantyTransferable: true,
  warrantyClaim: "Online",
  warrantySupport: "Phone, Email",
  warrantyService: "Nationwide",
  warrantyReplacement: "New",
  warrantyRepair: "Free",
  warrantyUpgrade: "Available",
  warrantyRefund: "Available",
  warrantyExchange: "Available",
  warrantyReturn: "Available",
  warrantyCancellation: "Available",
  warrantyTermination: "Available",
  warrantyExpiration: "3 years",
  warrantyRenewal: "Available",
  warrantyTransfer: "Available",
  warrantyTransferFee: "Free",
  warrantyTransferCondition: "Original owner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className=" bg-black">
        <Navbar />
        <div className="pt-40 z-[99999]">
          {children}
        </div>
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
