import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Navbar from '@/components/navbar/Navbar';

export const metadata = {
	title: 'Mr.Bilee bob',
	description: 'las mejores hamburgesas',
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
		>
			<html lang="en">
				<body className="bg-gradient-to-tr from-slate-900 from-30% to-regal-blue">
					<Navbar />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
