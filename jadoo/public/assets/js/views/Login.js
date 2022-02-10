import Abstractview from "./Abstractview.js";

export default class extends Abstractview{
    constructor(){
        super();
        this.setTitle("TRAVELAND | Travel Agency");
    }

    async getHtml() {
        return `    
        
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'><link rel="stylesheet" href="./assets/css/theme.css">
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'><link rel="stylesheet" href="./assets/css/style.css">
         <section style="padding-top: 35rem;">
        <div class="containerform" id="containerform">
            <div class="form-container sign-up-container">
                <form action="login.html">
                    <h1 class="hero-title-2" style="font-size:55px;">Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <h5>or use your email for registration</h5>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <div>
                        <input class="form-check-input" type="checkbox" id="terms" name="termscond" value="yes"><label for="termscond" style="padding: 5px;"> I agree with the terms and conditions.</label>
                    </div>
                    <button style="border-radius: 10px; color:black; font-size: 15px;">Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="index.html">
                    <h1 class="hero-title-2" style="font-size:55px;">Sign in</h1>
                    <div class="social-container">
                        <a href="index.html" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="index.html" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="index.html" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <h5>or use your account</h5>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#!" style="font-size: medium;" class="mt fs-lg" role="link" data-bs-toggle="modal" data-bs-target="#popupsubs">Forgot your password?</a>
                    <button style="border-radius: 10px; color:black; font-size: 15px;">Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1 class="hero-title-2" style="font-size: 55px;">Welcome Back!</h1>
                        <p style="font-size:20px; padding: 5px;">To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn"  style="border-radius: 10px; font-size: 15px;">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1 class="hero-title-2" style="font-size: 55px;" >Hello, Friend!</h1>
                        <p style="font-size:20px; padding: 5px;">Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp"  style="border-radius: 10px; font-size: 15px;">Sign Up</button>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="popupsubs" tabindex="-1" aria-labelledby="popup" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="row" style="height: 400px;">
                        <form action="login.html" id="fyp">
                            <h1 class="hero-title-2" style="font-size:40px;">Forgot your password?</h1>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="New Password" />
                            <input type="password" placeholder="Confirm New Password" />
                            <button style="border-radius: 10px; color:black; font-size: 15px;">Continue</button>
                        </form>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </section>
    
    <script src="assets/js/theme.js"></script>
    <script src="assets/js/script2.js"></script>
    <script src="assets/js/script.js"></script>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&amp;family=Volkhov:wght@700&amp;display=swap" rel="stylesheet">
    `;
}
}