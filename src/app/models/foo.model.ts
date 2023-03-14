export class Foo {
  // https://stackoverflow.com/questions/63460693/typescript-meaning-of-and-in-class-properties

  // Typescript does not complain about `a` because we set it in the constructor
  public a : number;

  // Typescript will complain about `b` because we forgot it.
  //public b: number;

  // Typescript will not complain about `c` because we told it not to.
  public c!: number;

  // Typescript will not complain about `d` because it's optional and is
  // allowed to be undefined.
  public d?: number;

  constructor() {
    this.a = 5;
  }
}