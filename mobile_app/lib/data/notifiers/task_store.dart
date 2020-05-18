import 'package:flutter/material.dart';
import 'package:infinite_todo/data/dao/dao.dart';
import 'package:infinite_todo/data/models/task.dart';

class TaskStore extends ChangeNotifier {
  final DAO<Task> _taskDAO;
  final int parentId;
  final List<Task> _tasks = [];

  TaskStore({
    @required DAO<Task> taskDAO,
    this.parentId,
  }) : _taskDAO = taskDAO;

  void _init() {
    _loadTasks();
  }

  void _loadTasks() async {
    final tasks = await _taskDAO.findAll(parentId);
    _tasks.clear();
    _tasks.addAll(tasks);
    notifyListeners();
  }
}
