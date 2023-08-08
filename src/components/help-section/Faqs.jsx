import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  title: "Frequently Asked Questions:",
  rows: [
    {
      title: "What payment methods do you accept?",
      content: `We accept various payment methods, including credit cards (Visa, Mastercard, American Express, UnionPay), debit cards, PayPal, and microfinance bank services including Easypaisa, jazzcash, Sadapay, and Nayapay.`,
    },
    {
      title: "What is your return policy?",
      content:
        "We offer a hassle-free return policy. If you are not satisfied with your purchase, you can return the item within 30 days of delivery for a full refund or exchange. Please refer to our Returns & Refunds page for more details.",
    },
    {
      title: "How long does shipping take?",
      content: `Shipping times may vary depending on your location and the shipping method chosen. Generally, domestic orders are delivered within 3-5 business days, while international orders may take 7-14 business days. Please check our Shipping & Delivery page for more accurate estimates.`,
    },
    {
      title: "Do you offer international shipping?",
      content: `Yes, we offer international shipping to many countries. Shipping rates and delivery times may vary based on the destination. Please enter your address during checkout to see if we ship to your location.`,
    },
    {
        title: " Can I cancel my order after it has been placed?",
        content: `Yes, you can cancel your order within 24 hours of placing it. Please contact our customer support team with your order number for assistance with the cancellation.`,
      },
      {
        title: "Are your products eco-friendly?",
        content: `Yes, we are committed to sustainability. Many of our products are eco-friendly and made from environmentally responsible materials. Look for the "Eco-Friendly" tag on product pages to identify such items.`,
      },
      {
        title: "How do I contact customer support?",
        content: `You can reach our customer support team by emailing support@trendythreads.com or by calling our toll-free helpline at 1-800-123-4567. Our support team is available Monday to Friday, from 9:00 AM to 5:00 PM (GMT).`,
      },
      {
        title: "Are my personal and payment details secure?",
        content: `Yes, we take the security of your personal and payment information seriously. Our website uses industry-standard SSL encryption to protect your data during transmission. We do not store any credit card information on our servers.`,
      },
  ],
};

const styles = {
//   bgColor: 'rgb()',
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
//   animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function Faqs() {
  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
