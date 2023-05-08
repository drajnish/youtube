const Shimmer = () => {
  return (
    <div className="w-80 h-64 m-2">
      <div className="w-full h-3/4 rounded-md bg-slate-200"></div>
      <div className="flex items-center w-full animate-pulse mb-2">
        <div className="h-9 w-9 m-2 bg-slate-400 rounded-full"></div>
        <div className="flex flex-col w-2/3">
          <span className="h-2 w-4/5 m-2 bg-slate-400 rounded-md"></span>
          <span className="h-2 w-1/2 m-2 bg-slate-400 rounded-md"></span>
          <span className="h-2 w-1/5 m-2 bg-slate-400 rounded-md"></span>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
