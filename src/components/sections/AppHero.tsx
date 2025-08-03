import { memo } from "react";
import { FaGooglePlay, FaStore } from "react-icons/fa";
import type { AppHeroProps, StoreButtonProps } from "config";

const AppHero = ({ title, description, storeLinks, logo }: AppHeroProps) => {
	return (
		<div className="mb-16 flex flex-col md:flex-row gap-8">
			<div className="flex-shrink-0 md:self-center">
				<div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 w-[192px] h-[192px] flex items-center justify-center">
					{logo.type === "iframe" ? (
						<iframe
							src={logo.src}
							className="h-40 w-40 rounded-2xl border-0"
							title="App Logo"
						/>
					) : (
						<img
							src={logo.src}
							alt="App Icon"
							className="h-40 w-40 rounded-2xl shadow-lg object-cover"
						/>
					)}
				</div>
			</div>

			<div className="flex flex-1 flex-col justify-between">
				<div>
					<h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
					<p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
						{description}
					</p>
				</div>

				<div className="flex flex-wrap gap-4">
					<StoreButton
						store="apple"
						href={storeLinks.apple}
						label="Download from"
						storeName="AppGallery"
					/>
					<StoreButton
						store="google"
						href={storeLinks.google}
						label="Get it on"
						storeName="Google Play"
					/>
				</div>
			</div>
		</div>
	);
};

const StoreButton = memo(
	({ store, href, label, storeName }: StoreButtonProps) => {
		const Icon = store === "apple" ? FaStore : FaGooglePlay;

		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 transition-all duration-300 hover:bg-gray-100 hover:border-gray-300 shadow-sm"
			>
				<div className="flex items-center justify-center w-7 h-7">
					<Icon
						className={`text-gray-600 transition-transform duration-300 group-hover:scale-110 group-hover:text-gray-800 ${
							store === "apple" ? "w-5 h-5" : "w-5 h-5"
						}`}
					/>
				</div>
				<span className="text-left">
					<div className="text-[11px] font-medium text-gray-500 group-hover:text-gray-600 transition-colors">
						{label}
					</div>
					<div className="text-[13px] font-semibold tracking-wide text-gray-800 group-hover:text-gray-900 transition-colors">
						{storeName}
					</div>
				</span>
			</a>
		);
	},
);

StoreButton.displayName = "StoreButton";

export default memo(AppHero);
