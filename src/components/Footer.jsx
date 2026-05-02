export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Brand & Motto */}
        <div>
          <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
            Christian Living <span className="text-blue-400">Academy</span>
          </h3>
          <p className="text-slate-400 italic mb-6">
            "Raising a God-fearing, Elite Generation."
          </p>
          <p className="text-sm text-slate-500">
            Dedicated to offering the best education and developing positive
            character that impacts society.
          </p>
        </div>

        {/* Column 2: Contact & Location */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">📍</span>
              <span>
                Along Kamiti Road
                <br />
                Near Kahawa West Junction
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">📞</span>
              <a
                href="tel:0798767773"
                className="hover:text-blue-400 transition-colors"
              >
                0798 767773
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Payment Details */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">
            Payment Details
          </h4>
          <div className="space-y-4">
            {/* Bank Info */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                Bank Deposit
              </p>
              <p className="font-medium text-white">Equity Bank</p>
              <p className="text-sm">A/C Name: CHRISTIAN LIVING ACADEMY</p>
              <p className="text-sm font-mono text-blue-300 mt-1">
                A/C NO: 1920285157165
              </p>
            </div>

            {/* M-Pesa Info */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <p className="text-xs text-green-500 uppercase font-bold mb-1">
                M-Pesa
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm">Paybill:</span>
                <span className="font-mono text-white font-bold">247247</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm">Account:</span>
                <span className="font-mono text-white font-bold">770774</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800/50 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Christian Living Academy. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
