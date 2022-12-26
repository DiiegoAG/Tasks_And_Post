import Service from "./Service";

const resource = 'posts';

export default ({
    get(){
        return Service.get(resource);
    },
    delete(id){
        return Service.delete(resource, id);
    },
    getOne(id){
        return Service.get(resource + '/' + id);
    }
})