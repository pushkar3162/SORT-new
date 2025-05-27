import React from "react";
import { motion } from "motion/react";
import "./brand.css";

const BrandHealthKPIs = () => {
  return (
    <div className="brand-container h-auto w-full text-blue-700 bg-blue-50 p-6 grid grid-cols-3 gap-6">
      {[
        "Brand Search Volume Trend",
        "Competitor Search Volume Trend",
        "Share of Search",
        "Social Media Mention Volume",
        "Social Media Sentiment Score",
        "Social Media Share of Voice",
        "Primary Social Platform Follower Count",
        "Follower Growth Rate",
        "Social Media Posting Frequency",
        "Social Media Engagement Rate",
        "Top Performing Social Media Content Themes",
        "Website Traffic Estimate Rank",
        "Estimated Website Bounce Rate",
        "Estimated Website Avg. Visit Duration",
        "Website Top Traffic Sources",
        "Website SEO Performance Indicator",
        "Top Organic Keywords Visibility",
        "Website Mobile Friendliness Score",
        "Website Page Load Speed Score",
        "News Mention Frequency",
        "News Sentiment",
        "Online Review Volume",
        "Average Online Rating",
        "Positive Review Themes",
        "Negative Review Themes",
        "Customer Service Response Rate",
        "Brand Association Cloud",
        "E-commerce Product Page Quality Score",
        "New Product Launch Visibility",
        "Restaurant Presence & Ratings",
      ].map((title, index) => (
        <motion.div
          key={title}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: index * 0.02 }}
          className="brand-card p-4 w-[430px] h-[250px] border shadow-md bg-white rounded-lg hover:scale-110 hover:rounded-xl hover:shadow-lg transition-all duration-500 ease-in-out"
        >
          <h5>{title}</h5>
        </motion.div>
      ))}
    </div>
  );
};

export default BrandHealthKPIs;
