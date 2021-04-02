// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  // todo - might need to do api.sergionajera.com/user
  //  also need one probably for api.sergionajera.com/user_*
  rest.get("https://api.sergionajera.com/user_dummy", (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(ctx.status(200));
  }),
];
