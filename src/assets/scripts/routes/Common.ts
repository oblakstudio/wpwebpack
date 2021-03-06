import { AbstractRoute } from 'body-class-router';

class Common extends AbstractRoute {

  public init() : void {
    //Initializer function
    console.log('initialize fired');
  }

  public finalize() : void {
    // Finalizer function
    console.log('finalize fired');
  }

}

export default Common;
