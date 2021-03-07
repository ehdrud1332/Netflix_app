## 주요기능
* API 연동 및 받아온 정보 뿌려주기
* 인기영화, 상영영화, 영화세부내용 etc. 구현
* Movie, TV Show 메인화면 구현 (Popular, ComingSoon, Top Rated 영역)
* 검색페이지 구현, 검색 후 Movie, Tv Results 키워드 서칭에 맞게 결과 출력
* 이미지 슬라이드쇼(Vertical, Horizontal), 애니메이션 슬라이드 쇼 구현

## 사용한 패키지
~~~ts
"packages": [
"React Native"
"React Hooks"
"Expo"
"Axios"
]
~~~

## 완성 화면

<img src="https://user-images.githubusercontent.com/60862525/93018941-9e0f4f80-f60e-11ea-927f-c35eae0f1ef9.gif" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93018952-b7b09700-f60e-11ea-8e56-6502bb20873e.gif" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93018961-ceef8480-f60e-11ea-9557-d4d6eda6cc4a.gif" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93018963-d31ba200-f60e-11ea-8674-c3d70e53909a.gif" width="25%"> 

## 완성 화면 레이아웃
<img src="https://user-images.githubusercontent.com/60862525/93017481-13295780-f604-11ea-9e35-c636c423d938.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93017499-348a4380-f604-11ea-9c9b-dd732dbf6c5c.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93017509-479d1380-f604-11ea-86e2-98478747952e.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93017514-54ba0280-f604-11ea-8075-036d7652d467.png" width="25%"><img src="https://user-images.githubusercontent.com/60862525/93017525-63a0b500-f604-11ea-929b-ac85b608af09.png" width="25%">

## 스터디노트

#### _Axios를 이용한 API연동_

* 비동기 방식으로 api를 불러오는 함수 만들기
* TMDB 사이트의 API를 활용하여 원하는 영화정보(Popular, upcoming etc.) 함수 만들기

<img src="https://user-images.githubusercontent.com/60862525/93017751-145b8400-f606-11ea-828b-5b115eec112e.png" width="50%">

#### _Hook을 이용한 Keyword 검색_

* useState을 이용해 초기 상태값 정하기
* 키워드가 빈칸일 경우 return(비동기방식) 키워드가 있다면 상태값 변경
* 키워드에 대한 결과값이 0이 아니면 결과 출력

<img src="https://user-images.githubusercontent.com/60862525/93017960-808ab780-f607-11ea-8f02-f0e245246354.png" width="50%">

#### _useEffect_

* api를 mapping하는 함수 만들기
* Hook(useEffect)를 이용한 TMDB API 불러오기

<img src="https://user-images.githubusercontent.com/60862525/93018389-5a1a4b80-f60a-11ea-9de4-2f1fa2dda674.png" width="50%">

## To do List

* 다양한 ImageStyle 구현
* 다양한 API 연동해보기
* Hook 코드 활용
- [x] useTabs
- [x] useTitle
- [x] useClick
- [x] useConfirm
- [x] usePreventLeave
- [x] useBeforeLeave
- [x] useFadeIn
- [x] useNetwork
- [x] useScroll
- [x] useFullscreen
- [x] useNotification
- [x] useAxios

