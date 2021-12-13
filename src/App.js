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
      {/* header */}
      <div className="mainContrainer m-auto px-4 lg:px-12">
        <div className="header flex justify-between items-center">
          <div className="cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-red-site text-white rounded-button text-xl p-3 font-bold cursor-pointer hidden lg:block">
            Get Started
          </div>
          <div className="cursor-pointer lg:hidden block">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* landing */}
      <div className="mainContrainer m-auto px-4 lg:px-20 lg:flex lg:justify-between h-auto">
        <div className="lg:w-1/3 w-full lg:pt-64">
          <div className="text-red-site font-bold lg:text-black text-4xl lg:w-2/3 w-full lg:text-left text-center">
            Cupid Zone Dating Apps
          </div>
          <div className="font-normal text-xl pt-2 lg:w-3/4 w-full lg:text-left text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            libero feugiat, faucibus libero id, scelerisque quam
          </div>
          <div className="lg:flex pt-8">
            <div className="flex justify-center items-center bg-red-site shadow-2xl text-white rounded-button text-xl py-4 px-8 font-bold cursor-pointer">
              Whitepaper
            </div>
            <div className="flex justify-center items-center border-red-site shadow-2xl text-red-site rounded-button text-xl py-4 px-8 lg:ml-8 mt-8 lg:mt-0 font-bold cursor-pointer">
              Buy Token
            </div>
          </div>
        </div>
        <div className="w-full m-auto lg:w-2/3 pt-12">
          <img
            src={dashboard}
            alt="dashboard"
            className="lg:float-right lg:w-4/5"
          />
        </div>
      </div>

      {/* our features */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div className="text-black lg:text-6xl text-4xl font-bold text-center pt-32">
          Our Features
        </div>
        <div className="lg:flex lg:justify-between pt-16">
          <div className="lg:w-1/3 w-full text-center feature-box h-auto">
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
          <div className="lg:w-1/3 w-full lg:mt-0 mt-4 text-center feature-box h-auto lg:mx-4">
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
          <div className="lg:w-1/3 w-full lg:mt-0 mt-4 text-center feature-box h-auto lg:mx-4">
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
        <div className="lg:flex lg:justify-between lg:pt-16">
          <div className="lg:w-1/3 w-full lg:mt-0 mt-4 text-center feature-box h-auto lg:mx-4">
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
          <div className="lg:w-1/3 w-full lg:mt-0 mt-4 text-center feature-box h-auto lg:mx-4">
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
          <div className="lg:w-1/3 w-full lg:mt-0 mt-4 text-center feature-box h-auto lg:mx-4">
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

      {/* our project ecosystem */}
      <div className="mainContrainer m-auto px-4 lg:px-20 h-auto w-full">
        <div className="pt-32 lg:flex lg:justify-content">
          <div className="lg:w-1/3 w-full">
            <img src={echosystem} alt="echosystem" />
          </div>
          <div className="lg:w-2/3 lg:pl-32 w-full pt-12">
            <div className="text-black lg:text-6xl text-4xl font-bold  text-center lg:text-left">
              Our Project & Ecosystem
            </div>
            <div className="pt-8 text-xl text-center lg:text-left">
              From its inception, Shiba Inu has done things differently.
              Starting with a supply of 1 quadrillion, our founder, Ryoshi,
              locked 50% in Uniswap, then “burned” the other half to Ethereum
              co-founder Vitalik Buterin for safekeeping.
            </div>
            <div className="pt-8 text-xl text-center lg:text-left">
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

      {/* download app */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div className="pt-16 lg:flex">
          <div className="lg:w-1/2 lg:pt-32 pt-16">
            <div className="text-black lg:text-6xl text-4xl font-bold  text-center lg:text-left">
              Download App
            </div>
            <div className="font-normal text-xl pt-16 text-center lg:text-left">
              From its inception, Shiba Inu has done things differently.
              Starting with a supply of 1 quadrillion, our founder, Ryoshi,
              locked 50% in Uniswap, then “burned” the other half to Ethereum
              co-founder Vitalik Buterin for safekeeping.
            </div>
            <div className="lg:flex pt-16 lg:items-center">
              <div className="lg:w-1/2">
                <div>
                  <img src={appstore} alt="appstore" className="w-full" />
                </div>
                <div className="pt-8">
                  <img src={googlepay} alt="googlepay" className="w-full" />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <img src={qrcode} alt="qrcode" className="w-full" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img src={phone} alt="phone" />
          </div>
        </div>
      </div>

      {/* our document */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div className="pt-32">
          <div className="bg-red-site radius45 lg:p-24 p-4">
            <div className="lg:flex">
              <div className="lg:w-2/5">
                <img src={whitepaper} alt="whitepaper" className="w-full" />
              </div>
              <div className="text-white lg:w-4/5 w-full lg:pl-8">
                <div className="font-bold lg:text-5xl text-4xl lh-50p lg:pt-0 pt-4  text-center lg:text-left">
                  Downoad Our Whitepaper & Other Documents
                </div>
                <div className="pt-12 font-normal text-xl text-center lg:text-left">
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore qui iste asperiores harum maiores praesentium facere
                    ullam blanditiis, odio dolorum. Officia quisquam eaque
                    suscipit facere ducimus, sit quaerat. Numquam, corrupti?
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:justify-between pt-24">
              <div className="border-red-site bg-white p-4 lg:mt-0 mt-4 flex justify-center items-center text-red-site rounded-button text-xl font-bold cursor-pointer">
                Whitepaper
              </div>
              <div className="border-red-site bg-white p-4 lg:mt-0 mt-4 flex justify-center items-center text-red-site rounded-button text-xl lg:mr-4 lg:ml-8 font-bold cursor-pointer">
                Terms & Condition
              </div>
              <div className="border-red-site bg-white p-4 lg:mt-0 mt-4 flex justify-center items-center text-red-site rounded-button text-xl lg:mr-8 lg:ml-4 font-bold cursor-pointer">
                Privacy Policy
              </div>
              <div className="border-red-site bg-white p-4 lg:mt-0 mt-4 flex justify-center items-center text-red-site rounded-button text-xl font-bold cursor-pointer">
                Business Profile
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* find allocation */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div className="lg:flex pt-32 lg:justify-between">
          <div className="lg:w-1/2 w-full">
            <div className="font-bold lg:text-6xl text-4xl lg:pb-32 pb-8 text-center lg:text-left">
              Fund Allocation
            </div>
            <div>
              <img src={fundallocation} alt="fundallocation" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pt-0 pt-8">
            <div className="font-bold lg:text-6xl text-4xl lg:pb-32 pb-8 text-center lg:text-left">
              Token Distribution
            </div>
            <div>
              <img src={distribution} alt="distribution" />
            </div>
          </div>
        </div>
      </div>

      {/* roadmap web version */}
      <div className="mainContrainer m-auto px-4 lg:px-20 relative lg:block hidden">
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

      {/* roadmap mobile version */}
      <div className="mainContrainer m-auto px-4 pt-20 relative lg:hidden block">
        <div className="text-black text-5xl font-bold text-center">
          Our Roadmap
        </div>
        <div>
          <div>
            <div className="text-3xl text-roadmap font-bold text-center my-4">
              Phase1
            </div>
            <div className="roadmapBox-mobile">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Website launch</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Social media up and running</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Launch on Pancakeswap, no pre-sale</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl text-roadmap font-bold text-center my-4">
              Phase2
            </div>
            <div className="roadmapBox-mobile">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Website launch</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Social media up and running</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Launch on Pancakeswap, no pre-sale</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl text-roadmap font-bold text-center my-4">
              Phase3
            </div>
            <div className="roadmapBox-mobile">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Website launch</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Social media up and running</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Launch on Pancakeswap, no pre-sale</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl text-roadmap font-bold text-center my-4">
              Phase4
            </div>
            <div className="roadmapBox-mobile">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Website launch</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Social media up and running</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Launch on Pancakeswap, no pre-sale</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-3xl text-roadmap font-bold text-center my-4">
              Phase5
            </div>
            <div className="roadmapBox-mobile">
              <div className="flex items-center">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Website launch</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Social media up and running</div>
              </div>
              <div className="flex items-center pt-4">
                <div>
                  <img src={check} alt="check" />
                </div>
                <div className="pl-2">Launch on Pancakeswap, no pre-sale</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how it works */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div className="lg:pt-64 pt-16">
          <div className="lg:text-6xl text-5xl text-center font-bold">
            How it Works?
          </div>
          <div className="lg:flex lg:justify-between lg:pt-32 pt-12">
            <div className="text-center">
              <div>
                <img src={work1} alt="work1" className="m-auto" />
              </div>
              <div className="text-4xl font-bold pt-12">Blockchain</div>
              <div className="text-xl pt-4 px-2">
                <div>
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </div>
              </div>
            </div>
            <div className="text-center lg:pt-0 pt-8">
              <div>
                <img src={work2} alt="work2" className="m-auto" />
              </div>
              <div className="text-4xl font-bold pt-12">Indetification</div>
              <div className="text-xl pt-4 px-2">
                <div>
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </div>
              </div>
            </div>
            <div className="text-center lg:pt-0 pt-8">
              <div>
                <img src={work3} alt="work3" className="m-auto" />
              </div>
              <div className="text-4xl font-bold pt-12">Date & NFT</div>
              <div className="text-xl pt-4 px-2">
                <div>
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </div>
              </div>
            </div>
            <div className="text-center lg:pt-0 pt-8">
              <div>
                <img src={work4} alt="work4" className="m-auto" />
              </div>
              <div className="text-4xl font-bold pt-12">Buy or sell orders</div>
              <div className="text-xl pt-4 px-2">
                <div>
                  Involvement of third-party developers into IQeon ecosystem and
                  expansion of our own product line will lead to growth in
                  users.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div>
          <img src={bg3} alt="bg3" className="bg3" />
        </div>
        <div className="pt-64">
          <div className="lg:text-6xl text-5xl text-center font-bold">
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
      <div className="mainContrainer m-auto px-4 lg:px-12 h-auto w-full">
        <div className="lg:mt-32 mt-8 bg-red-site radius45 shadow-2xl">
          <div className="lg:py-12 lg:px-32 px-4 pt-8">
            <div className="text-white lg:text-6xl text-5xl font-bold text-center lg:text-left">
              Awesome Team
            </div>
            <div className="py-12">
              <div className="lg:flex lg:justify-between">
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
              <div className="lg:flex lg:justify-between lg:pt-4">
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
              <div className="lg:flex lg:justify-between lg:pt-4">
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
              <div className="lg:flex lg:justify-between lg:pt-4">
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
                <div className="flex justify-center lg:pt-0 pt-8">
                  <div className="w-1/2 lg:w-full ">
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
      <div className="mainContrainer m-auto px-4 lg:px-20 h-auto w-full">
        <div className="pt-32">
          <div className="lg:text-6xl text-5xl font-bold text-center">
            Advisor
          </div>
          <div className="lg:flex lg:justify-between pt-20">
            <div className="lg:flex lg:items-center px-2 lg:pt-0 pt-4">
              <div className="lg:w-1/3 w-full">
                <img
                  src={advisorAvatar1}
                  alt="advisorAvatar1"
                  className="m-auto"
                />
              </div>
              <div className="pl-8 lg:w-2/3 w-full lg:text-left text-center lg:py-0 py-4">
                <div className="font-bold text-3xl">David Drake</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>
                    JavaScript virtual machines (VMs) and platforms built upon
                    them have also increased the popularity of JavaScript for
                    server-side web
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:items-center px-2 lg:pt-0 pt-4">
              <div className="lg:w-1/3 w-full">
                <img
                  src={advisorAvatar2}
                  alt="advisorAvatar2"
                  className="m-auto"
                />
              </div>
              <div className="pl-8 lg:w-2/3 w-full lg:text-left text-center lg:py-0 py-4">
                <div className="font-bold text-3xl">David Drake</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>
                    JavaScript virtual machines (VMs) and platforms built upon
                    them have also increased the popularity of JavaScript for
                    server-side web
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-between lg:pt-20">
            <div className="lg:flex lg:items-center px-2 lg:pt-0 pt-4">
              <div className="lg:w-1/3 w-full">
                <img
                  src={advisorAvatar1}
                  alt="advisorAvatar1"
                  className="m-auto"
                />
              </div>
              <div className="pl-8 lg:w-2/3 w-full lg:text-left text-center lg:py-0 py-4">
                <div className="font-bold text-3xl">David Drake</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>
                    JavaScript virtual machines (VMs) and platforms built upon
                    them have also increased the popularity of JavaScript for
                    server-side web
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:items-center px-2 lg:pt-0 pt-4">
              <div className="lg:w-1/3 w-full">
                <img
                  src={advisorAvatar2}
                  alt="advisorAvatar2"
                  className="m-auto"
                />
              </div>
              <div className="pl-8 lg:w-2/3 w-full lg:text-left text-center lg:py-0 py-4">
                <div className="font-bold text-3xl">David Drake</div>
                <div className="text-gray-site">CEO at Capital Limited</div>
                <div className="pt-4 text-xl font-medium">
                  <div>
                    JavaScript virtual machines (VMs) and platforms built upon
                    them have also increased the popularity of JavaScript for
                    server-side web
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company in media */}
      <div className="mainContrainer m-auto px-4 lg:px-12 relative">
        <div>
          <img src={bg4} alt="bg4" className="bg4" />
        </div>
        <div className="pt-64">
          <div className="lg:text-6xl text-5xl font-bold text-center">
            Company in media
          </div>
          <div className="lg:flex lg:justify-between pt-16">
            <div className="lg:w-1/3 w-full text-center feature-box h-auto lg:mt-0 mt-8">
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
            <div className="lg:w-1/3 w-full text-center feature-box h-auto lg:mx-4 lg:mt-0 mt-8">
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
            <div className="lg:w-1/3 w-full text-center feature-box h-auto lg:mt-0 mt-8">
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
          <div className="lg:flex lg:justify-between lg:pt-16">
            <div className="lg:w-1/3 w-full text-center feature-box h-auto lg:mt-0 mt-8">
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
            <div className="lg:w-1/3 w-full text-center feature-box h-auto lg:mx-4 lg:mt-0 mt-8">
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
            <div className="lg:w-1/3 w-full text-center feature-box h-auto lg:mt-0 mt-8">
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
      <div className="mainContrainer m-auto px-4 lg:px-20">
        <div className="pt-32 pb-32">
          <div className="lg:text-6xl text-5xl font-bold text-center">
            Partner
          </div>
          <div className="lg:flex lg:justify-between lg:items-center pt-16">
            <div>
              <img
                src={partner1}
                alt="partner1"
                className="lg:mt-0 mt-12 w-2/3 m-auto"
              />
            </div>
            <div>
              <img
                src={partner2}
                alt="partner2"
                className="lg:mt-0 mt-12 w-2/3 m-auto"
              />
            </div>
            <div>
              <img
                src={partner3}
                alt="partner3"
                className="lg:mt-0 mt-12 w-2/3 m-auto"
              />
            </div>
            <div>
              <img
                src={partner4}
                alt="partner4"
                className="lg:mt-0 mt-12 w-2/3 m-auto"
              />
            </div>
            <div>
              <img
                src={partner5}
                alt="partner5"
                className="lg:mt-0 mt-12 w-2/3 m-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="mainContrainer m-auto px-4 lg:px-20 bg-black h-auto w-full pt-16">
        <div className="lg:pt-32 pt-0">
          <div className="lg:flex">
            <div className="lg:w-5/12 w-full text-white lg:text-left text-center">
              <div className="lg:text-6xl text-5xl font-bold">Get in Touch</div>
              <div className="flex pt-16 items-center lg:justify-start justify-center">
                <div>
                  <img src={location} alt="location" />
                </div>
                <div className="pl-4 text-xl">
                  523 Sylvan Ave, 5th Floor Mountain View, CA
                </div>
              </div>
              <div className="flex pt-8 items-center lg:justify-start justify-center">
                <div>
                  <img src={connectPhone} alt="connectPhone" />
                </div>
                <div className="pl-4 text-xl">+1 987 654 3210</div>
              </div>
              <div className="flex pt-8 items-center lg:justify-start justify-center">
                <div>
                  <img src={mail} alt="mail" />
                </div>
                <div className="pl-4 text-xl">info@cupidzone.com</div>
              </div>
              <div className="lg:text-5xl text-4xl font-bold pt-20">
                Stay connected:
              </div>
              <div className="flex pt-4 items-center lg:justify-start justify-center">
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

            <div className="lg:w-7/12 w-full lg:pt-4 pt-16">
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

      {/* semi footer */}
      <div className="mainContrainer m-auto px-4 lg:px-20 border-black bg-black">
        <div className="pt-16 pb-24">
          <div className="lg:flex lg:justify-between lg:items-center text-white text-xl">
            <div className="cursor-pointer flex justify-center">
              <img src={footerLogo} alt="footerLogo" />
            </div>
            <div className="text-center lg:text-left lg:pt-0 pt-8">
              <div className="cursor-pointer">About</div>
              <div className="pt-2 cursor-pointer">Roadmap</div>
              <div className="pt-2 cursor-pointer">Token</div>
              <div className="pt-2 cursor-pointer">Team</div>
            </div>
            <div className="text-center lg:text-left lg:pt-0 pt-8">
              <div className="cursor-pointer">Service</div>
              <div className="pt-2 cursor-pointer">Statics</div>
              <div className="pt-2 cursor-pointer">WhitePaper</div>
              <div className="pt-2 cursor-pointer">FAQ</div>
            </div>
            <div className="text-center lg:text-left lg:pt-0 pt-8">
              <div className="cursor-pointer">Technical Papers</div>
              <div className="pt-2 cursor-pointer">Terms & Conditions</div>
              <div className="pt-2 cursor-pointer">Business Summary</div>
              <div className="pt-2 cursor-pointer">Brand Resources</div>
            </div>
            <div className="lg:flex lg:justify-between lg:items-center">
              <div className="downloadWords cursor-pointer m-auto lg:pt-0 pt-8 lg:text-left text-center">
                Download Application
              </div>
              <div className="lg:pt-0 pt-8">
                <div>
                  <img src={appstore} alt="appstore" className="m-auto" />
                </div>
                <div>
                  <img src={googlepay} alt="googlepay" className="m-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mainContrainer m-auto px-4 lg:px-12 h-16  w-full text-center text-red-site font-semibold flex justify-center items-center ">
        <div>
          <img src={copyright} alt="copyright" style={{ width: "24px" }} />
        </div>
        <div className="pl-2 text-xl">Copyright by Cupidzone</div>
      </div>
    </>
  );
}

export default App;
