import 'package:flutter/material.dart';
import 'package:infinite_todo/data/dao/task_dao.dart';
import 'package:infinite_todo/data/notifiers/task_store.dart';
import 'package:infinite_todo/pages/tasks_page.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;
import 'dart:io';

import 'package:provider/provider.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Home(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final _textEditingController = TextEditingController();
  File _dataFile;

  void _updateFile() async {
    if (_dataFile != null) {
      await _dataFile.writeAsString(_textEditingController.text);
    }
  }

  void _initializeFile() async {
    final tempDir = await getApplicationDocumentsDirectory();
    _dataFile = File(path.join(tempDir.path, "data.txt"));
    if (!(await _dataFile.exists())) {
      await _dataFile.create();
    }
    final data = await _dataFile.readAsString();
    _textEditingController.text = data;
  }

  @override
  void initState() {
    super.initState();
    _initializeFile();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          padding: EdgeInsets.all(16.0),
          child: Column(
            children: [
              TextField(
                controller: _textEditingController,
                decoration: InputDecoration(
                  hintText: 'Enter file data',
                ),
              ),
              RaisedButton(
                child: Text('Update file'),
                onPressed: _updateFile,
              ),
              Expanded(
                child: ChangeNotifierProvider<TaskStore>(
                  create: (context) => TaskStore(taskDAO: TaskDAO()),
                  builder: (context, widget) => TasksPage(),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
