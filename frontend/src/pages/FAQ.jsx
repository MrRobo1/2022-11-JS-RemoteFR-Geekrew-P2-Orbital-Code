/* eslint-disable no-param-reassign */
import React, { useState } from "react";
import Accordion from "../components/Accordion";
import HeaderFaq from "../components/HeaderFaq";
import styles from "../styles/FAQ.module.css";

function FAQ() {
  const [faqs, setfaqs] = useState([
    {
      question: "Can I meet my future travel buddies before leaving?",
      answer:
        'Obviously ! It\'s super simple, especially if you have already joined the Facebook group "To many is better! Getaways, Explore the cosmos beyond the imaginable!". You can contact them directly. In this group, you will be informed of new destinations, upcoming departures, useful information about our trips... and above all, you will be able to find your future travel buddies (for more information on this subject, you will see a post about it on our group). In any case, 30 days before departure, your trip coordinator will create a WhatsApp group with all the participants... just to get the trip off to a good start!',
      open: false,
    },

    {
      question: "What is included?",
      answer:
        "Each trip is different and includes different services. In general, the price includes: accommodation, internal transport (in some planets there can be up to 4 flights!), a trip coordinator available 24/7, in some routes, full board with breakfast lunch is included as well as various excursions! You will find details of everything that is included (and excluded). For your information, medical insurance is not included and must be taken out separately - to simplify your task, we have pre-selected some for you!",
      open: false,
    },

    {
      question: "Who is the trip coordinator and what is their role?",
      answer:
        "Our travel coordinators are the ideal travel buddies, who love to travel and already have a lot of experience across space. Which means that in terms of logistics (meetings, times, tickets for transfers, reservations, etc.), you are in good hands and all you have to do is enjoy! 30 days before departure, your trip coordinator will create a WhatsApp group and it will be the perfect place to ask all logistical questions before departure and above all to get to know the group.",
      open: false,
    },

    {
      question: "What are the selection criteria for space travelers?",
      answer:
        "Good physical and mental health: Space travelers will need to be in good health to be able to withstand the rigors of space, such as pressure changes, microgravity, and radiation.",
      open: false,
    },
    {
      question:
        " How is the training and preparation of passengers carried out before a space flight?",
      answer:
        "Emergency survival training, to know how to react in case of a critical situation during the flight and also training in the behavior to adopt during the flight to feel comfortable and safe, manage the stress related to the flight.",
      open: false,
    },
    {
      question: "How long is my quote valid for?",
      answer:
        "A quote has no particular validity period with our travel agents except that the amount of your trip may change. This is only a proposal subject to modification (taxes, exchange, price, etc.).",
      open: false,
    },
    {
      question: "How do I modify/cancel my reservation?",
      answer:
        "For any modification or cancellation, please contact the place where you made your reservation. For a reservation made online or a quote made at the call center, contact our travel agents on 0 666 666 666 (free call). For a reservation made in an agency, please contact the selected agency when sending your quote.",
      open: false,
    },
    {
      question:
        "Can I make special requests for my hotel room before the trip?",
      answer:
        "Yes, you can make special requests for your hotel room directly with us. They are not guaranteed but they are generally considered by the hotelier.",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: true };
        }
        return { ...faq, open: false };
      })
    );
  };

  return (
    <div className={styles.App}>
      <HeaderFaq />
      <div className={styles.faqs}>
        {faqs.map((faq, i) => (
          <Accordion faq={faq} index={i} toggleFaq={toggleFaq} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
