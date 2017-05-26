//@flow

import componentQueries from "react-component-queries";

export default componentQueries({
  queries: [
    ({ width }) => {
      const w = width < 500 ? "s" : width < 900 ? "m" : "l";

      return {
        compWidth: w
      };
    }
  ]
});
