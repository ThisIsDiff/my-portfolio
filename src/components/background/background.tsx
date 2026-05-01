'use client';
import Image from "next/image";
import backgroundImage from "@/assets/blurred_Incheon_airport.png";

export default function Background() {
    return (
        <div className="absolute inset-0 -z-10">
            <Image
            src={backgroundImage}
            fill
            style={{ objectFit: "cover" }}
            alt="Incheon Airport"
            />
        </div>
    )
}