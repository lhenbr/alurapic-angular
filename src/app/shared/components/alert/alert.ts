export class Alert {

  constructor(
    public readonly alertType: AlertType,
    public readonly message
  ) { }

}

export enum AlertType {

  SUCCESS,
  WARNING,
  DANGER,
  INFO
}
