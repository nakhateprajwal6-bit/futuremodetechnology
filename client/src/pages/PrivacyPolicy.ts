export default function PrivacyPolicy() {
  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 space-y-6">
      <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        At Future Mode Technology, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our platform.
      </p>

      <div className="space-y-4">
        <section>
          <h4 className="text-xl font-semibold mb-2">1. Information We Collect</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Personal details like name, email address, and phone number.</li>
            <li>Usage data including login activity, course participation, and preferences.</li>
            <li>Payment details processed securely through trusted providers.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">2. How We Use Your Information</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>To provide you with personalized educational services and course recommendations.</li>
            <li>To communicate updates, promotions, and important announcements.</li>
            <li>To process payments and manage billing-related requests.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">3. Data Protection</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We implement robust security measures, including encryption and secure access protocols, to protect your information from unauthorized access or misuse.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">4. Sharing Your Information</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We do not sell or share your personal information with third parties except for trusted partners involved in payment processing and educational services, and only when necessary.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">5. Your Rights</h4>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>You can access, update, or delete your personal information by contacting our support team.</li>
            <li>You can opt-out of promotional emails and notifications at any time.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">6. Changes to This Policy</h4>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this policy periodically to reflect changes in our services or legal requirements. We encourage you to review this page regularly.
          </p>
        </section>

        <section>
          <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>Email: <a href="mailto:privacy@futuremodetech.com" className="text-primary hover:underline">privacy@futuremodetech.com</a></p>
            <p>Phone: <a href="tel:+918308211268" className="text-primary hover:underline">+91 8308211268</a></p>
            <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
          </div>
        </section>
      </div>
    </div>
  );
}
