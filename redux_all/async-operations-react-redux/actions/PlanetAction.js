import axios from "axios";

import { REQUEST_PLANETS, RECEIVE_PLANETS } from "../constants";

let PlanetAction = {
  fetchPlanets() {
    return dispatch => {
      dispatch({ type: REQUEST_PLANETS });

      axios
        .get("/static/solar-system-planets.json")
        .then(response => {
          //throw "No Planets";
          //throw new Error("No Planets");

          setTimeout(() => {
            dispatch({
              type: RECEIVE_PLANETS,
              success: true,
              planets: response.data.planets
            });
          }, 3000);
        })

        .catch(error =>
          dispatch({
            type: RECEIVE_PLANETS,
            error: error.message,
            planets: null
          })
        );
    };
  }
};

export default PlanetAction;
