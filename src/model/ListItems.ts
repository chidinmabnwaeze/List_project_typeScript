export interface ListItems {
  id: string;
  item: string;
  checked: boolean;
}

export default class List implements ListItems {
  constructor(
    private _id: string,
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  // getters and setters for id
  get id(): string {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }

  //item
  get item(): string {
    return this._item;
  }
  set item(_item: string) {
    this._item = _item;
  }
  
  // checked
  get checked(): boolean {
    return this._checked;
  }
  set checked(_checked: boolean) {
    this._checked = _checked;
  }
}
