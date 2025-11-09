const Faq = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Tout ce que tu dois savoir avant de rejoindre la bêta
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-[#1f1a30] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              Qu’est-ce que Wake Up apporte de vraiment nouveau ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Wake Up transforme tes cours en véritables parcours d’apprentissage intelligent. <br />
              L’IA analyse tes documents pour générer des quiz adaptés, des cartes mentales automatiques et un suivi de progression clair. <br />
              Fini les révisions à l’aveugle : chaque session devient ciblée et efficace.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1f1a30] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              L’app n’est pas encore en ligne : pourquoi m’inscrire maintenant ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              En rejoignant la liste d’attente, tu feras partie des premiers testeurs à accéder gratuitement à la version bêta. <br />
              Tu pourras influencer le développement, tester les nouveautés avant tout le monde <br />
              et profiter d’avantages exclusifs sur la version finale.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1f1a30] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              Est-ce que c’est vraiment gratuit ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Oui, 100%. L’accès à la bêta est entièrement gratuit et ne demande aucune carte bancaire. <br />
              Nous voulons que tu découvres tout le potentiel de Wake Up avant qu’il ne devienne public.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1f1a30] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              Wake Up fonctionnera-t-il pour mon domaine d’étude ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Absolument. Que tu étudies le droit, la médecine, la psychologie ou le commerce, <br />
              l’IA s’adapte à tes propres cours pour créer du contenu personnalisé et pertinent. <br />
              Tu fournis les documents, Wake Up s’occupe du reste.
            </p>
          </div>

          <div className="bg-white dark:bg-[#1f1a30] rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-black dark:text-white mb-2">
              Comment mes données seront-elles protégées ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tes documents et données personnelles sont chiffrés et stockés de manière sécurisée. <br />
              Nous ne revendons ni ne partageons aucune information. <br />
              La confidentialité fait partie de l’ADN de Wake Up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
