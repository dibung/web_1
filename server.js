const express = require('express');
const app = express();
app.use(express.json());

// 기본 로깅 미들웨어
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// 기본 라우트
app.get('/', (req, res) => {
    res.send({
        status: 'success',
        message: 'Hello, world'
    });
});

// 사용자 등록 (POST)
app.post('/users', (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).send({
            status: 'fail',
            message: '이름과 비번 필수.'
        });
    }

    res.status(201).send({
        status: 'success',
        message: '사용자 등록',
        data: { name, password }
    });
});

// 게시글 등록 (POST)
app.post('/posts', (req, res) => {
    const { title, dueDate } = req.body;

    if (!title || !dueDate) {
        return res.status(400).send({
            status: 'fail',
            message: '400, 제목 입력'
        });
    }

    res.status(201).send({
        status: 'success',
        message: '글 등록',
        data: { title, dueDate }
    });
});

// 사용자 목록 조회
app.get('/users', (req, res) => {
    res.send({
        status: 'success',
        message: 'Get request to the users page'
    });
});

// 특정 사용자 조회
app.get('/users/:id', (req, res) => {
    res.send({
        status: 'success',
        message: `User id : ${req.params.id}`,
        data: { id: req.params.id }
    });
});

// 서비스 불가
app.get('/service-check', (req, res) => {
  const active = false;
  if (!active) {
    return res.status(503).json({
      status: "error",
      message: "503, 서비스 불가",
    });
  }
});


// 사용자 수정 (PUT)
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(400).send({
            status: 'fail',
            message: '400, 수정할 이름 입력 필수'
        });
    }

    res.send({
        status: 'success',
        message: `200, 사용자 ${id}의 이름이 '${name}'으로 수정됨`,
        data: { id, name }
    });
});

// 게시글 수정 (PUT)
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
        return res.status(400).send({
            status: 'fail',
            message: '400, 수정할 제목을 입력'
        });
    }

    res.send({
        status: 'success',
        message: `게시글 ${id}의 제목이 '${title}'(으)로 수정`,
        data: { id, title }
    });
});

// 사용자 삭제
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    res.send({
        status: 'success',
        message: `사용자 ${id} 삭제 완료`,
        data: { id }
    });
});

// 게시글 삭제
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;

    res.send({
        status: 'success',
        message: `게시글 ${id} 삭제 완료`,
        data: { id }
    });
});

// 404 처리
app.use((req, res, next) => {
    res.status(404).send({
        status: 'fail',
        message: '404, Not found'
    });
});

// 일반 에러 처리
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        status: 'error',
        message: '500, Something broke!'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
