import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("TRAVELAND | Travel Agency");
    }

    async getHtml() {
        return `<section style="padding-top: 10rem; padding-bottom: 1rem;">
        <div class="container" style="background-color: rgba(88, 82, 82, 0.664); border-radius: 10px;">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1 ftco-animate p-4">
                <form action="#" class="search1">
                  <div class="row">
                    <div class="col-lg align-items-end">
                      <div class="form-group">
                        <h5 style="color: aliceblue;">
                          <i class="fas fa-search-location"></i>
                          Destination
                        </h5>
                        <div class="form-field">
                          <input type="text" class="form-control" placeholder="Search place">
                        </div>
                      </div>
                    </div>
                    <div class="col-lg align-items-end">
                      <div class="form-group">
                        <h5 style="color: aliceblue;"><i class="fas fa-plane-departure"></i> Check-in date</h5>
                        <div class="form-field">
                          <input type="text" class="form-control checkin_date" placeholder="Check In Date">
                        </div>
                      </div>>
                    </div>
                    <div class="col-lg align-items-end">
                      <div class="form-group">
                        <h5 style="color: aliceblue;"><i class="fas fa-plane-arrival"></i> Check-out date</h5>
                        <div class="form-field">
                          <input type="text" class="form-control checkout_date" placeholder="Check Out Date">                          
                        </div>
                      </div>
                    </div>
                    <div class="col-lg align-items-end">
                      <div class="form-group">
                        <h5 style="color: aliceblue;"><i class="fas fa-search-dollar"></i> Price Limit</h5>
                        <div class="form-field">
                          <input type="text" class="form-control checkout_date" placeholder="Price Limit">
                        </div>
                      </div>
                    </div>
                    <div class="col-lg align-self-end">
                      <div class="form-group">
                        <div class="form-field">
                          <a class="form-control btn btn-dark" style="border-radius: 10px; font-size: 18px;" href="booking.html">Search</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
            <h4 class="card-title" style="font-size: 60px; color: red;"> Our clients' top choice</h4>
            <div class="py-4 px-0 position-relative text-center mt-4" style="background-color: rgba(235, 149, 149, 0.199);">
              <div class="row justify-content-center">
                <div class="col-sm-2">
                  <h2 class="hero-title-2" style="font-size: 30px;">Rome, Italy</h2>
                  <img class="card-img" src="assets/img/dest/rome.jpg" alt="Rome, Italy" style="width: 150px;";/>
                </div>
                <div class="col-sm-6" style="margin-top: 50px;">
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-calendar-day" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 10 days, 9 nights</h4>
                  </div> 
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-shuttle-van" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Transportation between both airport and hotel</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-star" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 4 or 5 stars hotels </h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-utensils" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> All-included</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-store" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Possible to add tours</h4>
                  </div>
                </div>
                <div class="col-sm-3">
                  <span>from <span class="hero-title-2" style="font-size:50px;">5200€</span></span>
                  <br>
                  <h8 class="fs-0 fw-lighter" style="text-align: left; margin-left: 30px;"> Not included airport and cities fees.</h8>
                  <br>
                  <a href="contact.html" class="btn btn-success mb-4 mt-4" style="width: 250px; font-size: 20px; text-transform: uppercase; font-weight: bold;">Book</a>
                  <h4 class="fs-0 fw-medium" style="text-align: left; margin-left: 30px;"> For more information, <a href="contact.html" style="color: red;"> contact </a> our team.</h4>
                </div>
              </div>
            </div>       
            <h4 class="card-title mt-8" style="font-size: 30px;"> Other options</h4>
            <div class="py-4 px-0 position-relative text-center mb-4 mt-4" style="background-color: rgba(235, 149, 149, 0.199);">
              <div class="row justify-content-center">
                <div class="col-sm-2">
                  <h2 class="hero-title-2" style="font-size: 30px;">Rome, Italy</h2>
                  <img class="card-img" src="assets/img/dest/rome2.jpg" alt="Rome, Italy" style="width: 130px;";/>
                </div>
                <div class="col-sm-6" style="margin-top: 50px;">
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-calendar-day" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 7 days, 6 nights</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-shuttle-van" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Transportation between both airport and hotel</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-star" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 3 or 4 stars hotels </h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-utensils" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Breakfast included</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-store" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Possible to add tours</h4>
                  </div>
                </div>
                <div class="col-sm-3">
                  <span>from <span class="hero-title-2" style="font-size:50px;">3500€</span></span>
                  <br>
                  <h8 class="fs-0 fw-lighter" style="text-align: left; margin-left: 30px;"> Not included airport and cities fees.</h8>
                  <br>
                  <a href="contact.html" class="btn btn-success mb-4 mt-4" style="width: 250px; font-size: 20px; text-transform: uppercase; font-weight: bold;">Book</a>
                  <h4 class="fs-0 fw-medium" style="text-align: left; margin-left: 30px;"> For more information, <a href="contact.html" style="color: red;"> contact </a> our team.</h4>
                </div>
              </div>
            </div>      
            <div class="py-4 px-0 position-relative text-center mb-4" style="background-color: rgba(235, 149, 149, 0.199);">
              <div class="row justify-content-center">
                <div class="col-sm-2">
                  <h2 class="hero-title-2" style="font-size: 30px;">Rome, Italy</h2>
                  <img class="card-img" src="assets/img/dest/rome3.jpg" alt="Rome, Italy" style="width: 130px;";/>
                </div>
                <div class="col-sm-6" style="margin-top: 50px;">
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-calendar-day" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 10 days, 9 nights</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-shuttle-van" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Transportation between both airport and hotel</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-star" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 3 or 4 stars hotels </h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-utensils" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Breakfast included</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-store" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Possible to add tours</h4>
                  </div>
                </div>
                <div class="col-sm-3">
                  <span>from <span class="hero-title-2" style="font-size:50px;">4500€</span></span>
                  <br>
                  <h8 class="fs-0 fw-lighter" style="text-align: left; margin-left: 30px;"> Not included airport and cities fees.</h8>
                  <br>
                  <a href="contact.html" class="btn btn-success mb-4 mt-4" style="width: 250px; font-size: 20px; text-transform: uppercase; font-weight: bold;">Book</a>
                  <h4 class="fs-0 fw-medium" style="text-align: left; margin-left: 30px;"> For more information, <a href="contact.html" style="color: red;"> contact </a> our team.</h4>
                </div>
              </div>
            </div>      
            <div class="py-4 px-0 position-relative text-center mb-4" style="background-color: rgba(235, 149, 149, 0.199);">
              <div class="row justify-content-center">
                <div class="col-sm-2">
                  <h2 class="hero-title-2" style="font-size: 30px;">Rome, Italy</h2>
                  <img class="card-img" src="assets/img/dest/rome4.jpg" alt="Rome, Italy" style="width: 130px;";/>
                </div>
                <div class="col-sm-6" style="margin-top: 50px;">
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-calendar-day" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 7 days, 6 nights</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-shuttle-van" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Transportation between both airport and hotel</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-star" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> 2 or 3 stars hotels </h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-utensils" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Breakfast included</h4>
                  </div>
                  <div class="icon-group mb-2"> 
                    <span class="icon-indicator"> 
                      <i class="fas fa-store" style="width: 20px;"></i>
                    </span>
                    <h4 class="text-secondary fw-medium" style="text-align: left; margin-left: 30px;"> Possible to add tours</h4>
                  </div>
                </div>
                <div class="col-sm-3">
                  <span>from <span class="hero-title-2" style="font-size:50px;">2000€</span></span>
                  <br>
                  <h8 class="fs-0 fw-lighter" style="text-align: left; margin-left: 30px;"> Not included airport and cities fees.</h8>
                  <br>
                  <a href="contact.html" class="btn btn-success mb-4 mt-4" style="width: 250px; font-size: 20px; text-transform: uppercase; font-weight: bold;">Book</a>
                  <h4 class="fs-0 fw-medium" style="text-align: left; margin-left: 30px;"> For more information, <a href="contact.html" style="color: red;"> contact </a> our team.</h4>
                </div>
              </div>
            </div>      
        </div>
      </section>

        `;
    }
}