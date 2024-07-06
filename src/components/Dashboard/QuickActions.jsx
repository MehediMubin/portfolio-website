import ActionButton from "./ActionButton";

const QuickActions = () => (
   <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
      <div className="flex flex-col md:flex-row gap-4">
         <ActionButton
            color="blue"
            text="Add Blog Post"
            url="/dashboard/blogs"
         />
         <ActionButton
            color="green"
            text="Add Experience"
            url="/dashboard/experiences"
         />
         <ActionButton
            color="purple"
            text="Add Project"
            url="/dashboard/projects"
         />
         <ActionButton
            color="yellow"
            text="Add Skill"
            url="/dashboard/add-skill"
         />
      </div>
   </div>
);

export default QuickActions;
