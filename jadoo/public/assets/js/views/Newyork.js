import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("TRAVELAND | Travel Agency");
    }

    async getHtml() {
        return `<section>
        <div class="container">
            <h4 class="card-title" style="font-size: 60px; color: red;"> Our clients' top choice</h4>
            <div class="py-4 px-0 position-relative text-center mt-4" style="background-color: rgba(235, 149, 149, 0.199);">
              <div class="row justify-content-center">
                <div class="col-sm-2">
                  <h2 class="hero-title-2" style="font-size: 30px;">New York, USA</h2>
                  <img class="card-img" src="assets/img/dest/ny.jpg" alt="New York, USA" style="width: 150px;";/>
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
                  <span>from <span class="hero-title-2" style="font-size:50px;">10000€</span></span>
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
                  <h2 class="hero-title-2" style="font-size: 30px;">New York, USA</h2>
                  <img class="card-img" src="assets/img/dest/ny2.jpg" alt="New York, USA" style="width: 130px;";/>
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
                  <span>from <span class="hero-title-2" style="font-size:50px;">6000€</span></span>
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
                  <h2 class="hero-title-2" style="font-size: 30px;">New York, USA</h2>
                  <img class="card-img" src="assets/img/dest/ny3.jpg" alt="New York, USA" style="width: 130px;";/>
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
                  <span>from <span class="hero-title-2" style="font-size:50px;">8000€</span></span>
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