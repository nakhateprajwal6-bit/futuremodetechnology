const faqData = [
  {
    question: "1. What courses do you offer?",
    answer: `We offer a variety of technology and engineering courses including Robotics Engineering, Web Development, IoT, 3D Printing, Data Science, Cybersecurity, Software Development, and more. Our programs are designed to prepare students for industry challenges.`,
  },
  {
    question: "2. How can I enroll in a program?",
    answer: `You can enroll by contacting us through the "Get In Touch" form or by calling our support team. Once your application is reviewed, you will receive further instructions via email or phone.`,
  },
  {
    question: "3. Do you offer online courses?",
    answer: `Yes, many of our courses are available online. We provide interactive sessions, video lectures, and project-based assignments to ensure you learn effectively from anywhere.`,
  },
  {
    question: "4. What payment methods are accepted?",
    answer: `We accept payments through major credit/debit cards, net banking, UPI, and other digital wallets. Specific details are shared at the time of enrollment.`,
  },
  {
    question: "5. Can I get a refund if I change my mind?",
    answer: `Refunds are subject to our refund policy and eligibility criteria. Please contact our support team within the specified time frame if you wish to request a refund.`,
  },
  {
    question: "6. Are there any prerequisites for joining a course?",
    answer: `Most of our courses are beginner-friendly, though some advanced courses may require basic programming knowledge or prior experience. Course descriptions will outline prerequisites where applicable.`,
  },
  {
    question: "7. How do I contact support?",
    answer: `You can contact us via email at info@futuremodetchnology.com or call us at +91 8308211268. Our support team is available from Monday to Friday, 9:00 AM to 6:00 PM IST.`,
    isContact: true,
  },
];

export default function FAQ() {
  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 space-y-6">
      <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>

      <div className="space-y-6">
        {faqData.map((faq, idx) => (
          <section key={idx}>
            <h4 className="text-xl font-semibold mb-2">{faq.question}</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {faq.isContact ? (
                <>
                  You can contact us via email at{" "}
                  <a
                    href="mailto:info@futuremodetchnology.com"
                    className="text-primary hover:underline"
                  >
                    info@futuremodetchnology.com
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href="tel:+918308211268"
                    className="text-primary hover:underline"
                  >
                    +91 8308211268
                  </a>
                  . Our support team is available from Monday to Friday, 9:00 AM to 6:00 PM IST.
                </>
              ) : (
                faq.answer
              )}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
