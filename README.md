# DDAMI - web (mobile)

## Development
- React.js
- Redux-saga
- styled-components

### install

```
git clone
yarn install
npm run start
```

### Page routing path

- `/` : 메인
- `/join` : 회원가입
- `/login` : 로그인
- `/search` : 검색
- `/workplace` 작업실 관련
    - `/my` : 내 작업실
    - `/:id` : 아이디가 id인 사용자의 작업실
    - `/work/:workId` : workId의 작업물 상세 페이지
    - `/write` : 작업실 글 작성하기
- 햄버거 관련 페이지
    - `/like` : 좋아요한 작품
    - `/purchase` : 판구매 내역
    - `/subscribe` : 찜한 목록
    - `/setting` : 설정
- `/shop` : 따미샵
    - `/pieces`  : 작품샵
    - `/materials` : 재료샵

## Team

### Developer
💻 [샛별](https://github.com/sbyeol3) <br>
💻 [경](https://github.com/KimGyeong) <br>
💻 [현호](https://github.com/hyunolike) <br>
💻 [민정](https://github.com/kmin-jeong)

### Commit Message Convention

```
Feat : 새로운 기능 추가
Fix : 버그 수정
Docs : 문서 수정
Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
Refactor : 코드 리펙토링
Chore : 기타 작업
Branch 이름은 기능별로 생성
```
