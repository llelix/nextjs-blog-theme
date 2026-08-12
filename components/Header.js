import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-12 h-12 mx-auto mb-4 rounded-full bg-conic-180 from-gradient-3 from-0% to-gradient-4 to-100%" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
      <nav className="flex justify-center mt-4 space-x-6">
        <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
          首页
        </Link>
        <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
          关于我
        </Link>
        <Link href="/resume" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
          RESUME
        </Link>
      </nav>
    </header>
  );
}
