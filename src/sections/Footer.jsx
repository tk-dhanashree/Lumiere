import Reboot from '../assets/images/Reboot.png';
import LinkedIn from '../assets/images/LinkedIn.png';

export default function Footer() {
  return (
    <footer className="flex flex-col p-12 md:p-16 mt-20">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col mb-8">
          <div className="flex flex-wrap mb-16 border-b-4 border-solid border-[#444444]">
            <h3 className="footer-text-1 text-[#282828] font-[Oswald] text-3xl md:text-5xl text-wrap font-light leading-10 md:leading-12 tracking-wide text-left">
              Designed And Developed By Reboot Consultancy And Services
            </h3>
          </div>
          <div>
            <h4 className="text-[#444444] font-[Oswald] text-xl md:text-2xl font-light md:font-normal leading-8 tracking-wide text-left">Contact Details:-</h4>
            <ul className="mt-4">
              <li className="text-[#444444] font-[Oswald] text-base font-light leading-6 tracking-wide text-left hover:text-[#282828] hover:font-bold">
                <a href="tel:+917057141513">
                  Contact Number:- +91 7057141513
                </a>
              </li>
              <li className="text-[#444444] font-[Oswald] text-base font-light leading-6 tracking-wide text-left hover:text-[#282828] hover:font-bold">
                <a href="https://maps.app.goo.gl/H2XPvBYv2nwPUunB9" target="_blank">
                  Location:- Kothrud Pune 411038
                </a>
              </li>
              <li className="text-[#444444] font-[Oswald] text-base font-light leading-6 tracking-wide text-left hover:text-[#282828] hover:font-bold">
                <a href="mailto:sales@rebootcas.com?subject=Subject%20Here&body=Body%20Text%20Here">
                  Email ID:- sales@rebootcas.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col">
          <img className="logo2" src={Reboot} alt="Logo2" />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-12">
        <p className="text-[#444444] font-[Oswald] text-base font-light leading-6 tracking-wide text-left text-wrap">
          Copyright © 2024 REBOOTCAS ®
        </p>
        <a href="https://in.linkedin.com/company/reboot-consultancy-services" target="_blank" className="hover:scale-125">
          <img src={LinkedIn} alt="LinkedIn Logo" width="100" height="26" />
        </a>
      </div>
    </footer>
  )
}