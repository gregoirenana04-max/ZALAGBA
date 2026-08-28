'use client';

import React, { useState } from 'react';
import { Wrench, Monitor, Printer, ShoppingBag, Phone, MapPin, MessageCircle, ArrowRight, Sun, Moon, ShieldCheck, Clock, Award, ExternalLink } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const whatsappNumber = "22606462149";
  const whatsappMessage = encodeURIComponent("Bonjour Zalagba Service, je souhaite avoir plus d'informations sur vos prestations.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleProductClick = (productName) => {
    const msg = encodeURIComponent(`Bonjour, je souhaite commander ou demander le prix pour le produit suivant : ${productName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  const handleStampClick = (stampType) => {
    const msg = encodeURIComponent(`Bonjour, je souhaite commander un tampon personnalisé de type : ${stampType}. Voici mes instructions : `);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 relative ${darkMode ? 'bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-emerald-600 selection:text-white'}`}>
      
      {/* Bouton WhatsApp Flottant */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-medium text-sm px-0 group-hover:px-2">
          Contactez-nous
        </span>
      </a>

      {/* Barre de navigation */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
              <Printer className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <span className={`text-xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>ZALAGBA</span>
              <span className="text-xl font-light text-emerald-500 ml-1">Service</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Toggle Mode Clair/Sombre */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${darkMode ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Changer le mode d'affichage"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-emerald-900/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Section Héroïque (Hero) */}
      <header className={`relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-36 border-b transition-colors duration-300 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${darkMode ? 'from-emerald-900/20 via-slate-900 to-slate-900' : 'from-emerald-100/50 via-slate-50 to-slate-50'} pointer-events-none`} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className={`inline-flex items-center space-x-2 border px-4 py-2 rounded-full text-sm text-emerald-500 mb-8 backdrop-blur-sm ${darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Bureautique & Maintenance Informatique à Ouagadougou</span>
          </div>
          <h1 className={`text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            L'excellence technologique au service de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">votre entreprise</span>
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Maintenance experte d'équipements, vente de matériels informatiques et confection de tampons à Bonnam secteur 28.
          </p>
          <div className="flex justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-emerald-900/35 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Discuter sur WhatsApp</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </header>

      {/* Section "Pourquoi nous choisir" */}
      <section className={`py-16 border-b ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={`p-6 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="bg-emerald-500/10 p-3 rounded-xl">
              <Award className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Expertise Reconnue</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Plusieurs années d'expérience dans la maintenance et la fourniture de solutions bureautiques au Burkina Faso.</p>
            </div>
          </div>
          <div className={`p-6 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="bg-emerald-500/10 p-3 rounded-xl">
              <Clock className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Rapidité & Réactivité</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Interventions rapides et service client disponible en continu pour minimiser vos temps d'arrêt.</p>
            </div>
          </div>
          <div className={`p-6 rounded-2xl border flex items-start space-x-4 ${darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="bg-emerald-500/10 p-3 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Garantie de Qualité</h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Des équipements et consommables certifiés pour assurer la longévité de votre parc informatique.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogue / Produits Phares */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Produits Phares & Matériels</h2>
          <p className={`max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Sélectionnez un article pour demander directement son prix et sa disponibilité via WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Produit 1 */}
          <div className={`border rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 ${darkMode ? 'bg-slate-800/50 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
            <div>
              <div className="bg-emerald-500/10 w-full h-48 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <Monitor className="w-16 h-16 text-emerald-500" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ordinateurs Professionnels</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>PC portables et de bureau robustes, parfaits pour la bureautique intensive et le multitâche.</p>
            </div>
            <button
              onClick={() => handleProductClick("Ordinateur Professionnel")}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Demander le prix</span>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>

          {/* Produit 2 */}
          <div className={`border rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 ${darkMode ? 'bg-slate-800/50 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
            <div>
              <div className="bg-emerald-500/10 w-full h-48 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <Printer className="w-16 h-16 text-emerald-500" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Imprimantes & Scanners</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Solutions d'impression multifonctions pour entreprises, cartouches et pièces de rechange.</p>
            </div>
            <button
              onClick={() => handleProductClick("Imprimante ou Scanner")}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Demander le prix</span>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>

          {/* Produit 3 */}
          <div className={`border rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 ${darkMode ? 'bg-slate-800/50 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
            <div>
              <div className="bg-emerald-500/10 w-full h-48 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                <Wrench className="w-16 h-16 text-emerald-500" />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Consommables & Accessoires</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Accessoires informatiques divers, encres, papeterie et câblage de qualité professionnelle.</p>
            </div>
            <button
              onClick={() => handleProductClick("Consommables et Accessoires")}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>Demander le prix</span>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Module de commande de Tampons */}
      <section className={`py-20 border-t border-b ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-100/50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Confection & Commande de Tampons</h2>
            <p className={`max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Besoin d'un tampon encreur pour authentifier vos documents administratifs ? Commandez le vôtre en un clic.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-800/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div>
                <div className="inline-block bg-emerald-500/10 p-3 rounded-xl mb-4 text-emerald-500 font-bold">Modèle Standard</div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Tampon Rectangulaire</h3>
                <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Idéal pour les entreprises, les cachets administratifs avec nom, fonction, contacts et numéro IFU.</p>
              </div>
              <button
                onClick={() => handleStampClick("Tampon Rectangulaire")}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Commander ce modèle</span>
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>

            <div className={`p-8 rounded-2xl border flex flex-col justify-between ${darkMode ? 'bg-slate-800/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div>
                <div className="inline-block bg-emerald-500/10 p-3 rounded-xl mb-4 text-emerald-500 font-bold">Modèle Spécial</div>
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Tampon Rond ou Ovale</h3>
                <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Parfait pour les associations, les cachets officiels d'institutions ou la validation de certification.</p>
              </div>
              <button
                onClick={() => handleStampClick("Tampon Rond / Ovale")}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Commander ce modèle</span>
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Localisation Interactive (Google Maps) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 text-emerald-500 font-bold mb-3">
              <MapPin className="w-5 h-5" />
              <span>Où nous trouver</span>
            </div>
            <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Venez nous rendre visite à Ouagadougou</h2>
            <p className={`leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Notre atelier et bureau principal sont situés à <strong>Bonnam secteur 28</strong>. Passez nous voir pour un diagnostic rapide de vos équipements ou un devis personnalisé sur place.
            </p>
            <div className="space-y-4">
              <div className={`flex items-center space-x-3 p-4 rounded-xl border ${darkMode ? 'bg-slate-800/40 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Bonnam secteur 28, Ouagadougou, Burkina Faso</span>
              </div>
              <div className={`flex items-center space-x-3 p-4 rounded-xl border ${darkMode ? 'bg-slate-800/40 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+226 06 46 21 49</span>
              </div>
            </div>
          </div>

          {/* Carte interactive Google Maps (iframe) */}
          <div className="h-96 w-full rounded-2xl overflow-hidden border shadow-lg relative bg-slate-800">
            <iframe
              title="Localisation Zalagba Service Bonnam secteur 28"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.354673323049!2d-1.5516!3d12.3714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIyJzE3LjAiTiAxwrAzMycwNS44Ilc!5e0!3m2!1sfr!2sbf!4v1620000000000!5m2!1sfr!2sbf"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className={`border-t py-16 transition-colors duration-300 ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-900 text-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-black text-white">ZALAGBA</span>
              <span className="text-2xl font-light text-emerald-400">Service</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour la maintenance informatique, la bureautique et la confection de tampons à Ouagadougou.
            </p>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center md:text-left flex flex-col items-center md:items-start justify-between">
            <h3 className="text-xl font-bold text-white mb-2">Besoin d'un renseignement rapide ?</h3>
            <p className="text-slate-400 mb-6">Discutez directement en un clic via notre canal WhatsApp dédié.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Ouvrir WhatsApp (+226 06 46 21 49)</span>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Zalagba Service. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
