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
            Cupid Zone
          </div>
          <div className="text-red-site font-bold text-7-5xl w-2/3">
            Dating Apps
          </div>
          <div className="font-normal text-3xl pt-2">
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <div className="font-normal text-3xl">
            adipiscing elit. Sed eget libero feugiat,
          </div>
          <div className="font-normal text-3xl">
            faucibus libero id, scelerisque quam
          </div>
          <div className="flex pt-8">
            <div className="bg-red-site text-white rounded-button text-xl p-4 px-24 font-bold cursor-pointer">
              Whitepaper
            </div>
            <div className="border-red-site text-red-site rounded-button text-xl p-4 px-24 ml-8 font-bold cursor-pointer">
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
              <div className="text-white">
                <div className="font-bold text-7-5xl">
                  Downoad Our Whitepaper
                </div>
                <div className="font-bold text-7-5xl">& Other Documents</div>
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
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 ml-8 font-bold cursor-pointer">
                Whitepaper
              </div>
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 ml-8 font-bold cursor-pointer">
                Terms & Condition
              </div>
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 ml-8 font-bold cursor-pointer">
                Privacy Policy
              </div>
              <div className="border-red-site bg-white text-red-site rounded-button text-xl p-4 px-24 ml-8 font-bold cursor-pointer">
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
        <div className="text-black text-7-5xl font-bold text-center py-32">
          Our Roadmap
        </div>
        <div className="flex justify-center w-full">
          <div className="w-5/12">
            <div className="roadmapBox">
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
                <div className="text-xl pl-2">
                  Launch on Pancakeswap, no pre-sale
                </div>
              </div>
            </div>
            <div className="text-7-5xl text-roadmap text-right mt-48">
              Phase1
            </div>
            <div className="roadmapBox mt-24">
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
            <div className="text-7-5xl text-roadmap text-right mt-38">
              Phase4
            </div>
            <div className="roadmapBox mt-64">
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
          </div>
          <div className="w-1/6 flex justify-center mt-8">
            <img src={roadmap} alt="roadmap" className="roadmap" />
          </div>
          <div className="w-5/12 mt-8">
            <div className="text-7-5xl text-roadmap">Phase2</div>
            <div className="roadmapBox mt-52">
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
            <div className="text-7-5xl text-roadmap mt-18">Phase3</div>
            <div className="roadmapBox mt-42">
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
            <div className="text-7-5xl text-roadmap mt-56">Phase3</div>
          </div>
        </div>
      </div>
      <div className="assistContrainer bg-black h-48 w-full">s</div>
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
