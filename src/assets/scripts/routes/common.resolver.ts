import { AbstractRoute } from 'body-class-router';

export default class Common extends AbstractRoute {

  public init() : void {
    console.log('initialize fired');
  }

  public finalize() : void {
    console.log('finalize fired');
  }

}
