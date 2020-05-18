import 'package:meta/meta.dart';

class Task {
  final int id;
  final String content;
  final int parentId;
  final int createdAt;
  final bool isCompleted;

  Task({
    @required this.id,
    @required this.content,
    @required this.parentId,
    @required this.createdAt,
    @required this.isCompleted,
  });
}
