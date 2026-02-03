import { Separator } from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CopyButton } from "@ui/components/button/CopyButton";
import { formatDate } from "@/lib/utils";

interface LicenseData {
  licenseKey: string;
  email: string;
  status: string;
  expiresAt: string;
  hint: string;
}

interface ApiResponse {
  success: boolean;
  data?: {
    license: LicenseData;
  };
  error?: string;
}

async function getLicense(checkoutId: string): Promise<LicenseData | null> {
  const siteUrl = process.env.CONVEX_SITE_URL;

  if (!siteUrl) {
    throw new Error("CONVEX_SITE_URL not configured");
  }

  const response = await fetch(
    `${siteUrl}/api/license/by-checkout?checkout_id=${checkoutId}`,
    { cache: "no-store" },
  );

  const data: ApiResponse = await response.json();

  if (data.success && data.data?.license) {
    return data.data.license;
  }

  return null;
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout_id?: string }>;
}) {
  const { checkout_id: checkoutId } = await searchParams;

  if (!checkoutId) {
    redirect("/");
  }

  const license = await getLicense(checkoutId);

  if (!license) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Image src="/orbit.png" alt="Orbit" width={56} height={56} />
          <h1 className="text-4xl font-semibold">Orbit</h1>
        </div>

        <Separator className="mb-8 bg-neutral-700" />

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-2 text-neutral-400">
            <p>Hi {license.email?.split("@")[0] || "there"},</p>
            <p>
              Thank you for subscribing to Orbit. Your license key is ready to
              use.
            </p>
          </div>

          {/* License Key Box */}
          <CopyButton licenseKey={license.licenseKey} />

          {/* How to Activate */}
          <div>
            <h3 className="mb-3 font-semibold text-neutral-200">
              How to Activate
            </h3>
            <ol className="space-y-2 text-sm list-decimal list-inside text-neutral-400">
              <li>Open Orbit on your Mac</li>
              <li>Go to Settings, then License</li>
              <li>Paste your license key and click Activate</li>
            </ol>
          </div>

          {/* License Info */}
          <div className="p-4 border-l-2 border-[rgb(160,110,240)] bg-neutral-900 rounded-r-lg">
            <p className="text-sm text-neutral-400">
              Subscription valid until:{" "}
              <span className="text-neutral-200">
                {license.expiresAt ? formatDate(license.expiresAt) : "—"}
              </span>
            </p>
            <p className="text-sm text-neutral-400">
              Devices allowed: <span className="text-neutral-200">2 Macs</span>
            </p>
          </div>

          {/* Back to home */}
          <div className="pt-4 text-center">
            <a
              href="/"
              className="text-sm transition-colors text-neutral-500 hover:text-white"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
