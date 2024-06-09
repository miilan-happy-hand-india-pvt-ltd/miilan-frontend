import  { useEffect } from "react";
import { useState } from "react";
import MissingCard2 from "../cards/MissingCard2";
import { getdata } from "../../utils/UserAPIS/UserAPIS";
import { HashLoader } from "react-spinners";

function LiveDashbord() {
  const [data, setData] = useState();

  useEffect(() => {
    getdata()
      .then((res) => setData(res))
      .catch((err) => Error(`Failed while fetching data`));
  }, []);
  return (
    <div className=" w-full py-5 gap-3 flex justify-center items-center flex-wrap  ">
      {data ? (
        data?.map((card, index) => <MissingCard2 card={card} key={index} />)
      ) : (
        <div className="w-full flex items-center blur-sm bg-slate-400 justify-center h-[100vh]">
          <HashLoader color="blue" />
        </div>
      )}
    </div>
  );
}

export default LiveDashbord;
