"use client";
import dynamic from "next/dynamic";

const ServiceCard3D = dynamic(() => import("./ServiceCard3D"), {
  ssr: false,
  loading: () => <div style={{ width: '220px', height: '300px' }} className="bg-zinc-800 rounded-lg animate-pulse" />
});

export default ServiceCard3D;