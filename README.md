#api 목록

1.
메소드: GET
URL: /
설명: 기본 라우트
응답코드: 200

2.
메소드: GET
URL: /users
설명: 모든 사용자 조회
응답코드: 200

3.
메소드: GET
URL: /users/:id
설명: 특정 사용자 조회
응답코드: 200

4.
메소드: POST
URL: /users
설명: 사용자 등록
응답코드: 201 / 400

5.
메소드: POST
URL: /posts
설명: 게시글 등록
응답코드: 201 / 400

6.
메소드: PUT
URL: /users/:id
설명: 사용자 이름 수정
응답코드: 200 / 400

7.
메소드: PUT
URL: /posts/:id
설명: 게시글 제목 수정
응답코드: 200 / 400

8.
메소드: DELETE
URL: /users/:id
설명: 사용자 삭제
응답코드: 200

9.
메소드: DELETE
URL: /posts/:id
설명: 게시글 삭제
응답코드: 200

10.
메소드: GET
URL: /non-existent
설명: 존재하지 않는 URL 테스트
응답코드: 404

11.
메소드: GET
URL: /error
설명: 서버 에러 테스트
응답코드: 500

12.
메소드: GET
URL: /service-check
설명: 서비스 불가 테스트
응답코드: 503

#응답

{
  "status": "success | fail | error",
  "message": "설명 메시지",
  "data": { } (필요하면)
}
