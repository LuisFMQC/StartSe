const StudentRepository = require('../database/repositories/studentRepository.js');

class StudentService {
    constructor(){
        this.repository = new StudentRepository();
    }

    async getAllStudents(){
        return this.repository.findAll();
    }

    async getStudentById(code){
        return this.repository.findById(code);
    }

    async createStudent(student){
        return this.repository.create(student);
    } 

    async updateStudent(code, student){
        return this.repository.update(code, student);
    }

    async deleteStudent(code){
        return this.repository.delete(code);
    }

};

module.exports = StudentService;