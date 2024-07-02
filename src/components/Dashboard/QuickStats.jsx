import StatItem from "./StatItem";

const QuickStats = () => (
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatItem title="Total Blog Posts" value="120" />
      <StatItem title="Posts This Month" value="8" />
      <StatItem title="Total Experiences" value="35" />
      <StatItem title="New Experiences This Month" value="3" />
      <StatItem title="Total Projects" value="10" />
      <StatItem title="Total Skills" value="25" />
   </div>
);

export default QuickStats;
