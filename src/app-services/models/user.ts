
export class User {
  private _id = -1;
  private _name = '';
  private _active = false;

  constructor(name: string, active: boolean) {
    this._name = name;
    this._active = active;
  }


  public get name(): string {
    return this._name;
  }


  public set name(v: string) {
    this._name = v;
  }

  public get active(): boolean {
    return this._active;
  }


  public set active(v: boolean) {
    this._active = v;
  }


  public set id(id: number) {
    this._id = id;
  }

  public get id(): number {
    return this._id;
  }

}
