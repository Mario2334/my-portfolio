import React from "react";

export let Footer = (props) =>{
  return (
      <footer>
          <div className="footer-content">
              <div>
                  <h4>Address</h4>

                  <p>Nagpur India</p>
              </div>

              <div>
                  <h4>Email</h4>

                  <p>sanketm221995@gmail.com</p>
              </div>

              <div>
                  <h4>Phone</h4>

                  <p>+91-8484996704</p>
              </div>

              <div>
                  <h4>Social</h4>
                  <a href="https://in.linkedin.com/in/sanket-mokashi-python-dev/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://github.com/Mario2334" target="_blank">
                      <i className="fab fa-github"></i>
                  </a>
                  <a href="https://stackoverflow.com/users/7874907/sanket-mokashi?tab=profile" target="_blank">
                      <i className="fab fa-stack-overflow"></i>
                  </a>
              </div>
          </div>
      </footer>
  )
};