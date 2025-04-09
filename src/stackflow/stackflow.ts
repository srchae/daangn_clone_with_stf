import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

import ArticleActivity from "../activities/Article";
import BeginActivity from "../activities/Begin";
import LoginActivity from "../activities/Login";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 300,
  activities: {
    BeginActivity,
    ArticleActivity,
    LoginActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "BeginActivity",
});
