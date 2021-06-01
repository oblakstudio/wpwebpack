import { AbstractRoute } from 'body-class-router';

class Home extends AbstractRoute {

  public init() : void {
    console.log('home initializer fired')
  }

  public finalize() : void {
    console.log('home finalizer fired')
  }

}

export default Home;
