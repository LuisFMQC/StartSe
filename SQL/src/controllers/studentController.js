const StudentService = require('../services/studentService');

exports.get = async (req, res, next) => {
    const payload = await new StudentService().getAllStudents();
    res.status(200).send(payload);
}

exports.getById = async (req, res, next) => {
    const payload = await new StudentService().getStudentById(req.params.id);
    res.status(200).send(payload);
}

exports.post = async (req, res, next) => {
    try{
        const payload = await new StudentService().createStudent(req.body);
        res.status(200).send(payload);
    } catch(error){
        res.status(400).send({
            message: error.message
        })
    }
}

exports.update = async (req, res, next) => {
    try{
        const id = req.params.id;
        const body = req.body;
        const oldStudent = await new StudentService().getStudentById(id);

        if(!oldStudent || oldStudent.length === 0)
            throw new Error(`Aluno com o RA ${id} não foi encontrado`);

        const payload = await new StudentService().updateStudent(id, body);
        res.status(200).send(payload);
    } catch(error){
        res.status(400).send({
            message: error.message
        })
    }
}

exports.delete = async (req, res, next) => {
    try{
        const oldStudent = await new StudentService().getStudentById(req.params.id);
        if(!oldStudent || oldStudent.length === 0)
            throw new Error(`Aluno com o RA ${id} não foi encontrado`);

        const payload = await new StudentService().deleteStudent(req.params.id);
        res.status(200).send(payload);
    } catch(error){
        res.status(400).send({
            message: error.message
        })
    }
}