import {
  // EMAIL,
  PROPOSAL_LINK,
  PUBLIC_AMENITY,
  // ZOOM_ID,
  // ZOOM_LINK,
  // ZOOM_PASSWORD,
} from "common/constants/app";
import { ILanguage } from "common/models/language";
import { Link } from "components/link";
// import { textSpace } from "utils/text";

export const chineseInfo: ILanguage["info"] = {
  delivery: (
    <ul>
      <li>郵寄 - PO Box 1, Glen Waverley VIC 3150</li>
      <li>
        電郵 -{" "}
        <Link to={`mailto:mail@monash.vic.gov.au`}>mail@monash.vic.gov.au</Link>
      </li>
    </ul>
  ),
  description: [
    <>
      此反對書的目的為幫助Glen
      Waverley居民對新公佈的計劃發展項目向市議會提出反對，項目地址位於
      <em>251-261 Springvale Road</em>。 項目內容為 21 層商住物業
      (147住戶，6商鋪)。
      填寫反對書時，請盡量提供詳細資料好讓您的反對聲音得到充分考慮。完成後請按頁面底部
      “打印反對書” 或可使用電子簽名後再打印，確認相關資料並按以下途徑提交。
    </>,
    <>
      您可以個人原因作為反對理據 例如{" "}
      <strong>
        <em>景觀被阻擋</em>
      </strong>{" "}
      或{" "}
      <strong>
        <em>物業價格受影響</em>
      </strong>
      等等，不過市議會首要責任為提供 <Link to={PUBLIC_AMENITY}>社區設施</Link>,
      所以若您能提出例如該項目會怎樣影響公共安全，
      車位數目減少等理據，您的反對會變得更加強而有力。
    </>,
    <>
      該項目最終可能仍會通過，惟反對聲音極有可能影響項目的大小，所以
      <strong>懇請</strong>
      您能抽空提出建議，好讓市議會能夠考慮你的反對聲音。
    </>,
    <>
      反對書截止收集日期為 <strong>周四 2021年9月16日</strong>,
      請盡快填寫並簽名，您可以用以下途徑交到市議會。
    </>,
  ],
  more: [
    "計劃項目內容請參考：",
    <Link to={PROPOSAL_LINK}>
      Proposed development at 251 -261 Springvale Road, Glen Waverley
    </Link>,
  ],
};
