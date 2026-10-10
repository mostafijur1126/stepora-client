import Link from "next/link";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaCcMastercard,
  FaCcVisa,
  FaFacebook,
  FaInstagram,
  FaMoneyBillWave,
  FaXTwitter,
} from "react-icons/fa6";

const columns = [
  {
    title: "Categories",
    links: [
      "Casual & Outdoor Shoes",
      "Formal Shoes",
      "Martin Boots",
      "New Arrival",
      "Accessories",
    ],
  },
  {
    title: "Quick Links",
    links: ["Home", "Products", "About Us", "Contact Us", "FAQs"],
  },
  {
    title: "Customer Service",
    links: [
      "Privacy Policy",
      "Warranty Policy",
      "Terms & Conditions",
      "Return & Refund Policy",
      "Pre-Order Conditions",
    ],
  },
];

const contacts = [
  { text: "Mirpur 2, Kataltola (Online Store)", Icon: FiMapPin },
  { text: "+8801748456508", Icon: FiPhone },
  { text: "stepora@gmail.com", Icon: FiMail },
  { text: "24/7 : 9AM - 6PM", Icon: FiClock },
];

const socials = [
  { label: "Facebook", Icon: FaFacebook },
  { label: "X", Icon: FaXTwitter },
  { label: "Instagram", Icon: FaInstagram },
];

const payments = [
  { Icon: FaCcVisa, color: "text-[#1a1f71]" },
  { Icon: FaCcMastercard, color: "text-[#eb001b]" },
  { Icon: FaMoneyBillWave, color: "text-[#16a34a]" },
];

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div>
            <Link
              href="/"
              className="text-2xl font-light uppercase tracking-[0.3em] text-button-text"
            >
              Stepora
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Step Into Your Style. Shoes that match your look, comfort, and
              everyday lifestyle.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {contacts.map(({ text, Icon }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="text-lg text-button-text" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-lg font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-foreground">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Stepora. All rights reserved.</p>

          <div className="flex gap-4 text-2xl text-foreground">
            {socials.map(({ label, Icon }) => (
              <Link key={label} href="#" aria-label={label}>
                <Icon />
              </Link>
            ))}
          </div>

          <div className="flex gap-2 text-3xl">
            {payments.map(({ Icon, color }, i) => (
              <Icon key={i} className={color} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
