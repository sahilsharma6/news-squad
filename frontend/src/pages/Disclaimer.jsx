import React from "react";
import { motion } from "framer-motion";
const Disclaimer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-gray-800">
        <motion.h1
          className="text-3xl font-semibold text-center text-blue-600 mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          Disclaimer
        </motion.h1>
        <motion.section
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              General Information
            </h2>
            <p className="mt-4 text-lg">
              The information provided by NewsSquad is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              No Liability
            </h2>
            <p className="mt-4 text-lg">
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              External Links
            </h2>
            <p className="mt-4 text-lg">
              The Site may contain (or you may be sent via the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">
              Changes to This Disclaimer
            </h2>
            <p className="mt-4 text-lg">
              We may update our Disclaimer from time to time. We will notify you of any changes by posting the new Disclaimer on this page. You are advised to review this Disclaimer periodically for any changes. Changes to this Disclaimer are effective when they are posted on this page.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-blue-600">Contact Us</h2>
            <p className="mt-4 text-lg">
              If you have any questions about this Disclaimer, please contact us:
            </p>
            <ul className="list-inside list-disc mt-4 text-lg">
              <li>
                <strong>Email:</strong> support@newsquad.com
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
export default Disclaimer;