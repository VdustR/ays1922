import { css, cx } from "@emotion/css";
import { saveAs } from "file-saver";
import { toBlob } from "html-to-image";
import QRCode from "qrcode";
import { useEffect, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { formatDisplayLocationCode, formatLocationCode } from "utils";
import escapeHtml from "utils/escape";

const cssFrame = css`
  label: cssFrame;
  position: relative;
`;

const cssBgFrame = css`
  label: BgFrame;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-top: 0px;
`;

const cssBg = css`
  label: Bg;
  /* height: 842px; */
  width: 930px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
`;

const cssQrCode = css`
  label: QrCode;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 620px;
  left: 155px;
  z-index: 11;
`;

const cssShopCode = css`
  label: ShopCode;
  position: absolute;
  top: 990px;
  left: 125px;
  z-index: 11;
  font-family: "Courier New", Courier, monospace;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 360px;
  height: 57px;

  outline: none;
  border: 0;
  padding: 0;
  background: none;
`;

const cssSmsText = css`
  label: SmsText;
  background: white;
  position: absolute;
  top: 621px;
  left: 619px;
  z-index: 11;
  font-size: 10px;
  font-weight: 800;
  line-height: 1.5em;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 181px;
  height: 55px;
  /* border: 1px solid red; */
`;

const cssCount = css`
  label: Count;
  background: #fff;
  position: absolute;
  text-align: right;
  padding: 2px;
  top: 639px;
  left: 800px;
  font-size: 9px;
  width: 26px;
  height: 12px;
  color: #d0d0d0;
  z-index: 2;
`;

const message = "本簡訊是簡訊實聯制發送，限防疫目的使用。";

export type AppProps = {
  img: string;
  classNameQrCode?: string;
  classNameShopCode?: string;
  classNameSmsText?: string;
  classNameCount?: string;
};

function App({
  img,
  classNameQrCode,
  classNameShopCode,
  classNameSmsText,
  classNameCount,
}: AppProps) {
  const history = useHistory();
  const { locationCode: oriLocationCode } =
    useParams<{ locationCode: string }>();
  const cleanLocationCode = useMemo(
    () => formatLocationCode(oriLocationCode),
    [oriLocationCode]
  );
  useEffect(() => {
    if (!oriLocationCode.match(/^\d{15}$/)) {
      alert("請輸入正確的場所代碼");
      history.replace("/");
    }
  }, [cleanLocationCode.length, history, oriLocationCode]);
  const locationCode = useMemo(
    () => formatDisplayLocationCode(cleanLocationCode),
    [cleanLocationCode]
  );
  const fill = locationCode.length === 18;
  const smsText = useMemo(
    () => (fill ? `場所代碼: ${locationCode}\n${message}` : ""),
    [fill, locationCode]
  );
  const outFileName = useMemo(
    () => (fill ? `ays1922_${locationCode.split(" ").join("-")}.png` : ""),
    [fill, locationCode]
  );
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (!fill) {
      setUrl("");
      return;
    }
    let cancel = false;
    QRCode.toDataURL(`smsto:1922:${smsText}`).then((url) => {
      if (cancel) return;
      setUrl(url);
    });
    return () => {
      cancel = true;
    };
  }, [fill, locationCode, smsText]);
  const createMarkup = useMemo(() => {
    if (!fill) return undefined;
    return () => ({
      __html: smsText.split("\n").map(escapeHtml).join("<br/>"),
    });
  }, [fill, smsText]);
  return (
    <div
      className={cssFrame}
      onClick={(e) => {
        if (!fill) return;
        toBlob(e.currentTarget, { pixelRatio: 1.5 }).then(function (blob) {
          if (!blob) {
            alert("Blob missing");
            return;
          }
          saveAs(blob, outFileName);
          // history.replace(`/h/${cleanLocationCode}`);
        });
      }}
    >
      <div className={cssBgFrame}>
        {url ? (
          <img className={cx(cssQrCode, classNameQrCode)} src={url} alt="" />
        ) : null}
      </div>
      <div className={cx(cssCount, classNameCount)}>{smsText.length}/70</div>
      <div className={cx(cssShopCode, classNameShopCode)}>{locationCode}</div>
      {/* eslint-disable-next-line react/no-danger-with-children */}
      <div
        className={cx(cssSmsText, classNameSmsText)}
        dangerouslySetInnerHTML={createMarkup ? createMarkup() : undefined}
        children={
          createMarkup ? undefined : (
            <span style={{ color: "red" }}>請先輸入場所代碼</span>
          )
        }
      />
      <div className={cssBgFrame}>
        <img className={cssBg} src={img} alt="" />
      </div>
    </div>
  );
}

export default App;
