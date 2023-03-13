# openAPI를 활용한 Netflix 클론 코딩

## 📃 개요

[TMDB](https://www.themoviedb.org/)의 open API를 활용하여 데이터를 가져와 Netflix사이트를 그려내도록 만들었습니다.

<br/>

## 📢 구현 사항

- 배너별로 필요한 database를 가져와 map메소드를 통해 자동적으로 리스트를 구성합니다.
  - 메인 배너를 제외한 섹션 별 배너는 swipe기능이 제공됩니다.
- 메인 배너의 `Play`버튼 클릭시, 예고편 정보가 있을 경우 유튜브 폼을 통해 예고편 영상을 보여주도록 합니다.
  - 예고편 재생시 전체화면으로 재생되며, 우측 하단의 `BACK`버튼 클릭시 메인 페이지로 돌아옵니다.
- 각 섹션별 배너의 영화 클릭시 해당 영화의 상세 정보를 모달을 통해 띄워줍니다.
- 검색 키워드에 맞는 영화 목록을 화면에 출력합니다.
  - 검색된 영화 클릭시 해당 포스터가 전체화면으로 띄워집니다.

<br/>

## 👀 사이트 미리보기

### 1. 메인 한눈에 보기

![netflix-react-practice](https://user-images.githubusercontent.com/96231175/224706665-54f24bdb-3787-4c5f-aeb9-097d0b9d8ccc.png)

<br/>

### 2. 메인 배너 `Play`버튼 클릭시

![preview-video](https://user-images.githubusercontent.com/96231175/224706683-8122e2b5-8aa8-4ae8-97a6-254a9e7ea588.jpg)

<br/>

### 3. 영화정보 상세보기

![modal](https://user-images.githubusercontent.com/96231175/224706688-f783c5d2-f7f0-4e80-a161-58069fe53ad5.jpg)

<br/>

### 4. 키워드 검색 화면

![search](https://user-images.githubusercontent.com/96231175/224706686-e7382d64-390b-4016-906a-0c190256630f.jpg)

<br/>

## ⚙ 사용 스택

- React
- axios
- styled-components
- swiper
- react-fontawesome
