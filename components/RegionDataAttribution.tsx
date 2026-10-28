export default function RegionDataAttribution() {
  return (
    <p className="mx-auto max-w-7xl px-4 py-6 text-xs leading-6 text-slate-500 sm:px-6 lg:px-8">
      법정동 이름은 <a className="underline" href="https://www.data.go.kr/data/15063424/fileData.do" target="_blank" rel="noopener noreferrer">국토교통부 전국 법정동 자료</a>(2026-06-30)를 사용했습니다. 추가 행정동 이름은 통계청 통계지리정보서비스(<a className="underline" href="https://sgis.kostat.go.kr" target="_blank" rel="noopener noreferrer">SGIS</a>)에서 공공누리 제1유형으로 개방한 행정동 경계를 가공한 것이며(가공: <a className="underline" href="https://github.com/vuski/admdongkor" target="_blank" rel="noopener noreferrer">vuski/admdongkor</a>), CC BY 4.0으로 배포됩니다. 행정동 기준일: 2026-10-01.
    </p>
  );
}
