import logo from '@/assets/images/technet-logo-white.png';
export default function Footer() {
  return (
    <div className="bg-[#242630] text-secondary p-5 md:p-10 lg:p-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:order-2">
          <img
            className="margin_bottom__footer h-10 mx-auto md:mx-0"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="align_items-center__footer flex flex-col md:flex-row gap-10 md:items-center">
          <ul className="md:flex md:gap-10 md:space-y-0 space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
          </ul>
          <ul className="md:flex md:gap-10 md:space-y-0 space-y-2">
            <li>List your gear</li>
            <li>Contact team</li>
          </ul>
          <ul className="md:flex md:gap-10 md:space-y-0 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
