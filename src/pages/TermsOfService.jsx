export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      contentText:
        "By using our website and services, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.",
    },
    {
      title: "2. Services Provided",
      contentText:
        "We offer educational programs, resources, and training services aimed at enhancing technical skills and knowledge. All services are provided 'as-is' without warranties.",
    },
    {
      title: "3. User Responsibilities",
      content: [
        "Provide accurate and truthful information during registration.",
        "Use the services responsibly without infringing on others' rights.",
        "Comply with all applicable laws and regulations.",
      ],
    },
    {
      title: "4. Intellectual Property",
      contentText:
        "All content, materials, and software on this platform are the property of Future Mode Technology or its licensors. Unauthorized use, reproduction, or distribution is prohibited.",
    },
    {
      title: "5. Payment and Refunds",
      contentText:
        "Payments for courses and services must be made through authorized payment providers. Refund requests are subject to our refund policy and must be initiated within the specified time frame.",
    },
    {
      title: "6. Limitation of Liability",
      contentText:
        "We are not liable for any direct, indirect, or incidental damages arising from the use of our services. Users are responsible for their own actions and decisions.",
    },
    {
      title: "7. Termination",
      contentText:
        "We reserve the right to suspend or terminate access to our services at any time for violations of these terms or any unlawful activities.",
    },
    {
      title: "8. Amendments",
      contentText:
        "We may update or revise these terms periodically. Continued use of our services after changes indicates acceptance of the updated terms.",
    },
    {
      title: "9. Contact Information",
      contentText: `
If you have any questions or concerns about these terms, please reach out to us:
Email: info@futuremodetchnology.com
Phone: +91 8308211268
Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST
      `,
    },
  ];

  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 space-y-6">
      <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>

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
