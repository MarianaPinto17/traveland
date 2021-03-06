import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("TRAVELAND | Travel Agency");
    }

    async getHtml() {
        return ` <section style="padding-top: 10rem;">
        <div class="bg-holder" style="background-image:url(assets/img/shapes/orange.png); background-size: 1500px;">
        </div>
        <!--/.bg-holder-->

        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-5 col-lg-6 order-0 order-md-1 text-end"><img class="pt-7 pt-md-0 hero-img" src="assets/img/hero/aviao.png" alt="hero-header" /></div>
            <div class="col-md-7 col-lg-6 text-md-start text-center py-6">
              <h4 class="hero-title-smaller">It's almost time to get carried away</h4>
              <h1 class="hero-title">Travel with us</h1>
              <p class="mb-4 fw-medium">Every traveler is unique, and your vacation should be as well.<br class="d-none d-xl-block" /></p>
              <div class="text-center text-md-start"> <a class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-black border-3 primary-btn-shadow" href="contact.html" role="button" data-link>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--search bar-->
      <!--
    <section>
     <div class="container-xl pt-md-1" id="search">
       <div class="row">
           <div class="col-md-12">
               <div class="input-group mb-2"> <input type="text" class="form-control input-text" placeholder="Search your next travel...">
                   <div class="input"> <button class="btn btn-outline-warning btn-lg" type="button"><i class="fa fa-search"></i></button> </div>
               </div>
           </div>
       </div>
   </div>

      -->
    <section style="padding-top: 2rem; padding-bottom: 6rem;">
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
			              </div>
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
				                <a class="form-control btn btn-dark" style="border-radius: 10px; font-size: 18px;" href="booking.html" data-link>Search</a>
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

      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-2 pt-md-3" id="service">
        <div class="container">
          <!--<div class="position-absolute z-index--1 end-0 d-none d-lg-block"><img src="assets/img/shapes/shapeplus.svg" style="max-width: 200px" alt="service" /></div>-->
          <div class="mb-4 text-center">
            <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">What we offer</h3>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-2 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="assets/img/icons/cartoes.png" width="75" alt="Service" />
                  <h4 class="mb-3">Safe Payments</h4>
                  <p class="mb-0 fw-medium">You can pay using paypal, visa and more other safe payment methods.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="assets/img/icons/hotels.png" width="75" alt="Service" />
                  <h4 class="mb-3">Insurance</h4>
                  <p class="mb-0 fw-medium">We offer various insurances planes to include in your trip.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="assets/img/icons/deals.png" width="75" alt="Service" />
                  <h4 class="mb-3">Best Offers</h4>
                  <p class="mb-0 fw-medium">You'll have access to the best hotels within your budget.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src="assets/img/icons/passaporte.png" width="75" alt="Service" />
                  <h4 class="mb-3">Customization</h4>
                  <p class="mb-0 fw-medium">We'll provide the best tips and find you the best tours suitable to your needs. </p>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end of .container-->

      </section>
      <!-- <section> close ============================-->
      <!-- ============================================-->




      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-1" id="destination">
        <div class="container">
          <div class="position-absolute start-100 bottom-0 translate-middle-x d-none d-xl-block ms-xl-n2"><img width="400px " src="assets/img/shapes/paperplane.png" alt="destination" /></div>
          <div class="position-absolute start-0 translate-middle-x d-none d-xl-block ms-xl-n2"><img width="600px" style="margin-top: 100px;" src="assets/img/shapes/tracejado.png" alt="destination" /></div>
          <div class="mb-7 text-center">
            <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Top 8 Clients choices</h3>
          </div>
          <!--carousel wrapper-->
          <div class="carousel slide carousel-multi-item position-static" id="cities" data-bs-ride="carousel">
            <div class="controls">
              <a class="" href="#cities" data-bs-slide-to="prev"><i class="carousel-control-prev carousel-control-prev-icon"></i></a>
              <a class="" href="#cities" data-bs-slide-to="next"><i class="carousel-control-next carousel-control-next-icon"></i></a>
            </div>
            <!--indicators-->
            <div class="carousel-indicators">
              <button class="active" type="button" data-bs-target="#cities" data-bs-slide-to="0" aria-current="true" aria-label="Testimonial 0"></button>
              <button class="false" type="button" data-bs-target="#cities" data-bs-slide-to="1" aria-current="true" aria-label="Testimonial 1"></button>
            </div>
            
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item position-relative active">
                <div class="row">
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/paris.jpg" alt="Paris, France" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookingparis.html" data-link>Paris, France</a></h4><span class="fs-1 fw-medium">$3,42k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">10 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/london.jpg" alt="London, UK" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookinglondon.html" data-link>London, UK</a></h4><span class="fs-1 fw-medium">$2.2k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">7 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/japao.jpg" alt="Tokyo, Japan" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookingjapan.html" data-link>Tokyo, Japan</a></h4><span class="fs-1 fw-medium">$15k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">15 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/ny.jpg" alt="New York" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookingny.html" data-link>New York, USA</a></h4><span class="fs-1 fw-medium">$10k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">10 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Second slide -->
              <div class="carousel-item">
                <div class="row">
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/bali3.jpg" alt="Sanur, Bali" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookingbali.html" data-link>Sanur, Bali</a></h4><span class="fs-1 fw-medium">$14k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">15 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/rome3.jpg" alt="Rome, Italy" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookingrome.html" data-link>Rome, Italy</a></h4><span class="fs-1 fw-medium">$5.2k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">10 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/greece2.jpg" alt="Santorini, Greece" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookinggreece.html" data-link>Santorini, Greece</a></h4><span class="fs-1 fw-medium">$7.3k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">6 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 mb-4">
                    <div class="card overflow-hidden shadow"> <img class="card-img-top" src="assets/img/dest/dubai.jpg" alt="Dubai, UAE<" />
                      <div class="card-body py-4 px-3">
                        <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
                          <h4 class="text-secondary fw-medium"><a class="link-900 text-decoration-none stretched-link" href="bookingdubai.html" data-link>Dubai, UAE</a></h4><span class="fs-1 fw-medium">$15k</span>
                        </div>
                        <div class="d-flex align-items-center"> <img src="assets/img/dest/navigation.svg" style="margin-right: 14px" width="20" alt="navigation" /><span class="fs-0 fw-medium">10 Days Trip</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================-->
      <!-- <section> begin ============================-->
     
      <section id="testimonial">

        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="mb-8 text-start">
                <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">Testimonials of our clients</h3>
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6">
              <div class="pe-7 ps-5 ps-lg-0">
                <div class="carousel slide carousel-fade position-static" id="testimonialIndicator" data-bs-ride="carousel">
                  <div class="carousel-indicators" style="margin-bottom: -55px; margin-left: 300px;">
                    <button class="active" type="button" data-bs-target="#testimonialIndicator" data-bs-slide-to="0" aria-current="true" aria-label="Testimonial 0"></button>
                    <button class="false" type="button" data-bs-target="#testimonialIndicator" data-bs-slide-to="1" aria-current="true" aria-label="Testimonial 1"></button>
                    <button class="false" type="button" data-bs-target="#testimonialIndicator" data-bs-slide-to="2" aria-current="true" aria-label="Testimonial 2"></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item position-relative active">
                      <div class="card shadow" style="border-radius:10px;">
                        <div class="position-absolute start-0 top-0 translate-middle"> <img class="rounded-circle fit-cover" src="assets/img/testimonial/Carlos.jpg" height="65" width="65" alt="" /></div>
                        <div class="card-body p-4">
                          <p class="fw-medium mb-4">&quot;It really is something else. With Traveland I could enjoy a vacation like never before. Now I can recommend it to my friends and family because I finally know how easy and practical it is.&quot;</p>
                          <h5 class="text-secondary">Carlos Costa</h5>
                          <p class="fw-medium fs--1 mb-0">MSc Student at the University of Aveiro</p>
                        </div>
                      </div>
                      <div class="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style="border-radius:10px;transform:translate(25px, 25px)"> </div>
                    </div>
                    <div class="carousel-item position-relative ">
                      <div class="card shadow" style="border-radius:10px;">
                        <div class="position-absolute start-0 top-0 translate-middle"> <img class="rounded-circle fit-cover" src="assets/img/testimonial/CR7.jpg" height="65" width="65" alt="" /></div>
                        <div class="card-body p-4">
                          <p class="fw-medium mb-4">&quot;For me to continue to be a top level player I have to do my best day in and day out on training and on the pitch in order to maintain that status. But I'm a human being and from time to time I need to rest and enjoy a good vacation. Traveland is the best for suggesting me the best places to go.&quot;</p>
                          <h5 class="text-secondary">Cristiano Ronaldo</h5>
                          <p class="fw-medium fs--1 mb-0">Player for Manchester United FC</p>
                        </div>
                      </div>
                      <div class="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style="border-radius:10px;transform:translate(25px, 25px)"> </div>
                    </div>
                    <div class="carousel-item position-relative ">
                      <div class="card shadow" style="border-radius:10px;">
                        <div class="position-absolute start-0 top-0 translate-middle"> <img class="rounded-circle fit-cover" src="assets/img/testimonial/Rocha.jpg" height="65" width="65" alt="" /></div>
                        <div class="card-body p-4">
                          <p class="fw-medium mb-4">&quot;Being a programmer like myself is somewhat tiring. I often feel like a well deserved vaction is needed once in a while. With Traveland I can enjoy the best vacations because I don't need to worry with bureaucracies, it's simple and quick.&quot;</p>
                          <h5 class="text-secondary">Pedro Rocha</h5>
                          <p class="fw-medium fs--1 mb-0">MSc Student at the University of Aveiro</p>
                        </div>
                      </div>
                      <div class="card shadow-sm position-absolute top-0 z-index--1 mb-3 w-100 h-100" style="border-radius:10px;transform:translate(25px, 25px)"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      

      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-6">
        <div class="container">
          <div class="py-8 px-5 position-relative text-center" style="background-color: rgba(223, 215, 249, 0.199);border-radius: 129px; background-image:url(assets/img/shapes/smokered.png);">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-10">
                <h2 class="hero-title-2" style="font-size: 50px;">Keep in touch with us!</h2>
                <form class="row g-3 align-items-center w-lg-75 mx-auto">
                  <div class="col-sm">
                    <div class="input-group-icon">
                      <input class="form-control form-little-squirrel-control" type="email" placeholder="Enter email " aria-label="email" /><img class="input-box-icon" src="assets/img/shapes/email.png" width="17" alt="mail" />
                    </div>
                    <div class="w-100 d-block d-md-none"></div><a href="#!" style="font-weight: bold;" class="btn btn-danger orange-gradient-btn mt-3 fs-lg-4" role="button" data-bs-toggle="modal" data-bs-target="#popupsubs">Subscribe</a>
                    <div class="modal fade" id="popupsubs" tabindex="-1" aria-labelledby="popup" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content" style="background-image: url(/jadoo/public/assets/img/shapes/cities.png); background-size: 520px;">
                          <div class="row" >
                            <h1 class="font-cursive mt-7" style="height: 320px;">You are subscribed to our newsletter.</h1>
                          </div>
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
      <!-- <section> close ============================-->
      <!-- ============================================-->

      <!-- <section> begin ============================-->
      <!-- ============================================-->
      <section  style="padding-top: 0rem; padding-bottom: 0rem;">
        <div class="position-relative pt-5 pt-lg-3 pb-6 pb-lg-4">
          <div class="container">
            <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2 flex-center">
              <div class="col">
                <div class="card shadow-hover mb-4" style="border-radius:10px;">
                  <div class="card-body text-center"> <img class="img-fluid" src="assets/img/partner/eu.png" alt="" /></div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-hover mb-4" style="border-radius:10px;">
                  <div class="card-body text-center"> <img class="img-fluid" src="assets/img/partner/portugal.jpg" alt="" /></div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-hover mb-4" style="border-radius:10px;">
                  <div class="card-body text-center"> <img class="img-fluid" src="assets/img/partner/sheraton.png" alt="" /></div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-hover mb-4" style="border-radius:10px;">
                  <div class="card-body text-center"> <img class="img-fluid" src="assets/img/partner/tap.png" alt="" /></div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-hover mb-4" style="border-radius:10px;">
                  <div class="card-body text-center"> <img class="img-fluid" src="assets/img/partner/emirates.png" alt=""/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- <section> close ============================-->
      <!-- ============================================-->
        `;
    }
}