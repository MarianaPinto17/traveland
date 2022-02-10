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
                <div class="col-md-5 col-lg-6">
                    <img class="pt-7 pt-md-0 hero-img" src="assets/img/hero/about.jpg" style="width: 620px;" alt="hero-header" />
                </div>
                <div class="col-md-7 col-lg-5 text-md-start text-left py-6" >
                    <h1 class="hero-title-2" style="color: rgba(204, 30, 30, 0.74); ">About us</h1>
                    <h4 class="mb-4 fw-medium" style="color: rgb(27, 25, 25);">Traveland was born in 2021 in Portugal, with a clear focus on customer service. Our commitment to create connections, providing one-on-one service and crafting the perfect vacation remains stronger than ever. <br class="d-none d-xl-block" /></h4>
                    <div class="text-center text-md-start"> <a class="btn btn-primary btn-lg me-md-4 mb-3 mb-md-0 border-black border-2 primary-btn-shadow" style="background-color:rgba(204, 30, 30, 0.74);" href="login.html" role="button">Start your journey!</a>
                </div>
                </div>
            </div>
            </section>
        `;
    }
}