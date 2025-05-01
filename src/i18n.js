import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'tr',
    debug: false,
    resources: {
      tr: {
        translation: {
          // Home / Plan Type sayfası
          "planTypeTitle": "Program Seçenekleri",
          "basicPlan": "Temel Plan",
          "basicFeatures": [
            "Günlük hedeflere yönelik basit antrenman listesi",
            "Temel set ve tekrar sayımı",
            "Hızlı erişim ve mobil uyumlu tasarım"
          ],
          "basicAction": "Temel Planı Seç",
          "premiumPlan": "Premium Plan",
          "premiumFeatures": [
            "🏆 Kişiye özel haftalık takvim",
            "📊 Performans istatistikleri ve detaylı grafikler",
            "🎥 Antrenör video rehberleri ve öneriler",
            "🔔 Takvim hatırlatmaları ve bildirimler"
          ],
          "premiumAction": "Premium Planı Al",
          // Navbar
          "navAbout": "Hakkımızda",
          "navContact": "İletişim",
          "navMyPlans": "Planlarım",
          "navLogin": "Giriş",
          "navRegister": "Kayıt",
          "navSubscribe": "Abone Ol",
          "navLogout": "Çıkış",
          // Dark mode / light mode
          "modeLight": "🌙",
          "modeDark": "☀️",
          // Daha fazlası...
        }
      },
      en: {
        translation: {
          "planTypeTitle": "Program Options",
          "basicPlan": "Basic Plan",
          "basicFeatures": [
            "Simple workout list based on daily goals",
            "Basic set & rep tracking",
            "Fast access & mobile-friendly design"
          ],
          "basicAction": "Choose Basic",
          "premiumPlan": "Premium Plan",
          "premiumFeatures": [
            "🏆 Personalized weekly calendar",
            "📊 Performance stats & detailed charts",
            "🎥 Coach video guides & tips",
            "🔔 Calendar reminders & notifications"
          ],
          "premiumAction": "Get Premium",
          "navAbout": "About",
          "navContact": "Contact",
          "navMyPlans": "My Plans",
          "navLogin": "Login",
          "navRegister": "Sign Up",
          "navSubscribe": "Subscribe",
          "navLogout": "Logout",
          "modeLight": "🌙",
          "modeDark": "☀️",
        }
      }
    }
  });

export default i18n;
