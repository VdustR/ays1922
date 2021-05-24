import { css } from "@emotion/css";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import Template from "./Template";
import v1En from "./v1/en.jpeg";
import v1Zh from "./v1/zh.jpeg";
import v2Zh from "./v2/zh.jpeg";

function Home() {
  return (
    <>
      <h1>AnonYmouS 1922 簡訊實聯制海報產生器</h1>
      <ul>
        <li>
          <a
            href="https://github.com/VdustR/ays1922#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            介紹
          </a>
        </li>
        <li>
          <NavLink target="_blank" rel="noopener noreferrer" to="/v2/zh">
            v2 - 中文
          </NavLink>
        </li>
        <li>
          <NavLink target="_blank" rel="noopener noreferrer" to="/v1/zh">
            v1 - 中文
          </NavLink>
        </li>
        <li>
          <NavLink target="_blank" rel="noopener noreferrer" to="/v1/zh">
            v1 - 英文
          </NavLink>
        </li>
      </ul>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact sensitive path="/" component={Home} />
        <Route exact sensitive path="/v1/zh">
          <Template img={v1Zh} />
        </Route>
        <Route exact sensitive path="/v1/en">
          <Template
            img={v1En}
            classNameQrCode={css`
              top: 614px;
              left: 140px;
            `}
            classNameSmsText={css`
              top: 594px;
            `}
            classNameCount={css`
              top: 613px;
            `}
            classNameShopCode={css`
              top: 979px;
              left: 111px;
              width: 361px;
              height: 55px;
            `}
          />
        </Route>
        <Route exact sensitive path="/v2/zh">
          <Template
            img={v2Zh}
            classNameQrCode={css`
              width: 193px;
              height: 193px;
              top: 573px;
              left: 369px;
            `}
            classNameSmsText={css`
              top: 998px;
              left: 67px;
              width: 164px;
              height: 46px;
            `}
            classNameCount={css`
              top: 1011px;
              left: 226px;
            `}
            classNameShopCode={css`
              top: 801px;
              left: 336px;
              width: 260px;
              height: 37px;
              font-size: 20px;
            `}
          />
        </Route>
        <Route path="/">NOT FOUND!</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
