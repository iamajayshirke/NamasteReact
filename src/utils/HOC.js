export const RestoCardWithLabel = (RestoCard) => {
    return (props) => {
      return (
        <>
          <div className="absolute bg-blue-950 text-amber-50 z-3 rounded-md p-1">Customers Choice</div>
          <RestoCard {...props} />
        </>
      );
    };
  };