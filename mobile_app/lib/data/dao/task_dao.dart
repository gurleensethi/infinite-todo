import 'package:infinite_todo/data/dao/dao.dart';
import 'package:infinite_todo/data/models/task.dart';

class TaskDAO extends DAO<Task> {
  final Map<int, Task> _root = {};

  @override
  Future<Task> create(Task obj) {
      // TODO: implement create
      throw UnimplementedError();
    }
  
    @override
    Future<bool> delete(Task obj) {
      // TODO: implement delete
      throw UnimplementedError();
    }
  
    @override
    Future<List<Task>> findAll() {
      // TODO: implement findAll
      throw UnimplementedError();
    }
  
    @override
    Future<Task> findOne(Taskobj {
      // TODO: implement findOne
      throw UnimplementedError();
    }
  
    @override
    Future<bool> update(Task obj) {
    // TODO: implement update
    throw UnimplementedError();
  }
}