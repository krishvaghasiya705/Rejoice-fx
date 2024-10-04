// import styles from "./footer.module.scss";

import Checksimage from "@/assets/footerimage/image/checksimage.png"
import Image from "next/image";
import Link from "next/link";
import Crmicon from "@/assets/footerimage/svg/crmicon.svg"
import Rightarrow from "@/assets/footerimage/svg/rightarrow.svg"
import Footerlogo from "@/assets/svg/mainlogo.svg"

export default function Footer() {

  return (
    <>
      <div className="footermain">
        <div className="footerticket">
          <div className="ticketmain">
            <div className="container">
              <div className="ticketflxmain">
                <div>
                  <div className="algoherobannerbuttontop">
                    <Link href={"/"}>
                      <button>
                        <Image src={Crmicon} alt="Crmicon" width={"28px"} height={"28px"} />
                        Take the Next Step
                      </button>
                    </Link>
                  </div>
                  <h1>Start Trading Smarter with Rejoicefx</h1>
                  <p>Ready to elevate your Forex trading or brokerage operations? Whether you're looking to automate your trades, secure a broker license, or streamline client management, Rejoicefx has the tools and expertise to help you succeed. Don’t wait—unlock your trading potential today.</p>
                </div>
                <div className="ticketbuttonmain">
                  <Link href="/">
                    <button type="button">
                      Get Started Now
                      <Image src={Rightarrow} alt="Rightarrow" width={24} height={24} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="ticketbackground">
              <Image src={Checksimage} alt="Checksimage" width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <div className="footermainflx">
              <div>
                <Link href="/">
                  <div className="footerlogo">
                    <Image src={Footerlogo} alt="Headericon" width="48" height="48" />
                    <span>Rejoice FX</span>
                  </div>
                </Link>
                <div className="footerfirstcontent">
                  <div className="footercontentflx">
                    <div className="footeremaildiv">
                      <p>Email</p>
                      <a href="mailto:info@rejoicehub.com">info@rejoicehub.com</a>
                    </div>
                    <div className="footeremaildiv">
                      <p>Phone Number</p>
                      <a href="tel:+91 9825122840">+91 9825122840</a>
                    </div>
                  </div>

                  <div className="footeraddressdiv">
                    <p>Address</p>
                    <span>A-301, Atlanta mall, Sudama chowk, Digital Valley (Mota Varachha) , Surat, Gujarat, India 394101</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
