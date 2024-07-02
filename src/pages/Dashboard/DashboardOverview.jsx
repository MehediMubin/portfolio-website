import Alerts from "../../components/Dashboard/Alerts";
import QuickActions from "../../components/Dashboard/QuickActions";
import QuickStats from "../../components/Dashboard/QuickStats";

const DashboardOverview = () => {
   return (
      <div className="p-8">
         <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
         <QuickStats />
         <QuickActions />
         <Alerts />
      </div>
   );
};

export default DashboardOverview;
