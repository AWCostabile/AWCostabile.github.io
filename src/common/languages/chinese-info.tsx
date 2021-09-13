import {
  EMAIL,
  PROPOSAL_LINK,
  PUBLIC_AMENITY,
  ZOOM_ID,
  ZOOM_LINK,
  ZOOM_PASSWORD,
} from "common/constants/app";
import { ILanguage } from "common/models/language";
import { Link } from "components/link";
import { textSpace } from "utils/text";

export const chineseInfo: ILanguage["info"] = {
  delivery: (
    <ul>
      <li>郵寄 - PO Box 1, Glen Waverley VIC 3150</li>
      <li>
        電郵 -{" "}
        <Link to="mailto:mail@monash.vic.gov.au">mail@monash.vic.gov.au</Link>
      </li>
    </ul>
  ),
  description: [
    <>
      於 <strong>本周四 (16/9/2021)</strong>，Monash市議會將會就
      <em>251 - 261 Springvale Road</em>
      樓高21層的發展項目作出批准或反對興建的決定。作為Glen
      Waverley居民，我和家人相信聯合起來提出反對最
      合符社區利益。因此我建立了此網站及反對書表格，希望能幫您向市議會提出反對聲音。
    </>,
    <>
      為加強我們的反對理據，我和家人已委託制作獨立城市規劃報告並將於周二
      (14/9/2021) 發表，到時報告內容 會於此網站公開。報告會列出Glen
      Waverley過度發展對Galleria及Sky Garden的潛在影響，您可使用相關內
      容作為您的反對理據。
    </>,
    <>
      此外，我亦會於 <strong>周二 (14/9/2021)</strong> (資料如下){" "}
      <strong>下午六時半</strong>{" "}
      舉行Zoom會議，去解答關於報告內容的疑問，及作為Glen Waverley社區去
      討論反對策略的平台，好讓我們的理據更加充分。由於反對書的截止收集日期為周四(16/9/2021)，希望您能就
      此發展項目盡量通知您的鄰居。
    </>,
    <span style={{ display: "block", padding: "0 16px" }}>
      <strong>Zoom 會議編號:</strong>
      <br />
      {textSpace(6)}
      <Link to={ZOOM_LINK}>
        <em>{ZOOM_ID}</em>
      </Link>
      <br />
      <strong>Zoom 會議密碼:</strong>
      <br />
      {textSpace(6)}
      <em style={{ color: "#C22" }}>{ZOOM_PASSWORD}</em>
    </span>,
    <>
      此反對書小工具的目的為幫您更易於填寫資料並簽署，所以填寫此反對書時，您的私隱當然非常重要。
      此網站只會儲存資料在您的設備上，而不會作任何網上發佈。故此，打印PDF時不會作任何向市議會作出任何傳輸。
    </>,
    <>
      請記住，市議會的責任為向整個社區提供{" "}
      <Link to={PUBLIC_AMENITY}>公共設施</Link>
      而不會對任何個人利益作出考慮。故此，當你填寫反對書時請注意以下幾點：
      <ul>
        <li>
          21層高的大樓對目前社區來說實在太高，我們想避免Glen
          Waverley像其他周邊社區
          一樣過度發展。我們要向發展商提出他們不應在興建大樓時作出高度上的競賽。
        </li>
        <li>
          發展商申請書只顯示某個時段的遮光效果，由於此項目極之貼近Galleria及Sky
          Garden， 我們有理由相信它於早上時段會對Railway Parade,
          Kingsway甚至Coleman Parade作出自然光線上的阻擋。
        </li>
        <li>
          發展商的交通流量分析針對2020年11月這時段，而該封城時段的交通流量根本不能代表平常及長遠的實際情況。
        </li>
        <li>
          大樓本身減少了泊車位數目，而使用了位於The
          Glen的泊車位數目去合理化申請裡的超過150個車位是不能接受的。
        </li>
        <li>
          O’Sullivan
          Road本身為一條經常被家長用於接送學童及居民往來公共交通的小路，由於此項目的停車場出入口會
          跟Galleria停車場出入口共用，這會導致繁忙時段交通擠塞。
        </li>
        <li>
          發展商本身的報告亦有提及可能產生的強風對O’sullivan
          Road的路人帶來潛在風險。
        </li>
        <li>
          市議會是我們選出的代表，他們不應把發展商利益放於優先，反而更應該服務居民及社區。
        </li>
      </ul>
    </>,
    <>
      由於此表格不會作任何傳輸，請用以下地址郵寄或電郵到Monash市議會，確保您能成功提交反對書。
    </>,
  ],
  more: [
    <>
      若果您希望得到更多關於此項目的資料，包括發展商提供的報告和分析，請按以下連結。你亦可利用該頁提供的連結填寫反對書。
    </>,
    <Link to={PROPOSAL_LINK}>
      計劃發展項目 251 -261 Springvale Road, Glen Waverley
    </Link>,
    <>感謝你的關注及諒解。</>,
    <>
      Anthony Costabile及家人
      <br />
      <em>1213A 25 O'Sullivan Road</em>
      <br />
      <Link to={`mailto:${EMAIL}`}>{EMAIL}</Link>
      <br />
      <br />
      <em style={{ fontSize: "0.8em" }}>
        ** 我和家人已花費$3000於委託城市規劃報告，雖然我們會免費提供報告內容，
        惟若你能幫助分擔部份費用我們會相當感激。
      </em>
    </>,
  ],
};
