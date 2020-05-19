type RegisterType<T> =
  | { type: "factory"; creator: (args?: any) => T }
  | { type: "singleton"; instance: T }
  | { type: "lazySingleton"; creator: (args?: any) => T };

export default class ServiceLocator {
  private lazyInstances: { [key: string]: any } = {};
  private registers: { [key: string]: RegisterType<any> } = {};

  public get<T>(constructor: { new (): T }, args?: any): T {
    const register = this.registers[constructor.name];

    if (!register) {
      throw new Error(
        `${constructor.name} is not registered with RooteService`
      );
    }

    switch (register.type) {
      case "singleton": {
        return register.instance as T;
      }
      case "factory": {
        return register.creator(args) as T;
      }
      case "lazySingleton": {
        let instance = this.lazyInstances[constructor.name];
        if (!instance) {
          instance = this.lazyInstances[constructor.name] = register.creator(
            args
          );
        }
        return instance as T;
      }
    }
  }

  public registerFactory<T>(
    constructor: { new (): T },
    creator: (args?: any) => T
  ) {
    this.registers[constructor.name] = {
      creator,
      type: "factory",
    };
  }

  public registerSingleton<T>(constructor: { new (): T }, instance: T) {
    this.registers[constructor.name] = {
      instance,
      type: "singleton",
    };
  }

  public registerLazySingleton<T>(
    constructor: { new (): T },
    creator: () => T
  ) {
    this.registers[constructor.name] = {
      creator,
      type: "lazySingleton",
    };
  }
}
