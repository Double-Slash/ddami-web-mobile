# DDAMI - web (mobile)
	
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

### Page URI

- `/` : main 페이지
- `/search` : 검색
- `/workplace` 작업실 관련
    - `/:id` : 아이디가 id인 사용자의 작업실
    - `/work/:workId` : workId의 작업물 상세 페이지
    - `/write` : 작업실 글 작성하기


### install

```
git clone
yarn install
npm run start
```
