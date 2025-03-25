import { Blocks } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for developers, by Pxtwxl</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link href="https://github.com/pxtwxl" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" width={20} height={20} className="hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.linkedin.com/in/anuj-patwal-prof/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;