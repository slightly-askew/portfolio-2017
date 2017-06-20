//@flow

import componentQueries from "react-component-queries";

export const componentQuery = componentQueries({
  queries: [
    ({ width }) => ({
      queries: {
        mobileMenuWidth: width
      }
    })
  ]
});
