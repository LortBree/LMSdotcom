export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-gray-200">
      <div className="px-4 py-3 text-center">
        <p className="text-xs text-text">
          © {year} LMSdotcom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}