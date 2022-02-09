import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("TRAVELAND | Travel Agency");
    }

    async getHtml() {
        return `     <style>
        /* relevant styles */
        .img__wrap {
        position:sticky;
        height: 610px;
        width: 330px;
        }

        .img__description {
        position: relative;
        top: 400px;
        bottom: 100px;
        left: -1px;
        right: 0px;
        background: #cf5b5b;
        color: rgb(230, 199, 199);
        visibility: hidden;
        opacity: 0;

        /* transition effect. not necessary */
        transition: opacity .2s, visibility .2s;
        }

        .img__wrap:hover .img__description {
        visibility: visible;
        opacity: 1;
        }
    </style>
        
    <section>
        <div class="container mt-8">
            <h4 class="card-title" style="font-size: 50px; color: red;"> Destinations available</h4>
            <table class="table-responsive">
                <tr style="height: 500px;">
                    <td style="background-image: url(/assets/img/dest/bali.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookingbali.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;" href="#">BALI</a>
                        </div>
                    </td>
                    <td style="background-image: url(/assets/img/dest/dubai.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookingdubai.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;">DUBAI</a>
                        </div>
                    </td>
                    <td style="background-image: url(/assets/img/dest/greece.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookinggreece.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;">GREECE</a>
                        </div>
                    </td>
                    <td style="background-image: url(/assets/img/dest/japao.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookingjapan.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;">JAPAN</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="background-image: url(/assets/img/dest/london.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookinglondon.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;" href="bookinglondon.html">LONDON</a>
                        </div>
                    </td>
                    <td style="background-image: url(/assets/img/dest/ny.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookingny.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;">NEW YORK</a>
                        </div>
                    </td>
                    <td style="background-image: url(/assets/img/dest/paris.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookingparis.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;">PARIS</a>
                        </div>
                    </td>
                    <td style="background-image: url(/assets/img/dest/rome.jpg); background-size: cover; background-repeat: no-repeat;">
                        <div class="img__wrap" onClick="window.location='bookingrome.html';">
                            <a class="img__description hero-title-2" style="font-size: 50px;">ROME</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </section>

    `;
}
}