import React from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="border rounded-md p-4 bg-gray-50">
    <h3 className="font-semibold mb-2">{question}</h3>
    <p className="text-sm text-gray-700">{answer}</p>
  </div>
);

const FAQ = () => {
  return (
    <section id="faq" className="my-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif mb-6 text-center">Foire aux questions</h2>
      <div className="space-y-2">
        <FAQItem
          question="Est-ce que nous devons payer pour participer au mariage ?"
          answer="Le mariage est entièrement à notre charge. Vous devez juste venir faire la fête avec nous tout le week-end."
        />
        <FAQItem
          question="Est-ce que je peux venir avec un +1 ?"
          answer="En raison des limitations de capacité du lieu, nous ne pouvons accueillir que les invités formellement mentionnés sur votre invitation. Nous vous remercions de votre compréhension."
        />
        <FAQItem
          question="Est-ce que je peux venir avec mon enfant ?"
          answer="Envoyez un mail à gontchi@gmail.com et sandrinecarey@hotmail.com."
        />
        <FAQItem
          question="Quel est le dress-code ?"
          answer="Habillez-vous chic et classe. Nous allons fournir plus de détails sur ce site web plus tard."
        />
        <FAQItem
          question="Quel sera le menu des repas ?"
          answer="Tous les repas sont offerts pendant le week-end. Nous allons partager les détails prochainement. Nous tiendrons compte des restrictions alimentaires."
        />
        <FAQItem
          question="Vous avez une question qui n'est pas mentionnée ici ?"
          answer="Envoyez un mail à gontchi@gmail.com et sandrinecarey@hotmail.com."
        />
      </div>
    </section>
  );
};

export default FAQ;