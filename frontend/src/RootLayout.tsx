import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "sonner";
import { ClientOnly } from "vite-react-ssg";
import Analytics from "@/components/Analytics";

export default function RootLayout() {
    return (
        <>
            <Toaster position="top-right" richColors />
            <ScrollRestoration />
            <ClientOnly>{() => <Analytics />}</ClientOnly>
            <Outlet />
        </>
    );
}
