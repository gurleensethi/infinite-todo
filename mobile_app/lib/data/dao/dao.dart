abstract class DAO<T> {
  Future<List<T>> findAll([int parentId]);

  Future<T> findOne(int id);

  Future<T> create(T obj);

  Future<bool> delete(int id);

  Future<bool> update(T obj);
}
