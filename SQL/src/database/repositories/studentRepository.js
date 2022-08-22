const db = require('../index.js');

class StudentRepository {
    async findAll(){
        const conn = await db.connectToMySql();
        const query = 'SELECT * FROM aluno';
        const [students] = await conn.query(query);

        return students;
    }

    async findById(code){
        const conn = await db.connectToMySql();
        const query = 'SELECT * FROM aluno WHERE ra = ?';
        const [student] = await conn.query(query, [code]);

        return student;
    }

    async create(studentData){
        const conn = await db.connectToMySql();
        const query = 'INSERT INTO aluno(ra, nome, data_nascimento) VALUES (?, ?, ?)';
        const [student] = await conn.query(query, [studentData.ra, studentData.nome, studentData.data_nascimento]);

        return student;
    }

    async update(code, studentData){
        const conn = await db.connectToMySql();
        const query = 'UPDATE aluno SET nome= ?, data_nascimento = ? WHERE ra = ?';
        const [student] = await conn.query(query, [studentData.nome, studentData.data_nascimento, code]);

        return student;
    }

    async delete(code){
        const conn = await db.connectToMySql();
        const query = 'DELETE FROM aluno WHERE ra = ?';
        const [student] = await conn.query(query, [code]);

        return student;
    }
}

module.exports = StudentRepository;