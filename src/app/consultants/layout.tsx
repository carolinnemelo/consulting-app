import { Sidebar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-44">
				<Sidebar />
			</div>
			<div className="flex-grow overflow-y-auto md:p-2">{children}</div>
		</div>
	);
}