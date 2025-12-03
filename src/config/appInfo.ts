import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "Kamus KBBI VI Bahasa Indonesia",
	description:
		"Aplikasi yang memuat kosakata lengkap bahasa Indonesia, memungkinkan pengguna untuk dengan mudah mencari dan memahami arti kata.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "https://play-lh.googleusercontent.com/Ma1doWhSxDaX-IjLmxar5M23pPkvtaJQ3_wM8UxbZ1DIxpYHo7HNzVO5W7CC9J9gC3U=w480-h960-rw",
	},
	storeLinks: {
		google: "https://play.google.com/store/apps/details?id=com.naandalist.kamus_kbbi",
	} as StoreLinks,
};
