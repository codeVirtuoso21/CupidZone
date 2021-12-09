import logo from "./assets/img/logo.svg";
import dashboard from "./assets/img/dashboard.svg";
import feature1 from "./assets/img/feature/1.svg";
import feature2 from "./assets/img/feature/2.svg";
import feature3 from "./assets/img/feature/3.svg";
import feature4 from "./assets/img/feature/4.svg";
import feature5 from "./assets/img/feature/5.svg";
import feature6 from "./assets/img/feature/6.svg";
import echosystem from "./assets/img/echosystem.svg";
import phone from "./assets/img/phone.svg";
import appstore from "./assets/img/appstore.svg";
import googlepay from "./assets/img/googlepay.svg";
import qrcode from "./assets/img/qrcode.svg";
import whitepaper from "./assets/img/whitepaper.svg";
import fundallocation from "./assets/img/fundallocation.svg";
import distribution from "./assets/img/distribution.svg";
import copyright from "./assets/img/copyright.svg";
import roadmap from "./assets/img/roadmap.svg";
import check from "./assets/img/check.svg";
import work1 from "./assets/img/work/1.svg";
import work2 from "./assets/img/work/2.svg";
import work3 from "./assets/img/work/3.svg";
import work4 from "./assets/img/work/4.svg";
import awesomeTeamAvatar from "./assets/img/awesomeTeamAvatar.svg";
import facebook from "./assets/img/facebook.svg";
import linkedin from "./assets/img/linkedin.svg";
import advisorAvatar1 from "./assets/img/advisorAvatar/1.svg";
import advisorAvatar2 from "./assets/img/advisorAvatar/2.svg";
import companyMedia1 from "./assets/img/companyMedia/1.svg";
import companyMedia2 from "./assets/img/companyMedia/2.svg";
import companyMedia3 from "./assets/img/companyMedia/3.svg";
import partner1 from "./assets/img/partner/1.svg";
import partner2 from "./assets/img/partner/2.svg";
import partner3 from "./assets/img/partner/3.svg";
import partner4 from "./assets/img/partner/4.svg";
import partner5 from "./assets/img/partner/5.svg";
import connectfacebook from "./assets/img/connect/facebook.svg";
import connectPhone from "./assets/img/connect/phone.svg";
import github from "./assets/img/connect/github.svg";
import connectlinkedin from "./assets/img/connect/linkedin.svg";
import mail from "./assets/img/connect/mail.svg";
import telegram from "./assets/img/connect/telegram.svg";
import twitter from "./assets/img/connect/twitter.svg";
import location from "./assets/img/connect/location.svg";
import footerLogo from "./assets/img/footerLogo.svg";
import bg1 from "./assets/img/background/1.svg";
import bg2 from "./assets/img/background/2.svg";
import bg3 from "./assets/img/background/3.svg";
import bg4 from "./assets/img/background/4.svg";

function App() {
  return (
    <>
      <div className="mainContrainer">
        <div className="header flex justify-between items-center">
          <div className="cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-red-site text-white rounded-button text-xl p-3 font-bold cursor-pointer">
            Get Started
          </div>
        </div>
      </div>
      <div className="dashboardContrainer flex justify-content h-auto w-full">
        <div className="w-1/2">
          <div className="text-red-site font-bold pt-273p text-7-5xl w-2/3">
            Cupid Zone Dating Apps
          </div>
          <div className="font-normal text-3xl pt-2 w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            libero feugiat, faucibus libero id, scelerisque quam
          </div>
          <div className="flex pt-8">
            <div className="flex justify-center items-center bg-red-site text-white rounded-button text-xl p-4 px-24 font-bold cursor-pointer">
              Whitepaper
            </div>
            <div className="flex justify-center items-center border-red-site text-red-site rounded-button text-xl p-4 px-24 ml-8 font-bold cursor-pointer">
              Buy Token
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={dashboard} alt="dashboard" />
        </div>
      </div>
      <div className="mainContrainer h-auto w-full">
        <div className="text-black text-7-5xl font-bold text-center pt-32">
          Our Features
        </div>
        <div className="flex justify-between pt-16">
          <div className="w-1/3 text-center feature-box h-auto">
            <div className="p-3 w-full flex justify-content">
              <img src={feature1} alt="feature1" className="featureBox" />
            </div>
            <div className="text-3xl font-bold">KYC</div>
            <div className="mt-8 text-xl pb-12">
              <div>Lorem ipsum dolor sit amet, consectetur</div>
              <div>adipiscing elit. Sed eget libero feugiat,</div>
              <div>faucibus libero id, scelerisque quam</div>
            </div>
          </div>
          <div className="w-1/3 text-center feature-box h-auto mx-4">
            <div className="p-3 w-full flex justify-content">
              <img src={feature2} alt="feature2" className="featureBox" />
            </div>
            <div className="text-3xl font-bold">Dating dApp</div>
            <div className="mt-8 text-xl pb-12">
              <div>Lorem ipsum dolor sit amet, consectetur</div>
              <div>adipiscing elit. Sed eget libero feugiat,</div>
              <div>faucibus libero id, scelerisque quam</div>
            </div>
          </div>
          <div className="w-1/3 text-center feature-box h-auto">
            <div className="p-3 w-full flex justify-content">
              <img src={feature3} alt="feature3" className="featureBox" />
            </div>
            <div className="text-3xl font-bold">NFT & Market Place</div>
            <div className="mt-8 text-xl pb-12">
              <div>Lorem ipsum dolor sit amet, consectetur</div>
              <div>adipiscing elit. Sed eget libero feugiat,</div>
              <div>faucibus libero id, scelerisque quam</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-16">
          <div className="w-1/3 text-center feature-box h-auto">
            <div className="p-3 w-full flex justify-content">
              <img src={feature4} alt="feature4" className="featureBox" />
            </div>
            <div className="text-3xl font-bold">Game</div>
            <div className="mt-8 text-xl pb-12">
              <div>Lorem ipsum dolor sit amet, consectetur</div>
              <div>adipiscing elit. Sed eget libero feugiat,</div>
              <div>faucibus libero id, scelerisque quam</div>
            </div>
          </div>
          <div className="w-1/3 text-center feature-box h-auto mx-4">
            <div className="p-3 w-full flex justify-content">
              <img src={feature5} alt="feature5" className="featureBox" />
            </div>
            <div className="text-3xl font-bold">Staking</div>
            <div className="mt-8 text-xl pb-12">
              <div>Lorem ipsum dolor sit amet, consectetur</div>
              <div>adipiscing elit. Sed eget libero feugiat,</div>
              <div>faucibus libero id, scelerisque quam</div>
            </div>
          </div>
          <div className="w-1/3 text-center feature-box h-auto">
            <div className="p-3 w-full flex justify-content">
              <img src={feature6} alt="feature6" className="featureBox" />
            </div>
            <div className="text-3xl font-bold">Metaverse</div>
            <div className="mt-8 text-xl pb-12">
              <div>Lorem ipsum dolor sit amet, consectetur</div>
              <div>adipiscing elit. Sed eget libero feugiat,</div>
              <div>faucibus libero id, scelerisque quam</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardContrainer h-auto w-full">
        <div className="pt-32 flex justify-content">
          <div className="w-1/3">
            <img src={echosystem} alt="echosystem" />
          </div>
          <div className="w-2/3 pl-32">
            <div className="text-black text-6xl font-bold">
              Our Project & Ecosystem
            </div>
            <div className="pt-8 text-xl">
              From its inception, Shiba Inu has done things differently.
              Starting with a supply of 1 quadrillion, our founder, Ryoshi,
              locked 50% in Uniswap, then “burned” the other half to Ethereum
              co-founder Vitalik Buterin for safekeeping.
            </div>
            <div className="pt-8 text-xl">
              To help reverse the devastating spread of Covid-19 in India, VB
              has since utilized SHIB in the largest crypto donation in history,
              and then actually burned 40% of its total supply to a dead wallet,
              ensuring our long-term success and stability. In the words of
              Ryoshi, “Thank you to the woofmeister for enabling true
              decentralization. Now we truly begin.”
            </div>
          </div>
        </div>
      </div>
      <div className="mainContrainer h-auto w-full">
        <div className="pt-32 flex">
          <div className="w-1/2 pt-64">
            <div className="text-black text-6xl font-bold">Download App</div>
            <div className="font-normal text-xl pt-16">
              From its inception, Shiba Inu has done things differently.
              Starting with a supply of 1 quadrillion, our founder, Ryoshi,
              locked 50% in Uniswap, then “burned” the other half to Ethereum
              co-founder Vitalik Buterin for safekeeping.
            </div>
            <div className="flex">
              <div className="w-1/2 pt-32">
                <div>
                  <img src={appstore} alt="appstore" />
                </div>
                <div className="pt-8">
                  <img src={googlepay} alt="googlepay" />
                </div>
              </div>
              <div className="w-1/2 pt-12">
                <img src={qrcode} alt="qrcode" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </div>
      <div className="mainContrainer h-auto w-full">
        <div className="pt-32">
          <div className="bg-red-site radius45 p-24">
            <div className="flex">
              <div>
                <img src={whitepaper} alt="whitepaper" />
              </div>
              <div className="text-white w-3/4">
                <div className="font-bold text-7-5xl">
                  Downoad Our Whitepaper & Other Documents
                </div>
                <div className="pt-12 font-normal text-xl">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore qui iste
                  </div>
                  <div>
                    asperiores harum maiores praesentium facere ullam
                    blanditiis, odio
                  </div>
                  <div>
                    dolorum. Officia quisquam eaque suscipit facere ducimus, sit
                    quaerat.
                  </div>
                  <div>Numquam, corrupti?</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-24">
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 font-bold cursor-pointer">
                Whitepaper
              </div>
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 mr-4 ml-8 font-bold cursor-pointer">
                Terms & Condition
              </div>
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 mr-8 ml-4 font-bold cursor-pointer">
                Privacy Policy
              </div>
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 font-bold cursor-pointer">
                Business Profile
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainContrainer h-auto w-full">
        <div className="flex pt-32">
          <div className="w-1/2">
            <div className="font-bold text-7-5xl pb-32">Fund Allocation</div>
            <div>
              <img src={fundallocation} alt="fundallocation" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="font-bold text-7-5xl pb-32">Token Distribution</div>
            <div>
              <img src={distribution} alt="distribution" />
            </div>
          </div>
        </div>
      </div>
      <div className="assistContrainer">
        <div>
          <img src={bg1} alt="bg1" className="bg1" />
          <img src={bg2} alt="bg2" className="bg2" />
        </div>
        <div className="text-black text-7-5xl font-bold text-center py-32">
          Our Roadmap
        </div>
        <div className="flex justify-center w-full">
          <div className="w-5/12 z-10">
            <div className="roadmapBox">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Website launch</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Social media up and running</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">
                  Launch on Pancakeswap, no pre-sale
                </div>
              </div>
            </div>
            <div className="text-7-5xl text-roadmap font-semibold text-right mt-48">
              Phase2
            </div>
            <div className="roadmapBox mt-24">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">First exchange listing</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Marketing campaign</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Smart Contract Audit</div>
              </div>
            </div>
            <div className="text-7-5xl text-roadmap font-semibold text-right mt-38">
              Phase4
            </div>
            <div className="roadmapBox mt-64">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Launch NFT Marketplace</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">New listing TOP 10 exchange</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">What Next?</div>
              </div>
            </div>
          </div>
          <div className="w-1/6 flex justify-center mt-8">
            <img src={roadmap} alt="roadmap" className="roadmap" />
          </div>
          <div className="w-5/12 mt-8 z-10">
            <div className="text-7-5xl text-roadmap font-semibold">Phase1</div>
            <div className="roadmapBox mt-52">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Setting up Airdrops</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Coin Market Cap listing</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Initial marketing</div>
              </div>
            </div>
            <div className="text-7-5xl text-roadmap mt-18 font-semibold">
              Phase3
            </div>
            <div className="roadmapBox mt-42">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Launch dApp</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">
                  Fundraising for project for NFT Marketplace
                </div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="text-xl pl-2">Live AMA</div>
              </div>
            </div>
            <div className="text-7-5xl text-roadmap mt-56 font-semibold">
              Phase5
            </div>
          </div>
        </div>
      </div>
      <div className="mainContrainer h-auto w-full">
        <div className="pt-64">
          <div className="text-7-5xl text-center font-bold">How it Works?</div>
          <div className="flex justify-between pt-32">
            <div className="text-center">
              <div>
                <img src={work1} alt="work1" className="m-center" />
              </div>
              <div className="text-4xl font-bold pt-12">Blockchain</div>
              <div className="text-xl pt-4">
                <div>Involvement of third-party</div>
                <div> developers into IQeon ecosystem</div>
                <div>and expansion of our own product</div>
                <div> line will lead to growth in users.</div>
              </div>
            </div>
            <div className="text-center">
              <div>
                <img src={work2} alt="work2" className="m-center" />
              </div>
              <div className="text-4xl font-bold pt-12">Indetification</div>
              <div className="text-xl pt-4">
                <div>Involvement of third-party</div>
                <div> developers into IQeon ecosystem</div>
                <div>and expansion of our own product</div>
                <div> line will lead to growth in users.</div>
              </div>
            </div>
            <div className="text-center">
              <div>
                <img src={work3} alt="work3" className="m-center" />
              </div>
              <div className="text-4xl font-bold pt-12">Date & NFT</div>
              <div className="text-xl pt-4">
                <div>Involvement of third-party</div>
                <div> developers into IQeon ecosystem</div>
                <div>and expansion of our own product</div>
                <div> line will lead to growth in users.</div>
              </div>
            </div>
            <div className="text-center">
              <div>
                <img src={work4} alt="work4" className="m-center" />
              </div>
              <div className="text-4xl font-bold pt-12">Buy or sell orders</div>
              <div className="text-xl pt-4">
                <div>Involvement of third-party</div>
                <div> developers into IQeon ecosystem</div>
                <div>and expansion of our own product</div>
                <div> line will lead to growth in users.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainContrainer h-auto w-full">
        <div>
          <img src={bg3} alt="bg3" className="bg3" />
        </div>
        <div className="pt-64">
          <div className="text-7-5xl text-center font-bold">
            Frequency Asked Questions
          </div>
          <div>
            <section className="text-gray-700">
              <div className="py-24 mx-auto">
                <div className="flex sm:mx-auto sm:mb-2 -mx-2">
                  <div className="w-full px-4 py-2 z-10">
                    <details className="mb-4 p-4 faq-box bg-white">
                      <summary className="font-bold rounded-md py-2 text-3xl cursor-pointer">
                        Can american citizen take part in the crowdsale?
                      </summary>
                      <span className="text-xl">
                        JavaScript is also used in environments that aren’t
                        web-based, such as PDF documents, site-specific
                        browsers, and desktop widgets. Newer and faster
                        JavaScript virtual machines (VMs) and platforms built
                        upon them have also increased the popularity of
                        JavaScript for server-side web applications. On the
                        client side, JavaScript has been traditionally
                        implemented as an interpreted language, but more recent
                        browsers perform just-in-time compilation.
                      </span>
                    </details>
                    <details className="mb-4 p-4 faq-box bg-white">
                      <summary className="font-bold rounded-md py-2 text-3xl cursor-pointer">
                        Can american citizen take part in the crowdsale?
                      </summary>
                      <span className="text-xl">
                        JavaScript is also used in environments that aren’t
                        web-based, such as PDF documents, site-specific
                        browsers, and desktop widgets. Newer and faster
                        JavaScript virtual machines (VMs) and platforms built
                        upon them have also increased the popularity of
                        JavaScript for server-side web applications. On the
                        client side, JavaScript has been traditionally
                        implemented as an interpreted language, but more recent
                        browsers perform just-in-time compilation.
                      </span>
                    </details>
                    <details className="mb-4 p-4 faq-box bg-white">
                      <summary className="font-bold rounded-md py-2 text-3xl cursor-pointer">
                        Can american citizen take part in the crowdsale?
                      </summary>
                      <span className="text-xl">
                        JavaScript is also used in environments that aren’t
                        web-based, such as PDF documents, site-specific
                        browsers, and desktop widgets. Newer and faster
                        JavaScript virtual machines (VMs) and platforms built
                        upon them have also increased the popularity of
                        JavaScript for server-side web applications. On the
                        client side, JavaScript has been traditionally
                        implemented as an interpreted language, but more recent
                        browsers perform just-in-time compilation.
                      </span>
                    </details>
                    <details className="mb-4 p-4 faq-box bg-white">
                      <summary className="font-bold rounded-md py-2 text-3xl cursor-pointer">
                        Can american citizen take part in the crowdsale?
                      </summary>
                      <span className="text-xl">
                        JavaScript is also used in environments that aren’t
                        web-based, such as PDF documents, site-specific
                        browsers, and desktop widgets. Newer and faster
                        JavaScript virtual machines (VMs) and platforms built
                        upon them have also increased the popularity of
                        JavaScript for server-side web applications. On the
                        client side, JavaScript has been traditionally
                        implemented as an interpreted language, but more recent
                        browsers perform just-in-time compilation.
                      </span>
                    </details>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Awesome Team */}
      <div className="mainContrainer h-auto w-full">
        <div className="mt-32 bg-red-site radius45">
          <div className="py-12 px-32">
            <div className="text-white text-7-5xl font-bold">Awesome Team</div>
            <div className="pt-12">
              <div className="flex justify-between">
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-12">
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-12">
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-12">
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img src={awesomeTeamAvatar} alt="awesomeTeamAvatar" />
                  </div>
                  <div className="pl-4 text-white">
                    <div className="font-bold text-2xl">Emeka</div>
                    <div className="text-2xl pt-1">CEO</div>
                    <div className="flex pt-2">
                      <div>
                        <img src={facebook} alt="facebook" />
                      </div>
                      <div className="pl-2">
                        <img src={linkedin} alt="linkedin" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisor */}
      <div className="assistContrainer h-auto w-full">
        <div className="pt-32">
          <div className="text-7-5xl font-bold text-center">Advisor</div>
          <div className="flex justify-between pt-20">
            <div className="flex items-center">
              <div>
                <img src={advisorAvatar1} alt="advisorAvatar1" />
              </div>
              <div className="pl-8">
                <div className="font-bold text-3xl">David Drake</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>JavaScript virtual machines (VMs) and</div>
                  <div>platforms built upon them have also</div>
                  <div>increased the popularity of JavaScript for</div>
                  <div>server-side web</div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img src={advisorAvatar2} alt="advisorAvatar2" />
              </div>
              <div className="pl-8">
                <div className="font-bold text-3xl">Ann Blockem</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>JavaScript virtual machines (VMs) and</div>
                  <div>platforms built upon them have also</div>
                  <div>increased the popularity of JavaScript for</div>
                  <div>server-side web</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-20">
            <div className="flex items-center">
              <div>
                <img src={advisorAvatar1} alt="advisorAvatar1" />
              </div>
              <div className="pl-8">
                <div className="font-bold text-3xl">David Drake</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>JavaScript virtual machines (VMs) and</div>
                  <div>platforms built upon them have also</div>
                  <div>increased the popularity of JavaScript for</div>
                  <div>server-side web</div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img src={advisorAvatar2} alt="advisorAvatar2" />
              </div>
              <div className="pl-8">
                <div className="font-bold text-3xl">Ann Blockem</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>JavaScript virtual machines (VMs) and</div>
                  <div>platforms built upon them have also</div>
                  <div>increased the popularity of JavaScript for</div>
                  <div>server-side web</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company in media */}
      <div className="mediaContainer">
        <div>
          <img src={bg4} alt="bg4" className="bg4" />
        </div>
        <div className="pt-64">
          <div className="text-7-5xl font-bold text-center">
            Company in media
          </div>
          <div className="flex justify-between pt-16">
            <div className="w-1/3 text-center feature-box h-auto">
              <div className="p-3 w-full flex justify-content">
                <img
                  src={companyMedia1}
                  alt="companyMedia1"
                  className="mediaBox"
                />
              </div>
              <div className="mt-8 text-xl pb-12">
                <div>COO of KrowdMentor, a strategic</div>
                <div>investment and advisory firm as well as</div>
                <div> well as Under Development Office,</div>
                <div>a software development company</div>
                <div>focused on</div>
              </div>
            </div>
            <div className="w-1/3 text-center feature-box h-auto mx-4">
              <div className="p-3 w-full flex justify-content">
                <img
                  src={companyMedia2}
                  alt="companyMedia2"
                  className="mediaBox"
                />
              </div>
              <div className="mt-8 text-xl pb-12">
                <div>COO of KrowdMentor, a strategic</div>
                <div>investment and advisory firm as well as</div>
                <div> well as Under Development Office,</div>
                <div>a software development company</div>
                <div>focused on</div>
              </div>
            </div>
            <div className="w-1/3 text-center feature-box h-auto">
              <div className="p-3 w-full flex justify-content">
                <img
                  src={companyMedia3}
                  alt="companyMedia3"
                  className="mediaBox"
                />
              </div>
              <div className="mt-8 text-xl pb-12">
                <div>COO of KrowdMentor, a strategic</div>
                <div>investment and advisory firm as well as</div>
                <div> well as Under Development Office,</div>
                <div>a software development company</div>
                <div>focused on</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-16">
            <div className="w-1/3 text-center feature-box h-auto">
              <div className="p-3 w-full flex justify-content">
                <img
                  src={companyMedia1}
                  alt="companyMedia1"
                  className="mediaBox"
                />
              </div>
              <div className="mt-8 text-xl pb-12">
                <div>COO of KrowdMentor, a strategic</div>
                <div>investment and advisory firm as well as</div>
                <div> well as Under Development Office,</div>
                <div>a software development company</div>
                <div>focused on</div>
              </div>
            </div>
            <div className="w-1/3 text-center feature-box h-auto mx-4">
              <div className="p-3 w-full flex justify-content">
                <img
                  src={companyMedia2}
                  alt="companyMedia2"
                  className="mediaBox"
                />
              </div>
              <div className="mt-8 text-xl pb-12">
                <div>COO of KrowdMentor, a strategic</div>
                <div>investment and advisory firm as well as</div>
                <div> well as Under Development Office,</div>
                <div>a software development company</div>
                <div>focused on</div>
              </div>
            </div>
            <div className="w-1/3 text-center feature-box h-auto">
              <div className="p-3 w-full flex justify-content">
                <img
                  src={companyMedia3}
                  alt="companyMedia3"
                  className="mediaBox"
                />
              </div>
              <div className="mt-8 text-xl pb-12">
                <div>COO of KrowdMentor, a strategic</div>
                <div>investment and advisory firm as well as</div>
                <div> well as Under Development Office,</div>
                <div>a software development company</div>
                <div>focused on</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* partner */}
      <div className="partnerContainer">
        <div className="pt-32 pb-32">
          <div className="text-7-5xl font-bold text-center">Partner</div>
          <div className="flex justify-between items-center pt-16">
            <div>
              <img src={partner1} alt="partner1" />
            </div>
            <div>
              <img src={partner2} alt="partner2" />
            </div>
            <div>
              <img src={partner3} alt="partner3" />
            </div>
            <div>
              <img src={partner4} alt="partner4" />
            </div>
            <div>
              <img src={partner5} alt="partner5" />
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="partnerContainer bg-black h-auto w-full pt-32">
        <div className="pt-32">
          <div className="flex">
            <div className="w-5/12 text-white">
              <div className="text-7-5xl font-bold">Get in Touch</div>
              <div className="flex pt-16 items-center">
                <div>
                  <img src={location} alt="location" />
                </div>
                <div className="pl-4 text-xl">
                  523 Sylvan Ave, 5th Floor Mountain View, CA
                </div>
              </div>
              <div className="flex pt-8 items-center">
                <div>
                  <img src={connectPhone} alt="connectPhone" />
                </div>
                <div className="pl-4 text-xl">+1 987 654 3210</div>
              </div>
              <div className="flex pt-8 items-center">
                <div>
                  <img src={mail} alt="mail" />
                </div>
                <div className="pl-4 text-xl">info@cupidzone.com</div>
              </div>
              <div className="text-7-5xl font-bold pt-20">Stay connected:</div>
              <div className="flex pt-4 items-center">
                <div>
                  <img src={connectfacebook} alt="connectfacebook" />
                </div>
                <div className="pl-8">
                  <img src={github} alt="github" />
                </div>
                <div className="pl-8">
                  <img src={connectlinkedin} alt="connectlinkedin" />
                </div>
                <div className="pl-8">
                  <img src={twitter} alt="twitter" />
                </div>
                <div className="pl-8">
                  <img src={telegram} alt="telegram" />
                </div>
              </div>
            </div>

            <div className="w-7/12 pt-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full touchInput p-4 text-white"
                />
              </div>
              <div className="pt-8">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full touchInput p-4 text-white"
                />
              </div>
              <div className="pt-8">
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full touchTextarea p-4 text-white h-32"
                />
              </div>
              <div className="pt-8">
                <div className="w-full sendButton text-center flex items-center justify-center text-2xl font-bold cursor-pointer">
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="semiFooterContainer bg-black">
        <div className="pt-16 pb-24">
          <div className="flex justify-between items-center text-white text-xl">
            <div className="cursor-pointer">
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div>
              <div className="cursor-pointer">About</div>
              <div className="pt-2 cursor-pointer">Roadmap</div>
              <div className="pt-2 cursor-pointer">Token</div>
              <div className="pt-2 cursor-pointer">Team</div>
            </div>
            <div>
              <div className="cursor-pointer">Service</div>
              <div className="pt-2 cursor-pointer">Statics</div>
              <div className="pt-2 cursor-pointer">WhitePaper</div>
              <div className="pt-2 cursor-pointer">FAQ</div>
            </div>
            <div>
              <div className="cursor-pointer">Technical Papers</div>
              <div className="pt-2 cursor-pointer">Terms & Conditions</div>
              <div className="pt-2 cursor-pointer">Business Summary</div>
              <div className="pt-2 cursor-pointer">Brand Resources</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="downloadWords cursor-pointer">
                Download Application
              </div>
              <div>
                <div>
                  <img src={appstore} alt="appstore" />
                </div>
                <div>
                  <img src={googlepay} alt="googlepay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainContrainer h-16  w-full text-center text-red-site font-semibold flex justify-center items-center ">
        <div>
          <img src={copyright} alt="copyright" style={{ width: "24px" }} />
        </div>
        <div className="pl-2 text-xl">Copyright by Cupidzone</div>
      </div>
    </>
  );
}

export default App;
