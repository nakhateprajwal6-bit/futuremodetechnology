export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Personal details like name, email address, and phone number.",
        "Usage data including login activity, course participation, and preferences.",
        "Payment details processed securely through trusted providers.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To provide you with personalized educational services and course recommendations.",
        "To communicate updates, promotions, and important announcements.",
        "To process payments and manage billing-related requests.",
      ],
    },
    {
      title: "3. Data Protection",
      contentText:
        "We implement robust security measures, including encryption and secure access protocols, to protect your information from unauthorized access or misuse.",
    },
    {
      title: "4. Sharing Your Information",
      contentText:
        "We do not sell or share your personal information with third parties except for trusted partners involved in payment processing and educational services, and only when necessary.",
    },
    {
      title: "5. Your Rights",
      content: [
        "You can access, update, or delete your personal information by contacting our support team.",
        "You can opt-out of promotional emails and notifications at any time.",
      ],
    },
    {
      title: "6. Changes to This Policy",
      contentText:
        "We may update this policy periodically to reflect changes in our services or legal requirements. We encourage you to review this page regularly.",
    },
    {
      title: "Contact Us",
      contentText: `
Email: info@futuremodetchnology.com
Phone: +91 8308211268
Hours: Monday - Friday, 9:00 AM - 6:00 PM IST
      `,
    },
  ];

  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 space-y-6">
      <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>

      {sections.map((section, idx) => (
        <section key={idx}>
          <h4 className="text-xl font-semibold mb-2">{section.title}</h4>
          {section.content ? (
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {section.contentText}
            </p>
          )}
        </section>
      ))}
    </div>
  );
}
