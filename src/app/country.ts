export class Country {
  countryID: number | any = null;
  countryName: string | any = null;

  constructor(countryIDParam: number, countryNameParam: string) {
    this.countryID = countryIDParam;
    this.countryName = countryNameParam;
  }
}
