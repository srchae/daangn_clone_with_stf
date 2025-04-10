import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

import BeginActivity from "../activities/Begin";
import LoginActivity from "../activities/Login";
import MainActivity from "../activities/Main";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 300,
  activities: {
    BeginActivity,
    LoginActivity,
    MainActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "BeginActivity",
});
