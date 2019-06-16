import request from "../utils/request";

export default {
    isLogin: () => request.get('/api/user/info'),
    getList: (data) => request.get('/api/task/list', data),
    userLogin: (data) => request.post("/api/login", data),
    overtimeDetail: (data) => request.get('/api/apply/overtime', data),
    vacationDetail: (data) => request.get('/api/apply/vacation', data),
    onFileDetail: (file) => request.post("/api/upload", file),
    overtimeSubmit: (data) => request.post('/api/apply/overtime', data),
    vacationSubmit: (data) => request.post('/api/apply/vacation', data),
    taskHistory: (data) => request.get("/api/task/history", data)
}