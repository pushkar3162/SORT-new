import React from "react";
import { motion } from "framer-motion";
import "./dynamics.css";

const CategoryDynamics = () => {const kpis = [
  "Trend Velocity Index",
  "Category Keyword Ecosystem Complexity",
  "Cross-Category Cannibalization Risk Indicator",
  "International Market Entry Barrier Indicator",
  "Sub-segment Growth Potential (e.g., Baked Snacks vs. Fried)",
  "Supply Chain Disruption Signal Frequency",
  "Price Sensitivity Fluctuation (via Sentiment Analysis)",
  "Sustainability\"Greenwashing\" Perception Score",
  "Regional Taste Preference Divergence",
  "Market Consolidation Activity Index",
  "Snackification Trend Penetration",
  "Direct-to-Consumer (DTC) Channel Viability Index (Category)",
  "Influence of Food Bloggers or Media on Category Perception",
  "Regulatory Sentiment Index",
  "Impact of Weather or Seasonality on Search or Discussion",
  "Ethical Sourcing Mention Frequency or Sentiment",
  "Food Tourism Association",
  "Health Claim Scrutiny Index",
  "Cross-Cultural Adaptation Challenges (Export Markets)",
  "Impact of Inflation on Discretionary Spending (Food Context)"
];

  
  return (
    <div className="brand-container h-auto text-blue-700 mx-auto bg-blue-50 p-6 grid grid-cols-3 gap-4">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="market-card p-4 w-[340px] h-[210px] border shadow-md"
        >
          <h5>{kpi}</h5>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryDynamics;
