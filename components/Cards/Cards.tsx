import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto py-20 justify-center gap-1 flex items-center">
        <div className="hidden md:block">
          <Card width={"basis-1/3"} start={false} pera={true} />
        </div>
        <Card width={"basis-2/3"} start={true} pera={false} />
      </div>
    </div>
  );
};

export default Cards;
