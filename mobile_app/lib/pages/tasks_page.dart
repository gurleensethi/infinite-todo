import 'package:flutter/material.dart';
import 'package:infinite_todo/data/notifiers/task_store.dart';
import 'package:provider/provider.dart';

class TasksPage extends StatefulWidget {
  const TasksPage({
    Key key,
  }) : super(key: key);

  @override
  _TasksPageState createState() => _TasksPageState();
}

class _TasksPageState extends State<TasksPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Consumer<TaskStore>(
        builder: (context, store, child) {
          return ListView.builder(
            itemCount: store.tasks.length,
            itemBuilder: (context, index) {
              final task = store.tasks[index];

              return ListTile(
                title: Text(
                  task.content ?? "No Context",
                ),
              );
            },
          );
        },
      ),
    );
  }
}
