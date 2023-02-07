interface Bird {
  eat(): void;
}

interface BirdFly {
  fly(): void;
}

interface BirdSwim {
  swim(): void;
}

interface BirdRun {
  run(): void;
}

class Tucan implements Bird, BirdFly {
  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird, BirdFly {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, BirdRun {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, BirdSwim {
  public eat() {}
  public swim() {}
}
