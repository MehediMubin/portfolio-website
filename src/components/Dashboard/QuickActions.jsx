import ActionButton from "./ActionButton";

const QuickActions = () => (
   <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
      <div className="flex flex-col md:flex-row gap-4">
         <ActionButton color="blue" text="Add Blog Post" />
         <ActionButton color="green" text="Add Experience" />
         <ActionButton color="purple" text="Add Project" />
         <ActionButton color="yellow" text="Add Skill" />
      </div>
   </div>
);

export default QuickActions;
