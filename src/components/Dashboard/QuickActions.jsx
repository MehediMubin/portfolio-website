import ActionButton from "./ActionButton";

const QuickActions = () => (
   <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">Quick Actions</h3>
      <div className="flex flex-col md:flex-row gap-4">
         <ActionButton
            color="blue"
            text="Add Blog Post"
            url="/dashboard/create-blog-post"
         />
         <ActionButton
            color="green"
            text="Add Experience"
            url="/dashboard/add-experience"
         />
         <ActionButton
            color="purple"
            text="Add Project"
            url="/dashboard/add-project"
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
