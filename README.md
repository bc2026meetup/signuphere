# B.C.2026 사이트

## 0. 언어 버전
사이트가 영어/한글 두 버전이에요.

- `index.html` — 영어 버전 (메인, 기본으로 열리는 페이지)
- `ko.html` — 한글 버전

오른쪽 상단 KOR/ENG 버튼으로 서로 이동해요. **주의**: 두 파일은 내용이 각각 따로 들어있는 별도 파일이라, 문구나 링크를 하나만 수정하면 다른 언어 버전에는 자동 반영되지 않아요 — 두 파일 다 똑같이 고쳐야 합니다. (레이아웃/디자인은 `style.css`, `script.js`를 공유하니 거긴 한 번만 고치면 양쪽에 다 적용돼요.)

## 1. 링크 연결 현황
구글폼/인스타/카톡/틱톡/Meetup 링크는 모두 연결 완료된 상태예요. 나중에 링크가 바뀌면 `index.html`과 `ko.html` 둘 다에서 해당 URL을 Ctrl+F로 찾아 바꿔주세요.

- Seoul Meetup Night 구글폼 — 히어로 "9/3" 버튼 + 섹션 버튼 (총 2곳, 동일 링크)
- Seoul Party Night 구글폼 — 히어로 "9/11" 버튼 + 섹션 버튼 (총 2곳, 동일 링크)
- Meetup 그룹 페이지 — 히어로 "Apply via Meetup App" 버튼
- 인스타그램 — Han River "Follow us on Instagram" 버튼 + 푸터 아이콘 (총 2곳, 동일 링크)
- 카카오톡 오픈채팅 — 푸터 아이콘
- 틱톡 — 푸터 아이콘

## 2. 사진 넣기
`images` 폴더에 아래 파일명 그대로 사진을 넣으면 바로 반영됩니다. (jpg 대신 png를 쓰고 싶으면 `index.html`에서 확장자만 바꿔주세요)

- `hero.jpg` — 메인 화면 배경 사진 (세로로 긴 사진 추천, 모바일 기준)
- `meetup-night.jpg` — "Seoul Meetup Night" 섹션 사진 (완료)
- `party-night.png` — "Seoul Party Night" 섹션 사진 (완료)
- `hanriver.jpg` — "Han River Meetup" 섹션 사진 (완료)
- `gallery-1.jpg` ~ `gallery-6.jpg` — 스크롤하면 나타나는 갤러리 사진 6장

## 3. 로컬에서 미리보기
`index.html` 파일을 더블클릭하면 브라우저에서 바로 열립니다.

## 4. 온라인에 올리기 (무료)
- [Netlify Drop](https://app.netlify.com/drop) 에 이 폴더를 통째로 드래그 앤 드롭하면 몇 초 만에 실제 주소가 생깁니다.
- 또는 GitHub 저장소를 만들고 GitHub Pages를 켜도 됩니다.
