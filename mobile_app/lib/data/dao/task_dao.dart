import 'package:infinite_todo/data/dao/dao.dart';
import 'package:infinite_todo/data/models/task.dart';

class TaskDAO extends DAO<Task> {
  final Map<int, Task> _root = {};

  @override
  Future<Task> create(Task obj) async {
    return null;
  }

  @override
  Future<bool> delete(int id) async {
    return false;
  }

  @override
  Future<List<Task>> findAll([int parentId]) async {
    return [Task(content: 'testing', id: 12)];
  }

  @override
  Future<Task> findOne(int id) async {
    return null;
  }

  @override
  Future<bool> update(Task obj) async {
    return null;
  }
}
