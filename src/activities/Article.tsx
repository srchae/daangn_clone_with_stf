import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const ArticleActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "Article" }}>
      <div>Article</div>
    </AppScreen>
  );
};

export default ArticleActivity;
