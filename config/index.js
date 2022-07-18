const dev = process.env.NODE_ENV !== "production";

// export const API_ROUTE = dev
//   ? "http://localhost:3000"
//   : "https://cloudkit.toplogic.com.ph:9030";

export const API_ROUTE = dev
  ? "https://cloudkit.toplogic.com.ph:9030"
  : "https://cloudkit.toplogic.com.ph:9030";

export const API_KEY = "AIzaSyDZyUtlD-3zzsRYYKkvGG47BdS8diMrbUg";
