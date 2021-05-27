import { css } from "@emotion/css";
import { Fragment, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import { formatDisplayLocationCode, formatLocationCode } from "utils";
import Template from "./Template";
import v1En from "./v1/en.jpeg";
import v1Zh from "./v1/zh.jpeg";
import v2Zh from "./v2/zh.jpeg";

function Link({ link, title }: { link: string; title: string }) {
  return (
    <li>
      <NavLink target="_blank" rel="noopener noreferrer" to={link}>
        {title}
      </NavLink>
    </li>
  );
}

function Home() {
  const history = useHistory();
  const { locationCode = "" } = useParams<{ locationCode: string }>();
  const displayLocationCode = useMemo(
    () => formatDisplayLocationCode(locationCode),
    [locationCode]
  );
  const cleanLocationCode = useMemo(
    () => formatLocationCode(locationCode),
    [locationCode]
  );
  const fill = displayLocationCode.length === 18;
  return (
    <div
      className={css`
        padding: 1em;
        max-width: 500px;
        margin-left: 2em;
        margin-right: auto;
      `}
    >
      <h1>AnonYmouS 1922 簡訊實聯制海報產生器</h1>
      <a
        href="https://github.com/VdustR/ays1922#readme"
        target="_blank"
        rel="noopener noreferrer"
      >
        軟體簡介
      </a>
      <h2>操作步驟</h2>
      <ol>
        <li>
          {"輸入"}
          <a
            href="https://www.facebook.com/ey.gov.tw/posts/4480266808667830"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"場所代碼"}
          </a>
          {": "}
          <input
            value={displayLocationCode}
            onChange={(e) => {
              const str = formatLocationCode(e.target.value);
              history.replace(`/h/${str}`);
            }}
            maxLength={18}
            placeholder="XXXX XXXX XXXX XXX"
            autoFocus
          />
          <button
            onClick={(e) => {
              history.replace("/h");
            }}
          >
            Clear
          </button>
        </li>
        {fill ? (
          <li>
            {"選擇模板後列印"}
            <div
              className={css`
                font-size: 0.8em;
              `}
            >
              或是左鍵點擊海報可以另存圖片(可能會延遲 2~3 秒)
            </div>
            <ul>
              <Link title="v2 - 中文" link={`/v2/zh/${cleanLocationCode}`} />
              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`/v1/zh/${cleanLocationCode}`}
                >
                  v1 - 中文
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`/v1/en/${cleanLocationCode}`}
                >
                  v1 - 英文
                </NavLink>
              </li>
            </ul>
            <h4>列印快捷鍵:</h4>
            <ul>
              <li>
                Mac: <kbd>⌘</kbd> + <kbd>p</kbd>
              </li>
              <li>
                Windows & Linux: <kbd>Ctrl</kbd> + <kbd>p</kbd>
              </li>
            </ul>
          </li>
        ) : (
          <li
            className={css`
              color: red;
            `}
          >
            請先輸入正確的場所代碼
          </li>
        )}
      </ol>
    </div>
  );
}

function Redirect() {
  const history = useHistory();
  useEffect(() => {
    history.replace("/h");
  }, [history]);
  return <Fragment />;
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact sensitive path="/" component={Redirect} />
        <Route exact sensitive path="/h/:locationCode?" component={Home} />
        <Route exact sensitive path="/v1/zh/:locationCode">
          <Template img={v1Zh} />
        </Route>
        <Route exact sensitive path="/v1/en/:locationCode">
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
        <Route exact sensitive path="/v2/zh/:locationCode">
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
              height: 47px;
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
