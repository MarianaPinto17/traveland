import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("TRAVELAND | Travel Agency");
    }

    async getHtml() {
        return `<!-- ============================================-->
        <!-- <section> begin ============================-->
        <section style="padding-top: 10rem; " >
          <div class="container" style="background-color: rgb(218, 196, 179);">
            <div class="row align-items-center">
              <div class="col-md-4 col-lg-6">
                <img class="pt-7 pt-md-0 hero-img" src="assets/img/hero/contact.jpg" style="width: 670px; margin-left: -16px;" alt="hero-header" />
              </div>
              <div class="col-md-7 col-lg-5 text-md-start text-left" style="margin-left: 70px;" >
                <h1 class="hero-title-2" style="color: rgba(204, 30, 30, 0.74); ">Contact us</h1>
                <form class="row g-3 align-items-center w-lg-100 mx-auto">
                  <div class="col-sm">
                    <div class="input-group-icon">
                      <input class="form-control form-little-squirrel-control" type="email" placeholder="Enter email " aria-label="email" /><img class="input-box-icon" src="assets/img/shapes/email.png" width="17" alt="mail" />
                    </div>
                    <div class="input-group-icon" style="margin-top: 5px;">
                      <input class="form-control form-little-squirrel-control" type="text" placeholder="Name" aria-label="name" /><img class="input-box-icon" src="assets/img/icons/person.png" width="17" alt="mail" />
                    </div>
                    <div class="input-group-icon" style="margin-top: 5px;">
                      <textarea class="form-control form-little-squirrel-control" type="textarea" placeholder="Write your opinion" aria-label="opinion" style="height: 100px;"></textarea>
                          <img class="input-box-icon" src="assets/img/icons/write.png" width="17" alt="opinion" style="top:27%"/>
                    </div>
                    <div class="input-group-icon" style="margin-top: 20px; margin-left: 140px;">
                      <div class="text-center text-md-start"> <a class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-black border-2 primary-btn-shadow" style="background-color:rgba(204, 30, 30, 0.74);" href="login.html" role="button">Send your opinion!</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <section>
              <div class="container" style="background-color: rgb(218, 196, 179); height: 290px;">
                <div class="row align-items-center">
                  <div class="col-md-6 text-md-start text-left" >
                    <h1 class="hero-title-2" style="color: rgba(204, 30, 30, 0.74); margin-top: -200px; margin-left: 30px;">Our socials and contacts</h1>
                  </div>
                  <div class="col-md-1" style="margin-left: 74px; margin-top: -80px;" >
                      <img class=" pt-md-0 hero-img" src="assets/img/hero/hello.jpg" style="width: 650px; height: 450px;" alt="hero-header" />
                    </div>
                </div>
                <div class="row align-items-center">
                  <div class="col-md-7 col-lg-5 text-md-start text-left" >
                    <table class="table-info table-sm table-bordered text-center" style="margin-left: 80px; margin-top: -150px;">
                      <tr>
                        <th style="background-color: #ff3300;color: aliceblue;">
                          <img class="input-box-icon" src="assets/img/shapes/email.png" width="30px" alt="mail" style=" margin-left: -2px;"/>
                          <span style="padding: 10px;">Email </span>
                        </th>
                        <td>
                          geral@traveland.com
                        </td>
                      </tr> 
                      <tr>
                        <th style="background-color: #ff3300; color: aliceblue;">
                          <img class="input-box-icon" src="assets/img/shapes/phone.png" width="30px" alt="mail" style="color:black;  margin-left:2px;"/>
                          <span style="padding: 10px;">Phone </span>
                        </th>
                        <td>
                          +351123456789
                        </td>
                      </tr>
                      <tr>
                        <th style="background-color: #ff3300; color: aliceblue;">
                          <img class="input-box-icon" src="assets/img/shapes/address.png" width="35px" alt="mail" style="color:black; margin-left: 20px;"/>
                          <span style="padding: 10px;">Address </span>
                        </th>
                        <td>
                          <span style="padding: 10px;">Campus Santiago, Aveiro </span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </section>
  
        </section>  
        `;
    }
}