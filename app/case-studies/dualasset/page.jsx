"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Bell,
  Smartphone,
  ShieldCheck,
  Server,
  Database,
  Cpu,
  ArrowLeft
} from "lucide-react";

export default function DualAssetCaseStudy() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white px-8 py-20">
      {/*back btn*/}
        <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-10"
            >
            <ArrowLeft size={18} />
            Back
        </button>
      {/* HERO */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-teal-400 text-sm mb-2">CASE STUDY</p>

          <h1 className="text-5xl font-bold leading-tight">
            DualAsset Trading Platform (V2)
          </h1>

          <p className="mt-4 text-gray-400">
            A cryptocurrency trading platform supporting real-time
            notifications, secure withdrawals and cross-platform trading.
          </p>

          <div className="mt-6 text-sm text-gray-400">
            <p>Company: Ingots International</p>
            <p>Role: Backend Engineer</p>
            <p>Duration: Sept 2025 – Present</p>
          </div>
        </div>

        <Image
          src="/images/dualasset-hero.png"
          width={500}
          height={400}
          alt="DualAsset"
        />
      </section>

      {/* TECH STACK */}

      <section className="max-w-6xl mx-auto mt-24">

        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 p-6 rounded-xl">
            <Server className="text-teal-400 mb-2"/>
            <h3 className="font-semibold">Backend</h3>
            <p className="text-gray-400 text-sm">
              Java (Spring Boot), PHP Laravel
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <Database className="text-teal-400 mb-2"/>
            <h3 className="font-semibold">Database</h3>
            <p className="text-gray-400 text-sm">
              MySQL, PostgreSQL
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <Cpu className="text-teal-400 mb-2"/>
            <h3 className="font-semibold">Infrastructure</h3>
            <p className="text-gray-400 text-sm">
              Docker, Linux, Grafana
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="max-w-6xl mx-auto mt-24">

        <h2 className="text-2xl font-bold mb-8">
          Key Features I Built
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/5 p-6 rounded-xl">
            <Bell className="text-teal-400 mb-3"/>
            <h3 className="font-semibold">Real-time Notifications</h3>

            <p className="text-gray-400 text-sm mt-2">
              Migrated from API polling to WebSocket event streaming
              to deliver instant trading notifications.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <Smartphone className="text-teal-400 mb-3"/>
            <h3 className="font-semibold">Mobile Push Notifications</h3>

            <p className="text-gray-400 text-sm mt-2">
              Integrated Firebase Cloud Messaging for real-time
              mobile alerts.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <ShieldCheck className="text-teal-400 mb-3"/>
            <h3 className="font-semibold">Crypto Withdrawal</h3>

            <p className="text-gray-400 text-sm mt-2">
              Integrated BitGo API to enable secure cryptocurrency
              withdrawals.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <Server className="text-teal-400 mb-3"/>
            <h3 className="font-semibold">Admin Monitoring Dashboard</h3>

            <p className="text-gray-400 text-sm mt-2">
              Built backend APIs powering dashboards for sales tracking,
              KPI monitoring and contract maturity management.
            </p>
          </div>

        </div>
      </section>

      {/* SCREENSHOTS */}

      <section className="max-w-6xl mx-auto mt-24">

        <h2 className="text-2xl font-bold mb-8">
          Screenshots
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Image
            src="/images/mobile.jpeg"
            width={400}
            height={300}
            alt="Mobile"
            className="rounded-xl"
          />

          <Image
            src="/images/contracts.jpeg"
            width={400}
            height={300}
            alt="API Platform"
            className="rounded-xl"
          />

          <Image
            src="/images/pwa.jpeg"
            width={400}
            height={300}
            alt="Trading Web"
            className="rounded-xl"
          />

        </div>
      </section>

    </div>
  );
}