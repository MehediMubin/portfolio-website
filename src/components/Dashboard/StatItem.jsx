const StatItem = ({ title, value }) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center">
    <p className="text-gray-600">{title}</p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

export default StatItem;