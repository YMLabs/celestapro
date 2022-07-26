import React from "react";

function Footer() {
  return (
    <footer className="">
      <div className="p-10 bg-[#50B291] text-white">
        <div className="w-full mx-auto text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 ml-4 md:ml-12">
            <div className="mb-5">
              <div className=" pb-4 font-bold flex justify-center">
                <img src="./assets/images/white-celesta-logo.png" alt="" />
              </div>
              <p>
                <span>Business Registration Number: </span>447-35-0071
              </p>
              <p>
                <span>CEO: </span>Li Flora
              </p>
              <p>
                <span>Business Address: </span>30 Gukjegeumyung-ro 6gil, Seoul
                Yeongdeungpo-gu 07328, South Korea
              </p>
              <p>
                <span>CS contact number: </span>+821039175607
              </p>
              <p>
                <span>Company contact mail: </span>{" "}
                <a className="underline underline-offset-4" href="">
                  info@celestapro.com
                </a>{" "}
              </p>
              
            </div>
            <div className="mb-5">
              <h4 className="pb-4 text-xl font-bold">Customer Services</h4>
              <ul className="text-white">
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    My Account
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    FAQs
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Support
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Wholesale
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Track Your Order
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 text-xl font-bold">Company</h4>
              <ul className="text-white">
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    About CelestaPro
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Careers
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Forum
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Blog
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 text-xl font-bold">Legal</h4>
              <ul className="text-white">
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Security
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Terms of Use
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Privacy Policy
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Terms of Integration
                  </a>
                </li>
                <li className="pb-4">
                  {" "}
                  <a href="#" className="hover:text-yellow-500">
                    Imprint
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-2 my-2 flex justify-center items-center">
                <a className="mr-4" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a className="mr-4" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
                <a className="mr-4" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a className="mr-4" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-pinterest"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg>
                </a>
              </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
