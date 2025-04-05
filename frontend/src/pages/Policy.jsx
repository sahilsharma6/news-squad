import React from "react";
const Policy = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Privacy Policy
        </h1>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              Introduction
            </h2>
            <p className="mt-4 text-lg">
              At NewsSquad, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal data when you interact with our website and services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              1. Information We Collect
            </h2>
            <p className="mt-4 text-lg">
              We may collect various types of information, including but not limited to:
            </p>
            <ul className="list-inside list-disc mt-4 text-lg">
              <li>
                <strong>Personal Information:</strong> Name, address, email address, phone number, and other identifying information when you subscribe or create an account.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card details or other payment information if you choose to purchase premium content.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your interactions with our website, including IP address, browser type, and browsing history.
              </li>
              <li>
                <strong>Communication Data:</strong> Data you provide when contacting our customer support or subscribing to our newsletters.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your online experience. You can manage cookie preferences through your browser settings.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-lg">
              We may use your information for the following purposes:
            </p>
            <ul className="list-inside list-disc mt-4 text-lg">
              <li>
                <strong>Processing Subscriptions:</strong> To fulfill your subscriptions, process payments, and provide customer support.
              </li>
              <li>
                <strong>Communication:</strong> To send news updates, promotional materials, and respond to your inquiries.
              </li>
              <li>
                <strong>Website Improvement:</strong> To analyze website usage and enhance user experience.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              3. Data Security
            </h2>
            <p className="mt-4 text-lg">
              We take data security seriously and implement reasonable measures to protect your information from unauthorized access, disclosure, or alteration.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              4. Sharing Your Information
            </h2>
            <p className="mt-4 text-lg">We may share your data with:</p>
            <ul className="list-inside list-disc mt-4 text-lg">
              <li>
                <strong>Service Providers:</strong> Trusted third-party service providers to assist in business operations.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with legal requirements, such as responding to subpoenas or government requests.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              5. Your Privacy Rights
            </h2>
            <p className="mt-4 text-lg">
              You have certain rights regarding your personal data:
            </p>
            <ul className="list-inside list-disc mt-4 text-lg">
              <li>
                <strong>Access:</strong> You can request access to the personal information we hold about you.
              </li>
              <li>
                <strong>Rectification:</strong> You can request corrections to inaccuracies in your data.
              </li>
              <li>
                <strong>Erasure:</strong> You can request the deletion of your data in certain circumstances.
              </li>
              <li>
                <strong>Objection:</strong> You can object to the processing of your data for certain purposes.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              6. Consent and Changes
            </h2>
            <p className="mt-4 text-lg">
              By using our website and services, you consent to the terms of this Privacy Policy. We reserve the right to update this policy as needed, with changes being effective immediately upon posting on our website.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">Contact Us</h2>
            <p className="mt-4 text-lg">
              If you have any questions or concerns about our Privacy Policy, please reach out to us:
            </p>
            <ul className="list-inside list-disc mt-4 text-lg">
              <li>
                <strong>Email:</strong> support@newsquad.com
              </li>
              {/* <li><strong>Phone:</strong> +1 (800) 123-4567</li> */}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Policy;