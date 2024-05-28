import React from "react";
import { Helmet } from "react-helmet";
import { MainHeader } from "../_include";

export { Page };

function Page() {
  return (
    <main id="page__articles">
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Articles</h1>
      </article>
    </main>
  );
}
