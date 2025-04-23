const WeddingTaskList = ({ tasks, selectedTasks, toggleTask }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {tasks.map((task, index) => {
          const isSelected = selectedTasks.includes(task);
  
          return (
            <button
              key={index}
              onClick={() => toggleTask(task)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border border-gray-300 shadow-sm bg-[#F4C2C2]
                ${isSelected ? "opacity-60" : "hover:opacity-90"}`}
            >
              {task}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default WeddingTaskList;
  