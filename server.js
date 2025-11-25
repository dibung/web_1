const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// 기본 라우트
app.get('/', (req, res) => {
    //throw new Error('test Error'); //에러
    res.send('Hello, world');
});


//post_등록
app.post('/users', (req, res) =>{
    const{name, password} = req.body;
    if(!name|| !password){
         return res.status(400).send({ status: 'fail', message: '400, 이름과 비번 필수.' });
    }
     res.status(201).send({
        status: 'success',
        message: '사용자 등록',
        data: { name, password }
    });
})

app.post('/posts', (req, res) =>{
    const{title, dueDate} = req.body;
    if (!title||!dueDate){
        return res.status(400).send({ status: 'fail', message: '400, 제목 입력' });  
    }
      res.status(201).send({
        status: 'success',
        message: '글 등록',
        data: {title, dueDate }
    });
})

//get
app.get('/users', (req, res) => {
    res.send('Get request to the users page');
});

app.get('/users/:id', (req, res) => {
    res.send(`User id : ${req.params.id}`);
})
//put
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;  

    if (!name) {
        return res.status(400).send("400, 수정할 이름 입력 필수");
    }

    res.send(`사용자 ${id}의 이름이 '${name}'으로 수정됨`);
});

app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (!title) {
        return res.status(400).send('400, 수정할 제목을 입력');
    }

    res.send(`게시글 ${id}의 제목이 '${title}'(으)로 수정`);
});


//delete -> 사용자
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`사용자 ${id} 삭제 완료`);
});

//delete -> 게시물
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    res.send(`게시글 ${id} 삭제 완료`);
});

// 404 에러 처리 미들웨어x
app.use((req, res, next) => {
    res.status(404).send("404, Not found");
});   

// 일반 에러 처리 미들웨어
app.use((err, req, res, next) => {
    console.error(err.stack);   
    res.status(500).send("500, Something broke!");
});   


const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});     