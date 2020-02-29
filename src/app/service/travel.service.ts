export class travelService {

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.istravel = true;
            resolve(true);
          }, 2000
        );
      }
    );
  }

  signOut() {
    this.istravel = false;
  }
}