export const RestoCardWithLabel = (RestoCard) => {
  return (props) => {
    return (
      <>
        <div className="relative">
          <div className="absolute bg-blue-950 text-amber-50 z-3 rounded-md p-1 left-[-1rem] top-[-1rem]">
            Customers Choice
          </div>
          <RestoCard {...props} />
        </div>
      </>
    );
  };
};
