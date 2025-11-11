"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl text-justify mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft size={20} className="mr-2" />
          <span className="text-lg">Retour</span>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Politique de confidentialité de Wake Up
      </h1>

      <section className="space-y-6 text-gray-700">
        <p>
          Merci de votre visite sur Wake Up. Cette politique de confidentialité décrit
          comment nous collectons, utilisons et protégeons vos informations personnelles et
          non personnelles lorsque vous utilisez notre site web à l&apos;adresse https://use-wake-up-lrqw.vercel.app/
        </p>

        <p>
          En accédant au site web ou en l&apos;utilisant, vous acceptez les termes de la présente
          politique de confidentialité. Si vous n&apos;êtes pas d&apos;accord avec les pratiques décrites
          dans cette politique, veuillez ne pas utiliser le site web.
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-3">1. Informations que nous collectons</h2>

          <div className="ml-4">
            <h3 className="font-medium mb-2">1.1 Données personnelles</h3>
            <p className="mb-4">
              Nous collectons uniquement les adresses e-mail des utilisateurs intéressés par nos services,
              dans le seul but de les recontacter et de leur envoyer des informations liées à notre projet.
              Les données collectées sont strictement confidentielles et ne seront ni vendues ni partagées
              avec des tiers.
            </p>
            <p className="mb-4">
              Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d&apos;un droit d&apos;accès,
              de rectification et de suppression de vos données personnelles. Vous pouvez exercer ce droit
              en nous contactant à l&apos;adresse e-mail mentionnée ci-dessous.
            </p>
          </div>

          <div className="ml-4">
            <h3 className="font-medium mb-2">1.2 Données non personnelles</h3>
            <p className="mb-4">
              Nous pouvons utiliser des cookies web et des technologies similaires pour collecter des informations
              non personnelles telles que votre adresse IP, votre type de navigateur, les informations relatives
              à votre appareil et vos habitudes de navigation. Ces informations nous aident à améliorer votre
              expérience de navigation, à analyser les tendances et à améliorer nos services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Partage de données</h2>
          <p className="ml-4 mb-4">
            Nous ne partageons pas vos données personnelles avec des tiers, sauf si cela est nécessaire à
            la fourniture de services (par exemple, partage de vos informations avec des processeurs de paiement).
            Nous ne vendons, n&apos;échangeons ni ne louons vos informations personnelles à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Mises à jour de la politique de confidentialité</h2>
          <p className="ml-4 mb-4">
            Nous sommes susceptibles de mettre à jour cette politique de confidentialité de temps à autre afin
            de refléter l&apos;évolution de nos pratiques ou pour d&apos;autres raisons opérationnelles, légales ou
            réglementaires. Toute mise à jour sera publiée sur cette page et nous vous informerons par e-mail
            des modifications importantes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Éditeur du site</h2>
          <p>
            Si vous avez des questions, des préoccupations ou des demandes concernant cette politique de
            confidentialité, vous pouvez nous contacter à :
          </p>
          <p className="mt-2">
            Contact :{" "}
            <a
              href="mailto:eric.buisson.pro@gmail.com"
              className="underline hover:text-blue-500 cursor-pointer transition"
            >
              eric.buisson.pro@gmail.com
            </a>
          </p>
          <p className="mt-4">
            Pour toute autre demande, veuillez visiter notre page &quot;Contactez-nous&quot; sur le site Web.
            <br />
            En utilisant Wake Up, vous acceptez les termes de cette politique de confidentialité.
          </p>
        </section>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
