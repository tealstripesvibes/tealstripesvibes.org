import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { articles } from "./@id/articles";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <main id="page__articles">
      <Helmet>
        <title>Articles &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Articles</h1>
        <h2>Featured</h2>
        <ul>
          <li>
            <a href="/articles/job/search">The Job Search</a>
          </li>
          <li>
            <a href="/articles/software/optimization">The Clown Animation</a>
          </li>
        </ul>
        <h2>Topics</h2>
        <ul>
          {Object.entries(articles).map(([id, article]) => (
            <li key={id}>
              <a href={`/articles/${id}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
