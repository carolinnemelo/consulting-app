import { Sidebar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-44">
				<Sidebar />
			</div>
			<div>{children}</div>
		</div>
	);
}