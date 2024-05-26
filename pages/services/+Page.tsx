import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { DispositionSwitch } from "@features/Disposition";
import { useEffect } from "react";
import { mainRoutes } from "@identities/routes";
import { Helmet } from "react-helmet";
export { Page };

function Alert({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    alert("Hello.");
  }, []);
  return <div className="alert">{children}</div>;
}

function Page() {
  return (
    <main id="page__services">
      <Helmet>
        <title>Services &bull; Spwashi</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Hello.</h1>
        <h2>I'm spwashi.</h2>
        <h3>I build software and make art.</h3>
        <DispositionSwitch
          boon={<>How are you?</>}
          bane={<Alert>How are you?</Alert>}
          bone={
            <>
              <ul>
                <li>Brand Management</li>
                <li>Software Architecture</li>
                <li>Curriculum Design</li>
              </ul>
            </>
          }
          bonk={
            <>
              Send me a DM <a href="https://tiktok.com/@spwashi">on TikTok</a>!
            </>
          }
          honk={
            <>
              <a href={mainRoutes.articles.href}>Articles</a>
            </>
          }
        />
      </article>
    </main>
  );
}
