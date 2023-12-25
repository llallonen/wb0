import React, { useContext } from "react";
import RecommendationItem from "./RecommendationItem";
import { AppContext } from "../AppContext";

const Recommendation = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <section className="recommendation">
      <h2 className="recommendation__title">Вас может заинтересовать</h2>
      <div className="ruler"></div>
      <ul>
        {state.data.map(
          (item) => item.rec && <RecommendationItem item={item} key={item.id} />
        )}
      </ul>
    </section>
  );
};

export default Recommendation;
