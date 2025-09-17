export default function TermsOfService() {
  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 space-y-6">
      <h3 className="text-2xl font-bold mb-4">Terms of Service</h3>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to Future Mode Technology! These Terms of Service outline the rules and regulations for using our platform and services. By accessing or using our services, you agree to be bound by these terms.
      </p>

      <div className="space-y-4">
        <section>
          <h4 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h4>
          <p className="text-gray-700 dark:text-gray-300">
            By using our website and services, you agree to these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">2. Services Provided</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We offer educational programs, resources, and training services aimed at enhancing technical skills and knowledge. All services are provided "as-is" without warranties.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">3. User Responsibilities</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Provide accurate and truthful information during registration.</li>
            <li>Use the services responsibly without infringing on others’ rights.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">4. Intellectual Property</h4>
          <p className="text-gray-700 dark:text-gray-300">
            All content, materials, and software on this platform are the property of Future Mode Technology or its licensors. Unauthorized use, reproduction, or distribution is prohibited.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">5. Payment and Refunds</h4>
          <p className="text-gray-700 dark:text-gray-300">
            Payments for courses and services must be made through authorized payment providers. Refund requests are subject to our refund policy and must be initiated within the specified time frame.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">6. Limitation of Liability</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We are not liable for any direct, indirect, or incidental damages arising from the use of our services. Users are responsible for their own actions and decisions.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">7. Termination</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to suspend or terminate access to our services at any time for violations of these terms or any unlawful activities.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">8. Amendments</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We may update or revise these terms periodically. Continued use of our services after changes indicates acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">9. Contact Information</h4>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>If you have any questions or concerns about these terms, please reach out to us:</p>
            <p>Email: <a href="mailto:support@futuremodetech.com" className="text-primary hover:underline">support@futuremodetech.com</a></p>
            <p>Phone: <a href="tel:+918308211268" className="text-primary hover:underline">+91 8308211268</a></p>
            <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
          </div>
        </section>
      </div>
    </div>
  );
}
