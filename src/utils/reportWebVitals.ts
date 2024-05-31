import { onLCP, onINP, onCLS } from "web-vitals";
const reportToAnalytics = (metric) => {
  console.log(JSON.parse(JSON.stringify(metric)));
};

const reportWebVitals = () => {
  onLCP(reportToAnalytics, { reportAllChanges: true });
  onINP(reportToAnalytics, { reportAllChanges: true });
  onCLS(reportToAnalytics, { reportAllChanges: true });
};

export default reportWebVitals;
