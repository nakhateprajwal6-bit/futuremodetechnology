export default function HelpCenter() {
  return (
    <div className="max-h-[80vh] overflow-y-auto p-4 space-y-6">
      <h3 className="text-2xl font-bold mb-4">Help Center</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to the Future Mode Technology Help Center! We are dedicated to
        assisting you with any questions, issues, or guidance you may need while
        navigating our platform.
      </p>

      <h4 className="text-xl font-semibold mb-2">How can we help you?</h4>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-400">
        <li>Learn how to enroll in courses and programs.</li>
        <li>Find step-by-step guides on using our learning platform.</li>
        <li>Explore technical troubleshooting solutions.</li>
        <li>Contact our support team for personalized help.</li>
      </ul>

      <h4 className="text-xl font-semibold mb-2">Popular Topics</h4>
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600 dark:text-gray-400">
        {[
          "Account creation and profile management",
          "Course access and progress tracking",
          "Payment methods and billing inquiries",
          "Accessing resources and downloadable materials",
        ].map((topic, idx) => (
          <li key={idx}>{topic}</li>
        ))}
      </ul>

      <h4 className="text-xl font-semibold mb-2">Need further assistance?</h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        If you cannot find the answer to your question, feel free to contact our
        support team. We're here to ensure you have a smooth and enjoyable
        learning experience.
      </p>

      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@futuremodetchnology.com"
            className="text-primary hover:underline"
          >
            info@futuremodetchnology.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+918308211268" className="text-primary hover:underline">
            +91 8308211268
          </a>
        </p>
        <p>
          <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
        </p>
      </div>
    </div>
  );
}
